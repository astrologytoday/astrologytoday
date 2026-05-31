"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteFooter from "../shared/SiteFooter";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import GoogleAdSenseUnit from "../shared/GoogleAdSenseUnit";
import { getHomeCopy } from "../../lib/copy";
import { getServicesCopy } from "../../lib/servicesCopy";
import { SHOW_AD_DEBUGGERS } from "../../lib/debug";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";

type ServicesDebugTarget = "footer" | "footerLogo" | "pageLogo";
type ServicesAdDebugTarget = "adOne" | "adTwo" | "adThree" | "adFour";

type ServicesAdDebug = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type ServicesDebugState = {
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
  adOne: ServicesAdDebug;
  adTwo: ServicesAdDebug;
  adThree: ServicesAdDebug;
  adFour: ServicesAdDebug;
};

const SERVICES_DEBUG_STORAGE_KEY = "services-debug-v3";
const SERVICES_AD_DEBUG_STORAGE_KEY = "services-ad-debug-v1";
const SERVICES_DEFAULT_DEBUGGER_OFFSET = { x: 0, y: 0 };
const SERVICES_CANVAS_SCALE = 0.71;
const SERVICES_CANVAS_WIDTH = 1760;
const SERVICES_CANVAS_OFFSET_X = 0;
const SERVICES_CANVAS_OFFSET_Y = 16;
const SERVICES_AD_DEFAULT_DEBUGGER_OFFSET = { x: -280, y: -120 };
const SERVICES_DEFAULT_DEBUG: ServicesDebugState = {
  footer: {
    spacing: 120,
  },
  footerLogo: {
    x: 10,
    y: 12,
    scale: 1.28,
  },
  pageLogo: {
    x: -274,
    y: 23,
    scale: 1.58,
    visible: true,
  },
  adOne: {
    x: -16,
    y: 67,
    width: 212,
    height: 708,
  },
  adTwo: {
    x: -15,
    y: 38,
    width: 212,
    height: 708,
  },
  adThree: {
    x: -244,
    y: -1432,
    width: 212,
    height: 708,
  },
  adFour: {
    x: -244,
    y: -1462,
    width: 212,
    height: 708,
  },
};

