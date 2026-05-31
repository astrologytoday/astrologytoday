"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { BlogPost } from "../../lib/blog";
import SiteFooter from "../shared/SiteFooter";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { getHomeCopy } from "../../lib/copy";
import { getBlogArticlePageCopy } from "../../lib/blogArticlePageCopy";
import { SHOW_DEBUGGERS } from "../../lib/debug";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";

const BLOG_POST_DEBUG_STORAGE_KEY = "astrologytoday-blog-post-debug-v2";
const BLOG_POST_CANVAS_SCALE = 0.71;
const BLOG_POST_CANVAS_WIDTH = 1860;
const BLOG_POST_CANVAS_BLEED_LEFT = 360;
const BLOG_POST_CANVAS_BLEED_RIGHT = 360;
const BLOG_POST_CANVAS_OFFSET_X = 10;
const BLOG_POST_CANVAS_OFFSET_Y = 16;

type BlogPostLayoutTarget =
  | "pageLogo"
  | "footer"
  | "footerLogo"
  | "titleSubtitleGap"
  | "subtitleMetaGap"
  | "metaCardGap"
  | "cardCoverGap"
  | "coverCaptionGap"
  | "coverBodyGap";

type BlogPostSpacingDebug = {
  titleSubtitleGap: number;
  subtitleMetaGap: number;
  metaCardGap: number;
  cardCoverGap: number;
  coverCaptionGap: number;
  coverBodyGap: number;
};

type BlogPostLayoutDebug = {
  footer: {
    spacing: number;
  };
  footerLogo: {
    x: number;
    y: number;
    scale: number;
  };
  pageLogo: {
    x: number;
    y: number;
    scale: number;
    visible: boolean;
  };
};

const BLOG_POST_DEFAULT_DEBUGGER_OFFSET = { x: 0, y: 0 };

const defaultSpacingDebug: BlogPostSpacingDebug = {
  titleSubtitleGap: 14,
  subtitleMetaGap: 18,
  metaCardGap: 48,
  cardCoverGap: 0,
  coverCaptionGap: 14,
  coverBodyGap: 38,
};

const defaultLayoutDebug: BlogPostLayoutDebug = {
  footer: {
    spacing: 52,
  },
  footerLogo: {
    x: 0,
    y: 0,
    scale: 1.36,
  },
  pageLogo: {
    x: -346,
    y: 16,
    scale: 1.28,
    visible: true,
  },
};

function renderBracketItalics(text: string, keyPrefix: string) {
  return text.split(/(\[[^\]]+\])/g).map((part, index) => {
    if (part.startsWith("[") && part.endsWith("]")) {
      return <em key={`${keyPrefix}-${index}`}>{part.slice(1, -1)}</em>;
    }

    return <span key={`${keyPrefix}-${index}`}>{part}</span>;
  });
}

function splitPracticeItem(item: string) {
  const match = item.match(/^([A-Z])\s*—\s*(.+)$/);
  if (!match) {
    return { letter: "", text: item };
  }

  return { letter: match[1], text: match[2] };
}

