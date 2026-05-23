"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import SiteFooter from "../shared/SiteFooter";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import GoogleAdSenseUnit from "../shared/GoogleAdSenseUnit";
import { getHomeCopy } from "../../lib/copy";
import { SHOW_AD_DEBUGGERS } from "../../lib/debug";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";

type AboutDebugTarget =
  | "pageLogo"
  | "contentBlock"
  | "title"
  | "bodyText"
  | "glowText"
  | "boldText"
  | "ctaButton"
  | "articleCard";

type AboutDebugState = {
  pageLogo: {
    x: number;
    y: number;
    scale: number;
  };
  contentBlock: {
    x: number;
    y: number;
  };
  title: {
    y: number;
    scale: number;
  };
  bodyText: {
    scale: number;
  };
  glowText: {
    amount: number;
  };
  boldText: {
    enabled: boolean;
  };
  ctaButton: {
    scale: number;
  };
  articleCard: {
    width: number;
  };
};

type AboutAdDebug = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const ABOUT_DEBUG_STORAGE_KEY = "about-debug-v4";
const ABOUT_AD_DEBUG_STORAGE_KEY = "about-ad-debug-v1";
const ABOUT_DEFAULT_DEBUGGER_OFFSET = { x: 0, y: 0 };
const ABOUT_AD_DEFAULT_DEBUGGER_OFFSET = { x: 0, y: 0 };
const ABOUT_CANVAS_SCALE = 0.71;
const ABOUT_CANVAS_WIDTH = 1760;
const ABOUT_CANVAS_OFFSET_X = 0;
const ABOUT_CANVAS_OFFSET_Y = 16;
const ABOUT_AD_DEFAULT_DEBUG: AboutAdDebug = {
  x: -200,
  y: 184,
  width: 276,
  height: 840,
};
const ABOUT_DEFAULT_DEBUG: AboutDebugState = {
  pageLogo: {
    x: -454,
    y: 64,
    scale: 1.98,
  },
  contentBlock: {
    x: -40,
    y: -136,
  },
  title: {
    y: -24,
    scale: 1.32,
  },
  bodyText: {
    scale: 1.15,
  },
  glowText: {
    amount: 0.32,
  },
  boldText: {
    enabled: true,
  },
  ctaButton: {
    scale: 1.08,
  },
  articleCard: {
    width: 97,
  },
};

const aboutBullets = [
  "Major strengths and weaknesses",
  "Emotional patterns",
  "Career insights",
  "Parenting guidance",
  "Love and sex style",
];

const aboutParagraphs = [
  "Astrology has been used for thousands of years as part of healing traditions to help people make sense of their bodies, their minds, and the deeper patterns of their lives. Astroanalysis is not a fortune-telling technique or a fixed lens of fate.",
  "An astrological consultation is a dialogue between two people in which fundamental truths are uncovered about a person’s life, allowing them to move forward with greater clarity, direction, and self-understanding.",
  "As human beings, we each contain a unique set of energies. Learning more about those energies can help us better shape how we manifest them in the physical world to achieve our hopes and desires. Astrological therapy can help you identify what those energies are, how they affect you, and how they are currently playing a role in your career and relationships.",
  "The astrologers of Astrology Today are committed to the study of astrology, with a comprehensive understanding of each of the twelve signs, their planetary placements, their powers, and how they interact. Personal character must also be taken into account when making a summary analysis.",
  "Every astroanalysis begins with the Sun Sign, which represents the basic character. Normally, this is all that is given. The lost art of astroanalysis lies in being able to synthesize the results of each of the twelve signs as they are positioned among the planets, while also incorporating house placements.",
  "Put another way, it is obvious that if you know your basic character traits and potentialities, you will be in a much better position to **assert your talents, correct your shortcomings, exploit your natural possibilities, and bring greater harmony into your relationships with others,** in short, to live a richer and more meaningful life.",
  "Frequently, when doing astroanalysis, you will notice that an individual’s character clashes with his or her personality. This can help you understand aggressive and contradictory behavior patterns that would otherwise be baffling. With this new insight, you will be able to **improve relationships between partners, co-workers, or friends,** generally reducing friction between those you live with or work around.",
  "Perhaps most importantly, **children can be encouraged along positive lines** by their parents and guided toward a future that provides full scope for their natural abilities and aptitudes. Sometimes a parent will have very harmonious astrology with two or more of their children, while another child becomes the black sheep of the family. However, this may be due to astrological differences rather than character flaws or behavioral issues.",
  "**Severe mental health challenges may also be better understood and prevented from worsening by understanding astrological influences.**",
  "It may help the skeptic to know that modern astrology does not suggest that the planets themselves rule our destinies. The planets are dynamic parts of the electromagnetic field in which we exist. Their constantly changing angular positions to the Earth and to each other are understood astrologically to correlate with distinct changes in human and cosmic affairs.",
];

