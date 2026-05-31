"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import SiteFooter from "../shared/SiteFooter";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { blogPosts } from "../../lib/blog";
import { getBlogPageCopy } from "../../lib/blogPageCopy";
import { getLocalizedBlogSummary } from "../../lib/blogSummaryCopy";
import { getHomeCopy } from "../../lib/copy";
import { SHOW_DEBUGGERS } from "../../lib/debug";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";

const BLOG_DEBUG_STORAGE_KEY = "astrologytoday-blog-debug-v5";
const BLOG_MARQUEE_BASE_WIDTH = 1979;
const BLOG_MARQUEE_BASE_HEIGHT = 34;
const BLOG_CANVAS_SCALE = 0.71;
const BLOG_CANVAS_WIDTH = 1860;
const BLOG_CANVAS_BLEED_LEFT = 360;
const BLOG_CANVAS_BLEED_RIGHT = 360;
const BLOG_CANVAS_OFFSET_X = 10;
const BLOG_CANVAS_OFFSET_Y = 16;

type TransformDebug = {
  x: number;
  y: number;
  scale: number;
};

type TitleBarDebug = TransformDebug & {
  width: number;
  height: number;
};

type DebugTarget =
  | "marquee"
  | "emblemCard"
  | "emblem"
  | "titleCircle"
  | "titleCircle2"
  | "titleCircle3"
  | "titleCircle4"
  | "titleBar"
  | "titleBar2"
  | "title"
  | "pageTitle"
  | "footer"
  | "footerLogo";

type DragState = {
  target: DebugTarget;
  startX: number;
  startY: number;
  initialTransform?: TransformDebug | TitleBarDebug;
};

const brandTransforms = {
  emblem: { x: 17, y: 2, scale: 0.64 },
  title: { x: 345, y: 140, scale: 0.54 },
  titleCircle: { x: 60, y: 32, scale: 1.82 },
  titleCircle2: { x: 118, y: 47, scale: 1.42 },
  titleCircle3: { x: 88, y: 54, scale: 1.1 },
  titleCircle4: { x: 88, y: 64, scale: 1.18 },
  titleBar: { x: 279, y: 102, scale: 0.86, width: 566, height: 144 },
  titleBar2: { x: 290, y: 104, scale: 0.74, width: 636, height: 164 },
} as const;

const defaultTransforms = {
  marquee: { x: 0, y: 0, scale: 1 },
  emblemCard: { x: 13, y: -6, scale: 1 },
  emblem: { x: -8, y: 0, scale: 1 },
  titleCircle: { x: -42, y: -20, scale: 1.24 },
  titleCircle2: { x: -16, y: 0, scale: 1.08 },
  titleCircle3: { x: -10, y: -22, scale: 1.64 },
  titleCircle4: { x: -24, y: -24, scale: 1 },
  titleBar: { x: 0, y: 0, scale: 1, width: brandTransforms.titleBar.width, height: brandTransforms.titleBar.height },
  titleBar2: { x: 0, y: 0, scale: 1, width: brandTransforms.titleBar2.width, height: brandTransforms.titleBar2.height },
  title: { x: 0, y: 0, scale: 1 },
  pageTitle: { x: 0, y: 10, scale: 0.84 },
  footerLogo: { x: 0, y: 0, scale: 1.28 },
};

const defaultOpacities: Record<DebugTarget, number> = {
  marquee: 1,
  emblemCard: 1,
  emblem: 1,
  titleCircle: 0.95,
  titleCircle2: 0.8,
  titleCircle3: 0.05,
  titleCircle4: 0.05,
  titleBar: 1,
  titleBar2: 1,
  title: 1,
  pageTitle: 1,
  footer: 1,
  footerLogo: 1,
};

type GalleryCard = {
  slug?: string;
  href?: string;
  title: string;
  meta: string;
  excerpt: string;
  badge: string;
  image?: string;
  imageAlt?: string;
};

const marqueeItems = [
  "♅ ⋅ URANUS ENTERS GEMINI 04/26 ⋅ ♅",
  "☉ ⋅ GEMINI SUN ⋅ 05/21 - 06/20 ⋅ GEMINI SUN ⋅ ☉",
  "☽ ⋅ VIRGO MOON ⋅ 05/23 - 05/24 ⋅ VIRGO MOON ⋅ ☽",
  "☿ ⋅ GEMINI MERCURY ⋅ 05/17 - 05/31 ⋅ GEMINI MERCURY ⋅ ☿",
  "☽ ⋅ LIBRA MOON ⋅ 05/25 - 05/26 ⋅ LIBRA MOON ⋅ ☽",
  "♃ ⋅ JUPITER ENTERS LEO 06/30 ⋅ ♃",
  "☽ ⋅ SCORPIO FULL MOON ⋅ 05/27 - 05/29 ⋅ SCORPIO FULL MOON ⋅ ☽",
  "♂ ⋅ TAURUS MARS ⋅ 05/18 - 06/27 ⋅ TAURUS MARS ⋅ ♂",
  "☽ ⋅ SAGITTARIUS FULL MOON ⋅ 05/30 - 06/01 ⋅ SAGITTARIUS FULL MOON ⋅ ☽",
  "♀ ⋅ CANCER VENUS ⋅ 05/19 - 06/12 ⋅ CANCER VENUS ⋅ ♀",
];