export default function ServicesPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getHomeCopy(locale);
  const servicesCopy = getServicesCopy(locale);
  const [debuggerVisible, setDebuggerVisible] = useState(false);
  const [debugTarget, setDebugTarget] = useState<ServicesDebugTarget>("pageLogo");
  const [debugState, setDebugState] = useState<ServicesDebugState>(SERVICES_DEFAULT_DEBUG);
  const [debuggerOffset, setDebuggerOffset] = useState(SERVICES_DEFAULT_DEBUGGER_OFFSET);
  const [copyStatus, setCopyStatus] = useState("");
  const [adDebugTarget, setAdDebugTarget] = useState<ServicesAdDebugTarget>("adOne");
  const [adDebuggerOffset, setAdDebuggerOffset] = useState(SERVICES_AD_DEFAULT_DEBUGGER_OFFSET);
  const [adDebuggerVisible, setAdDebuggerVisible] = useState(true);
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
    target: ServicesAdDebugTarget;
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
    const stored = window.localStorage.getItem(SERVICES_DEBUG_STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as {
        debugState?: Partial<{
          footer?: Partial<ServicesDebugState["footer"]>;
          footerLogo?: Partial<ServicesDebugState["footerLogo"]>;
          pageLogo?: Partial<ServicesDebugState["pageLogo"]>;
          adOne?: Partial<ServicesDebugState["adOne"]>;
          adTwo?: Partial<ServicesDebugState["adTwo"]>;
          adThree?: Partial<ServicesDebugState["adThree"]>;
          adFour?: Partial<ServicesDebugState["adFour"]>;
        }>;
        debuggerOffset?: { x?: number; y?: number };
        debugTarget?: ServicesDebugTarget;
      };

      if (parsed.debugState) {
        setDebugState({
          footer: { ...SERVICES_DEFAULT_DEBUG.footer, ...parsed.debugState.footer },
          footerLogo: { ...SERVICES_DEFAULT_DEBUG.footerLogo, ...parsed.debugState.footerLogo },
          pageLogo: { ...SERVICES_DEFAULT_DEBUG.pageLogo, ...parsed.debugState.pageLogo },
          adOne: { ...SERVICES_DEFAULT_DEBUG.adOne, ...parsed.debugState.adOne },
          adTwo: { ...SERVICES_DEFAULT_DEBUG.adTwo, ...parsed.debugState.adTwo },
          adThree: { ...SERVICES_DEFAULT_DEBUG.adThree, ...parsed.debugState.adThree },
          adFour: { ...SERVICES_DEFAULT_DEBUG.adFour, ...parsed.debugState.adFour },
        });
      }

      if (parsed.debuggerOffset) {
        setDebuggerOffset({
          x: Number(parsed.debuggerOffset.x ?? 0),
          y: Number(parsed.debuggerOffset.y ?? 0),
        });
      }

      if (
        parsed.debugTarget === "footer" ||
        parsed.debugTarget === "footerLogo" ||
        parsed.debugTarget === "pageLogo"
      ) {
        setDebugTarget(parsed.debugTarget);
      }
    } catch {
      window.localStorage.removeItem(SERVICES_DEBUG_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      SERVICES_DEBUG_STORAGE_KEY,
      JSON.stringify({ debugState, debugTarget, debuggerOffset }),
    );
  }, [debugState, debuggerOffset, debugTarget]);

  useEffect(() => {
    const stored = window.localStorage.getItem(SERVICES_AD_DEBUG_STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as {
        adDebugTarget?: ServicesAdDebugTarget;
        adDebuggerOffset?: { x?: number; y?: number };
      };

      if (
        parsed.adDebugTarget === "adOne"
        || parsed.adDebugTarget === "adTwo"
        || parsed.adDebugTarget === "adThree"
        || parsed.adDebugTarget === "adFour"
      ) {
        setAdDebugTarget(parsed.adDebugTarget);
      }

      if (parsed.adDebuggerOffset) {
        setAdDebuggerOffset({
          x: Number(parsed.adDebuggerOffset.x ?? 0),
          y: Number(parsed.adDebuggerOffset.y ?? 0),
        });
      }
    } catch {
      window.localStorage.removeItem(SERVICES_AD_DEBUG_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      SERVICES_AD_DEBUG_STORAGE_KEY,
      JSON.stringify({ adDebugTarget, adDebuggerOffset }),
    );
  }, [adDebugTarget, adDebuggerOffset]);

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
    if (!adDragging) return;

    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - adDragging.startX;
      const dy = event.clientY - adDragging.startY;

      setDebugState((current) => ({
        ...current,
        [adDragging.target]: {
          ...current[adDragging.target],
          x: adDragging.initialX + dx,
          y: adDragging.initialY + dy,
        },
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
    const onKeyDown = (event: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      if (["input", "textarea", "select"].includes(activeTag)) return;

      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
        const step = event.shiftKey ? 10 : 2;
        const target = adDebugTarget;

        setDebugState((current) => ({
          ...current,
          [target]: {
            ...current[target],
            x:
              event.key === "ArrowLeft"
                ? current[target].x - step
                : event.key === "ArrowRight"
                  ? current[target].x + step
                  : current[target].x,
            y:
              event.key === "ArrowUp"
                ? current[target].y - step
                : event.key === "ArrowDown"
                  ? current[target].y + step
                  : current[target].y,
          },
        }));
        return;
      }

      if (!debuggerVisible) return;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;

      event.preventDefault();
      const step = event.shiftKey ? 10 : 2;

      if (debugTarget === "footer") {
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
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [adDebugTarget, debugTarget, debuggerVisible]);

  const sidebarLinks = [
    { label: copy.nav.home, href: withLocale(locale, "/") },
    { label: copy.nav.services, href: withLocale(locale, "/services"), active: true },
    { label: copy.nav.downloads, href: withLocale(locale, "/downloads") },
    { label: copy.nav.about, href: withLocale(locale, "/about") },
    { label: copy.nav.lifespace, href: "/lifespace" },
    { label: copy.nav.pricing, href: withLocale(locale, "/pricing") },
    { label: copy.nav.blog, href: withLocale(locale, "/blog") },
  ];

  const activeReadout =
    debugTarget === "footer"
      ? `Footer space ${Math.round(debugState.footer.spacing)}px`
      : debugTarget === "footerLogo"
        ? `X ${Math.round(debugState.footerLogo.x)} Y ${Math.round(debugState.footerLogo.y)} S ${debugState.footerLogo.scale.toFixed(2)}`
        : `X ${Math.round(debugState.pageLogo.x)} Y ${Math.round(debugState.pageLogo.y)} S ${debugState.pageLogo.scale.toFixed(2)} ${debugState.pageLogo.visible ? "shown" : "hidden"}`;

  const copyValues = async () => {
    const payload = [
      "Services debugger values",
      `footer: spacing ${debugState.footer.spacing}`,
      `footer logo: x ${debugState.footerLogo.x}, y ${debugState.footerLogo.y}, scale ${debugState.footerLogo.scale.toFixed(2)}`,
      `page logo: x ${debugState.pageLogo.x}, y ${debugState.pageLogo.y}, scale ${debugState.pageLogo.scale.toFixed(2)}, visible ${debugState.pageLogo.visible}`,
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

  const activeAdDebug = debugState[adDebugTarget];

  const startAdDrag = (target: ServicesAdDebugTarget) => (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setAdDebugTarget(target);
    setAdDragging({
      target,
      startX: event.clientX,
      startY: event.clientY,
      initialX: debugState[target].x,
      initialY: debugState[target].y,
    });
  };

  const adjustActiveAdSize = (dimension: "width" | "height", amount: number) => {
    const min = dimension === "width" ? 140 : 240;
    const max = dimension === "width" ? 340 : 1200;

    setDebugState((current) => ({
      ...current,
      [adDebugTarget]: {
        ...current[adDebugTarget],
        [dimension]: Math.max(min, Math.min(max, current[adDebugTarget][dimension] + amount)),
      },
    }));
  };

  const resetAdTarget = () => {
    const defaultsByTarget: Record<ServicesAdDebugTarget, ServicesAdDebug> = {
      adOne: SERVICES_DEFAULT_DEBUG.adOne,
      adTwo: SERVICES_DEFAULT_DEBUG.adTwo,
      adThree: SERVICES_DEFAULT_DEBUG.adThree,
      adFour: SERVICES_DEFAULT_DEBUG.adFour,
    };

    setDebugState((current) => ({
      ...current,
      [adDebugTarget]: defaultsByTarget[adDebugTarget],
    }));
  };

  const copyAdValues = async () => {
    const payload = [
      "Services ad debugger values",
      `ad one: x ${debugState.adOne.x}, y ${debugState.adOne.y}, width ${debugState.adOne.width}, height ${debugState.adOne.height}`,
      `ad two: x ${debugState.adTwo.x}, y ${debugState.adTwo.y}, width ${debugState.adTwo.width}, height ${debugState.adTwo.height}`,
      `ad three: x ${debugState.adThree.x}, y ${debugState.adThree.y}, width ${debugState.adThree.width}, height ${debugState.adThree.height}`,
      `ad four: x ${debugState.adFour.x}, y ${debugState.adFour.y}, width ${debugState.adFour.width}, height ${debugState.adFour.height}`,
      `ad debugger panel: x ${adDebuggerOffset.x}, y ${adDebuggerOffset.y}`,
      `active target: ${adDebugTarget}`,
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
    <main className="services-page">
      <div className="services-orb services-orb-one" aria-hidden="true" />
      <div className="services-orb services-orb-two" aria-hidden="true" />
      <div className="services-orb services-orb-three" aria-hidden="true" />

      <ScaledPageCanvas
        className="services-page-canvas"
        designWidth={SERVICES_CANVAS_WIDTH}
        offsetX={SERVICES_CANVAS_OFFSET_X}
        offsetY={SERVICES_CANVAS_OFFSET_Y}
        scale={SERVICES_CANVAS_SCALE}
        viewportClassName="services-page-canvas-viewport"
      >
        <section className="services-shell">
          <div className="services-layout">
            <aside className="services-sidebar">
              <nav
                className="home-sidebar-nav services-sidebar-nav"
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
              <div className="services-sidebar-ads">
                <div
                  className="services-sidebar-ad-wrap"
                  style={{
                    transform: `translate(calc(-50% + ${debugState.adOne.x}px), ${debugState.adOne.y}px)`,
                  }}
                  onMouseDown={SHOW_AD_DEBUGGERS ? startAdDrag("adOne") : undefined}
                >
                  <div
                    className="services-sidebar-ad-card"
                    style={{
                      width: `${debugState.adOne.width}px`,
                      minHeight: `${debugState.adOne.height}px`,
                    }}
                  >
                    <GoogleAdSenseUnit
                      adSlot="7724388444"
                      className="services-sidebar-ad-unit"
                      style={{
                        display: "block",
                        minHeight: `${Math.max(180, debugState.adOne.height - 20)}px`,
                      }}
                    />
                  </div>
                </div>
                <div
                  className="services-sidebar-ad-wrap"
                  style={{
                    transform: `translate(calc(-50% + ${debugState.adTwo.x}px), calc(${debugState.adOne.height + 42}px + ${debugState.adTwo.y}px))`,
                  }}
                  onMouseDown={SHOW_AD_DEBUGGERS ? startAdDrag("adTwo") : undefined}
                >
                  <div
                    className="services-sidebar-ad-card"
                    style={{
                      width: `${debugState.adTwo.width}px`,
                      minHeight: `${debugState.adTwo.height}px`,
                    }}
                  >
                    <GoogleAdSenseUnit
                      adSlot="9065767574"
                      className="services-sidebar-ad-unit"
                      style={{
                        display: "block",
                        minHeight: `${Math.max(180, debugState.adTwo.height - 20)}px`,
                      }}
                    />
                  </div>
                </div>
                <div
                  className="services-sidebar-ad-wrap"
                  style={{
                    transform: `translate(calc(-50% + ${debugState.adThree.x}px), calc(${debugState.adOne.height + debugState.adTwo.height + 84}px + ${debugState.adThree.y}px))`,
                  }}
                  onMouseDown={SHOW_AD_DEBUGGERS ? startAdDrag("adThree") : undefined}
                >
                  <div
                    className="services-sidebar-ad-card"
                    style={{
                      width: `${debugState.adThree.width}px`,
                      minHeight: `${debugState.adThree.height}px`,
                    }}
                  >
                    <GoogleAdSenseUnit
                      adSlot="5118783707"
                      className="services-sidebar-ad-unit"
                      style={{
                        display: "block",
                        minHeight: `${Math.max(180, debugState.adThree.height - 20)}px`,
                      }}
                    />
                  </div>
                </div>
                <div
                  className="services-sidebar-ad-wrap"
                  style={{
                    transform: `translate(calc(-50% + ${debugState.adFour.x}px), calc(${debugState.adOne.height + debugState.adTwo.height + debugState.adThree.height + 126}px + ${debugState.adFour.y}px))`,
                  }}
                  onMouseDown={SHOW_AD_DEBUGGERS ? startAdDrag("adFour") : undefined}
                >
                  <div
                    className="services-sidebar-ad-card"
                    style={{
                      width: `${debugState.adFour.width}px`,
                      minHeight: `${debugState.adFour.height}px`,
                    }}
                  >
                    <GoogleAdSenseUnit
                      adSlot="5259904412"
                      className="services-sidebar-ad-unit"
                      style={{
                        display: "block",
                        minHeight: `${Math.max(180, debugState.adFour.height - 20)}px`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </aside>

            <div className="services-main">
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
              <div className="services-hero">
                <p className="services-kicker">{servicesCopy.hero.kicker}</p>
                <h1>{servicesCopy.hero.title}</h1>
                <p className="services-hero-copy">
                  {servicesCopy.hero.lead}
                </p>
              </div>

              <div className="services-grid">
                <article className="services-panel">
                  <p className="services-section-label">{servicesCopy.sections.couples.label}</p>
                  <h2>{servicesCopy.sections.couples.title}</h2>
                  <p>{servicesCopy.sections.couples.paragraphs[0]}</p>
                  <p>{servicesCopy.sections.couples.paragraphs[1]}</p>
                  <ul className="services-bullet-list">
                    {servicesCopy.sections.couples.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>{servicesCopy.sections.couples.paragraphs[2]}</p>
                  <div className="services-inline-cta">
                    <a
                      href="mailto:mariosbardella@protonmail.com?subject=Relationship%20or%20Family%20Counseling%20Inquiry"
                      className="services-inline-cta-button"
                    >
                      {servicesCopy.sections.couples.cta}
                    </a>
                  </div>
                </article>

                <article className="services-panel">
                  <p className="services-section-label">{servicesCopy.sections.singles.label}</p>
                  <h2>{servicesCopy.sections.singles.title}</h2>
                  <p className="services-quote">
                    {servicesCopy.sections.singles.quote}
                  </p>
                  <p>{servicesCopy.sections.singles.paragraphs[0]}</p>
                  <ul className="services-bullet-list">
                    {servicesCopy.sections.singles.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>{servicesCopy.sections.singles.paragraphs[1]}</p>
                  <p>{servicesCopy.sections.singles.paragraphs[2]}</p>
                  <div className="services-inline-cta">
                    <a
                      href="mailto:mariosbardella@protonmail.com?subject=Introspection%20Therapy%20Inquiry"
                      className="services-inline-cta-button"
                    >
                      {servicesCopy.sections.singles.cta}
                    </a>
                  </div>
                </article>

                <article className="services-panel">
                  <p className="services-section-label">{servicesCopy.sections.reports.label}</p>
                  <h2>{servicesCopy.sections.reports.title}</h2>
                  <p>{servicesCopy.sections.reports.paragraphs[0]}</p>
                  <p>{servicesCopy.sections.reports.paragraphs[1]}</p>
                  <ul className="services-bullet-list">
                    {servicesCopy.sections.reports.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>{servicesCopy.sections.reports.paragraphs[2]}</p>
                  <div className="services-inline-cta">
                    <a
                      href="mailto:mariosbardella@protonmail.com?subject=Astrological%20Report%20Inquiry"
                      className="services-inline-cta-button"
                    >
                      {servicesCopy.sections.reports.cta}
                    </a>
                  </div>
                </article>

                <article className="services-panel">
                  <p className="services-section-label">{servicesCopy.sections.peerSupport.label}</p>
                  <h2>{servicesCopy.sections.peerSupport.title}</h2>
                  <p>{servicesCopy.sections.peerSupport.paragraphs[0]}</p>
                  <p>{servicesCopy.sections.peerSupport.paragraphs[1]}</p>
                  <p>{servicesCopy.sections.peerSupport.paragraphs[2]}</p>
                  <ul className="services-bullet-list">
                    {servicesCopy.sections.peerSupport.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>{servicesCopy.sections.peerSupport.paragraphs[3]}</p>
                  <div className="services-inline-cta">
                    <a
                      href="mailto:mariosbardella@protonmail.com?subject=1-on-1%20Peer%20Support%20Inquiry"
                      className="services-inline-cta-button"
                    >
                      {servicesCopy.sections.peerSupport.cta}
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <SiteFooter
            locale={locale}
            currentPath="/services"
            className="site-section-footer"
            footerSpacing={debugState.footer.spacing}
            logoTransform={debugState.footerLogo}
          />
        </section>
      </ScaledPageCanvas>
      {SHOW_AD_DEBUGGERS ? (adDebuggerVisible ? (
        <aside
          className="services-ad-compact-debugger"
          style={{ transform: `translate(${adDebuggerOffset.x}px, ${adDebuggerOffset.y}px)` }}
        >
          <div className="services-ad-compact-debugger-header">
            <p className="services-ad-compact-debugger-title">Services Ad Debugger</p>
            <button
              type="button"
              className="services-ad-compact-debugger-toggle-button services-ad-compact-debugger-toggle-button-inline"
              onClick={() => {
                setAdDebuggerDragging(null);
                setAdDebuggerVisible(false);
              }}
            >
              Hide
            </button>
          </div>
          <div
            className="services-ad-compact-debugger-dragbar"
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
          <label className="services-ad-compact-debugger-select-wrap">
            <span>Target</span>
            <select
              className="services-ad-compact-debugger-select"
              value={adDebugTarget}
              onChange={(event) => setAdDebugTarget(event.target.value as ServicesAdDebugTarget)}
            >
              <option value="adOne">services ad 1</option>
              <option value="adTwo">services ad 2</option>
              <option value="adThree">services ad 3</option>
              <option value="adFour">services ad 4</option>
            </select>
          </label>
          <div className="services-ad-compact-debugger-readout">
            X {Math.round(activeAdDebug.x)} Y {Math.round(activeAdDebug.y)} W {Math.round(activeAdDebug.width)} H {Math.round(activeAdDebug.height)}
          </div>
          <div className="services-ad-compact-debugger-readout">
            Arrow keys move the selected ad. Hold Shift for larger steps.
          </div>
          <div className="services-ad-compact-debugger-grid">
            <button type="button" onClick={() => setDebugState((current) => ({ ...current, [adDebugTarget]: { ...current[adDebugTarget], y: current[adDebugTarget].y - 8 } }))}>
              Up
            </button>
            <button type="button" onClick={() => setDebugState((current) => ({ ...current, [adDebugTarget]: { ...current[adDebugTarget], x: current[adDebugTarget].x - 8 } }))}>
              Left
            </button>
            <button type="button" onClick={() => setDebugState((current) => ({ ...current, [adDebugTarget]: { ...current[adDebugTarget], x: current[adDebugTarget].x + 8 } }))}>
              Right
            </button>
            <button type="button" onClick={() => setDebugState((current) => ({ ...current, [adDebugTarget]: { ...current[adDebugTarget], y: current[adDebugTarget].y + 8 } }))}>
              Down
            </button>
            <button type="button" onClick={() => adjustActiveAdSize("width", -8)}>
              Narrower
            </button>
            <button type="button" onClick={() => adjustActiveAdSize("width", 8)}>
              Wider
            </button>
            <button type="button" onClick={() => adjustActiveAdSize("height", -12)}>
              Shorter
            </button>
            <button type="button" onClick={() => adjustActiveAdSize("height", 12)}>
              Taller
            </button>
          </div>
          <div className="services-ad-compact-debugger-actions">
            <button type="button" className="services-ad-compact-debugger-reset" onClick={copyAdValues}>
              Copy Values
            </button>
            <button type="button" className="services-ad-compact-debugger-reset" onClick={resetAdTarget}>
              Reset Target
            </button>
          </div>
          {adCopyStatus ? <div className="services-ad-compact-debugger-status">{adCopyStatus}</div> : null}
        </aside>
      ) : (
        <button
          type="button"
          className="services-ad-compact-debugger-toggle-button"
          onClick={() => setAdDebuggerVisible(true)}
          aria-label="Show services ad tools"
          title="Show services ad tools"
        >
          A
        </button>
      )) : null}
    </main>
  );
}
