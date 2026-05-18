"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteFooter from "../shared/SiteFooter";
import { getHomeCopy } from "../../lib/copy";
import { SHOW_DEBUGGERS } from "../../lib/debug";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";

type ServicesDebugTarget = "footer" | "footerLogo" | "pageLogo";

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
};

const SERVICES_DEBUG_STORAGE_KEY = "services-debug-v3";
const SERVICES_DEFAULT_DEBUGGER_OFFSET = { x: 0, y: 0 };
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
};

const couplesBullets = [
  "Explore how you are perceiving one another versus who you really are",
  "Identify aggression cycles and gain insight into each other's emotional worlds",
  "Trace insecurities and uncover the deeper reasons behind gut-level reactions",
  "Solve long-standing problems and unresolved wounds caused by differences in personality, values, or identity",
];

const singlesBullets = [
  "Discover what drives you",
  "Improve your coping style",
  "Explore how you seek wealth",
  "Explore your love and attraction style",
];

const reportBullets = [
  "Personality insights",
  "Love and relationship dynamics",
  "Career direction and growth mindset",
  "Social life and communication",
  "Or any other theme you want explored",
];

const peerSupportBullets = [
  "Daily planning, goal setting, and morning calls",
  "30-minute bi-weekly coaching calls",
  "LIFESPACE app monitoring for brain optimization",
  "Monthly personalized astrological reports",
];

