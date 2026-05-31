"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import ScaledPageCanvas from "../shared/ScaledPageCanvas";
import { SHOW_DEBUGGERS } from "../../lib/debug";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";
import { getMeetTheCreatorCopy } from "../../lib/meetTheCreatorCopy";

type TransformDebug = {
  x: number;
  y: number;
  scale: number;
};

type SectionTarget =
  | "title"
  | "signsPanel"
  | "intro"
  | "fusion"
  | "fusionSecond"
  | "innovations"
  | "innovationsFollow"
  | "creationVision"
  | "conceptCaption"
  | "creationFacilities"
  | "author"
  | "background"
  | "work";

type CreatorDebugTarget =
  | "portrait"
  | "conceptImage"
  | "primaryButton"
  | "secondaryButton"
  | SectionTarget;
type DropCapFont = "text" | "display" | "classic";

type PortraitSettings = TransformDebug & {
  width: number;
  leftGap: number;
  bottom: number;
  radius: number;
  side: "right" | "left";
};

const PORTRAIT_STORAGE_KEY = "meet-the-creator-portrait-debug-v5";
const BUTTONS_STORAGE_KEY = "meet-the-creator-buttons-debug-v21";
const DEBUGGER_STORAGE_KEY = "meet-the-creator-debugger-v11";
const DEFAULT_PORTRAIT_SETTINGS: PortraitSettings = {
  x: -6,
  y: 8,
  scale: 1.16,
  width: 300,
  leftGap: 52,
  bottom: 28,
  radius: 30,
  side: "left",
};
const DEFAULT_PRIMARY_BUTTON: TransformDebug = { x: 641, y: -301, scale: 1.48 };
const DEFAULT_SECONDARY_BUTTON: TransformDebug = { x: -338, y: -62, scale: 1.32 };
const DEFAULT_CONCEPT_IMAGE: TransformDebug = { x: 179, y: -340, scale: 1.64 };
const DEFAULT_DEBUGGER_OFFSET = { x: 0, y: 0 };
const DEFAULT_DROP_CAP_SIZE = 5;
const DEFAULT_DROP_CAP_FONT: DropCapFont = "text";
const DEFAULT_BODY_TEXT_SIZE = 1.24;
const DEFAULT_TITLE_TEXT_SIZE = 5.1;
const DEFAULT_SIGNS_RADIUS = 30;
const DEFAULT_BOTTOM_TRIM = -250;
const CREATOR_CANVAS_SCALE = 0.71;
const CREATOR_CANVAS_WIDTH = 1760;
const CREATOR_CANVAS_OFFSET_X = 0;
const CREATOR_CANVAS_OFFSET_Y = 16;
const SECTION_TARGETS: SectionTarget[] = [
  "title",
  "signsPanel",
  "intro",
  "fusion",
  "fusionSecond",
  "innovations",
  "innovationsFollow",
  "creationVision",
  "conceptCaption",
  "creationFacilities",
  "author",
  "background",
  "work",
];
const DEFAULT_SECTION_DEBUG: Record<SectionTarget, TransformDebug> = {
  title: { x: 0, y: 0, scale: 1 },
  signsPanel: { x: 114, y: 1, scale: 0.92 },
  intro: { x: 0, y: 0, scale: 1.08 },
  fusion: { x: 0, y: 16, scale: 1 },
  fusionSecond: { x: 359, y: -462, scale: 1.08 },
  innovations: { x: 381, y: -442, scale: 1 },
  innovationsFollow: { x: 10, y: -397, scale: 1 },
  creationVision: { x: 5, y: -391, scale: 1 },
  conceptCaption: { x: 0, y: 0, scale: 1 },
  creationFacilities: { x: 0, y: 10, scale: 1 },
  author: { x: 2, y: 8, scale: 1 },
  background: { x: 10, y: -287, scale: 1 },
  work: { x: 11, y: -275, scale: 1 },
};

