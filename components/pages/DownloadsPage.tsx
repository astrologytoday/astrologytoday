"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import SiteFooter from "../shared/SiteFooter";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { getHomeCopy } from "../../lib/copy";
import { getDownloadsCopy } from "../../lib/downloadsCopy";
import { SHOW_DEBUGGERS } from "../../lib/debug";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";

type DownloadsDebugTarget =
  | "title"
  | "card"
  | "lifespace"
  | "footer"
  | "footerLogo"
  | "pageLogo"
  | "lockHeader"
  | "lockCopy"
  | "lockFor"
  | "lockSubscribers"
  | "lockOnly"
  | "lockTopEdge"
  | "lockBottomEdge";

type LockLineDebug = {
  x: number;
  y: number;
  scale: number;
};

type DownloadsDebugState = {
  title: {
    x: number;
    y: number;
    scale: number;
  };
  card: {
    x: number;
    y: number;
    width: number;
    height: number;
    gap: number;
    opacity: number;
  };
  lifespace: {
    x: number;
    y: number;
    width: number;
    height: number;
    scale: number;
  };
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
  lockHeader: LockLineDebug;
  lockCopy: LockLineDebug;
  lockFor: LockLineDebug;
  lockSubscribers: LockLineDebug;
  lockOnly: LockLineDebug;
  lockBoxEdges: {
    top: number;
    bottom: number;
  };
};

const DOWNLOADS_DEBUG_STORAGE_KEY = "downloads-debug-v9";
const DEFAULT_DEBUGGER_OFFSET = { x: 0, y: 0 };
const DOWNLOADS_CANVAS_SCALE = 0.71;
const DOWNLOADS_CANVAS_WIDTH = 1760;
const DOWNLOADS_CANVAS_OFFSET_X = 0;
const DOWNLOADS_CANVAS_OFFSET_Y = 16;

const DEFAULT_DEBUG: DownloadsDebugState = {
  title: {
    x: -440,
    y: 40,
    scale: 1.68,
  },
  card: {
    x: -28,
    y: 138,
    width: 548,
    height: 790,
    gap: 28,
    opacity: 0.22,
  },
  lifespace: {
    x: 0,
    y: 162,
    width: 388,
    height: 236,
    scale: 1.28,
  },
  footer: {
    spacing: 448,
  },
  footerLogo: {
    x: 8,
    y: 14,
    scale: 1.32,
  },
  pageLogo: {
    x: -257,
    y: 63,
    scale: 2.22,
    visible: false,
  },
  lockHeader: {
    x: 0,
    y: 40,
    scale: 1,
  },
  lockCopy: {
    x: 0,
    y: -34,
    scale: 1,
  },
  lockFor: {
    x: -124,
    y: 56,
    scale: 0.5,
  },
  lockSubscribers: {
    x: -60,
    y: -8,
    scale: 0.5,
  },
  lockOnly: {
    x: -4,
    y: -38,
    scale: 0.5,
  },
  lockBoxEdges: {
    top: -8,
    bottom: -8,
  },
};

const downloadItems = [
  {
    title: "Sharnjit Couple Report",
    href: "/downloads-sharnjit-couple-report.pdf",
    date: "15/04/26",
  },
  {
    title: "Santino + Elsa",
    href: "/downloads-santino-and-elsa.pdf",
    date: "15/04/26",
  },
  {
    title: "Business Plan_Portfolio",
    href: "/downloads-business-plan-portfolio.pdf",
    date: "15/04/26",
  },
];