export default function BlogPostPageClient({
  post,
  locale = defaultLocale,
}: {
  post: BlogPost;
  locale?: SupportedLocale;
}) {
  const articleCopy = getBlogArticlePageCopy(locale);
  const titleLines =
    post.slug === "history-of-medicinal-astrology"
      ? locale === "fr"
        ? ["L'histoire de", "l'astrologie médicinale"]
        : locale === "it"
          ? ["La storia", "dell'astrologia medica"]
          : locale === "es"
            ? ["La historia de la", "astrología medicinal"]
            : ["The History of", "Medicinal Astrology"]
      : [post.title];
  const copy = getHomeCopy(locale);
  const sidebarLinks = [
    { label: copy.nav.home, href: withLocale(locale, "/") },
    { label: copy.nav.services, href: withLocale(locale, "/services") },
    { label: copy.nav.downloads, href: withLocale(locale, "/downloads") },
    { label: copy.nav.about, href: withLocale(locale, "/about") },
    { label: copy.nav.lifespace, href: "/lifespace" },
    { label: copy.nav.pricing, href: withLocale(locale, "/pricing") },
    { label: copy.nav.blog, href: withLocale(locale, "/blog"), active: true },
  ];

  const [debuggerVisible, setDebuggerVisible] = useState(false);
  const [debugTarget, setDebugTarget] = useState<BlogPostLayoutTarget>("pageLogo");
  const [spacingDebug, setSpacingDebug] = useState(defaultSpacingDebug);
  const [layoutDebug, setLayoutDebug] = useState(defaultLayoutDebug);
  const [debuggerOffset, setDebuggerOffset] = useState(BLOG_POST_DEFAULT_DEBUGGER_OFFSET);
  const [copyStatus, setCopyStatus] = useState("");
  const [debuggerDragging, setDebuggerDragging] = useState<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);
  const [logoDragging, setLogoDragging] = useState<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(BLOG_POST_DEBUG_STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as {
        spacingDebug?: Partial<BlogPostSpacingDebug>;
        layoutDebug?: Partial<{
          footer?: Partial<BlogPostLayoutDebug["footer"]>;
          footerLogo?: Partial<BlogPostLayoutDebug["footerLogo"]>;
          pageLogo?: Partial<BlogPostLayoutDebug["pageLogo"]>;
        }>;
        debugTarget?: BlogPostLayoutTarget;
        debuggerOffset?: { x?: number; y?: number };
      };

      if (parsed.spacingDebug) {
        setSpacingDebug({ ...defaultSpacingDebug, ...parsed.spacingDebug });
      }

      if (parsed.layoutDebug) {
        setLayoutDebug({
          footer: { ...defaultLayoutDebug.footer, ...parsed.layoutDebug.footer },
          footerLogo: { ...defaultLayoutDebug.footerLogo, ...parsed.layoutDebug.footerLogo },
          pageLogo: { ...defaultLayoutDebug.pageLogo, ...parsed.layoutDebug.pageLogo },
        });
      }

      if (parsed.debugTarget) {
        setDebugTarget(parsed.debugTarget);
      }

      if (parsed.debuggerOffset) {
        setDebuggerOffset({
          x: Number(parsed.debuggerOffset.x ?? 0),
          y: Number(parsed.debuggerOffset.y ?? 0),
        });
      }
    } catch {
      window.localStorage.removeItem(BLOG_POST_DEBUG_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      BLOG_POST_DEBUG_STORAGE_KEY,
      JSON.stringify({ spacingDebug, layoutDebug, debugTarget, debuggerOffset }),
    );
  }, [debugTarget, debuggerOffset, layoutDebug, spacingDebug]);

  useEffect(() => {
    if (!debuggerDragging) return;

    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - debuggerDragging.startX;
      const dy = event.clientY - debuggerDragging.startY;
      setDebuggerOffset({
        x: debuggerDragging.initialX + dx,
        y: debuggerDragging.initialY + dy,
      });
    };

    const onUp = () => setDebuggerDragging(null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [debuggerDragging]);

  useEffect(() => {
    if (!logoDragging) return;

    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - logoDragging.startX;
      const dy = event.clientY - logoDragging.startY;
      setLayoutDebug((current) => ({
        ...current,
        pageLogo: {
          ...current.pageLogo,
          x: logoDragging.initialX + dx,
          y: logoDragging.initialY + dy,
        },
      }));
    };

    const onUp = () => setLogoDragging(null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [logoDragging]);

  const setSpacing = (key: keyof BlogPostSpacingDebug, value: number) => {
    setSpacingDebug((current) => ({ ...current, [key]: value }));
  };

  const activeReadout =
    debugTarget === "pageLogo"
      ? `Page Logo X ${layoutDebug.pageLogo.x} Y ${layoutDebug.pageLogo.y} S ${layoutDebug.pageLogo.scale.toFixed(2)}`
      : debugTarget === "footer"
        ? `Footer Spacing ${layoutDebug.footer.spacing}`
        : debugTarget === "footerLogo"
          ? `Footer Logo X ${layoutDebug.footerLogo.x} Y ${layoutDebug.footerLogo.y} S ${layoutDebug.footerLogo.scale.toFixed(2)}`
          : debugTarget === "titleSubtitleGap"
            ? `Title to subtitle ${spacingDebug.titleSubtitleGap}px`
            : debugTarget === "subtitleMetaGap"
              ? `Subtitle to date ${spacingDebug.subtitleMetaGap}px`
              : debugTarget === "metaCardGap"
                ? `Date to card ${spacingDebug.metaCardGap}px`
                : debugTarget === "cardCoverGap"
                  ? `Card top to image ${spacingDebug.cardCoverGap}px`
                  : debugTarget === "coverCaptionGap"
                    ? `Image to caption ${spacingDebug.coverCaptionGap}px`
                    : `Caption to body ${spacingDebug.coverBodyGap}px`;

  const copyValues = async () => {
    const lines = [
      `page logo X ${layoutDebug.pageLogo.x} Y ${layoutDebug.pageLogo.y} S ${layoutDebug.pageLogo.scale.toFixed(2)} V ${layoutDebug.pageLogo.visible ? "on" : "off"}`,
      `footer spacing ${layoutDebug.footer.spacing}`,
      `footer logo X ${layoutDebug.footerLogo.x} Y ${layoutDebug.footerLogo.y} S ${layoutDebug.footerLogo.scale.toFixed(2)}`,
      `title to subtitle ${spacingDebug.titleSubtitleGap}px`,
      `subtitle to date ${spacingDebug.subtitleMetaGap}px`,
      `date to card ${spacingDebug.metaCardGap}px`,
      `card top to image ${spacingDebug.cardCoverGap}px`,
      `image to caption ${spacingDebug.coverCaptionGap}px`,
      `caption to body ${spacingDebug.coverBodyGap}px`,
    ];

    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopyStatus("Copied values");
    } catch {
      setCopyStatus("Copy failed");
    }
    window.setTimeout(() => setCopyStatus(""), 1600);
  };

  return (
    <main
      className="blog-article-page"
      style={
        {
          "--blog-title-subtitle-gap": `${spacingDebug.titleSubtitleGap}px`,
          "--blog-subtitle-meta-gap": `${spacingDebug.subtitleMetaGap}px`,
          "--blog-meta-card-gap": `${spacingDebug.metaCardGap}px`,
          "--blog-card-cover-gap": `${spacingDebug.cardCoverGap}px`,
          "--blog-cover-caption-gap": `${spacingDebug.coverCaptionGap}px`,
          "--blog-cover-body-gap": `${spacingDebug.coverBodyGap}px`,
        } as CSSProperties
      }
    >
      <ScaledPageCanvas
        bleedLeft={BLOG_POST_CANVAS_BLEED_LEFT}
        bleedRight={BLOG_POST_CANVAS_BLEED_RIGHT}
        className="blog-article-page-canvas"
        designWidth={BLOG_POST_CANVAS_WIDTH}
        offsetX={BLOG_POST_CANVAS_OFFSET_X}
        offsetY={BLOG_POST_CANVAS_OFFSET_Y}
        scale={BLOG_POST_CANVAS_SCALE}
        viewportClassName="blog-article-page-canvas-viewport"
      >
        <section className="home-top-shell home-top-shell-mock blog-gallery-shell blog-article-shell">
          <aside className="home-side-column">
            <div className="home-social-rail home-social-rail-mock blog-gallery-rail blog-article-rail">
              <nav className="home-sidebar-nav blog-gallery-nav" aria-label="Site sections">
                {sidebarLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`home-sidebar-link${item.active ? " is-active" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <section className="home-dashboard home-dashboard-mock blog-article-dashboard">
            <article className="blog-article-main">
              {layoutDebug.pageLogo.visible ? (
                <img
                  src="/astrologytoday-emblem.png"
                  alt="Astrology Today emblem"
                  className="blog-post-floating-logo"
                  style={{
                    transform: `translate(${layoutDebug.pageLogo.x}px, ${layoutDebug.pageLogo.y}px) scale(${layoutDebug.pageLogo.scale})`,
                    transformOrigin: "top left",
                  }}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setDebugTarget("pageLogo");
                    setLogoDragging({
                      startX: event.clientX,
                      startY: event.clientY,
                      initialX: layoutDebug.pageLogo.x,
                      initialY: layoutDebug.pageLogo.y,
                    });
                  }}
                />
              ) : null}
              <div className="blog-article-back-row">
                <Link href={withLocale(locale, "/blog")} className="blog-article-back-link">
                  ← {articleCopy.backToBlog}
                </Link>
              </div>

              <header className="blog-article-hero-panel">
                <div className="blog-article-hero-copy">
                  <p className="blog-kicker">{post.issueLabel}</p>
                  <h1 className="blog-article-title-stack">
                    {titleLines.map((line, index) => (
                      <span key={`${line}-${index}`}>{line}</span>
                    ))}
                  </h1>
                  {post.subtitle ? <p className="blog-article-subtitle">{post.subtitle}</p> : null}
                  <p className="blog-article-meta">
                    {post.publishedLabel} · {post.readTime}
                  </p>
                  {post.deck ? <p className="blog-article-deck">{post.deck}</p> : null}
                </div>
              </header>

              <section className="blog-article-card">
                <figure className="blog-article-cover blog-article-cover-in-card">
                  <img
                    src={post.coverImage}
                    alt={post.coverImageAlt}
                    className="blog-article-cover-image"
                  />
                  {post.coverImageCaption ? (
                    <figcaption className="blog-article-cover-caption">{post.coverImageCaption}</figcaption>
                  ) : null}
                </figure>

                <div className="blog-longform">
                  {post.intro.map((paragraph, index) => (
                    <p key={`intro-${index}`}>{renderBracketItalics(paragraph, `intro-${index}`)}</p>
                  ))}

                  {post.sections.map((section, index) => {
                    const showMatrixAfterSection = section.paragraphs?.some((paragraph) =>
                      paragraph.includes(
                        "Each of these disorders corresponded perfectly with what we have learned from ancient astrology in medical practice.",
                      ),
                    );
                    const hasQuoteSpacing = Boolean(section.quote);
                    const hasIntroSpacing =
                      section.paragraphs?.some((paragraph) =>
                        paragraph.includes(
                          "not fully understanding the signs, planetary placements, or the numerous interactions between the two.",
                        ),
                      ) ?? false;
                    const hasGallerySpacing = Boolean(section.images);
                    const hasBulletSpacing =
                      section.items?.includes("Track bleeding cycles") ?? false;
                    const hasFigureSpacing =
                      Boolean(section.image?.caption) &&
                      (!section.paragraphs || section.paragraphs.length === 0);
                    const hasPostListSpacing =
                      section.items?.includes(
                        "Fix your gaze upon the candle’s flame while continuing the breathing exercise. Feel your own presence in your periphery.",
                      ) ?? false;
                    const hasStardustSpacing =
                      section.paragraphs?.some((paragraph) =>
                        paragraph.includes(
                          "under extreme conditions, such as the collapse or explosion of a star.",
                        ),
                      ) ?? false;

                    return (
                      <div
                        key={`section-wrap-${index}`}
                        className={`blog-article-block${
                          hasQuoteSpacing ? " has-quote-spacing" : ""
                        }${hasIntroSpacing ? " has-intro-spacing" : ""}${
                          hasGallerySpacing ? " has-gallery-spacing" : ""
                        }${hasBulletSpacing ? " has-bullet-spacing" : ""}${
                          hasFigureSpacing ? " has-figure-spacing" : ""
                        }${
                          hasPostListSpacing ? " has-post-list-spacing" : ""
                        }${
                          hasStardustSpacing ? " has-stardust-spacing" : ""
                        }`}
                      >
                        <section
                          className={`blog-article-section${
                            section.image && section.imageLayout === "rightWrap"
                              ? " has-wrap-image"
                              : ""
                          }${section.images ? " is-gallery" : ""}${section.quote ? " is-quote" : ""}${
                            section.items ? " is-list-block" : ""
                          }${section.separator ? " is-separator" : ""}`}
                        >
                          {section.separator ? <div className="blog-article-separator">. . .</div> : null}
                          {section.quoteLead ? <p className="blog-article-quote-lead">{section.quoteLead}</p> : null}

                          {section.quote ? (
                            <blockquote className="blog-article-quote">
                              <p>{section.quote}</p>
                            </blockquote>
                          ) : null}

                          {section.eyebrow || section.heading || section.paragraphs ? (
                            <div className="blog-article-section-copy">
                              {section.eyebrow ? <p className="blog-kicker">{section.eyebrow}</p> : null}
                              {section.heading ? (
                                <h2 className={section.subheading ? "blog-article-subheading" : undefined}>
                                  {section.heading}
                                </h2>
                              ) : null}
                              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                                <div key={`section-${index}-paragraph-wrap-${paragraphIndex}`}>
                                  <p
                                    className={
                                      paragraph ===
                                      "Modern medicine excels at acute care and infection control, but fails at maintaining the overall health of the body long-term."
                                        ? "blog-article-standout"
                                        : undefined
                                    }
                                  >
                                    {renderBracketItalics(
                                      paragraph,
                                      `section-${index}-paragraph-${paragraphIndex}`,
                                    )}
                                  </p>
                                  {section.image &&
                                  section.imageLayout === "rightWrap" &&
                                  section.imageAfterParagraph === paragraphIndex + 1 ? (
                                    <figure className="blog-inline-figure blog-inline-figure-right-wrap">
                                      <img
                                        src={section.image.src}
                                        alt={section.image.alt}
                                        className="blog-inline-figure-image"
                                      />
                                      {section.image.caption ? <figcaption>{section.image.caption}</figcaption> : null}
                                    </figure>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          ) : null}

                          {section.image && section.imageLayout !== "rightWrap" ? (
                            <figure
                              className="blog-inline-figure blog-inline-figure-centered"
                            >
                              <img
                                src={section.image.src}
                                alt={section.image.alt}
                                className="blog-inline-figure-image"
                              />
                              {section.image.caption ? <figcaption>{section.image.caption}</figcaption> : null}
                            </figure>
                          ) : null}

                          {section.images ? (
                            <figure className="blog-image-pair">
                              <div className="blog-image-row">
                                {section.images.map((image) => (
                                  <div key={image.src} className="blog-image-card">
                                    <img src={image.src} alt={image.alt} />
                                  </div>
                                ))}
                              </div>
                              <figcaption>
                                {articleCopy.imagePairCaption}
                              </figcaption>
                            </figure>
                          ) : null}

                          {section.items ? (
                            <ul className="blog-inline-list">
                              {section.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          ) : null}
                        </section>

                        {showMatrixAfterSection ? (
                          <section className="blog-medical-grid-section has-bottom-spacing">
                            <div>
                              <p>{articleCopy.zodiacReviewIntro}</p>
                            </div>

                            <div className="blog-zodiac-grid">
                              {post.zodiacBodyMap.map((item) => (
                                <article key={item.sign} className="blog-zodiac-grid-card">
                                  <h3>{item.sign}</h3>
                                  <p>{item.body}</p>
                                </article>
                              ))}
                            </div>
                          </section>
                        ) : null}
                      </div>
                    );
                  })}

                  {post.practices.length > 0 ? (
                    <section className="blog-practice-strip">
                      <ul className="blog-practice-list">
                        {post.practices.map((item) => (
                          <li key={item}>
                            {(() => {
                              const practice = splitPracticeItem(item);
                              return (
                                <>
                                  {practice.letter ? (
                                    <span className="blog-practice-badge" aria-hidden="true">
                                      {practice.letter}
                                    </span>
                                  ) : null}
                                  <span className="blog-practice-copy">{practice.text}</span>
                                </>
                              );
                            })()}
                          </li>
                        ))}
                      </ul>
                    </section>
                  ) : null}

                  {post.closing.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </article>

            <SiteFooter
              locale={locale}
              currentPath={`/blog/${post.slug}`}
              className="blog-gallery-footer"
              footerSpacing={layoutDebug.footer.spacing}
              logoTransform={layoutDebug.footerLogo}
            />
          </section>
        </section>
      </ScaledPageCanvas>

      {SHOW_DEBUGGERS ? (debuggerVisible ? (
        <aside
          className="downloads-debugger"
          style={{ transform: `translate(${debuggerOffset.x}px, ${debuggerOffset.y}px)` }}
        >
          <div className="downloads-debugger-header">
            <p className="downloads-debugger-title">Layout Debugger</p>
            <button
              type="button"
              className="downloads-debugger-toggle-button downloads-debugger-toggle-button-inline"
              onClick={() => {
                setDebuggerDragging(null);
                setLogoDragging(null);
                setDebuggerVisible(false);
              }}
            >
              Hide
            </button>
          </div>
          <div
            className="downloads-debugger-dragbar"
            onMouseDown={(event) =>
              setDebuggerDragging({
                startX: event.clientX,
                startY: event.clientY,
                initialX: debuggerOffset.x,
                initialY: debuggerOffset.y,
              })
            }
          >
            Drag panel
          </div>
          <label className="downloads-debugger-select-wrap">
            <span>Target</span>
            <select
              className="downloads-debugger-select"
              value={debugTarget}
              onChange={(event) => setDebugTarget(event.target.value as BlogPostLayoutTarget)}
            >
              <option value="pageLogo">page emblem</option>
              <option value="footer">footer spacing</option>
              <option value="footerLogo">footer logo</option>
              <option value="titleSubtitleGap">title to subtitle</option>
              <option value="subtitleMetaGap">subtitle to date</option>
              <option value="metaCardGap">date to card</option>
              <option value="cardCoverGap">card top to image</option>
              <option value="coverCaptionGap">image to caption</option>
              <option value="coverBodyGap">caption to body</option>
            </select>
          </label>
          <div className="downloads-debugger-readout">{activeReadout}</div>

          {debugTarget === "pageLogo" ? (
            <div className="downloads-debugger-grid">
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    pageLogo: { ...current.pageLogo, y: current.pageLogo.y - 8 },
                  }))
                }
              >
                Up
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    pageLogo: { ...current.pageLogo, x: current.pageLogo.x - 8 },
                  }))
                }
              >
                Left
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    pageLogo: { ...current.pageLogo, x: current.pageLogo.x + 8 },
                  }))
                }
              >
                Right
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    pageLogo: { ...current.pageLogo, y: current.pageLogo.y + 8 },
                  }))
                }
              >
                Down
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    pageLogo: {
                      ...current.pageLogo,
                      scale: Number(Math.max(0.4, current.pageLogo.scale - 0.04).toFixed(2)),
                    },
                  }))
                }
              >
                Smaller
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    pageLogo: {
                      ...current.pageLogo,
                      scale: Number((current.pageLogo.scale + 0.04).toFixed(2)),
                    },
                  }))
                }
              >
                Bigger
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    pageLogo: { ...current.pageLogo, visible: !current.pageLogo.visible },
                  }))
                }
              >
                {layoutDebug.pageLogo.visible ? "Hide Logo" : "Show Logo"}
              </button>
            </div>
          ) : null}

          {debugTarget === "footer" ? (
            <div className="downloads-debugger-grid">
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    footer: { spacing: Math.max(24, current.footer.spacing - 20) },
                  }))
                }
              >
                Less Space
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    footer: { spacing: current.footer.spacing + 20 },
                  }))
                }
              >
                More Space
              </button>
            </div>
          ) : null}

          {debugTarget === "footerLogo" ? (
            <div className="downloads-debugger-grid">
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    footerLogo: { ...current.footerLogo, y: current.footerLogo.y - 8 },
                  }))
                }
              >
                Up
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    footerLogo: { ...current.footerLogo, x: current.footerLogo.x - 8 },
                  }))
                }
              >
                Left
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    footerLogo: { ...current.footerLogo, x: current.footerLogo.x + 8 },
                  }))
                }
              >
                Right
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    footerLogo: { ...current.footerLogo, y: current.footerLogo.y + 8 },
                  }))
                }
              >
                Down
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    footerLogo: {
                      ...current.footerLogo,
                      scale: Number(Math.max(0.4, current.footerLogo.scale - 0.04).toFixed(2)),
                    },
                  }))
                }
              >
                Smaller
              </button>
              <button
                type="button"
                onClick={() =>
                  setLayoutDebug((current) => ({
                    ...current,
                    footerLogo: {
                      ...current.footerLogo,
                      scale: Number((current.footerLogo.scale + 0.04).toFixed(2)),
                    },
                  }))
                }
              >
                Bigger
              </button>
            </div>
          ) : null}

          {[
            ["titleSubtitleGap", "Title to subtitle", spacingDebug.titleSubtitleGap, -8, 60],
            ["subtitleMetaGap", "Subtitle to date", spacingDebug.subtitleMetaGap, -8, 60],
            ["metaCardGap", "Date to card", spacingDebug.metaCardGap, 0, 100],
            ["cardCoverGap", "Card top to image", spacingDebug.cardCoverGap, 0, 80],
            ["coverCaptionGap", "Image to caption", spacingDebug.coverCaptionGap, 0, 40],
            ["coverBodyGap", "Caption to body", spacingDebug.coverBodyGap, 0, 100],
          ]
            .filter(([key]) => key === debugTarget)
            .map(([key, label, value, min, max]) => (
              <label key={String(key)} className="blog-post-debugger-field">
                <span>{label as string}</span>
                <input
                  type="range"
                  min={Number(min)}
                  max={Number(max)}
                  value={value as number}
                  onChange={(event) =>
                    setSpacing(key as keyof BlogPostSpacingDebug, Number(event.target.value))
                  }
                />
                <strong>{value as number}px</strong>
              </label>
            ))}

          <div className="downloads-debugger-actions">
            <button type="button" className="downloads-debugger-reset" onClick={copyValues}>
              Copy Values
            </button>
            <button
              type="button"
              className="downloads-debugger-reset"
              onClick={() => {
                setLayoutDebug(defaultLayoutDebug);
                setSpacingDebug(defaultSpacingDebug);
                setDebuggerOffset(BLOG_POST_DEFAULT_DEBUGGER_OFFSET);
              }}
            >
              Reset All
            </button>
          </div>
          {copyStatus ? <div className="downloads-debugger-status">{copyStatus}</div> : null}
        </aside>
      ) : (
        <button
          type="button"
          className="home-logo-debugger-toggle-button"
          onClick={() => setDebuggerVisible(true)}
          aria-label="Show debugger"
          title="Show debugger"
        >
          D
        </button>
      )) : null}
    </main>
  );
}