export default function MeetTheCreatorPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const copy = getMeetTheCreatorCopy(locale);
  const [settings, setSettings] = useState<PortraitSettings>(DEFAULT_PORTRAIT_SETTINGS);
  const [primaryButtonDebug, setPrimaryButtonDebug] = useState<TransformDebug>(DEFAULT_PRIMARY_BUTTON);
  const [secondaryButtonDebug, setSecondaryButtonDebug] = useState<TransformDebug>(
    DEFAULT_SECONDARY_BUTTON,
  );
  const [conceptImageDebug, setConceptImageDebug] = useState<TransformDebug>(DEFAULT_CONCEPT_IMAGE);
  const [sectionDebug, setSectionDebug] = useState<Record<SectionTarget, TransformDebug>>(
    DEFAULT_SECTION_DEBUG,
  );
  const [debuggerVisible, setDebuggerVisible] = useState(false);
  const [debugTarget, setDebugTarget] = useState<CreatorDebugTarget>("portrait");
  const [debuggerOffset, setDebuggerOffset] = useState(DEFAULT_DEBUGGER_OFFSET);
  const [dropCapSize, setDropCapSize] = useState(DEFAULT_DROP_CAP_SIZE);
  const [dropCapFont, setDropCapFont] = useState<DropCapFont>(DEFAULT_DROP_CAP_FONT);
  const [bodyTextSize, setBodyTextSize] = useState(DEFAULT_BODY_TEXT_SIZE);
  const [titleTextSize, setTitleTextSize] = useState(DEFAULT_TITLE_TEXT_SIZE);
  const [signsRadius, setSignsRadius] = useState(DEFAULT_SIGNS_RADIUS);
  const [bottomTrim, setBottomTrim] = useState(DEFAULT_BOTTOM_TRIM);
  const [conceptLightboxOpen, setConceptLightboxOpen] = useState(false);
  const [dragging, setDragging] = useState<{
    target: CreatorDebugTarget;
    startX: number;
    startY: number;
    initialTransform: TransformDebug;
  } | null>(null);
  const [suppressConceptClick, setSuppressConceptClick] = useState(false);
  const [debuggerDragging, setDebuggerDragging] = useState<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);
  const articleFlowRef = useRef<HTMLDivElement | null>(null);
  const [articleFlowWidth, setArticleFlowWidth] = useState(880);
  const conceptFigureWidth = Math.min(780, Math.round(560 * conceptImageDebug.scale));
  useEffect(() => {
    const stored = window.localStorage.getItem(PORTRAIT_STORAGE_KEY);

    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Partial<PortraitSettings>;
        setSettings((current) => ({ ...current, ...parsed }));
      } catch {
        window.localStorage.removeItem(PORTRAIT_STORAGE_KEY);
      }
    }

    const storedButtons = window.localStorage.getItem(BUTTONS_STORAGE_KEY);
    if (storedButtons) {
      try {
        const parsed = JSON.parse(storedButtons) as {
          primaryButton?: Partial<TransformDebug>;
          secondaryButton?: Partial<TransformDebug>;
          conceptImage?: Partial<TransformDebug>;
          sections?: Partial<Record<SectionTarget, Partial<TransformDebug>>>;
          debugTarget?: CreatorDebugTarget;
          debuggerOffset?: { x?: number; y?: number };
          dropCapSize?: number;
          dropCapFont?: DropCapFont;
          bodyTextSize?: number;
          titleTextSize?: number;
          signsRadius?: number;
          bottomTrim?: number;
        };
        if (parsed.primaryButton) {
          setPrimaryButtonDebug((current) => ({ ...current, ...parsed.primaryButton }));
        }
        if (parsed.secondaryButton) {
          setSecondaryButtonDebug((current) => ({ ...current, ...parsed.secondaryButton }));
        }
        if (parsed.conceptImage) {
          setConceptImageDebug((current) => ({ ...current, ...parsed.conceptImage }));
        }
        if (parsed.sections) {
          setSectionDebug((current) => {
            const next = { ...current };
            for (const key of SECTION_TARGETS) {
              const value = parsed.sections?.[key];
              if (value) {
                next[key] = { ...next[key], ...value };
              }
            }
            return next;
          });
        }
        if (
          parsed.debugTarget === "portrait" ||
          parsed.debugTarget === "conceptImage" ||
          parsed.debugTarget === "primaryButton" ||
          parsed.debugTarget === "secondaryButton" ||
          SECTION_TARGETS.includes(parsed.debugTarget as SectionTarget)
        ) {
          setDebugTarget(parsed.debugTarget as CreatorDebugTarget);
        }
        if (parsed.debuggerOffset) {
          setDebuggerOffset({
            x: Number(parsed.debuggerOffset.x ?? 0),
            y: Number(parsed.debuggerOffset.y ?? 0),
          });
        }
        if (typeof parsed.dropCapSize === "number") {
          setDropCapSize(parsed.dropCapSize);
        }
        if (
          parsed.dropCapFont === "text" ||
          parsed.dropCapFont === "display" ||
          parsed.dropCapFont === "classic"
        ) {
          setDropCapFont(parsed.dropCapFont);
        }
        if (typeof parsed.bodyTextSize === "number") {
          setBodyTextSize(parsed.bodyTextSize);
        }
        if (typeof parsed.titleTextSize === "number") {
          setTitleTextSize(parsed.titleTextSize);
        }
        if (typeof parsed.signsRadius === "number") {
          setSignsRadius(parsed.signsRadius);
        }
        if (typeof parsed.bottomTrim === "number") {
          setBottomTrim(parsed.bottomTrim);
        }
      } catch {
        window.localStorage.removeItem(BUTTONS_STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(PORTRAIT_STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    window.localStorage.setItem(
      BUTTONS_STORAGE_KEY,
      JSON.stringify({
        primaryButton: primaryButtonDebug,
        secondaryButton: secondaryButtonDebug,
        conceptImage: conceptImageDebug,
        sections: sectionDebug,
        debugTarget,
        debuggerOffset,
        dropCapSize,
        dropCapFont,
        bodyTextSize,
        titleTextSize,
        signsRadius,
        bottomTrim,
      }),
    );
  }, [
    bodyTextSize,
    bottomTrim,
    debugTarget,
    debuggerOffset,
    dropCapFont,
    dropCapSize,
    conceptImageDebug,
    primaryButtonDebug,
    sectionDebug,
    secondaryButtonDebug,
    signsRadius,
    titleTextSize,
  ]);

  useEffect(() => {
    const measure = () => {
      if (articleFlowRef.current) {
        setArticleFlowWidth(articleFlowRef.current.clientWidth);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!debuggerVisible) return;
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      if (["input", "textarea", "select"].includes(activeTag)) return;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const step = event.shiftKey ? 10 : 2;

      const updater = (current: TransformDebug): TransformDebug => ({
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
      });

      if (debugTarget === "portrait") {
        setSettings((current) => ({ ...current, ...updater(current) }));
      } else if (debugTarget === "conceptImage") {
        setConceptImageDebug(updater);
      } else if (SECTION_TARGETS.includes(debugTarget as SectionTarget)) {
        const target = debugTarget as SectionTarget;
        setSectionDebug((current) => ({
          ...current,
          [target]: clampSectionTransform(target, updater(current[target])),
        }));
      } else if (debugTarget === "primaryButton") {
        setPrimaryButtonDebug(updater);
      } else if (debugTarget === "secondaryButton") {
        setSecondaryButtonDebug(updater);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [debugTarget, debuggerVisible]);

  useEffect(() => {
    if (!dragging) return;

    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - dragging.startX;
      const dy = event.clientY - dragging.startY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        setSuppressConceptClick(true);
      }
      const next = {
        ...dragging.initialTransform,
        x: Math.round(dragging.initialTransform.x + dx),
        y: Math.round(dragging.initialTransform.y + dy),
      };

      if (dragging.target === "portrait") {
        setSettings((current) => ({ ...current, x: next.x, y: next.y }));
      } else if (dragging.target === "conceptImage") {
        setConceptImageDebug(next);
      } else if (SECTION_TARGETS.includes(dragging.target as SectionTarget)) {
        const target = dragging.target as SectionTarget;
        setSectionDebug((current) => ({
          ...current,
          [target]: clampSectionTransform(target, next),
        }));
      } else if (dragging.target === "primaryButton") {
        setPrimaryButtonDebug(next);
      } else if (dragging.target === "secondaryButton") {
        setSecondaryButtonDebug(next);
      }
    };

    const onUp = () => {
      setDragging(null);
      window.setTimeout(() => setSuppressConceptClick(false), 0);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setConceptLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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

  const updateSetting = <K extends keyof PortraitSettings>(key: K, value: PortraitSettings[K]) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  const getSectionWidth = (target: SectionTarget) => {
    if (target === "fusionSecond" || target === "innovations") {
      return Math.min(560, Math.max(420, articleFlowWidth - 260));
    }
    if (target === "signsPanel") {
      return 142;
    }
    if (target === "title") {
      return Math.min(articleFlowWidth, 760);
    }
    return Math.min(articleFlowWidth - 72, 860);
  };

  const clampSectionTransform = (target: SectionTarget, next: TransformDebug): TransformDebug => {
    const maxX = Math.max(-24, articleFlowWidth - getSectionWidth(target) - 12);
    return {
      ...next,
      x: Math.max(-24, Math.min(maxX, next.x)),
    };
  };

  const activeTransform = useMemo(() => {
    if (debugTarget === "portrait") return settings;
    if (debugTarget === "conceptImage") return conceptImageDebug;
    if (SECTION_TARGETS.includes(debugTarget as SectionTarget)) {
      return sectionDebug[debugTarget as SectionTarget];
    }
    if (debugTarget === "primaryButton") return primaryButtonDebug;
    return secondaryButtonDebug;
  }, [conceptImageDebug, debugTarget, primaryButtonDebug, sectionDebug, secondaryButtonDebug, settings]);

  const startDragTransform =
    (target: CreatorDebugTarget, current: TransformDebug) => (event: React.MouseEvent) => {
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

  const nudgeTransform = (axis: "x" | "y", amount: number) => {
    const updater = (current: TransformDebug) => ({ ...current, [axis]: current[axis] + amount });
    if (debugTarget === "portrait") {
      setSettings((current) => ({ ...current, ...updater(current) }));
    } else if (debugTarget === "conceptImage") {
      setConceptImageDebug(updater);
    } else if (SECTION_TARGETS.includes(debugTarget as SectionTarget)) {
      const target = debugTarget as SectionTarget;
      setSectionDebug((current) => ({
        ...current,
        [target]: clampSectionTransform(target, updater(current[target])),
      }));
    } else if (debugTarget === "primaryButton") {
      setPrimaryButtonDebug(updater);
    } else {
      setSecondaryButtonDebug(updater);
    }
  };

  const resizeTransform = (delta: number) => {
    const updater = (current: TransformDebug) => ({
      ...current,
      scale: Number(Math.max(0.2, Math.min(6, current.scale + delta)).toFixed(2)),
    });
    if (debugTarget === "portrait") {
      setSettings((current) => ({ ...current, scale: updater(current).scale }));
    } else if (debugTarget === "conceptImage") {
      setConceptImageDebug(updater);
    } else if (SECTION_TARGETS.includes(debugTarget as SectionTarget)) {
      const target = debugTarget as SectionTarget;
      setSectionDebug((current) => ({
        ...current,
        [target]: clampSectionTransform(target, updater(current[target])),
      }));
    } else if (debugTarget === "primaryButton") {
      setPrimaryButtonDebug(updater);
    } else {
      setSecondaryButtonDebug(updater);
    }
  };

  const resetActive = () => {
    if (debugTarget === "portrait") {
      setSettings(DEFAULT_PORTRAIT_SETTINGS);
    } else if (debugTarget === "conceptImage") {
      setConceptImageDebug(DEFAULT_CONCEPT_IMAGE);
    } else if (SECTION_TARGETS.includes(debugTarget as SectionTarget)) {
      const target = debugTarget as SectionTarget;
      setSectionDebug((current) => ({ ...current, [target]: DEFAULT_SECTION_DEBUG[target] }));
    } else if (debugTarget === "primaryButton") {
      setPrimaryButtonDebug(DEFAULT_PRIMARY_BUTTON);
    } else {
      setSecondaryButtonDebug(DEFAULT_SECONDARY_BUTTON);
    }
  };

  const getFlowBlockStyle = (target: SectionTarget, current: TransformDebug) => ({
    width:
      target === "title"
        ? "auto"
        : target === "fusionSecond" || target === "innovations"
          ? `min(${getSectionWidth(target)}px, calc(100% - 48px))`
          : "100%",
    maxWidth: `${getSectionWidth(target)}px`,
    transform: `translate(${current.x}px, ${current.y}px) scale(${current.scale})`,
    transformOrigin: "top left",
  });

  return (
    <main className="creator-page">
      <div className="creator-page-glow creator-page-glow-one" aria-hidden="true" />
      <div className="creator-page-glow creator-page-glow-two" aria-hidden="true" />
      <div className="creator-page-gridline creator-page-gridline-one" aria-hidden="true" />
      <div className="creator-page-gridline creator-page-gridline-two" aria-hidden="true" />

      <ScaledPageCanvas
        className="creator-page-canvas"
        designWidth={CREATOR_CANVAS_WIDTH}
        offsetX={CREATOR_CANVAS_OFFSET_X}
        offsetY={CREATOR_CANVAS_OFFSET_Y}
        scale={CREATOR_CANVAS_SCALE}
        viewportClassName="creator-page-canvas-viewport"
      >
        <div className="creator-shell">
          <article className="creator-article">
          <header className="creator-article-header">
            <span className="creator-eyebrow">{copy.eyebrow}</span>
            <span className="creator-header-star" aria-hidden="true">
              ★
            </span>
            <div
              className={`creator-title-block${
                debuggerVisible && debugTarget === "title" ? " is-selected" : ""
              }`}
              style={getFlowBlockStyle("title", sectionDebug.title)}
              onMouseDown={startDragTransform("title", sectionDebug.title)}
            >
              <h1 style={{ ["--creator-title-size" as string]: `${titleTextSize}rem` }}>{copy.pageTitle}</h1>
            </div>
          </header>

          <div
            ref={articleFlowRef}
            className="creator-article-flow"
            style={{
              ["--creator-body-size" as string]: `${bodyTextSize}rem`,
              ["--creator-dropcap-size" as string]: `${dropCapSize}rem`,
              ["--creator-dropcap-font" as string]:
                dropCapFont === "display"
                  ? '"Eleven Eleven", "Baskerville", "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif'
                  : dropCapFont === "classic"
                    ? '"Baskerville", "Iowan Old Style", "Palatino Linotype", "Book Antiqua", serif'
                    : '"Cormorant Garamond", "Georgia", "Times New Roman", serif',
              marginBottom: `${bottomTrim}px`,
            }}
          >
            <div
              className={`creator-flow-block${
                debuggerVisible && debugTarget === "intro" ? " is-selected" : ""
              } creator-flow-block-intro`}
              style={getFlowBlockStyle("intro", sectionDebug.intro)}
              onMouseDown={startDragTransform("intro", sectionDebug.intro)}
            >
              <p>{copy.intro}</p>
            </div>

            <div
              className={`creator-flow-block${
                debuggerVisible && debugTarget === "fusion" ? " is-selected" : ""
              } creator-flow-block-fusion`}
              style={getFlowBlockStyle("fusion", sectionDebug.fusion)}
              onMouseDown={startDragTransform("fusion", sectionDebug.fusion)}
            >
              <h2>{copy.fusionTitle}</h2>
              <p>{copy.fusionBody}</p>
              <figure
                className={`creator-inline-portrait creator-inline-portrait-${settings.side}${
                  dragging?.target === "portrait" ? " is-dragging" : ""
                }${debuggerVisible && debugTarget === "portrait" ? " is-selected" : ""}`}
                style={{
                  width: `${settings.width}px`,
                  transform: `translate(${settings.x}px, ${settings.y}px) scale(${settings.scale})`,
                  transformOrigin: settings.side === "right" ? "top right" : "top left",
                  ["--creator-portrait-radius" as string]: `${settings.radius}px`,
                  ["--creator-portrait-gap" as string]: `${settings.leftGap}px`,
                }}
                onMouseDown={startDragTransform("portrait", settings)}
              >
                <div className="creator-inline-portrait-frame">
                  <img
                    src="/mario-sbardella-photo.png"
                    alt="Portrait of Mario Sbardella"
                    className="creator-inline-portrait-image"
                  />
                </div>
              </figure>
            </div>

            <div
              className={`creator-flow-block${
                debuggerVisible && debugTarget === "fusionSecond" ? " is-selected" : ""
              } creator-flow-block-fusion-second`}
              style={getFlowBlockStyle("fusionSecond", sectionDebug.fusionSecond)}
              onMouseDown={startDragTransform("fusionSecond", sectionDebug.fusionSecond)}
            >
              <p className="creator-fusion-second-paragraph">{copy.fusionSecond}</p>
            </div>

            <div
              className={`creator-flow-block${
                debuggerVisible && debugTarget === "innovations" ? " is-selected" : ""
              } creator-flow-block-innovations-lead`}
              style={getFlowBlockStyle("innovations", sectionDebug.innovations)}
              onMouseDown={startDragTransform("innovations", sectionDebug.innovations)}
            >
              <h2>{copy.innovationsTitle}</h2>
              <p>{copy.innovationsBody}</p>
            </div>
            <div
              className={`creator-flow-block${
                debuggerVisible && debugTarget === "innovationsFollow" ? " is-selected" : ""
              } creator-flow-block-innovations-follow`}
              style={getFlowBlockStyle("innovationsFollow", sectionDebug.innovationsFollow)}
              onMouseDown={startDragTransform("innovationsFollow", sectionDebug.innovationsFollow)}
            >
              <p>{copy.innovationsFollow}</p>
            </div>

            <div
              className={`creator-flow-block${
                debuggerVisible && debugTarget === "creationVision" ? " is-selected" : ""
              }`}
              style={getFlowBlockStyle("creationVision", sectionDebug.creationVision)}
              onMouseDown={startDragTransform("creationVision", sectionDebug.creationVision)}
            >
              <h2>{copy.creationVisionTitle}</h2>
              <p>{copy.creationVisionBody}</p>
            </div>
            <figure
              className={`creator-concept-figure${
                dragging?.target === "conceptImage" ? " is-dragging" : ""
              }${debuggerVisible && debugTarget === "conceptImage" ? " is-selected" : ""}`}
              style={{
                width: `min(100%, ${conceptFigureWidth}px)`,
                marginTop: `${conceptImageDebug.y}px`,
                marginLeft: `${conceptImageDebug.x}px`,
                marginRight: "auto",
              }}
              onMouseDown={startDragTransform("conceptImage", conceptImageDebug)}
            >
              <button
                type="button"
                className="creator-concept-frame"
                onClick={() => {
                  if (!suppressConceptClick) {
                    setConceptLightboxOpen(true);
                  }
                }}
              >
                <img
                  src="/creation-health-concept-art.png"
                  alt={copy.conceptImageAlt}
                  className="creator-concept-image"
                />
              </button>
              <figcaption
                className={`creator-concept-caption${
                  debuggerVisible && debugTarget === "conceptCaption" ? " is-selected" : ""
                }`}
                style={getFlowBlockStyle("conceptCaption", sectionDebug.conceptCaption)}
                onMouseDown={startDragTransform("conceptCaption", sectionDebug.conceptCaption)}
              >
                {copy.conceptCaption}
              </figcaption>
            </figure>
            <div
              className={`creator-flow-block${
                debuggerVisible && debugTarget === "creationFacilities" ? " is-selected" : ""
              }`}
              style={getFlowBlockStyle("creationFacilities", sectionDebug.creationFacilities)}
              onMouseDown={startDragTransform("creationFacilities", sectionDebug.creationFacilities)}
            >
              <p>{copy.creationFeaturesLead}</p>
              <ul className="creator-list">
                {copy.creationHealthFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div
              className={`creator-flow-block${
                debuggerVisible && debugTarget === "author" ? " is-selected" : ""
              }`}
              style={getFlowBlockStyle("author", sectionDebug.author)}
              onMouseDown={startDragTransform("author", sectionDebug.author)}
            >
              <h2>{copy.authorTitle}</h2>
              <p>{copy.authorLead}</p>
              <ul className="creator-list">
                {copy.upcomingBooks.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>: {item.description}
                  </li>
                ))}
              </ul>
              <figure
                className={`creator-signs-panel creator-signs-panel-inline${
                  debuggerVisible && debugTarget === "signsPanel" ? " is-selected" : ""
                }`}
                style={{
                  ...getFlowBlockStyle("signsPanel", sectionDebug.signsPanel),
                  ["--creator-signs-radius" as string]: `${signsRadius}px`,
                }}
                onMouseDown={startDragTransform("signsPanel", sectionDebug.signsPanel)}
              >
                <div className="creator-signs-panel-frame">
                  <div className="creator-signs-panel-line">
                    <span>☉</span>
                    <span>♎︎</span>
                  </div>
                  <div className="creator-signs-panel-line">
                    <span>☽</span>
                    <span>♎︎</span>
                  </div>
                  <div className="creator-signs-panel-line">
                    <span>☿</span>
                    <span>♎︎</span>
                  </div>
                  <div className="creator-signs-panel-line">
                    <span>♀</span>
                    <span>♎︎</span>
                  </div>
                  <div className="creator-signs-panel-line">
                    <span>♂</span>
                    <span>♏︎</span>
                  </div>
                  <div className="creator-signs-panel-line">
                    <span>♃</span>
                    <span>♐︎</span>
                  </div>
                  <div className="creator-signs-panel-line">
                    <span>♄</span>
                    <span>♓︎</span>
                  </div>
                </div>
              </figure>
            </div>

            <div
              className={`creator-flow-block${
                debuggerVisible && debugTarget === "background" ? " is-selected" : ""
              }`}
              style={getFlowBlockStyle("background", sectionDebug.background)}
              onMouseDown={startDragTransform("background", sectionDebug.background)}
            >
              <h2>{copy.professionalBackgroundTitle}</h2>
              {copy.professionalBackgroundBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div
              className={`creator-flow-block${
                debuggerVisible && debugTarget === "work" ? " is-selected" : ""
              }`}
              style={getFlowBlockStyle("work", sectionDebug.work)}
              onMouseDown={startDragTransform("work", sectionDebug.work)}
            >
              <h2>{copy.workWithMarioTitle}</h2>
              {copy.workWithMarioBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>{copy.servicesLead}</p>
              <ul className="creator-list">
                {copy.services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="creator-location-line">
                <strong>{copy.locationLabel}</strong> {copy.locationValue}
              </p>

              <div className="creator-hero-actions">
              <div
                className={`creator-action-debug${
                  debuggerVisible && debugTarget === "primaryButton" ? " is-selected" : ""
                }`}
                style={{
                  transform: `translate(${primaryButtonDebug.x}px, ${primaryButtonDebug.y}px) scale(${primaryButtonDebug.scale})`,
                  transformOrigin: "left center",
                }}
                onMouseDown={startDragTransform("primaryButton", primaryButtonDebug)}
              >
                <Link
                  href={withLocale(locale, "/pricing")}
                  className="creator-primary-action creator-primary-action-circle"
                >
                  <span>{copy.bookSessionLabel[0]}</span>
                  <span>{copy.bookSessionLabel[1]}</span>
                  <span>{copy.bookSessionLabel[2]}</span>
                </Link>
              </div>
              <div
                className={`creator-action-debug${
                  debuggerVisible && debugTarget === "secondaryButton" ? " is-selected" : ""
                }`}
                style={{
                  transform: `translate(${secondaryButtonDebug.x}px, ${secondaryButtonDebug.y}px) scale(${secondaryButtonDebug.scale})`,
                  transformOrigin: "left center",
                }}
                onMouseDown={startDragTransform("secondaryButton", secondaryButtonDebug)}
              >
                <Link href={withLocale(locale, "/")} className="creator-secondary-action">
                  {copy.backToAstrologyToday}
                </Link>
              </div>
            </div>
            </div>
          </div>
          </article>
        </div>
      </ScaledPageCanvas>

      {SHOW_DEBUGGERS ? (debuggerVisible ? (
        <aside
          className="creator-debugger"
          style={{ transform: `translate(${debuggerOffset.x}px, ${debuggerOffset.y}px)` }}
        >
        <div className="creator-debugger-header">
          <p className="creator-debugger-title">Layout Debugger</p>
          <button
            type="button"
            className="creator-debugger-toggle-button creator-debugger-toggle-button-inline"
            onClick={() => {
              setDragging(null);
              setDebuggerDragging(null);
              setDebuggerVisible(false);
            }}
          >
            Hide
          </button>
        </div>
        <div
          className="creator-debugger-dragbar"
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
        <label className="creator-debugger-select-wrap">
          <span>Element</span>
          <select
            className="creator-debugger-select"
            value={debugTarget}
            onChange={(event) => setDebugTarget(event.target.value as CreatorDebugTarget)}
          >
            <option value="portrait">portrait</option>
            <option value="title">page title</option>
            <option value="signsPanel">star signs panel</option>
            <option value="intro">intro paragraph</option>
            <option value="fusion">A Fusion of Science and Spirit</option>
            <option value="fusionSecond">He was first introduced...</option>
            <option value="innovations">Innovations in Wellness</option>
            <option value="innovationsFollow">In addition to LIFESPACE...</option>
            <option value="creationVision">creation health vision</option>
            <option value="conceptImage">creation health image</option>
            <option value="conceptCaption">creation health mockup subtitle</option>
            <option value="creationFacilities">creation health facilities text</option>
            <option value="author">author & researcher</option>
            <option value="background">professional background</option>
            <option value="work">work with mario</option>
            <option value="primaryButton">book a session</option>
            <option value="secondaryButton">back to astrology today</option>
          </select>
        </label>
        <div className="creator-debugger-readout">
          {`X ${activeTransform.x} Y ${activeTransform.y} S ${activeTransform.scale.toFixed(2)}`}
        </div>
        <div className="creator-debugger-hint">
          Arrow keys nudge. Hold Shift for bigger steps. Drag elements directly.
        </div>
        <div className="creator-debugger-grid">
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
          <button type="button" onClick={() => resizeTransform(0.08)}>
            Bigger
          </button>
          <button type="button" onClick={() => resizeTransform(-0.08)}>
            Smaller
          </button>
          <button type="button" onClick={resetActive}>
            Reset
          </button>
        </div>
        {debugTarget === "portrait" ? (
          <>
            <label className="creator-debugger-field">
              <span>Float Side</span>
              <select
                value={settings.side}
                onChange={(event) =>
                  updateSetting("side", event.target.value as PortraitSettings["side"])
                }
              >
                <option value="right">Right</option>
                <option value="left">Left</option>
              </select>
            </label>
            <label className="creator-debugger-field">
              <span>Base Width</span>
              <input
                type="range"
                min="160"
                max="700"
                value={settings.width}
                onChange={(event) => updateSetting("width", Number(event.target.value))}
              />
            </label>
            <label className="creator-debugger-field">
              <span>Text Gap</span>
              <input
                type="range"
                min="0"
                max="120"
                value={settings.leftGap}
                onChange={(event) => updateSetting("leftGap", Number(event.target.value))}
              />
            </label>
            <label className="creator-debugger-field">
              <span>Bottom Gap</span>
              <input
                type="range"
                min="0"
                max="80"
                value={settings.bottom}
                onChange={(event) => updateSetting("bottom", Number(event.target.value))}
              />
            </label>
            <label className="creator-debugger-field">
              <span>Corner Radius</span>
              <input
                type="range"
                min="10"
                max="48"
                value={settings.radius}
                onChange={(event) => updateSetting("radius", Number(event.target.value))}
              />
            </label>
          </>
        ) : null}
        <label className="creator-debugger-field">
          <span>Body Text Size</span>
          <input
            type="range"
            min="0.92"
            max="1.4"
            step="0.01"
            value={bodyTextSize}
            onChange={(event) => setBodyTextSize(Number(event.target.value))}
          />
        </label>
        <label className="creator-debugger-field">
          <span>Title Size</span>
          <input
            type="range"
            min="3.4"
            max="7"
            step="0.1"
            value={titleTextSize}
            onChange={(event) => setTitleTextSize(Number(event.target.value))}
          />
        </label>
        <label className="creator-debugger-field">
          <span>Signs Bubble Radius</span>
          <input
            type="range"
            min="10"
            max="64"
            step="1"
            value={signsRadius}
            onChange={(event) => setSignsRadius(Number(event.target.value))}
          />
        </label>
        <label className="creator-debugger-field">
          <span>Bottom Trim</span>
          <input
            type="range"
            min="-1400"
            max="200"
            step="10"
            value={bottomTrim}
            onChange={(event) => setBottomTrim(Number(event.target.value))}
          />
        </label>
        <label className="creator-debugger-field">
          <span>Dropcap Size</span>
          <input
            type="range"
            min="3.5"
            max="7"
            step="0.1"
            value={dropCapSize}
            onChange={(event) => setDropCapSize(Number(event.target.value))}
          />
        </label>
        <label className="creator-debugger-field">
          <span>Dropcap Font</span>
          <select
            value={dropCapFont}
            onChange={(event) => setDropCapFont(event.target.value as DropCapFont)}
          >
            <option value="text">Text Serif</option>
            <option value="classic">Classic Serif</option>
            <option value="display">Display Serif</option>
          </select>
        </label>
      </aside>
      ) : (
        <button
          type="button"
          className="creator-debugger-toggle-button"
          onClick={() => {
            setDragging(null);
            setDebuggerVisible(true);
          }}
          aria-label="Show debugger"
          title="Show debugger"
        >
          D
        </button>
      )) : null}

      {conceptLightboxOpen ? (
        <div
          className="creator-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Creation Health concept image"
          onClick={() => setConceptLightboxOpen(false)}
        >
          <div className="creator-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="creator-lightbox-close"
              onClick={() => setConceptLightboxOpen(false)}
            >
              {copy.lightboxClose}
            </button>
            <img
              src="/creation-health-concept-art.png"
              alt={copy.lightboxAlt}
              className="creator-lightbox-image"
            />
            <p className="creator-lightbox-caption">
              {copy.lightboxCaption}
            </p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