export default function ServicesPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getHomeCopy(locale);
  const [debuggerVisible, setDebuggerVisible] = useState(false);
  const [debugTarget, setDebugTarget] = useState<ServicesDebugTarget>("pageLogo");
  const [debugState, setDebugState] = useState<ServicesDebugState>(SERVICES_DEFAULT_DEBUG);
  const [debuggerOffset, setDebuggerOffset] = useState(SERVICES_DEFAULT_DEBUGGER_OFFSET);
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
    const stored = window.localStorage.getItem(SERVICES_DEBUG_STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as {
        debugState?: Partial<{
          footer?: Partial<ServicesDebugState["footer"]>;
          footerLogo?: Partial<ServicesDebugState["footerLogo"]>;
          pageLogo?: Partial<ServicesDebugState["pageLogo"]>;
        }>;
        debuggerOffset?: { x?: number; y?: number };
        debugTarget?: ServicesDebugTarget;
      };

      if (parsed.debugState) {
        setDebugState({
          footer: { ...SERVICES_DEFAULT_DEBUG.footer, ...parsed.debugState.footer },
          footerLogo: { ...SERVICES_DEFAULT_DEBUG.footerLogo, ...parsed.debugState.footerLogo },
          pageLogo: { ...SERVICES_DEFAULT_DEBUG.pageLogo, ...parsed.debugState.pageLogo },
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
  }, [debugTarget, debuggerVisible]);

  const sidebarLinks = [
    { label: copy.nav.home, href: withLocale(locale, "/") },
    { label: copy.nav.services, href: withLocale(locale, "/services"), active: true },
    { label: copy.nav.downloads, href: withLocale(locale, "/downloads") },
    { label: copy.nav.about, href: withLocale(locale, "/about") },
    { label: copy.nav.lifespace, href: withLocale(locale, "/lifespace") },
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

  return (
    <main className="services-page">
      <div className="services-orb services-orb-one" aria-hidden="true" />
      <div className="services-orb services-orb-two" aria-hidden="true" />
      <div className="services-orb services-orb-three" aria-hidden="true" />

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
          </aside>

          <div className="services-main">
            {debugState.pageLogo.visible ? (
              <img
                src="/astrologytoday-emblem.png"
                alt="Astrology Today emblem"
                className="services-floating-logo"
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
              <p className="services-kicker">Services</p>
              <h1>Support for relationships, families, and deeper self-understanding.</h1>
              <p className="services-hero-copy">
                These services are designed to help individuals better understand the deeper emotional,
                psychological, and relational forces shaping their interactions.
              </p>
            </div>

            <div className="services-grid">
              <article className="services-panel">
                <p className="services-section-label">Couples &amp; Family Services</p>
                <h2>Relationship &amp; Family Counseling</h2>
                <p>
                  Relationships fail due to communication breakdown, emotional distance, and difficulty
                  understanding one another&apos;s needs. This work focuses on bringing greater clarity to the
                  relationship dynamic as a whole.
                </p>
                <p>
                  By understanding one another better, the door to more compassion, better communication,
                  and more grounded solutions can be opened.
                </p>
                <ul className="services-bullet-list">
                  {couplesBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  Family counseling focuses on the larger emotional system of the family and the roles
                  each person plays within it. Many family conflicts are shaped by long-standing
                  patterns, unspoken expectations, unresolved wounds, and differences in personality,
                  values, or identity.
                </p>
                <div className="services-inline-cta">
                  <a
                    href="mailto:mariosbardella@protonmail.com?subject=Relationship%20or%20Family%20Counseling%20Inquiry"
                    className="services-inline-cta-button"
                  >
                    Learn More
                  </a>
                </div>
              </article>

              <article className="services-panel">
                <p className="services-section-label">Singles Services</p>
                <h2>Introspection Therapy</h2>
                <p className="services-quote">
                  &quot;Gnothi Seauton&quot; is an Ancient Proverb that means: Know Yourself.
                </p>
                <p>
                  Introspection Therapy is a deep self-exploration process focused on identity, unseen
                  inner conflicts, emotional patterns, and personal growth. This is meant to help you
                  better understand who you are, how you relate to others, as well as other life aspects
                  such as:
                </p>
                <ul className="services-bullet-list">
                  {singlesBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  Sessions may explore the ego, the mind, the heart, personal values, philosophy of
                  life, and the ongoing tension between one&apos;s higher nature and shadow.
                </p>
                <p>
                  This service also includes career counseling and support for unrequited love, helping
                  clients gain clarity around purpose, direction, relationship patterns, and how to live
                  your best life.
                </p>
                <div className="services-inline-cta">
                  <a
                    href="mailto:mariosbardella@protonmail.com?subject=Introspection%20Therapy%20Inquiry"
                    className="services-inline-cta-button"
                  >
                    Learn More
                  </a>
                </div>
              </article>

              <article className="services-panel">
                <p className="services-section-label">Couples &amp; Singles Services</p>
                <h2>Astrological Reports</h2>
                <p>
                  Each report is a personalized, in-depth astrological analysis designed to give you
                  clear insight into yourself, your relationships, and your life direction.
                </p>
                <p>
                  These reports are written in a direct, readable style and focus on real patterns such
                  as...
                </p>
                <ul className="services-bullet-list">
                  {reportBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  Each report is detailed, structured, and have full astrological calculations included
                  for each of your seven planets and interactions.
                </p>
                <div className="services-inline-cta">
                  <a
                    href="mailto:mariosbardella@protonmail.com?subject=Astrological%20Report%20Inquiry"
                    className="services-inline-cta-button"
                  >
                    Learn More
                  </a>
                </div>
              </article>

              <article className="services-panel">
                <p className="services-section-label">Singles Services</p>
                <h2>1-on-1 Peer Support</h2>
                <p>
                  1-on-1 Peer Support is a more practical, structured, and supportive service designed
                  to help clients stay grounded, motivated, and accountable in daily life.
                </p>
                <p>
                  This service is ideal for individuals who benefit from regular encouragement,
                  routine-building, and consistent support as they work toward personal goals.
                </p>
                <p>
                  Personal life coaching involves...
                </p>
                <ul className="services-bullet-list">
                  {peerSupportBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  This service is especially helpful for clients who are trying to build momentum,
                  improve discipline, stay emotionally on track, or move through difficult periods with
                  steady support and structure.
                </p>
                <div className="services-inline-cta">
                  <a
                    href="mailto:mariosbardella@protonmail.com?subject=1-on-1%20Peer%20Support%20Inquiry"
                    className="services-inline-cta-button"
                  >
                    Learn More
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
              onChange={(event) => setDebugTarget(event.target.value as ServicesDebugTarget)}
            >
              <option value="pageLogo">services logo</option>
              <option value="footer">footer spacing</option>
              <option value="footerLogo">footer logo</option>
            </select>
          </label>
          <div className="downloads-debugger-readout">{activeReadout}</div>
          {debugTarget === "pageLogo" ? (
            <div className="downloads-debugger-grid">
              <button
                type="button"
                onClick={() =>
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
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
                  setDebugState((current) => ({
                    ...current,
                    pageLogo: { ...current.pageLogo, visible: !current.pageLogo.visible },
                  }))
                }
              >
                {debugState.pageLogo.visible ? "Hide Logo" : "Show Logo"}
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
                setDebugState(SERVICES_DEFAULT_DEBUG);
                setDebuggerOffset(SERVICES_DEFAULT_DEBUGGER_OFFSET);
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