export default function DownloadsPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getHomeCopy(locale);
  const downloadsCopy = getDownloadsCopy(locale);
  const [debuggerVisible, setDebuggerVisible] = useState(false);
  const [debugTarget, setDebugTarget] = useState<DownloadsDebugTarget>("card");
  const [debugState, setDebugState] = useState<DownloadsDebugState>(DEFAULT_DEBUG);
  const [debuggerOffset, setDebuggerOffset] = useState(DEFAULT_DEBUGGER_OFFSET);
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
    const stored = window.localStorage.getItem(DOWNLOADS_DEBUG_STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as {
        debugState?: Partial<{
          title?: Partial<DownloadsDebugState["title"]>;
          card?: Partial<DownloadsDebugState["card"]>;
          lifespace?: Partial<DownloadsDebugState["lifespace"]>;
          footer?: Partial<DownloadsDebugState["footer"]>;
          footerLogo?: Partial<DownloadsDebugState["footerLogo"]>;
          pageLogo?: Partial<DownloadsDebugState["pageLogo"]>;
          lockHeader?: Partial<DownloadsDebugState["lockHeader"]>;
          lockCopy?: Partial<DownloadsDebugState["lockCopy"]>;
          lockFor?: Partial<DownloadsDebugState["lockFor"]>;
          lockSubscribers?: Partial<DownloadsDebugState["lockSubscribers"]>;
          lockOnly?: Partial<DownloadsDebugState["lockOnly"]>;
          lockBoxEdges?: Partial<DownloadsDebugState["lockBoxEdges"]>;
        }>;
        debuggerOffset?: { x?: number; y?: number };
        debugTarget?: DownloadsDebugTarget;
      };

      if (parsed.debugState) {
        setDebugState({
          title: { ...DEFAULT_DEBUG.title, ...parsed.debugState.title },
          card: { ...DEFAULT_DEBUG.card, ...parsed.debugState.card },
          lifespace: { ...DEFAULT_DEBUG.lifespace, ...parsed.debugState.lifespace },
          footer: { ...DEFAULT_DEBUG.footer, ...parsed.debugState.footer },
          footerLogo: { ...DEFAULT_DEBUG.footerLogo, ...parsed.debugState.footerLogo },
          pageLogo: { ...DEFAULT_DEBUG.pageLogo, ...parsed.debugState.pageLogo },
          lockHeader: { ...DEFAULT_DEBUG.lockHeader, ...parsed.debugState.lockHeader },
          lockCopy: { ...DEFAULT_DEBUG.lockCopy, ...parsed.debugState.lockCopy },
          lockFor: { ...DEFAULT_DEBUG.lockFor, ...parsed.debugState.lockFor },
          lockSubscribers: { ...DEFAULT_DEBUG.lockSubscribers, ...parsed.debugState.lockSubscribers },
          lockOnly: { ...DEFAULT_DEBUG.lockOnly, ...parsed.debugState.lockOnly },
          lockBoxEdges: { ...DEFAULT_DEBUG.lockBoxEdges, ...parsed.debugState.lockBoxEdges },
        });
      }

      if (parsed.debuggerOffset) {
        setDebuggerOffset({
          x: Number(parsed.debuggerOffset.x ?? 0),
          y: Number(parsed.debuggerOffset.y ?? 0),
        });
      }

      if (
        parsed.debugTarget === "title" ||
        parsed.debugTarget === "card" ||
        parsed.debugTarget === "lifespace" ||
        parsed.debugTarget === "footer" ||
        parsed.debugTarget === "footerLogo" ||
        parsed.debugTarget === "pageLogo" ||
        parsed.debugTarget === "lockHeader" ||
        parsed.debugTarget === "lockCopy" ||
        parsed.debugTarget === "lockFor" ||
        parsed.debugTarget === "lockSubscribers" ||
        parsed.debugTarget === "lockOnly" ||
        parsed.debugTarget === "lockTopEdge" ||
        parsed.debugTarget === "lockBottomEdge"
      ) {
        setDebugTarget(parsed.debugTarget);
      }
    } catch {
      window.localStorage.removeItem(DOWNLOADS_DEBUG_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      DOWNLOADS_DEBUG_STORAGE_KEY,
      JSON.stringify({ debugState, debugTarget, debuggerOffset }),
    );
  }, [debugState, debuggerOffset, debugTarget]);

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
    const onKeyDown = (event: KeyboardEvent) => {
      if (!debuggerVisible) return;
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      if (["input", "textarea", "select"].includes(activeTag)) return;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;

      event.preventDefault();
      const step = event.shiftKey ? 10 : 2;

      if (debugTarget === "title") {
        setDebugState((current) => ({
          ...current,
          title: {
            ...current.title,
            x:
              event.key === "ArrowLeft"
                ? current.title.x - step
                : event.key === "ArrowRight"
                  ? current.title.x + step
                  : current.title.x,
            y:
              event.key === "ArrowUp"
                ? current.title.y - step
                : event.key === "ArrowDown"
                  ? current.title.y + step
                  : current.title.y,
          },
        }));
        return;
      }

      if (debugTarget === "card") {
        setDebugState((current) => ({
          ...current,
          card: {
            ...current.card,
            x:
              event.key === "ArrowLeft"
                ? current.card.x - step
                : event.key === "ArrowRight"
                  ? current.card.x + step
                  : current.card.x,
            y:
              event.key === "ArrowUp"
                ? current.card.y - step
                : event.key === "ArrowDown"
                  ? current.card.y + step
                  : current.card.y,
          },
        }));
        return;
      }

      if (debugTarget === "lifespace") {
        setDebugState((current) => ({
          ...current,
          lifespace: {
            ...current.lifespace,
            x:
              event.key === "ArrowLeft"
                ? current.lifespace.x - step
                : event.key === "ArrowRight"
                  ? current.lifespace.x + step
                  : current.lifespace.x,
            y:
              event.key === "ArrowUp"
                ? current.lifespace.y - step
                : event.key === "ArrowDown"
                  ? current.lifespace.y + step
                  : current.lifespace.y,
          },
        }));
        return;
      }

      if (debugTarget === "footerLogo") {
        setDebugState((current) => ({
          ...current,
          footerLogo: {
            ...current.footerLogo,
            x:
              event.key === "ArrowLeft"
                ? current.footerLogo.x - step
                : event.key === "ArrowRight"
                  ? current.footerLogo.x + step
                  : current.footerLogo.x,
            y:
              event.key === "ArrowUp"
                ? current.footerLogo.y - step
                : event.key === "ArrowDown"
                  ? current.footerLogo.y + step
                  : current.footerLogo.y,
          },
        }));
        return;
      }

      if (debugTarget === "pageLogo") {
        setDebugState((current) => ({
          ...current,
          pageLogo: {
            ...current.pageLogo,
            x:
              event.key === "ArrowLeft"
                ? current.pageLogo.x - step
                : event.key === "ArrowRight"
                  ? current.pageLogo.x + step
                  : current.pageLogo.x,
            y:
              event.key === "ArrowUp"
                ? current.pageLogo.y - step
                : event.key === "ArrowDown"
                  ? current.pageLogo.y + step
                  : current.pageLogo.y,
          },
        }));
        return;
      }

      if (
        debugTarget === "lockHeader" ||
        debugTarget === "lockCopy" ||
        debugTarget === "lockFor" ||
        debugTarget === "lockSubscribers" ||
        debugTarget === "lockOnly"
      ) {
        setDebugState((current) => ({
          ...current,
          [debugTarget]: {
            ...current[debugTarget],
            x:
              event.key === "ArrowLeft"
                ? current[debugTarget].x - step
                : event.key === "ArrowRight"
                  ? current[debugTarget].x + step
                  : current[debugTarget].x,
            y:
              event.key === "ArrowUp"
                ? current[debugTarget].y - step
                : event.key === "ArrowDown"
                  ? current[debugTarget].y + step
                  : current[debugTarget].y,
          },
        }));
        return;
      }

      setDebugState((current) => ({
        ...current,
        footer: {
          spacing:
            event.key === "ArrowUp"
              ? Math.max(24, current.footer.spacing - step * 4)
              : event.key === "ArrowDown"
                ? current.footer.spacing + step * 4
                : current.footer.spacing,
        },
      }));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [debugTarget, debuggerVisible]);

  const sidebarLinks = [
    { label: copy.nav.home, href: withLocale(locale, "/") },
    { label: copy.nav.services, href: withLocale(locale, "/services") },
    { label: copy.nav.downloads, href: withLocale(locale, "/downloads"), active: true },
    { label: copy.nav.about, href: withLocale(locale, "/about") },
    { label: copy.nav.lifespace, href: "https://mylifespace.ca/portal" },
    { label: copy.nav.pricing, href: withLocale(locale, "/pricing") },
    { label: copy.nav.blog, href: withLocale(locale, "/blog") },
  ];

  const activeReadout =
    debugTarget === "title"
      ? `X ${Math.round(debugState.title.x)} Y ${Math.round(debugState.title.y)} S ${debugState.title.scale.toFixed(2)}`
      : debugTarget === "card"
        ? `X ${Math.round(debugState.card.x)} Y ${Math.round(debugState.card.y)} W ${debugState.card.width}px H ${debugState.card.height}px G ${debugState.card.gap}px`
          + ` O ${debugState.card.opacity.toFixed(2)}`
        : debugTarget === "lifespace"
          ? `X ${Math.round(debugState.lifespace.x)} Y ${Math.round(debugState.lifespace.y)} W ${debugState.lifespace.width}px H ${debugState.lifespace.height}px S ${debugState.lifespace.scale.toFixed(2)}`
          : debugTarget === "footer"
            ? `Footer space ${Math.round(debugState.footer.spacing)}px`
            : debugTarget === "footerLogo"
              ? `X ${Math.round(debugState.footerLogo.x)} Y ${Math.round(debugState.footerLogo.y)} S ${debugState.footerLogo.scale.toFixed(2)}`
              : debugTarget === "pageLogo"
                ? `X ${Math.round(debugState.pageLogo.x)} Y ${Math.round(debugState.pageLogo.y)} S ${debugState.pageLogo.scale.toFixed(2)} ${debugState.pageLogo.visible ? "shown" : "hidden"}`
                : debugTarget === "lockTopEdge"
                  ? `Lock top edge ${Math.round(debugState.lockBoxEdges.top)}px`
                  : debugTarget === "lockBottomEdge"
                    ? `Lock bottom edge ${Math.round(debugState.lockBoxEdges.bottom)}px`
                : `X ${Math.round(debugState[debugTarget].x)} Y ${Math.round(debugState[debugTarget].y)} S ${debugState[debugTarget].scale.toFixed(2)}`;

  const copyValues = async () => {
    const payload = [
      "Downloads debugger values",
      `title: x ${debugState.title.x}, y ${debugState.title.y}, scale ${debugState.title.scale.toFixed(2)}`,
      `card: x ${debugState.card.x}, y ${debugState.card.y}, width ${debugState.card.width}, height ${debugState.card.height}, gap ${debugState.card.gap}, overlay opacity ${debugState.card.opacity.toFixed(2)}`,
      `lifespace: x ${debugState.lifespace.x}, y ${debugState.lifespace.y}, width ${debugState.lifespace.width}, height ${debugState.lifespace.height}, scale ${debugState.lifespace.scale.toFixed(2)}`,
      `footer: spacing ${debugState.footer.spacing}`,
      `footer logo: x ${debugState.footerLogo.x}, y ${debugState.footerLogo.y}, scale ${debugState.footerLogo.scale.toFixed(2)}`,
      `page logo: x ${debugState.pageLogo.x}, y ${debugState.pageLogo.y}, scale ${debugState.pageLogo.scale.toFixed(2)}, visible ${debugState.pageLogo.visible}`,
      `lock header: x ${debugState.lockHeader.x}, y ${debugState.lockHeader.y}, scale ${debugState.lockHeader.scale.toFixed(2)}`,
      `lock copy: x ${debugState.lockCopy.x}, y ${debugState.lockCopy.y}, scale ${debugState.lockCopy.scale.toFixed(2)}`,
      `lock for: x ${debugState.lockFor.x}, y ${debugState.lockFor.y}, scale ${debugState.lockFor.scale.toFixed(2)}`,
      `lock subscribers: x ${debugState.lockSubscribers.x}, y ${debugState.lockSubscribers.y}, scale ${debugState.lockSubscribers.scale.toFixed(2)}`,
      `lock only: x ${debugState.lockOnly.x}, y ${debugState.lockOnly.y}, scale ${debugState.lockOnly.scale.toFixed(2)}`,
      `lock top edge: ${debugState.lockBoxEdges.top}px`,
      `lock bottom edge: ${debugState.lockBoxEdges.bottom}px`,
      `debugger panel: x ${debuggerOffset.x}, y ${debuggerOffset.y}`,
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
    <main className="downloads-page">
      <div className="downloads-orb downloads-orb-one" aria-hidden="true" />
      <div className="downloads-orb downloads-orb-two" aria-hidden="true" />

      <ScaledPageCanvas
        className="downloads-page-canvas"
        designWidth={DOWNLOADS_CANVAS_WIDTH}
        offsetX={DOWNLOADS_CANVAS_OFFSET_X}
        offsetY={DOWNLOADS_CANVAS_OFFSET_Y}
        scale={DOWNLOADS_CANVAS_SCALE}
        viewportClassName="downloads-page-canvas-viewport"
      >
        <section className="downloads-shell">
          <div className="downloads-layout">
            <aside className="downloads-sidebar">
              <nav
                className="home-sidebar-nav downloads-sidebar-nav"
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
            </aside>

            <div className="downloads-main">
              {debugState.pageLogo.visible ? (
                <img
                  src="/astrologytoday-emblem.png"
                  alt="Astrology Today emblem"
                  className="services-floating-logo"
                  draggable={false}
                  style={{
                    transform: `translate(${debugState.pageLogo.x}px, ${debugState.pageLogo.y}px) scale(${debugState.pageLogo.scale})`,
                    transformOrigin: "top left",
                  }}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    setDebugTarget("pageLogo");
                    setLogoDragging({
                      startX: event.clientX,
                      startY: event.clientY,
                      initialX: debugState.pageLogo.x,
                      initialY: debugState.pageLogo.y,
                    });
                  }}
                />
              ) : null}
              <div
                className="downloads-title-block"
                style={{
                  transform: `translate(${debugState.title.x}px, ${debugState.title.y}px) scale(${debugState.title.scale})`,
                  transformOrigin: "top left",
                }}
              >
                <h1>{downloadsCopy.title}</h1>
              </div>

              <div
                className="downloads-card"
                style={{
                  transform: `translate(${debugState.card.x}px, ${debugState.card.y}px)`,
                  width: `${debugState.card.width}px`,
                  height: `${debugState.card.height}px`,
                  ["--downloads-lock-opacity" as string]: `${debugState.card.opacity}`,
                  ["--downloads-list-opacity" as string]: `${Number((0.72 - debugState.card.opacity * 0.9).toFixed(2))}`,
                  ["--downloads-list-blur" as string]: `${Number((3 + debugState.card.opacity * 10).toFixed(2))}px`,
                }}
              >
                <div className="downloads-list">
                  {downloadItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      download
                      className="downloads-row"
                      style={{ columnGap: `${debugState.card.gap}px` }}
                    >
                      <span className="downloads-row-title">{item.title}</span>
                      <span className="downloads-row-date">{item.date}</span>
                    </a>
                  ))}
                </div>
                <div className="downloads-subscriber-overlay" aria-hidden="true">
                  <div className="downloads-subscriber-lockbox">
                    <div
                      className="downloads-subscriber-lockbox-inner"
                      style={{
                        marginTop: `${-debugState.lockBoxEdges.top}px`,
                        marginBottom: `${-debugState.lockBoxEdges.bottom}px`,
                        paddingTop: `${34 + debugState.lockBoxEdges.top}px`,
                        paddingBottom: `${32 + debugState.lockBoxEdges.bottom}px`,
                      }}
                    >
                      <div
                        className="downloads-subscriber-lock-header"
                        style={{
                          transform: `translate(${debugState.lockHeader.x}px, ${debugState.lockHeader.y}px) scale(${debugState.lockHeader.scale})`,
                          transformOrigin: "center top",
                        }}
                      >
                        <div className="downloads-subscriber-lock-icon">🔒</div>
                        <p className="downloads-subscriber-lock-kicker">{downloadsCopy.lockedLibrary}</p>
                      </div>
                      <h2>
                        <span
                          className="downloads-lock-line"
                          style={{
                            transform: `translate(${debugState.lockFor.x}px, ${debugState.lockFor.y}px) scale(${debugState.lockFor.scale})`,
                          }}
                        >
                          {downloadsCopy.subscribersOnly[0]}
                        </span>
                        <span
                          className="downloads-lock-line"
                          style={{
                            transform: `translate(${debugState.lockSubscribers.x}px, ${debugState.lockSubscribers.y}px) scale(${debugState.lockSubscribers.scale})`,
                          }}
                        >
                          {downloadsCopy.subscribersOnly[1]}
                        </span>
                        <span
                          className="downloads-lock-line"
                          style={{
                            transform: `translate(${debugState.lockOnly.x}px, ${debugState.lockOnly.y}px) scale(${debugState.lockOnly.scale})`,
                          }}
                        >
                          {downloadsCopy.subscribersOnly[2]}
                        </span>
                      </h2>
                      <p
                        className="downloads-subscriber-lock-copy"
                        style={{
                          transform: `translate(${debugState.lockCopy.x}px, ${debugState.lockCopy.y}px) scale(${debugState.lockCopy.scale})`,
                          transformOrigin: "center top",
                        }}
                      >
                        {downloadsCopy.lockedCopy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="downloads-cta-column">
              <a
                href="https://testflight.apple.com/join/5jkdSs4A"
                className="home-lifespace-card-cta downloads-lifespace-card"
                target="_blank"
                rel="noreferrer"
                style={{
                  transform: `translate(${debugState.lifespace.x}px, ${debugState.lifespace.y}px) scale(${debugState.lifespace.scale})`,
                  transformOrigin: "top center",
                }}
              >
                <span
                  className="home-lifespace-card-shell"
                  style={
                    {
                      ["--lifespace-card-width" as string]: `${debugState.lifespace.width}px`,
                      ["--lifespace-card-height" as string]: `${debugState.lifespace.height}px`,
                    } as CSSProperties
                  }
                >
                  <span className="home-lifespace-card-core">
                    <img
                      src="/lifespace-app-icon.png"
                      alt="LIFESPACE app icon"
                      className="home-lifespace-card-image"
                    />
                  </span>
                </span>
                <span className="home-lifespace-card-caption">{downloadsCopy.lifespaceCta}</span>
              </a>
            </aside>
          </div>
          <SiteFooter
            locale={locale}
            currentPath="/downloads"
            className="site-section-footer"
            footerSpacing={debugState.footer.spacing}
            logoTransform={debugState.footerLogo}
          />
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
              onChange={(event) => setDebugTarget(event.target.value as DownloadsDebugTarget)}
            >
              <option value="card">downloads card</option>
              <option value="lifespace">lifespace button</option>
              <option value="title">downloads title</option>
              <option value="pageLogo">page emblem</option>
              <option value="lockHeader">lock header</option>
              <option value="lockFor">lock for</option>
              <option value="lockSubscribers">lock subscribers</option>
              <option value="lockOnly">lock only</option>
              <option value="lockCopy">lock copy</option>
              <option value="lockTopEdge">lock top edge</option>
              <option value="lockBottomEdge">lock bottom edge</option>
              <option value="footer">footer spacing</option>
              <option value="footerLogo">footer logo</option>
            </select>
          </label>
          <div className="downloads-debugger-readout">{activeReadout}</div>
          {debugTarget === "lockTopEdge" || debugTarget === "lockBottomEdge" ? (
            <div className="downloads-debugger-grid">
              <button
                type="button"
                onClick={() =>
                  setDebugState((current) => ({
                    ...current,
                    lockBoxEdges: {
                      ...current.lockBoxEdges,
                      [debugTarget === "lockTopEdge" ? "top" : "bottom"]: Math.max(
                        -80,
                        current.lockBoxEdges[debugTarget === "lockTopEdge" ? "top" : "bottom"] - 8,
                      ),
                    },
                  }))
                }
              >
                Reduce
              </button>
              <button
                type="button"
                onClick={() =>
                  setDebugState((current) => ({
                    ...current,
                    lockBoxEdges: {
                      ...current.lockBoxEdges,
                      [debugTarget === "lockTopEdge" ? "top" : "bottom"]:
                        current.lockBoxEdges[debugTarget === "lockTopEdge" ? "top" : "bottom"] + 8,
                    },
                  }))
                }
              >
                Extend
              </button>
            </div>
          ) : null}
          {debugTarget === "lockHeader" ||
          debugTarget === "lockCopy" ||
          debugTarget === "lockFor" ||
          debugTarget === "lockSubscribers" ||
          debugTarget === "lockOnly" ? (
            <div className="downloads-debugger-grid">
              <button
                type="button"
                onClick={() =>
                  setDebugState((current) => ({
                    ...current,
                    [debugTarget]: { ...current[debugTarget], y: current[debugTarget].y - 8 },
                  }))
                }
              >
                Up
              </button>
              <button
                type="button"
                onClick={() =>
                  setDebugState((current) => ({
                    ...current,
                    [debugTarget]: { ...current[debugTarget], x: current[debugTarget].x - 8 },
                  }))
                }
              >
                Left
              </button>
              <button
                type="button"
                onClick={() =>
                  setDebugState((current) => ({
                    ...current,
                    [debugTarget]: { ...current[debugTarget], x: current[debugTarget].x + 8 },
                  }))
                }
              >
                Right
              </button>
              <button
                type="button"
                onClick={() =>
                  setDebugState((current) => ({
                    ...current,
                    [debugTarget]: { ...current[debugTarget], y: current[debugTarget].y + 8 },
                  }))
                }
              >
                Down
              </button>
              <button
                type="button"
                onClick={() =>
                  setDebugState((current) => ({
                    ...current,
                    [debugTarget]: {
                      ...current[debugTarget],
                      scale: Number(Math.max(0.5, current[debugTarget].scale - 0.05).toFixed(2)),
                    },
                  }))
                }
              >
                Smaller
              </button>
              <button
                type="button"
                onClick={() =>
                  setDebugState((current) => ({
                    ...current,
                    [debugTarget]: {
                      ...current[debugTarget],
                      scale: Number((current[debugTarget].scale + 0.05).toFixed(2)),
                    },
                  }))
                }
              >
                Bigger
              </button>
            </div>
          ) : null}
          {debugTarget === "pageLogo" ? (
            <div className="downloads-debugger-grid">
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, pageLogo: { ...current.pageLogo, y: current.pageLogo.y - 8 } }))}>
                Up
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, pageLogo: { ...current.pageLogo, x: current.pageLogo.x - 8 } }))}>
                Left
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, pageLogo: { ...current.pageLogo, x: current.pageLogo.x + 8 } }))}>
                Right
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, pageLogo: { ...current.pageLogo, y: current.pageLogo.y + 8 } }))}>
                Down
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, pageLogo: { ...current.pageLogo, scale: Number(Math.max(0.4, current.pageLogo.scale - 0.04).toFixed(2)) } }))}>
                Smaller
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, pageLogo: { ...current.pageLogo, scale: Number((current.pageLogo.scale + 0.04).toFixed(2)) } }))}>
                Bigger
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, pageLogo: { ...current.pageLogo, visible: !current.pageLogo.visible } }))}>
                {debugState.pageLogo.visible ? "Hide Logo" : "Show Logo"}
              </button>
            </div>
          ) : null}
          {debugTarget === "title" ? (
            <div className="downloads-debugger-grid">
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, title: { ...current.title, y: current.title.y - 8 } }))}>
                Up
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, title: { ...current.title, x: current.title.x - 8 } }))}>
                Left
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, title: { ...current.title, x: current.title.x + 8 } }))}>
                Right
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, title: { ...current.title, y: current.title.y + 8 } }))}>
                Down
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, title: { ...current.title, scale: Number(Math.max(0.6, current.title.scale - 0.04).toFixed(2)) } }))}>
                Smaller
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, title: { ...current.title, scale: Number((current.title.scale + 0.04).toFixed(2)) } }))}>
                Bigger
              </button>
            </div>
          ) : null}
          {debugTarget === "card" ? (
            <div className="downloads-debugger-grid">
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, y: current.card.y - 8 } }))}>
                Up
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, x: current.card.x - 8 } }))}>
                Left
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, x: current.card.x + 8 } }))}>
                Right
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, y: current.card.y + 8 } }))}>
                Down
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, width: Math.max(320, current.card.width - 24) } }))}>
                Skinnier
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, width: current.card.width + 24 } }))}>
                Wider
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, gap: Math.max(8, current.card.gap - 6) } }))}>
                Date Closer
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, gap: current.card.gap + 6 } }))}>
                Date Farther
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, height: Math.max(320, current.card.height - 30) } }))}>
                Shorter
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, height: current.card.height + 30 } }))}>
                Longer
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, opacity: Number(Math.max(0.2, current.card.opacity - 0.05).toFixed(2)) } }))}>
                Less Opaque
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, card: { ...current.card, opacity: Number(Math.min(1, current.card.opacity + 0.05).toFixed(2)) } }))}>
                More Opaque
              </button>
            </div>
          ) : null}
          {debugTarget === "lifespace" ? (
            <div className="downloads-debugger-grid">
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, lifespace: { ...current.lifespace, y: current.lifespace.y - 8 } }))}>
                Up
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, lifespace: { ...current.lifespace, x: current.lifespace.x - 8 } }))}>
                Left
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, lifespace: { ...current.lifespace, x: current.lifespace.x + 8 } }))}>
                Right
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, lifespace: { ...current.lifespace, y: current.lifespace.y + 8 } }))}>
                Down
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, lifespace: { ...current.lifespace, width: Math.max(140, current.lifespace.width - 16) } }))}>
                Narrower
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, lifespace: { ...current.lifespace, width: current.lifespace.width + 16 } }))}>
                Wider
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, lifespace: { ...current.lifespace, height: Math.max(140, current.lifespace.height - 16) } }))}>
                Shorter
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, lifespace: { ...current.lifespace, height: current.lifespace.height + 16 } }))}>
                Taller
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, lifespace: { ...current.lifespace, scale: Number(Math.max(0.6, current.lifespace.scale - 0.04).toFixed(2)) } }))}>
                Smaller
              </button>
              <button type="button" onClick={() => setDebugState((current) => ({ ...current, lifespace: { ...current.lifespace, scale: Number((current.lifespace.scale + 0.04).toFixed(2)) } }))}>
                Bigger
              </button>
            </div>
          ) : null}
          {debugTarget === "footer" ? (
            <div className="downloads-debugger-grid">
              <button
                type="button"
                onClick={() =>
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
          <div className="downloads-debugger-actions">
            <button type="button" className="downloads-debugger-reset" onClick={copyValues}>
              Copy Values
            </button>
            <button
              type="button"
              className="downloads-debugger-reset"
              onClick={() => {
                setDebugState(DEFAULT_DEBUG);
                setDebuggerOffset(DEFAULT_DEBUGGER_OFFSET);
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
          className="downloads-debugger-toggle-button"
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