function renderHighlightedText(
  text: string,
  keyPrefix: string,
  options: { glowAmount: number; boldEnabled: boolean },
) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span
          key={`${keyPrefix}-${index}`}
          className={`about-highlight${options.boldEnabled ? " is-emphasis" : ""}`}
          style={
                    {
                      "--about-highlight-glow": `${options.glowAmount}`,
                    } as CSSProperties
          }
        >
          {part.slice(2, -2)}
        </span>
      );
    }

    return <span key={`${keyPrefix}-${index}`}>{part}</span>;
  });
}

export default function AboutPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getHomeCopy(locale);
  const [debuggerVisible, setDebuggerVisible] = useState(false);
  const [debugTarget, setDebugTarget] = useState<AboutDebugTarget>("pageLogo");
  const [debugState, setDebugState] = useState<AboutDebugState>(ABOUT_DEFAULT_DEBUG);
  const [debuggerOffset, setDebuggerOffset] = useState(ABOUT_DEFAULT_DEBUGGER_OFFSET);
  const [copyStatus, setCopyStatus] = useState("");
  const [adDebug, setAdDebug] = useState<AboutAdDebug>(ABOUT_AD_DEFAULT_DEBUG);
  const [adDebuggerVisible, setAdDebuggerVisible] = useState(true);
  const [adDebuggerOffset, setAdDebuggerOffset] = useState(ABOUT_AD_DEFAULT_DEBUGGER_OFFSET);
  const [adCopyStatus, setAdCopyStatus] = useState("");
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
  const [adDragging, setAdDragging] = useState<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);
  const [adDebuggerDragging, setAdDebuggerDragging] = useState<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(ABOUT_DEBUG_STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as {
        debugState?: Partial<AboutDebugState>;
        debuggerOffset?: { x?: number; y?: number };
        debugTarget?: AboutDebugTarget;
      };

      if (parsed.debugState) {
        setDebugState({
          pageLogo: { ...ABOUT_DEFAULT_DEBUG.pageLogo, ...parsed.debugState.pageLogo },
          contentBlock: { ...ABOUT_DEFAULT_DEBUG.contentBlock, ...parsed.debugState.contentBlock },
          title: { ...ABOUT_DEFAULT_DEBUG.title, ...parsed.debugState.title },
          bodyText: { ...ABOUT_DEFAULT_DEBUG.bodyText, ...parsed.debugState.bodyText },
          glowText: { ...ABOUT_DEFAULT_DEBUG.glowText, ...parsed.debugState.glowText },
          boldText: { ...ABOUT_DEFAULT_DEBUG.boldText, ...parsed.debugState.boldText },
          ctaButton: { ...ABOUT_DEFAULT_DEBUG.ctaButton, ...parsed.debugState.ctaButton },
          articleCard: { ...ABOUT_DEFAULT_DEBUG.articleCard, ...parsed.debugState.articleCard },
        });
      }

      if (parsed.debuggerOffset) {
        setDebuggerOffset({
          x: Number(parsed.debuggerOffset.x ?? 0),
          y: Number(parsed.debuggerOffset.y ?? 0),
        });
      }

      if (parsed.debugTarget) {
        setDebugTarget(parsed.debugTarget);
      }
    } catch {
      window.localStorage.removeItem(ABOUT_DEBUG_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      ABOUT_DEBUG_STORAGE_KEY,
      JSON.stringify({ debugState, debugTarget, debuggerOffset }),
    );
  }, [debugState, debugTarget, debuggerOffset]);

  useEffect(() => {
    const stored = window.localStorage.getItem(ABOUT_AD_DEBUG_STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as {
        adDebug?: Partial<AboutAdDebug>;
        adDebuggerOffset?: { x?: number; y?: number };
      };

      if (parsed.adDebug) {
        setAdDebug({ ...ABOUT_AD_DEFAULT_DEBUG, ...parsed.adDebug });
      }

      if (parsed.adDebuggerOffset) {
        setAdDebuggerOffset({
          x: Number(parsed.adDebuggerOffset.x ?? 0),
          y: Number(parsed.adDebuggerOffset.y ?? 0),
        });
      }
    } catch {
      window.localStorage.removeItem(ABOUT_AD_DEBUG_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      ABOUT_AD_DEBUG_STORAGE_KEY,
      JSON.stringify({ adDebug, adDebuggerOffset }),
    );
  }, [adDebug, adDebuggerOffset]);

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
      setDebugState((current) => ({
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

  useEffect(() => {
    if (!adDragging) return;
    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - adDragging.startX;
      const dy = event.clientY - adDragging.startY;
      setAdDebug((current) => ({
        ...current,
        x: adDragging.initialX + dx,
        y: adDragging.initialY + dy,
      }));
    };
    const onUp = () => setAdDragging(null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [adDragging]);

  useEffect(() => {
    if (!adDebuggerDragging) return;
    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - adDebuggerDragging.startX;
      const dy = event.clientY - adDebuggerDragging.startY;
      setAdDebuggerOffset({
        x: adDebuggerDragging.initialX + dx,
        y: adDebuggerDragging.initialY + dy,
      });
    };
    const onUp = () => setAdDebuggerDragging(null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [adDebuggerDragging]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      if (["input", "textarea", "select"].includes(activeTag)) return;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;

      event.preventDefault();
      const step = event.shiftKey ? 10 : 2;

      setAdDebug((current) => ({
        ...current,
        x:
          event.key === "ArrowLeft"
            ? current.x - step
            : event.key === "ArrowRight"
              ? current.x + step
              : current.x,
        y:
          event.key === "ArrowUp"
            ? current.y - step
            : event.key === "ArrowDown"
              ? current.y + step
              : current.y,
      }));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const adjustTarget = (delta: number) => {
    setDebugState((current) => {
      switch (debugTarget) {
        case "pageLogo":
          return {
            ...current,
            pageLogo: {
              ...current.pageLogo,
              scale: Number(Math.max(0.4, current.pageLogo.scale + delta * 0.04).toFixed(2)),
            },
          };
        case "title":
          return {
            ...current,
            title: {
              ...current.title,
              scale: Number(Math.max(0.55, current.title.scale + delta * 0.04).toFixed(2)),
            },
          };
        case "bodyText":
          return {
            ...current,
            bodyText: {
              scale: Number(Math.max(0.76, current.bodyText.scale + delta * 0.03).toFixed(2)),
            },
          };
        case "glowText":
          return {
            ...current,
            glowText: {
              amount: Number(Math.max(0, current.glowText.amount + delta * 0.04).toFixed(2)),
            },
          };
        case "boldText":
          return {
            ...current,
            boldText: {
              enabled: delta > 0 ? true : delta < 0 ? false : current.boldText.enabled,
            },
          };
        case "ctaButton":
          return {
            ...current,
            ctaButton: {
              scale: Number(Math.max(0.7, current.ctaButton.scale + delta * 0.04).toFixed(2)),
            },
          };
        case "articleCard":
          return {
            ...current,
            articleCard: {
              width: Math.max(68, Math.min(100, current.articleCard.width + delta * 3)),
            },
          };
        default:
          return current;
      }
    });
  };

  const nudgeTarget = (direction: "left" | "right" | "up" | "down") => {
    const step = 8;
    setDebugState((current) => {
      if (debugTarget === "pageLogo") {
        return {
          ...current,
          pageLogo: {
            ...current.pageLogo,
            x:
              direction === "left"
                ? current.pageLogo.x - step
                : direction === "right"
                  ? current.pageLogo.x + step
                  : current.pageLogo.x,
            y:
              direction === "up"
                ? current.pageLogo.y - step
                : direction === "down"
                  ? current.pageLogo.y + step
                  : current.pageLogo.y,
          },
        };
      }

      if (debugTarget === "contentBlock") {
        return {
          ...current,
          contentBlock: {
            x:
              direction === "left"
                ? current.contentBlock.x - step
                : direction === "right"
                  ? current.contentBlock.x + step
                  : current.contentBlock.x,
            y:
              direction === "up"
                ? current.contentBlock.y - step
                : direction === "down"
                  ? current.contentBlock.y + step
                  : current.contentBlock.y,
          },
        };
      }

      if (debugTarget === "title") {
        return {
          ...current,
          title: {
            ...current.title,
            y:
              direction === "up"
                ? current.title.y - step
                : direction === "down"
                  ? current.title.y + step
                  : current.title.y,
          },
        };
      }

      return current;
    });
  };

  const resetTarget = () => {
    setDebugState((current) => ({
      ...current,
      [debugTarget]: ABOUT_DEFAULT_DEBUG[debugTarget],
    }));
  };

  const copyValues = async () => {
    const lines = [
      `page logo X ${debugState.pageLogo.x} Y ${debugState.pageLogo.y} S ${debugState.pageLogo.scale.toFixed(2)}`,
      `content block X ${debugState.contentBlock.x} Y ${debugState.contentBlock.y}`,
      `title Y ${debugState.title.y} S ${debugState.title.scale.toFixed(2)}`,
      `body text scale ${debugState.bodyText.scale.toFixed(2)}`,
      `glow ${debugState.glowText.amount.toFixed(2)}`,
      `bold ${debugState.boldText.enabled ? "on" : "off"}`,
      `cta button scale ${debugState.ctaButton.scale.toFixed(2)}`,
      `article card width ${debugState.articleCard.width}%`,
      `debugger panel X ${debuggerOffset.x} Y ${debuggerOffset.y}`,
    ];

    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopyStatus("Copied");
      window.setTimeout(() => setCopyStatus(""), 1400);
    } catch {
      setCopyStatus("Copy failed");
      window.setTimeout(() => setCopyStatus(""), 1600);
    }
  };

  const sidebarLinks = [
    { label: copy.nav.home, href: withLocale(locale, "/") },
    { label: copy.nav.services, href: withLocale(locale, "/services") },
    { label: copy.nav.downloads, href: withLocale(locale, "/downloads") },
    { label: copy.nav.about, href: withLocale(locale, "/about"), active: true },
    { label: copy.nav.lifespace, href: withLocale(locale, "/lifespace") },
    { label: copy.nav.pricing, href: withLocale(locale, "/pricing") },
    { label: copy.nav.blog, href: withLocale(locale, "/blog") },
  ];

  const activeReadout =
    debugTarget === "pageLogo"
      ? `Logo X ${debugState.pageLogo.x} Y ${debugState.pageLogo.y} S ${debugState.pageLogo.scale.toFixed(2)}`
      : debugTarget === "contentBlock"
        ? `Block X ${debugState.contentBlock.x} Y ${debugState.contentBlock.y}`
        : debugTarget === "title"
          ? `Title Y ${debugState.title.y} S ${debugState.title.scale.toFixed(2)}`
          : debugTarget === "bodyText"
            ? `Body Scale ${debugState.bodyText.scale.toFixed(2)}`
              : debugTarget === "glowText"
                ? `Glow ${debugState.glowText.amount.toFixed(2)}`
              : debugTarget === "boldText"
                ? `Italics ${debugState.boldText.enabled ? "On" : "Off"}`
                : debugTarget === "ctaButton"
                  ? `Button Scale ${debugState.ctaButton.scale.toFixed(2)}`
                  : `Card Width ${debugState.articleCard.width}%`;

  const primaryAdjustLabel =
    debugTarget === "glowText"
      ? "More Glow"
      : debugTarget === "boldText"
        ? "Italics On"
        : debugTarget === "articleCard"
          ? "Wider"
          : "Bigger";

  const secondaryAdjustLabel =
    debugTarget === "glowText"
      ? "Less Glow"
      : debugTarget === "boldText"
        ? "Italics Off"
        : debugTarget === "articleCard"
          ? "Skinnier"
        : "Smaller";

  const copyAdValues = async () => {
    const payload = [
      "About ad debugger values",
      `about ad: x ${adDebug.x}, y ${adDebug.y}, width ${adDebug.width}, height ${adDebug.height}`,
      `ad debugger panel: x ${adDebuggerOffset.x}, y ${adDebuggerOffset.y}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(payload);
      setAdCopyStatus("Values copied.");
      window.setTimeout(() => setAdCopyStatus(""), 1800);
    } catch {
      setAdCopyStatus("Copy failed.");
      window.setTimeout(() => setAdCopyStatus(""), 1800);
    }
  };

  return (
    <main className="about-page">
      <div className="about-orb about-orb-one" aria-hidden="true" />
      <div className="about-orb about-orb-two" aria-hidden="true" />
      <div className="about-orb about-orb-three" aria-hidden="true" />

      <ScaledPageCanvas
        className="about-page-canvas"
        designWidth={ABOUT_CANVAS_WIDTH}
        offsetX={ABOUT_CANVAS_OFFSET_X}
        offsetY={ABOUT_CANVAS_OFFSET_Y}
        scale={ABOUT_CANVAS_SCALE}
        viewportClassName="about-page-canvas-viewport"
      >
        <section className="about-shell">
          <div className="about-layout">
            <aside className="about-sidebar">
              <nav
                className="home-sidebar-nav pricing-sidebar-nav about-sidebar-nav"
                aria-label="Site sections"
                style={{
                  transform: "translate(-184px, 24px) scale(1.04)",
                  transformOrigin: "top center",
                }}
              >
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
              <div className="about-sidebar-ads">
                <div
                  className="about-sidebar-ad-wrap"
                  style={{
                    transform: `translate(calc(-50% + ${adDebug.x}px), ${adDebug.y}px)`,
                  }}
                  onMouseDown={
                    SHOW_AD_DEBUGGERS
                      ? (event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          setAdDragging({
                            startX: event.clientX,
                            startY: event.clientY,
                            initialX: adDebug.x,
                            initialY: adDebug.y,
                          });
                        }
                      : undefined
                  }
                >
                  <div
                    className="about-sidebar-ad-card"
                    style={{
                      width: `${adDebug.width}px`,
                      minHeight: `${adDebug.height}px`,
                    }}
                  >
                    <GoogleAdSenseUnit
                      adSlot="8974268239"
                      className="about-sidebar-ad-unit"
                      style={{
                        display: "block",
                        minHeight: `${Math.max(180, adDebug.height - 20)}px`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </aside>

            <div className="about-main">
              <img
                src="/astrologytoday-emblem.png"
                alt="Astrology Today emblem"
                className="about-page-emblem"
                draggable={false}
                style={{
                  transform: `translate(${debugState.pageLogo.x}px, ${debugState.pageLogo.y}px) scale(${debugState.pageLogo.scale})`,
                }}
                onMouseDown={(event) =>
                  setLogoDragging({
                    startX: event.clientX,
                    startY: event.clientY,
                    initialX: debugState.pageLogo.x,
                    initialY: debugState.pageLogo.y,
                  })
                }
              />

              <div
                className="about-content-block"
                style={{
                  transform: `translate(${debugState.contentBlock.x}px, ${debugState.contentBlock.y}px)`,
                }}
              >
                <header className="about-hero">
                  <div className="about-hero-copy">
                    <h1
                      style={{
                        transform: `translateY(${debugState.title.y}px) scale(${debugState.title.scale})`,
                        transformOrigin: "left top",
                      }}
                    >
                      What Is Astroanalysis?
                    </h1>
                  </div>
                </header>

                <section
                  className="about-article-card"
                  style={{ width: `${debugState.articleCard.width}%` }}
                >
                  <article
                    className="about-article"
                    style={
                      {
                        "--about-body-scale": `${debugState.bodyText.scale}`,
                      } as CSSProperties
                    }
                  >
                    {aboutParagraphs.slice(0, 2).map((paragraph, index) => (
                      <p key={`intro-${index}`}>
                        {renderHighlightedText(paragraph, `intro-${index}`, {
                          glowAmount: debugState.glowText.amount,
                          boldEnabled: debugState.boldText.enabled,
                        })}
                      </p>
                    ))}

                    <div className="about-benefits-section">
                      <p className="about-benefits-lead">Some of these insights include:</p>
                      <div className="about-benefits-card">
                        <div className="about-benefits-grid">
                          {aboutBullets.map((item) => (
                            <div key={item} className="about-benefit-item">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {aboutParagraphs.slice(2).map((paragraph, index) => (
                      <p key={`body-${index}`}>
                        {renderHighlightedText(paragraph, `body-${index}`, {
                          glowAmount: debugState.glowText.amount,
                          boldEnabled: debugState.boldText.enabled,
                        })}
                      </p>
                    ))}
                  </article>

                  <div className="about-cta-wrap">
                    <Link
                      href="https://square.link/u/5GFD8pQc"
                      className="about-cta-button"
                      style={{
                        transform: `scale(${debugState.ctaButton.scale})`,
                        transformOrigin: "center center",
                      }}
                    >
                      Get Your Astroanalysis
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <SiteFooter locale={locale} currentPath="/about" className="site-section-footer" />

        </section>
      </ScaledPageCanvas>
      {SHOW_AD_DEBUGGERS ? (adDebuggerVisible ? (
        <aside
          className="about-ad-compact-debugger"
          style={{ transform: `translate(${adDebuggerOffset.x}px, ${adDebuggerOffset.y}px)` }}
        >
          <div className="about-ad-compact-debugger-header">
            <p className="about-ad-compact-debugger-title">About Ad Debugger</p>
            <button
              type="button"
              className="about-ad-compact-debugger-toggle-button about-ad-compact-debugger-toggle-button-inline"
              onClick={() => {
                setAdDebuggerDragging(null);
                setAdDebuggerVisible(false);
              }}
            >
              Hide
            </button>
          </div>
          <div
            className="about-ad-compact-debugger-dragbar"
            onMouseDown={(event) =>
              setAdDebuggerDragging({
                startX: event.clientX,
                startY: event.clientY,
                initialX: adDebuggerOffset.x,
                initialY: adDebuggerOffset.y,
              })
            }
          >
            Drag panel
          </div>
          <p className="about-ad-compact-debugger-readout">
            X {Math.round(adDebug.x)} Y {Math.round(adDebug.y)} W {Math.round(adDebug.width)} H {Math.round(adDebug.height)}
          </p>
          <p className="about-ad-compact-debugger-readout">
            Arrow keys move the ad. Hold Shift for larger steps.
          </p>
          <div className="about-ad-compact-debugger-grid">
            <button type="button" onClick={() => setAdDebug((current) => ({ ...current, y: current.y - 8 }))}>
              Up
            </button>
            <button type="button" onClick={() => setAdDebug((current) => ({ ...current, x: current.x - 8 }))}>
              Left
            </button>
            <button type="button" onClick={() => setAdDebug((current) => ({ ...current, x: current.x + 8 }))}>
              Right
            </button>
            <button type="button" onClick={() => setAdDebug((current) => ({ ...current, y: current.y + 8 }))}>
              Down
            </button>
            <button type="button" onClick={() => setAdDebug((current) => ({ ...current, width: Math.max(140, current.width - 8) }))}>
              Narrower
            </button>
            <button type="button" onClick={() => setAdDebug((current) => ({ ...current, width: Math.min(340, current.width + 8) }))}>
              Wider
            </button>
            <button type="button" onClick={() => setAdDebug((current) => ({ ...current, height: Math.max(240, current.height - 12) }))}>
              Shorter
            </button>
            <button type="button" onClick={() => setAdDebug((current) => ({ ...current, height: Math.min(1200, current.height + 12) }))}>
              Taller
            </button>
          </div>
          <div className="about-ad-compact-debugger-actions">
            <button type="button" className="about-ad-compact-debugger-reset" onClick={copyAdValues}>
              Copy Values
            </button>
            <button
              type="button"
              className="about-ad-compact-debugger-reset"
              onClick={() => {
                setAdDebug(ABOUT_AD_DEFAULT_DEBUG);
                setAdDebuggerOffset(ABOUT_AD_DEFAULT_DEBUGGER_OFFSET);
              }}
            >
              Reset
            </button>
          </div>
          {adCopyStatus ? <p className="about-ad-compact-debugger-status">{adCopyStatus}</p> : null}
        </aside>
      ) : (
        <button
          type="button"
          className="about-ad-compact-debugger-toggle-button"
          onClick={() => setAdDebuggerVisible(true)}
          aria-label="Show about ad tools"
          title="Show about ad tools"
        >
          A
        </button>
      )) : null}
    </main>
  );
}