function buildGalleryCards(locale: SupportedLocale): GalleryCard[] {
  const localizedBlog = (slug: string) => withLocale(locale, `/blog/${slug}`);
  return blogPosts.slice(1, 10).map((post) => {
    const localizedPost = getLocalizedBlogSummary(post, locale);
    return {
      slug: localizedPost.slug,
      href: localizedBlog(localizedPost.slug),
      title: localizedPost.title,
      meta: localizedPost.publishedLabel,
      excerpt: localizedPost.excerpt,
      badge: localizedPost.readTime,
      image: localizedPost.coverImage,
      imageAlt: localizedPost.coverImageAlt,
    };
  });
}

export default function BlogPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const marqueeGroupRef = useRef<HTMLDivElement | null>(null);
  const copy = getHomeCopy(locale);
  const blogCopy = getBlogPageCopy(locale);
  const navLinks = [
    { label: copy.nav.home, href: withLocale(locale, "/") },
    { label: copy.nav.services, href: withLocale(locale, "/services") },
    { label: copy.nav.downloads, href: withLocale(locale, "/downloads") },
    { label: copy.nav.about, href: withLocale(locale, "/about") },
    { label: copy.nav.lifespace, href: "/lifespace" },
    { label: copy.nav.pricing, href: withLocale(locale, "/pricing") },
    { label: copy.nav.blog, href: withLocale(locale, "/blog"), active: true },
  ];

  const featuredPost = getLocalizedBlogSummary(blogPosts[0], locale);
  const galleryCards = buildGalleryCards(locale);

  const [debuggerVisible, setDebuggerVisible] = useState(false);
  const [debuggerOffset, setDebuggerOffset] = useState({ x: 0, y: 0 });
  const [debuggerDragging, setDebuggerDragging] = useState<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);
  const [dragging, setDragging] = useState<DragState | null>(null);
  const [debugTarget, setDebugTarget] = useState<DebugTarget>("titleBar");
  const [copyStatus, setCopyStatus] = useState("");
  const [marqueeDebug, setMarqueeDebug] = useState(defaultTransforms.marquee);
  const [marqueeWidth, setMarqueeWidth] = useState(BLOG_MARQUEE_BASE_WIDTH);
  const [marqueeHeight, setMarqueeHeight] = useState(BLOG_MARQUEE_BASE_HEIGHT);
  const [emblemCardDebug, setEmblemCardDebug] = useState(defaultTransforms.emblemCard);
  const [emblemDebug, setEmblemDebug] = useState(defaultTransforms.emblem);
  const [titleCircleDebug, setTitleCircleDebug] = useState(defaultTransforms.titleCircle);
  const [titleCircle2Debug, setTitleCircle2Debug] = useState(defaultTransforms.titleCircle2);
  const [titleCircle3Debug, setTitleCircle3Debug] = useState(defaultTransforms.titleCircle3);
  const [titleCircle4Debug, setTitleCircle4Debug] = useState(defaultTransforms.titleCircle4);
  const [titleBarDebug, setTitleBarDebug] = useState<TitleBarDebug>(defaultTransforms.titleBar);
  const [titleBar2Debug, setTitleBar2Debug] = useState<TitleBarDebug>(defaultTransforms.titleBar2);
  const [titleDebug, setTitleDebug] = useState(defaultTransforms.title);
  const [pageTitleDebug, setPageTitleDebug] = useState(defaultTransforms.pageTitle);
  const [footerSpacing, setFooterSpacing] = useState(120);
  const [footerLogoDebug, setFooterLogoDebug] = useState(defaultTransforms.footerLogo);
  const [opacities, setOpacities] = useState(defaultOpacities);
  const [marqueeViewportWidth, setMarqueeViewportWidth] = useState(0);
  const [marqueeCycleWidth, setMarqueeCycleWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (marqueeRef.current) setMarqueeViewportWidth(marqueeRef.current.clientWidth);
      if (marqueeGroupRef.current) setMarqueeCycleWidth(marqueeGroupRef.current.offsetWidth);
    };

    measure();

    const observer = new ResizeObserver(() => measure());
    if (marqueeRef.current) observer.observe(marqueeRef.current);
    if (marqueeGroupRef.current) observer.observe(marqueeGroupRef.current);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem(BLOG_DEBUG_STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as {
        debuggerOffset?: { x: number; y: number };
        debugTarget?: DebugTarget;
        marqueeDebug?: TransformDebug;
        marqueeWidth?: number;
        marqueeHeight?: number;
        emblemCardDebug?: TransformDebug;
        emblemDebug?: TransformDebug;
        titleCircleDebug?: TransformDebug;
        titleCircle2Debug?: TransformDebug;
        titleCircle3Debug?: TransformDebug;
        titleCircle4Debug?: TransformDebug;
        titleBarDebug?: Partial<TitleBarDebug>;
        titleBar2Debug?: Partial<TitleBarDebug>;
        titleDebug?: TransformDebug;
        pageTitleDebug?: TransformDebug;
        footerSpacing?: number;
        footerLogoDebug?: TransformDebug;
        opacities?: Partial<Record<DebugTarget, number>>;
      };
      if (parsed.debuggerOffset) setDebuggerOffset(parsed.debuggerOffset);
      if (parsed.debugTarget) setDebugTarget(parsed.debugTarget);
      if (parsed.marqueeDebug) setMarqueeDebug({ ...defaultTransforms.marquee, ...parsed.marqueeDebug });
      if (typeof parsed.marqueeWidth === "number") setMarqueeWidth(parsed.marqueeWidth);
      if (typeof parsed.marqueeHeight === "number") setMarqueeHeight(parsed.marqueeHeight);
      if (parsed.emblemCardDebug) setEmblemCardDebug({ ...defaultTransforms.emblemCard, ...parsed.emblemCardDebug });
      if (parsed.emblemDebug) setEmblemDebug({ ...defaultTransforms.emblem, ...parsed.emblemDebug });
      if (parsed.titleCircleDebug) setTitleCircleDebug({ ...defaultTransforms.titleCircle, ...parsed.titleCircleDebug });
      if (parsed.titleCircle2Debug) setTitleCircle2Debug({ ...defaultTransforms.titleCircle2, ...parsed.titleCircle2Debug });
      if (parsed.titleCircle3Debug) setTitleCircle3Debug({ ...defaultTransforms.titleCircle3, ...parsed.titleCircle3Debug });
      if (parsed.titleCircle4Debug) setTitleCircle4Debug({ ...defaultTransforms.titleCircle4, ...parsed.titleCircle4Debug });
      if (parsed.titleBarDebug) setTitleBarDebug({ ...defaultTransforms.titleBar, ...parsed.titleBarDebug });
      if (parsed.titleBar2Debug) setTitleBar2Debug({ ...defaultTransforms.titleBar2, ...parsed.titleBar2Debug });
      if (parsed.titleDebug) setTitleDebug({ ...defaultTransforms.title, ...parsed.titleDebug });
      if (parsed.pageTitleDebug) setPageTitleDebug({ ...defaultTransforms.pageTitle, ...parsed.pageTitleDebug });
      if (typeof parsed.footerSpacing === "number") setFooterSpacing(parsed.footerSpacing);
      if (parsed.footerLogoDebug) setFooterLogoDebug({ ...defaultTransforms.footerLogo, ...parsed.footerLogoDebug });
      if (parsed.opacities) setOpacities({ ...defaultOpacities, ...parsed.opacities });
    } catch {
      window.localStorage.removeItem(BLOG_DEBUG_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      BLOG_DEBUG_STORAGE_KEY,
      JSON.stringify({
        debuggerOffset,
        debugTarget,
        marqueeDebug,
        marqueeWidth,
        marqueeHeight,
        emblemCardDebug,
        emblemDebug,
        titleCircleDebug,
        titleCircle2Debug,
        titleCircle3Debug,
        titleCircle4Debug,
        titleBarDebug,
        titleBar2Debug,
        titleDebug,
        pageTitleDebug,
        footerSpacing,
        footerLogoDebug,
        opacities,
      }),
    );
  }, [
    debugTarget,
    debuggerOffset,
    emblemCardDebug,
    emblemDebug,
    marqueeDebug,
    marqueeHeight,
    marqueeWidth,
    opacities,
    titleBar2Debug,
    titleBarDebug,
    titleCircle2Debug,
    titleCircle3Debug,
    titleCircle4Debug,
    titleCircleDebug,
    titleDebug,
    pageTitleDebug,
    footerSpacing,
    footerLogoDebug,
  ]);

  useEffect(() => {
    if (!dragging) return;

    const onMove = (event: MouseEvent) => {
      if (!dragging.initialTransform) return;
      const dx = event.clientX - dragging.startX;
      const dy = event.clientY - dragging.startY;
      const next = {
        ...dragging.initialTransform,
        x: dragging.initialTransform.x + dx,
        y: dragging.initialTransform.y + dy,
      };

      if (dragging.target === "marquee") setMarqueeDebug(next);
      else if (dragging.target === "emblemCard") setEmblemCardDebug(next);
      else if (dragging.target === "emblem") setEmblemDebug(next);
      else if (dragging.target === "titleCircle") setTitleCircleDebug(next);
      else if (dragging.target === "titleCircle2") setTitleCircle2Debug(next);
      else if (dragging.target === "titleCircle3") setTitleCircle3Debug(next);
      else if (dragging.target === "titleCircle4") setTitleCircle4Debug(next);
      else if (dragging.target === "titleBar") setTitleBarDebug((current) => ({ ...current, x: next.x, y: next.y, scale: next.scale }));
      else if (dragging.target === "titleBar2") setTitleBar2Debug((current) => ({ ...current, x: next.x, y: next.y, scale: next.scale }));
      else if (dragging.target === "pageTitle") setPageTitleDebug(next);
      else setTitleDebug(next);
    };

    const onUp = () => setDragging(null);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging]);

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
    const onKeyDown = (event: KeyboardEvent) => {
      if (!debuggerVisible) return;
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      if (["input", "textarea", "select"].includes(activeTag)) return;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const step = event.shiftKey ? 10 : 2;

      if (debugTarget === "marquee") {
        setMarqueeDebug((current) => ({
          ...current,
          x: event.key === "ArrowLeft" ? current.x - step : event.key === "ArrowRight" ? current.x + step : current.x,
          y: event.key === "ArrowUp" ? current.y - step : event.key === "ArrowDown" ? current.y + step : current.y,
        }));
        return;
      }

      const updater = (current: TransformDebug) => ({
        ...current,
        x: event.key === "ArrowLeft" ? current.x - step : event.key === "ArrowRight" ? current.x + step : current.x,
        y: event.key === "ArrowUp" ? current.y - step : event.key === "ArrowDown" ? current.y + step : current.y,
      });

      if (debugTarget === "emblemCard") setEmblemCardDebug(updater);
      else if (debugTarget === "emblem") setEmblemDebug(updater);
      else if (debugTarget === "titleCircle") setTitleCircleDebug(updater);
      else if (debugTarget === "titleCircle2") setTitleCircle2Debug(updater);
      else if (debugTarget === "titleCircle3") setTitleCircle3Debug(updater);
      else if (debugTarget === "titleCircle4") setTitleCircle4Debug(updater);
      else if (debugTarget === "titleBar") setTitleBarDebug((current) => ({ ...current, x: updater(current).x, y: updater(current).y }));
      else if (debugTarget === "titleBar2") setTitleBar2Debug((current) => ({ ...current, x: updater(current).x, y: updater(current).y }));
      else if (debugTarget === "pageTitle") setPageTitleDebug(updater);
      else if (debugTarget === "footerLogo") setFooterLogoDebug(updater);
      else if (debugTarget === "footer") setFooterSpacing((current) => (event.key === "ArrowUp" ? Math.max(24, current - step * 4) : event.key === "ArrowDown" ? current + step * 4 : current));
      else setTitleDebug(updater);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [debugTarget, debuggerVisible]);

  const startDragTransform = (target: DebugTarget, current: TransformDebug | TitleBarDebug) => (event: React.MouseEvent) => {
    if (!debuggerVisible) return;
    event.preventDefault();
    event.stopPropagation();
    setDebugTarget(target);
    setDragging({
      target,
      startX: event.clientX,
      startY: event.clientY,
      initialTransform: current,
    });
  };

  const activeTransform = useMemo(() => {
    if (debugTarget === "marquee") return marqueeDebug;
    if (debugTarget === "emblemCard") return emblemCardDebug;
    if (debugTarget === "emblem") return emblemDebug;
    if (debugTarget === "titleCircle") return titleCircleDebug;
    if (debugTarget === "titleCircle2") return titleCircle2Debug;
    if (debugTarget === "titleCircle3") return titleCircle3Debug;
    if (debugTarget === "titleCircle4") return titleCircle4Debug;
    if (debugTarget === "titleBar") return titleBarDebug;
    if (debugTarget === "titleBar2") return titleBar2Debug;
    if (debugTarget === "pageTitle") return pageTitleDebug;
    if (debugTarget === "footerLogo") return footerLogoDebug;
    return titleDebug;
  }, [
    debugTarget,
    emblemCardDebug,
    emblemDebug,
    marqueeDebug,
    titleBar2Debug,
    titleBarDebug,
    titleCircle2Debug,
    titleCircle3Debug,
    titleCircle4Debug,
    titleCircleDebug,
    titleDebug,
    pageTitleDebug,
    footerLogoDebug,
  ]);

  const nudgeTransform = (axis: "x" | "y", amount: number) => {
    if (debugTarget === "footer") {
      if (axis === "y") {
        setFooterSpacing((current) => Math.max(24, current + amount * 5));
      }
      return;
    }
    const update = (current: TransformDebug) => ({ ...current, [axis]: current[axis] + amount });
    if (debugTarget === "marquee") setMarqueeDebug(update);
    else if (debugTarget === "emblemCard") setEmblemCardDebug(update);
    else if (debugTarget === "emblem") setEmblemDebug(update);
    else if (debugTarget === "titleCircle") setTitleCircleDebug(update);
    else if (debugTarget === "titleCircle2") setTitleCircle2Debug(update);
    else if (debugTarget === "titleCircle3") setTitleCircle3Debug(update);
    else if (debugTarget === "titleCircle4") setTitleCircle4Debug(update);
    else if (debugTarget === "titleBar") setTitleBarDebug((current) => ({ ...current, [axis]: current[axis] + amount }));
    else if (debugTarget === "titleBar2") setTitleBar2Debug((current) => ({ ...current, [axis]: current[axis] + amount }));
    else if (debugTarget === "pageTitle") setPageTitleDebug(update);
    else if (debugTarget === "footerLogo") setFooterLogoDebug(update);
    else setTitleDebug(update);
  };

  const resizeTransform = (delta: number) => {
    const update = (current: TransformDebug) => ({
      ...current,
      scale: Number(Math.max(0.2, Math.min(6, current.scale + delta)).toFixed(2)),
    });
    if (debugTarget === "marquee") setMarqueeDebug(update);
    else if (debugTarget === "emblemCard") setEmblemCardDebug(update);
    else if (debugTarget === "emblem") setEmblemDebug(update);
    else if (debugTarget === "titleCircle") setTitleCircleDebug(update);
    else if (debugTarget === "titleCircle2") setTitleCircle2Debug(update);
    else if (debugTarget === "titleCircle3") setTitleCircle3Debug(update);
    else if (debugTarget === "titleCircle4") setTitleCircle4Debug(update);
    else if (debugTarget === "titleBar") setTitleBarDebug((current) => ({ ...current, scale: Number(Math.max(0.2, Math.min(6, current.scale + delta)).toFixed(2)) }));
    else if (debugTarget === "titleBar2") setTitleBar2Debug((current) => ({ ...current, scale: Number(Math.max(0.2, Math.min(6, current.scale + delta)).toFixed(2)) }));
    else if (debugTarget === "pageTitle") setPageTitleDebug(update);
    else if (debugTarget === "footerLogo") setFooterLogoDebug(update);
    else setTitleDebug(update);
  };

  const adjustOpacity = (delta: number) => {
    setOpacities((current) => ({
      ...current,
      [debugTarget]: Number(Math.max(0.02, Math.min(1, current[debugTarget] + delta)).toFixed(2)),
    }));
  };

  const resetActive = () => {
    if (debugTarget === "marquee") {
      setMarqueeDebug(defaultTransforms.marquee);
      setMarqueeWidth(BLOG_MARQUEE_BASE_WIDTH);
      setMarqueeHeight(BLOG_MARQUEE_BASE_HEIGHT);
    } else if (debugTarget === "emblemCard") setEmblemCardDebug(defaultTransforms.emblemCard);
    else if (debugTarget === "emblem") setEmblemDebug(defaultTransforms.emblem);
    else if (debugTarget === "titleCircle") setTitleCircleDebug(defaultTransforms.titleCircle);
    else if (debugTarget === "titleCircle2") setTitleCircle2Debug(defaultTransforms.titleCircle2);
    else if (debugTarget === "titleCircle3") setTitleCircle3Debug(defaultTransforms.titleCircle3);
    else if (debugTarget === "titleCircle4") setTitleCircle4Debug(defaultTransforms.titleCircle4);
    else if (debugTarget === "titleBar") setTitleBarDebug(defaultTransforms.titleBar);
    else if (debugTarget === "titleBar2") setTitleBar2Debug(defaultTransforms.titleBar2);
    else if (debugTarget === "pageTitle") setPageTitleDebug(defaultTransforms.pageTitle);
    else if (debugTarget === "footerLogo") setFooterLogoDebug(defaultTransforms.footerLogo);
    else if (debugTarget === "footer") setFooterSpacing(120);
    else setTitleDebug(defaultTransforms.title);

    setOpacities((current) => ({
      ...current,
      [debugTarget]: defaultOpacities[debugTarget],
    }));
  };

  const marqueeStyle = {
    transform: `translate(${marqueeDebug.x}px, ${marqueeDebug.y}px) scale(${marqueeDebug.scale})`,
    transformOrigin: "top center",
    ["--marquee-width" as string]: `${marqueeWidth}px`,
    ["--marquee-height" as string]: `${marqueeHeight}px`,
    opacity: opacities.marquee,
  };

  const getTransformStyle = (
    base: { x: number; y: number; scale: number },
    debug: TransformDebug,
    opacity: number,
  ) => ({
    transform: `translate(${base.x + debug.x}px, ${base.y + debug.y}px) scale(${Number((base.scale * debug.scale).toFixed(2))})`,
    transformOrigin: "top left" as const,
    opacity,
  });

  const debuggerReadout =
    debugTarget === "marquee"
      ? `X ${marqueeDebug.x} Y ${marqueeDebug.y} W ${marqueeWidth} H ${marqueeHeight} S ${marqueeDebug.scale.toFixed(2)}`
      : debugTarget === "footer"
      ? `Footer spacing ${footerSpacing}`
      : debugTarget === "titleBar"
      ? `X ${titleBarDebug.x} Y ${titleBarDebug.y} W ${titleBarDebug.width} H ${titleBarDebug.height} S ${titleBarDebug.scale.toFixed(2)} O ${opacities.titleBar.toFixed(2)}`
      : debugTarget === "titleBar2"
      ? `X ${titleBar2Debug.x} Y ${titleBar2Debug.y} W ${titleBar2Debug.width} H ${titleBar2Debug.height} S ${titleBar2Debug.scale.toFixed(2)} O ${opacities.titleBar2.toFixed(2)}`
      : `X ${activeTransform.x} Y ${activeTransform.y} S ${activeTransform.scale.toFixed(2)} O ${opacities[debugTarget].toFixed(2)}`;

  const marqueeIntroDelaySeconds = 1.25;
  const marqueeIntroDurationSeconds =
    marqueeViewportWidth > 0 && marqueeCycleWidth > 0
      ? (44 * marqueeViewportWidth) / marqueeCycleWidth
      : 22;
  const marqueeLoopDelaySeconds = marqueeIntroDelaySeconds + marqueeIntroDurationSeconds;

  const copyValues = async () => {
    const payload = [
      "Blog debugger values",
      `marquee X ${marqueeDebug.x} Y ${marqueeDebug.y} W ${marqueeWidth} H ${marqueeHeight} S ${marqueeDebug.scale.toFixed(2)}`,
      `emblemCard X ${emblemCardDebug.x} Y ${emblemCardDebug.y} S ${emblemCardDebug.scale.toFixed(2)} O ${opacities.emblemCard.toFixed(2)}`,
      `emblem X ${emblemDebug.x} Y ${emblemDebug.y} S ${emblemDebug.scale.toFixed(2)} O ${opacities.emblem.toFixed(2)}`,
      `titleCircle X ${titleCircleDebug.x} Y ${titleCircleDebug.y} S ${titleCircleDebug.scale.toFixed(2)} O ${opacities.titleCircle.toFixed(2)}`,
      `titleCircle2 X ${titleCircle2Debug.x} Y ${titleCircle2Debug.y} S ${titleCircle2Debug.scale.toFixed(2)} O ${opacities.titleCircle2.toFixed(2)}`,
      `titleCircle3 X ${titleCircle3Debug.x} Y ${titleCircle3Debug.y} S ${titleCircle3Debug.scale.toFixed(2)} O ${opacities.titleCircle3.toFixed(2)}`,
      `titleCircle4 X ${titleCircle4Debug.x} Y ${titleCircle4Debug.y} S ${titleCircle4Debug.scale.toFixed(2)} O ${opacities.titleCircle4.toFixed(2)}`,
      `titleBar X ${titleBarDebug.x} Y ${titleBarDebug.y} W ${titleBarDebug.width} H ${titleBarDebug.height} S ${titleBarDebug.scale.toFixed(2)} O ${opacities.titleBar.toFixed(2)}`,
      `titleBar2 X ${titleBar2Debug.x} Y ${titleBar2Debug.y} W ${titleBar2Debug.width} H ${titleBar2Debug.height} S ${titleBar2Debug.scale.toFixed(2)} O ${opacities.titleBar2.toFixed(2)}`,
      `title X ${titleDebug.x} Y ${titleDebug.y} S ${titleDebug.scale.toFixed(2)} O ${opacities.title.toFixed(2)}`,
      `pageTitle X ${pageTitleDebug.x} Y ${pageTitleDebug.y} S ${pageTitleDebug.scale.toFixed(2)} O ${opacities.pageTitle.toFixed(2)}`,
      `footer spacing ${footerSpacing}`,
      `footerLogo X ${footerLogoDebug.x} Y ${footerLogoDebug.y} S ${footerLogoDebug.scale.toFixed(2)}`,
      `debugger panel X ${debuggerOffset.x} Y ${debuggerOffset.y}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(payload);
      setCopyStatus("Values copied.");
      window.setTimeout(() => setCopyStatus(""), 1800);
    } catch {
      setCopyStatus("Copy failed.");
      window.setTimeout(() => setCopyStatus(""), 1800);
    }
  };

  return (
    <main className="blog-page blog-gallery-page">
      <div
        ref={marqueeRef}
        className="home-marquee home-marquee-animated blog-page-marquee"
        aria-label="Astrology Today marquee"
        style={{
          ...marqueeStyle,
          ["--marquee-intro-delay" as string]: `${marqueeIntroDelaySeconds}s`,
          ["--marquee-intro-duration" as string]: `${marqueeIntroDurationSeconds}s`,
          ["--marquee-loop-delay" as string]: `${marqueeLoopDelaySeconds}s`,
        }}
        onMouseDown={startDragTransform("marquee", marqueeDebug)}
      >
        <div className="home-marquee-intro-track">
          <div className="home-marquee-track">
            <div ref={marqueeGroupRef} className="home-marquee-group">
              {marqueeItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="home-marquee-group" aria-hidden="true">
              {marqueeItems.map((item) => (
                <span key={`duplicate-${item}`}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScaledPageCanvas
        bleedLeft={BLOG_CANVAS_BLEED_LEFT}
        bleedRight={BLOG_CANVAS_BLEED_RIGHT}
        className="blog-page-canvas"
        designWidth={BLOG_CANVAS_WIDTH}
        offsetX={BLOG_CANVAS_OFFSET_X}
        offsetY={BLOG_CANVAS_OFFSET_Y}
        scale={BLOG_CANVAS_SCALE}
        viewportClassName="blog-page-canvas-viewport"
      >
        <section className="home-top-shell home-top-shell-mock blog-gallery-shell">
          <aside className="home-side-column">
            <div className="home-social-rail home-social-rail-mock blog-gallery-rail">
              <div
                className="blog-gallery-emblem-card"
                aria-hidden="true"
                style={{
                  transform: `translate(${emblemCardDebug.x}px, ${emblemCardDebug.y}px) scale(${emblemCardDebug.scale})`,
                  opacity: opacities.emblemCard,
                }}
                onMouseDown={startDragTransform("emblemCard", emblemCardDebug)}
              />

              <div
                className="home-brand-emblem-wrap"
                style={getTransformStyle(brandTransforms.emblem, emblemDebug, opacities.emblem)}
                onMouseDown={startDragTransform("emblem", emblemDebug)}
              >
                <img
                  src="/astrologytoday-emblem.png"
                  alt="AstrologyToday emblem"
                  className="home-brand-emblem-image"
                />
              </div>

              <div
                className="home-brand-title-bg-wrap home-brand-title-circle-wrap"
                style={getTransformStyle(brandTransforms.titleCircle, titleCircleDebug, 1)}
                onMouseDown={startDragTransform("titleCircle", titleCircleDebug)}
              >
                <div
                  className="home-brand-title-circle"
                  style={{
                    backgroundColor: "#a6c8cf",
                    backgroundImage: "url('/title-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: opacities.titleCircle,
                  }}
                />
              </div>

              <div
                className="home-brand-title-bg-wrap home-brand-title-circle-wrap"
                style={getTransformStyle(brandTransforms.titleCircle2, titleCircle2Debug, 1)}
                onMouseDown={startDragTransform("titleCircle2", titleCircle2Debug)}
              >
                <div
                  className="home-brand-title-circle"
                  style={{
                    backgroundColor: "#a6c8cf",
                    backgroundImage: "url('/title-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: opacities.titleCircle2,
                  }}
                />
              </div>

              <div
                className="home-brand-title-bg-wrap home-brand-title-circle-wrap"
                style={getTransformStyle(brandTransforms.titleCircle3, titleCircle3Debug, 1)}
                onMouseDown={startDragTransform("titleCircle3", titleCircle3Debug)}
              >
                <div
                  className="home-brand-title-circle"
                  style={{
                    backgroundColor: "#a6c8cf",
                    backgroundImage: "url('/title-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: opacities.titleCircle3,
                  }}
                />
              </div>

              <div
                className="home-brand-title-bg-wrap home-brand-title-circle-wrap"
                style={getTransformStyle(brandTransforms.titleCircle4, titleCircle4Debug, 1)}
                onMouseDown={startDragTransform("titleCircle4", titleCircle4Debug)}
              >
                <div
                  className="home-brand-title-circle"
                  style={{
                    backgroundColor: "#a6c8cf",
                    backgroundImage: "url('/title-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: opacities.titleCircle4,
                  }}
                />
              </div>

              <div
                className="home-brand-title-bg-wrap home-brand-title-bar-wrap"
                style={getTransformStyle(brandTransforms.titleBar, titleBarDebug, 1)}
                onMouseDown={startDragTransform("titleBar", titleBarDebug)}
              >
                <div
                  className="home-brand-title-bar"
                  style={{
                    width: `${titleBarDebug.width}px`,
                    height: `${titleBarDebug.height}px`,
                    backgroundColor: "#a9cbd1",
                    backgroundImage: "url('/title-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: opacities.titleBar,
                  }}
                />
              </div>

              <div
                className="home-brand-title-bg-wrap home-brand-title-bar-wrap"
                style={getTransformStyle(brandTransforms.titleBar2, titleBar2Debug, 1)}
                onMouseDown={startDragTransform("titleBar2", titleBar2Debug)}
              >
                <div
                  className="home-brand-title-bar"
                  style={{
                    width: `${titleBar2Debug.width}px`,
                    height: `${titleBar2Debug.height}px`,
                    backgroundColor: "#a9cbd1",
                    backgroundImage: "url('/title-background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: opacities.titleBar2,
                  }}
                />
              </div>

              <div
                className="home-brand-title-wrap"
                style={getTransformStyle(brandTransforms.title, titleDebug, opacities.title)}
                onMouseDown={startDragTransform("title", titleDebug)}
              >
                <img
                  src="/astrologytoday-title.png"
                  alt="AstrologyToday title"
                  className="home-brand-title-image"
                  style={{
                    filter:
                      "brightness(2) drop-shadow(0 0 16px rgba(255, 255, 255, 0.64)) drop-shadow(0 0 34px rgba(240, 251, 255, 0.46))",
                  }}
                />
              </div>

              <nav className="home-sidebar-nav blog-gallery-nav" aria-label="Site sections">
                {navLinks.map((item) => (
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

          <section className="home-dashboard home-dashboard-mock blog-gallery-dashboard">
            <div className="blog-gallery-content">
              <section className="blog-gallery-hero">
                <div className="blog-gallery-title-block">
                  <div
                    style={{
                      transform: `translate(${pageTitleDebug.x}px, ${pageTitleDebug.y}px) scale(${pageTitleDebug.scale})`,
                      transformOrigin: "top left",
                      opacity: opacities.pageTitle,
                      display: "inline-block",
                    }}
                    onMouseDown={startDragTransform("pageTitle", pageTitleDebug)}
                  >
                    <h1>{blogCopy.pageTitle}</h1>
                  </div>
                  <p className="blog-gallery-intro">
                    {blogCopy.intro}
                  </p>
                </div>

                {featuredPost ? (
                  <Link
                    href={withLocale(locale, `/blog/${featuredPost.slug}`)}
                    className="blog-gallery-featured-card"
                  >
                    <div className="blog-gallery-featured-copy">
                      <p className="blog-gallery-featured-label">{blogCopy.featuredLabel}</p>
                      <h2>{featuredPost.title}</h2>
                      <p>{featuredPost.excerpt}</p>
                      <span>{featuredPost.publishedLabel} · {featuredPost.readTime}</span>
                    </div>
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.coverImageAlt}
                      className="blog-gallery-featured-image"
                    />
                  </Link>
                ) : null}
              </section>

              <section className="blog-gallery-grid-section" aria-labelledby="blog-gallery-list">
                <div className="blog-gallery-grid-header">
                  <h2 id="blog-gallery-list">{blogCopy.morePosts}</h2>
                </div>

                <div className="blog-gallery-grid">
                  {galleryCards.map((card) => (
                    <Link key={card.slug} href={card.href!} className="blog-gallery-card">
                      <div className="blog-gallery-card-copy">
                        <p className="blog-gallery-card-meta">{card.meta}</p>
                        <h3>{card.title}</h3>
                        <p>{card.excerpt}</p>
                      </div>
                      <div className="blog-gallery-card-footer">
                        <span>{card.badge}</span>
                        {card.image ? (
                          <img
                            src={card.image}
                            alt={card.imageAlt}
                            className="blog-gallery-card-thumb"
                          />
                        ) : null}
                      </div>
                    </Link>
                  ))}
                </div>

                <nav className="blog-gallery-pagination" aria-label={blogCopy.paginationAriaLabel}>
                  <a href="#" className="is-active" aria-current="page">
                    1
                  </a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                </nav>
              </section>
            </div>

            <SiteFooter
              locale={locale}
              currentPath="/blog"
              className="blog-gallery-footer"
              footerSpacing={footerSpacing}
              logoTransform={footerLogoDebug}
            />
          </section>
        </section>
      </ScaledPageCanvas>

      {SHOW_DEBUGGERS ? (debuggerVisible ? (
        <aside
          className="home-logo-debugger"
          style={{ transform: `translate(${debuggerOffset.x}px, ${debuggerOffset.y}px)` }}
        >
          <div
            className="home-logo-debugger-header"
            onMouseDown={(event) =>
              setDebuggerDragging({
                startX: event.clientX,
                startY: event.clientY,
                initialX: debuggerOffset.x,
                initialY: debuggerOffset.y,
              })
            }
          >
            <p>Layout Debugger</p>
            <button
              type="button"
              className="home-logo-debugger-toggle-button home-logo-debugger-toggle-button-inline"
              onClick={() => {
                setDragging(null);
                setDebuggerDragging(null);
                setDebuggerVisible(false);
              }}
            >
              Hide
            </button>
          </div>

          <label className="home-logo-debugger-select-wrap">
            <span>Element</span>
            <select
              className="home-logo-debugger-select"
              value={debugTarget}
              onChange={(event) => setDebugTarget(event.target.value as DebugTarget)}
            >
              {[
                "marquee",
                "emblemCard",
                "emblem",
                "titleCircle",
                "titleCircle2",
                "titleCircle3",
                "titleCircle4",
                "titleBar",
                "titleBar2",
                "title",
                "pageTitle",
                "footer",
                "footerLogo",
              ].map((target) => (
                <option key={target} value={target}>
                  {target}
                </option>
              ))}
            </select>
          </label>

          <div className="home-logo-debugger-readout">{debuggerReadout}</div>
          <div className="home-logo-debugger-hint">Arrow keys nudge. Hold Shift for bigger steps. Drag elements directly.</div>

          <div className="home-logo-debugger-grid">
            <button type="button" onClick={() => nudgeTransform("y", -4)}>
              Up
            </button>
            <button type="button" onClick={() => nudgeTransform("x", -4)}>
              Left
            </button>
            <button type="button" onClick={() => nudgeTransform("x", 4)}>
              Right
            </button>
            <button type="button" onClick={() => nudgeTransform("y", 4)}>
              Down
            </button>
            <button
              type="button"
              onClick={() =>
                debugTarget === "footer"
                  ? setFooterSpacing((current) => current + 20)
                  : debugTarget === "marquee"
                  ? setMarqueeWidth((current) => current + 40)
                  : debugTarget === "titleBar"
                  ? setTitleBarDebug((current) => ({ ...current, width: current.width + 24 }))
                  : debugTarget === "titleBar2"
                  ? setTitleBar2Debug((current) => ({ ...current, width: current.width + 24 }))
                  : resizeTransform(0.08)
              }
            >
              {debugTarget === "footer" ? "More Space" : debugTarget === "marquee" ? "Wider" : debugTarget === "titleBar" || debugTarget === "titleBar2" ? "Longer" : "Bigger"}
            </button>
            <button
              type="button"
              onClick={() =>
                debugTarget === "footer"
                  ? setFooterSpacing((current) => Math.max(24, current - 20))
                  : debugTarget === "marquee"
                  ? setMarqueeWidth((current) => Math.max(600, current - 40))
                  : debugTarget === "titleBar"
                  ? setTitleBarDebug((current) => ({ ...current, width: Math.max(160, current.width - 24) }))
                  : debugTarget === "titleBar2"
                  ? setTitleBar2Debug((current) => ({ ...current, width: Math.max(160, current.width - 24) }))
                  : resizeTransform(-0.08)
              }
            >
              {debugTarget === "footer" ? "Less Space" : debugTarget === "marquee" ? "Skinnier" : debugTarget === "titleBar" || debugTarget === "titleBar2" ? "Shorter" : "Smaller"}
            </button>
            <button type="button" onClick={resetActive}>
              Reset
            </button>
          </div>

          {debugTarget === "titleBar" || debugTarget === "titleBar2" || debugTarget === "marquee" ? (
            <div className="home-logo-debugger-grid home-logo-debugger-grid-secondary">
              <button
                type="button"
                onClick={() =>
                  debugTarget === "marquee"
                    ? setMarqueeHeight((current) => current + 8)
                    : debugTarget === "titleBar"
                    ? setTitleBarDebug((current) => ({ ...current, height: current.height + 8 }))
                    : setTitleBar2Debug((current) => ({ ...current, height: current.height + 8 }))
                }
              >
                Taller
              </button>
              <button
                type="button"
                onClick={() =>
                  debugTarget === "marquee"
                    ? setMarqueeHeight((current) => Math.max(20, current - 8))
                    : debugTarget === "titleBar"
                    ? setTitleBarDebug((current) => ({ ...current, height: Math.max(40, current.height - 8) }))
                    : setTitleBar2Debug((current) => ({ ...current, height: Math.max(40, current.height - 8) }))
                }
              >
                Flatter
              </button>
            </div>
          ) : null}

          <div className="home-logo-debugger-readout">Opacity {opacities[debugTarget].toFixed(2)}</div>
          <div className="home-logo-debugger-grid home-logo-debugger-grid-secondary">
            <button type="button" onClick={() => adjustOpacity(0.05)}>
              More Opaque
            </button>
            <button type="button" onClick={() => adjustOpacity(-0.05)}>
              Less Opaque
            </button>
          </div>
          <div className="home-logo-debugger-grid home-logo-debugger-grid-secondary">
            <button type="button" onClick={copyValues}>
              Copy Values
            </button>
          </div>
          {copyStatus ? <div className="home-logo-debugger-readout">{copyStatus}</div> : null}
        </aside>
      ) : (
        <button
          type="button"
          className="home-logo-debugger-toggle-button"
          onClick={() => setDebuggerVisible(true)}
        >
          +
        </button>
      )) : null}
    </main>
  );
}
