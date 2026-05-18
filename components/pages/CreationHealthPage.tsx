"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { SHOW_DEBUGGERS } from "../../lib/debug";
import { defaultLocale, type SupportedLocale, withLocale } from "../../lib/i18n";

type TransformDebug = {
  x: number;
  y: number;
  scale: number;
};

type SectionTarget =
  | "hero"
  | "portfolio"
  | "lifespace"
  | "modalities"
  | "cost"
  | "animalBenefits"
  | "nutrition"
  | "gallery"
  | "concept"
  | "closing"
  | "primaryButton"
  | "secondaryButton";

const DEBUGGER_STORAGE_KEY = "creation-health-debugger-v1";
const DEFAULT_DEBUGGER_OFFSET = { x: 0, y: 0 };
const SECTION_TARGETS: SectionTarget[] = [
  "hero",
  "portfolio",
  "lifespace",
  "modalities",
  "cost",
  "animalBenefits",
  "nutrition",
  "gallery",
  "concept",
  "closing",
  "primaryButton",
  "secondaryButton",
];
const DEFAULT_SECTION_DEBUG: Record<SectionTarget, TransformDebug> = {
  hero: { x: 0, y: 0, scale: 1 },
  portfolio: { x: 0, y: 0, scale: 1 },
  lifespace: { x: 0, y: 0, scale: 1 },
  modalities: { x: 0, y: 0, scale: 1 },
  cost: { x: 0, y: 0, scale: 1 },
  animalBenefits: { x: 0, y: 0, scale: 1 },
  nutrition: { x: 0, y: 0, scale: 1 },
  gallery: { x: 0, y: 0, scale: 1 },
  concept: { x: 0, y: 0, scale: 1 },
  closing: { x: 0, y: 0, scale: 1 },
  primaryButton: { x: 0, y: 0, scale: 1 },
  secondaryButton: { x: 0, y: 0, scale: 1 },
};

const modalityColumns = [
  "Schizophrenia",
  "Depression",
  "Anxiety",
  "Bipolar Disorder",
  "BPD",
  "ADHD",
  "Autism",
] as const;

const modalityRows = [
  {
    component: "Orthomolecular Diet",
    values: [
      "Supports neurotransmitter function; reduces inflammation",
      "Restores serotonin and B vitamin levels",
      "Magnesium and omega-3 reduce nervous system hyperactivity",
      "Helps stabilize mood swings",
      "Helps gut-brain axis; mood regulation",
      "Improves focus and mood; zinc and iron are key",
      "Aids sensory integration; reduces GI distress",
    ],
  },
  {
    component: "Fitness Training",
    values: [
      "Improves cognition, reduces negative symptoms",
      "Boosts endorphins and self-efficacy",
      "Reduces cortisol, grounds excess energy",
      "Stabilizes mood via routine and dopamine balance",
      "Regulates emotion and encourages embodiment",
      "Helps focus, impulse control, and energy release",
      "Provides sensory regulation and confidence",
    ],
  },
  {
    component: "Occupational Therapy",
    values: [
      "Builds autonomy and function",
      "Restores purpose and routine",
      "Encourages self-efficacy",
      "Helps maintain identity between episodes",
      "Provides consistent support and skill-building",
      "Boosts executive functioning and goal setting",
      "Builds daily life skills in sensory-sensitive ways",
    ],
  },
  {
    component: "Meditation / Yoga",
    values: [
      "Reduces stress and anxiety",
      "Improves emotional regulation",
      "Reduces amygdala activity; increases frontal regulation",
      "Stabilizes mood, supports insight",
      "Helps emotional regulation and distress tolerance",
      "Enhances focus and reduces hyperactivity",
      "Aids in self-regulation; can be adapted for sensory needs",
    ],
  },
  {
    component: "Sleep Optimization",
    values: [
      "Reduces psychotic risk and improves clarity",
      "Crucial for mood regulation",
      "Regulates cortisol and stabilizes anxiety cycles",
      "Prevents manic episodes",
      "Reduces reactivity and emotional dysregulation",
      "Improves attention, mood, and regulation",
      "Helps prevent sensory overload and meltdowns",
    ],
  },
  {
    component: "Light Therapy",
    values: [
      "Reduces negative symptoms; supports circadian rhythm",
      "Effective for seasonal and non-seasonal depression",
      "Stabilizes energy levels and mood",
      "Prevents seasonal mood shifts",
      "Enhances serotonin naturally",
      "Helps with wakefulness and attention",
      "Improves routine and energy regulation",
    ],
  },
  {
    component: "Art & Music Therapy",
    values: [
      "Increases expression, reduces isolation",
      "Unlocks joy and trauma processing",
      "Helps with somatic regulation",
      "Provides safe outlet during unstable mood",
      "Builds identity, emotion expression, and healing",
      "Stimulates creativity, focus, and emotional articulation",
      "Non-verbal processing; increases connection",
    ],
  },
  {
    component: "Vibrational Audio Therapy",
    values: [
      "Regulates brainwave activity and soothes anxiety",
      "Induces parasympathetic response",
      "Calms and centers attention",
      "Helps shift state gently between mania and depression",
      "Can induce safety and relaxation",
      "Helps focus, especially with isochronic tones",
      "Reduces sensory overwhelm and improves grounding",
    ],
  },
  {
    component: "Recreational Therapy",
    values: [
      "Stimulates dopamine and positive socialization",
      "Restores play and pleasure circuits",
      "Distracts from anxiety loops; grounds body",
      "Provides non-serious, stabilizing activities",
      "Encourages safe attachment and enjoyment",
      "Offers healthy stimulation and social bonding",
      "Allows free-form interaction and self-paced play",
    ],
  },
  {
    component: "Judgment-Free Community",
    values: [
      "Reduces paranoia and defensiveness",
      "Encourages openness and vulnerability",
      "Provides safety to explore triggers and healing",
      "Promotes emotional regulation",
      "Builds secure relationships and real trust",
      "Prevents shame-based shutdowns and encourages risk-taking",
      "Affirms neurodivergent identities and reduces masking",
    ],
  },
];

const nutritionRows = [
  ["Grass-Fed Beef", "Highly approved", "High iron, zinc, B12", "Use rotational grazing"],
  ["Grass-Fed Lamb", "Highly approved", "Rich in CLA, B vitamins", "Great for Mediterranean diets"],
  ["Pasture-Raised Chicken", "Approved", "Tryptophan, lean protein", "Choose heritage breeds"],
  ["Pasture-Raised Turkey", "Approved", "Tryptophan, mood support", "Rotate seasonally"],
  ["Grass-Fed Goat", "Approved", "Mineral-rich, digestible", "Good for mixed diets"],
  ["Grass-Fed Bison", "Premium choice", "Lean, high omega-3s", "Needs cold infrastructure"],
  ["Wild Venison / Elk", "If clean and local", "Foraged, mineral-dense", "Source ethically"],
  ["Pasture-Raised Duck", "Rich and nutrient-dense", "High choline, omega fats", "Use in specialty meals"],
];

const animalGallery = [
  { src: "/creation-health/ch1.jpg", alt: "Pasture-raised chickens in a field" },
  { src: "/creation-health/ch2.jpg", alt: "Cow in a grassy pasture" },
  { src: "/creation-health/ch3.jpg", alt: "White ducks walking through grass" },
  { src: "/creation-health/ch4.jpg", alt: "Baby gosling in clover" },
  { src: "/creation-health/ch5.png", alt: "Person holding a lamb" },
  { src: "/creation-health/ch6.jpeg", alt: "Person petting a cow" },
  { src: "/creation-health/ch7.jpg", alt: "Farm dog and puppy resting on hay" },
  { src: "/creation-health/ch8.jpg", alt: "Elk in a meadow" },
  { src: "/creation-health/ch9.jpg", alt: "Goat in a field" },
  { src: "/creation-health/ch10.jpg", alt: "Two lambs touching noses" },
];

export default function CreationHealthPage({
  locale = defaultLocale,
}: {
  locale?: SupportedLocale;
}) {
  const [sectionDebug, setSectionDebug] = useState<Record<SectionTarget, TransformDebug>>(
    DEFAULT_SECTION_DEBUG,
  );
  const [debuggerVisible, setDebuggerVisible] = useState(false);
  const [debugTarget, setDebugTarget] = useState<SectionTarget>("hero");
  const [debuggerOffset, setDebuggerOffset] = useState(DEFAULT_DEBUGGER_OFFSET);
  const [dragging, setDragging] = useState<{
    target: SectionTarget;
    startX: number;
    startY: number;
    initialTransform: TransformDebug;
  } | null>(null);
  const [debuggerDragging, setDebuggerDragging] = useState<{
    startX: number;
    startY: number;
    initialX: number;
    initialY: number;
  } | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(DEBUGGER_STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as {
        sectionDebug?: Partial<Record<SectionTarget, Partial<TransformDebug>>>;
        debugTarget?: SectionTarget;
        debuggerOffset?: { x?: number; y?: number };
      };

      if (parsed.sectionDebug) {
        setSectionDebug((current) => {
          const next = { ...current };
          for (const key of SECTION_TARGETS) {
            const value = parsed.sectionDebug?.[key];
            if (value) {
              next[key] = { ...next[key], ...value };
            }
          }
          return next;
        });
      }

      if (parsed.debugTarget && SECTION_TARGETS.includes(parsed.debugTarget)) {
        setDebugTarget(parsed.debugTarget);
      }

      if (parsed.debuggerOffset) {
        setDebuggerOffset({
          x: Number(parsed.debuggerOffset.x ?? 0),
          y: Number(parsed.debuggerOffset.y ?? 0),
        });
      }
    } catch {
      window.localStorage.removeItem(DEBUGGER_STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      DEBUGGER_STORAGE_KEY,
      JSON.stringify({ sectionDebug, debugTarget, debuggerOffset }),
    );
  }, [debugTarget, debuggerOffset, sectionDebug]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!debuggerVisible) return;
      const activeTag = (document.activeElement?.tagName || "").toLowerCase();
      if (["input", "textarea", "select"].includes(activeTag)) return;
      if (!["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) return;

      event.preventDefault();
      const step = event.shiftKey ? 10 : 2;
      setSectionDebug((current) => ({
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
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [debugTarget, debuggerVisible]);

  useEffect(() => {
    if (!dragging) return;

    const onMove = (event: MouseEvent) => {
      const dx = event.clientX - dragging.startX;
      const dy = event.clientY - dragging.startY;
      setSectionDebug((current) => ({
        ...current,
        [dragging.target]: {
          ...dragging.initialTransform,
          x: Math.round(dragging.initialTransform.x + dx),
          y: Math.round(dragging.initialTransform.y + dy),
        },
      }));
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

  const activeTransform = useMemo(() => sectionDebug[debugTarget], [debugTarget, sectionDebug]);

  const getBlockStyle = (target: SectionTarget) => ({
    transform: `translate(${sectionDebug[target].x}px, ${sectionDebug[target].y}px) scale(${sectionDebug[target].scale})`,
    transformOrigin: "top left",
  });

  const startDragTransform =
    (target: SectionTarget) =>
    (event: React.MouseEvent<HTMLElement | HTMLDivElement | HTMLAnchorElement>) => {
      if (!debuggerVisible) return;
      event.preventDefault();
      event.stopPropagation();
      setDebugTarget(target);
      setDragging({
        target,
        startX: event.clientX,
        startY: event.clientY,
        initialTransform: sectionDebug[target],
      });
    };

  const nudgeTransform = (axis: "x" | "y", amount: number) => {
    setSectionDebug((current) => ({
      ...current,
      [debugTarget]: {
        ...current[debugTarget],
        [axis]: current[debugTarget][axis] + amount,
      },
    }));
  };

  const resizeTransform = (delta: number) => {
    setSectionDebug((current) => ({
      ...current,
      [debugTarget]: {
        ...current[debugTarget],
        scale: Number(Math.max(0.4, Math.min(3, current[debugTarget].scale + delta)).toFixed(2)),
      },
    }));
  };

  const resetActive = () => {
    setSectionDebug((current) => ({ ...current, [debugTarget]: DEFAULT_SECTION_DEBUG[debugTarget] }));
  };

  return (
    <main className="creation-health-page">
      <div className="creation-health-ambient creation-health-ambient-one" aria-hidden="true" />
      <div className="creation-health-ambient creation-health-ambient-two" aria-hidden="true" />
      <div className="creation-health-ambient creation-health-ambient-three" aria-hidden="true" />

      <div className="creation-health-shell creation-health-shell-under-construction" aria-hidden="true">
        <section
          className={`creation-health-block creation-health-hero${
            debuggerVisible && debugTarget === "hero" ? " is-selected" : ""
          }`}
          style={getBlockStyle("hero")}
          onMouseDown={startDragTransform("hero")}
        >
          <div className="creation-health-hero-copy">
            <span className="creation-health-kicker">Creation Health</span>
            <h1>Creation Health &amp; LIFESPACE Plans</h1>
            <p className="creation-health-hero-lead">
              A new model of psychiatry and community care designed around land, structure, dignity,
              and long-term healing instead of institutional churn.
            </p>
            <div className="creation-health-hero-tags">
              <span>Farm-based therapy</span>
              <span>Orthomolecular psychiatry</span>
              <span>Community contribution</span>
              <span>Nature-led recovery</span>
            </div>
          </div>
          <div className="creation-health-hero-collage">
            <figure className="creation-health-hero-card creation-health-hero-card-tall">
              <img src="/creation-health/ch1.jpg" alt="Pasture-raised chickens in a field" />
            </figure>
            <figure className="creation-health-hero-card creation-health-hero-card-square">
              <img src="/creation-health/ch9.jpg" alt="Goat in a field" />
            </figure>
            <figure className="creation-health-hero-card creation-health-hero-card-wide">
              <img src="/creation-health/ch7.jpg" alt="Farm dog and puppy resting on hay" />
            </figure>
          </div>
        </section>

        <section
          className={`creation-health-block creation-health-story-grid${
            debuggerVisible && debugTarget === "portfolio" ? " is-selected" : ""
          }`}
          style={getBlockStyle("portfolio")}
          onMouseDown={startDragTransform("portfolio")}
        >
          <article className="creation-health-portfolio-card">
            <span className="creation-health-card-label">Portfolio Direction</span>
            <h2>A revolutionary wellness community to replace in-patient and out-patient psychiatry</h2>
            <p>
              This page adapts the core framing of the Creation Health portfolio while omitting
              personal contact details. The vision is simple but ambitious: move mental health care
              away from sterile crisis containment and toward a living environment that heals
              through nutrition, movement, purpose, beauty, and relationship.
            </p>
            <p>
              Creation Health is imagined as a self-sustaining campus with therapeutic gardens,
              farm animals, meditation spaces, fitness areas, research capacity, and structured
              community roles that restore function while reducing the emotional violence of
              institutional settings.
            </p>
          </article>
        </section>

        <section
          className={`creation-health-block creation-health-story-grid${
            debuggerVisible && debugTarget === "lifespace" ? " is-selected" : ""
          }`}
          style={getBlockStyle("lifespace")}
          onMouseDown={startDragTransform("lifespace")}
        >
          <article className="creation-health-lifespace-card">
            <span className="creation-health-card-label">Why LIFESPACE Belongs Here</span>
            <h2>LIFESPACE becomes the personal operating system inside the larger community</h2>
            <p>
              LIFESPACE already frames healing through nine core spaces of being such as light,
              inner self, body, mind, environment, and connection. Within Creation Health, that
              philosophy becomes practical: residents can track daily habits, meals, energy
              patterns, routines, and progress across the conditions that shape real recovery.
            </p>
            <ul className="creation-health-list">
              <li>Daily habit tracking that makes patterns visible instead of mysterious.</li>
              <li>Meal planning that supports neurotransmitters and brain optimization.</li>
              <li>Structured reflection that encourages self-actualization instead of dependency.</li>
              <li>Analytics that connect lifestyle change to measurable mental health gains.</li>
            </ul>
          </article>
        </section>

        <section
          className={`creation-health-block creation-health-table-section${
            debuggerVisible && debugTarget === "modalities" ? " is-selected" : ""
          }`}
          style={getBlockStyle("modalities")}
          onMouseDown={startDragTransform("modalities")}
        >
          <div className="creation-health-section-heading">
            <span>Clinical Architecture</span>
            <h2>Creation Health modalities across mental and neurodevelopmental conditions</h2>
            <p>
              The model is intentionally multimodal. It treats recovery as ecological, not merely
              pharmaceutical.
            </p>
          </div>
          <div className="creation-health-table-wrap">
            <table className="creation-health-table creation-health-modalities-table">
              <thead>
                <tr>
                  <th>Creation Health Component</th>
                  {modalityColumns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {modalityRows.map((row) => (
                  <tr key={row.component}>
                    <th>{row.component}</th>
                    {row.values.map((value) => (
                      <td key={`${row.component}-${value}`}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          className={`creation-health-block creation-health-cost-panel${
            debuggerVisible && debugTarget === "cost" ? " is-selected" : ""
          }`}
          style={getBlockStyle("cost")}
          onMouseDown={startDragTransform("cost")}
        >
          <div className="creation-health-section-heading">
            <span>Cost Reality</span>
            <h2>Lower daily cost, richer therapeutic environment</h2>
            <p>
              The proposal is not only more humane. It is dramatically more cost-conscious than the
              hospital model it aims to replace.
            </p>
          </div>
          <div className="creation-health-cost-chart" aria-label="Daily cost comparison chart">
            <div className="creation-health-cost-bar-group">
              <span className="creation-health-cost-value">$15.27</span>
              <div className="creation-health-cost-bar creation-health-cost-bar-small" />
              <p>Creation Health</p>
            </div>
            <div className="creation-health-cost-bar-group">
              <span className="creation-health-cost-value">$800.00</span>
              <div className="creation-health-cost-bar creation-health-cost-bar-large" />
              <p>Psychiatric Hospital</p>
            </div>
          </div>
        </section>

        <section
          className={`creation-health-block creation-health-animal-benefits${
            debuggerVisible && debugTarget === "animalBenefits" ? " is-selected" : ""
          }`}
          style={getBlockStyle("animalBenefits")}
          onMouseDown={startDragTransform("animalBenefits")}
        >
          <div className="creation-health-animal-copy">
            <div className="creation-health-section-heading">
              <span>Animal Contact</span>
              <h2>The mental health benefits of being around farm animals</h2>
            </div>
            <p>
              Interacting with farm animals can positively influence mental well-being by engaging
              the brain&apos;s oxytocin system, a hormone linked to social bonding, stress reduction,
              and emotional resilience.
            </p>
            <p>
              Human-animal interaction research suggests that structured time with animals can lower
              cortisol, reduce symptoms of anxiety and depression, and increase feelings of safety,
              connection, and calm. Care farming and green care programs across Europe and North
              America have also reported improved mood, focus, and motivation for people living
              with PTSD, autism spectrum conditions, chronic stress, and other complex challenges.
            </p>
            <p>
              In Creation Health, daily interaction with animals, from feeding and grooming to
              observation and routine stewardship, is treated as a therapeutic modality that helps
              regulate the nervous system, encourage serotonin and dopamine activity, and build
              empathy, belonging, and purpose.
            </p>
          </div>
          <div className="creation-health-animal-side">
            <figure className="creation-health-animal-side-card">
              <img src="/creation-health/ch6.jpeg" alt="Person petting a cow" />
            </figure>
            <figure className="creation-health-animal-side-card">
              <img src="/creation-health/ch10.jpg" alt="Two lambs touching noses" />
            </figure>
          </div>
        </section>

        <section
          className={`creation-health-block creation-health-table-section${
            debuggerVisible && debugTarget === "nutrition" ? " is-selected" : ""
          }`}
          style={getBlockStyle("nutrition")}
          onMouseDown={startDragTransform("nutrition")}
        >
          <div className="creation-health-section-heading">
            <span>Orthomolecular Nutrition</span>
            <h2>Animal foods in the Creation Health dietary framework</h2>
            <p>
              The nutritional model prioritizes nutrient density, digestibility, and support for
              neurotransmitter function.
            </p>
          </div>
          <div className="creation-health-table-wrap">
            <table className="creation-health-table">
              <thead>
                <tr>
                  <th>Meat Type</th>
                  <th>Orthomolecular Status</th>
                  <th>Key Benefits</th>
                  <th>Considerations</th>
                </tr>
              </thead>
              <tbody>
                {nutritionRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section
          className={`creation-health-block creation-health-gallery-section${
            debuggerVisible && debugTarget === "gallery" ? " is-selected" : ""
          }`}
          style={getBlockStyle("gallery")}
          onMouseDown={startDragTransform("gallery")}
        >
          <div className="creation-health-section-heading">
            <span>Campus Atmosphere</span>
            <h2>A therapeutic landscape that feels alive</h2>
            <p>
              These images set the emotional tone of the community: not a ward, but a restorative
              environment with animals, open sky, routine, and gentleness.
            </p>
          </div>
          <div className="creation-health-gallery-grid">
            {animalGallery.map((image, index) => (
              <figure
                key={image.src}
                className={`creation-health-gallery-item creation-health-gallery-item-${(index % 5) + 1}`}
              >
                <img src={image.src} alt={image.alt} />
              </figure>
            ))}
          </div>
        </section>

        <section
          className={`creation-health-block creation-health-concept-section${
            debuggerVisible && debugTarget === "concept" ? " is-selected" : ""
          }`}
          style={getBlockStyle("concept")}
          onMouseDown={startDragTransform("concept")}
        >
          <div className="creation-health-section-heading">
            <span>Concept Art</span>
            <h2>From idea to physical place</h2>
            <p>
              The community is envisioned as a beautiful, outdoor-forward healing campus where
              therapy, spiritual care, movement, food, and contribution are woven into everyday
              life.
            </p>
          </div>
          <figure className="creation-health-concept-frame">
            <img
              src="/creation-health-concept-art.png"
              alt="Concept art for the Creation Health wellness community"
            />
          </figure>
        </section>

        <section
          className={`creation-health-block creation-health-closing${
            debuggerVisible && debugTarget === "closing" ? " is-selected" : ""
          }`}
          style={getBlockStyle("closing")}
          onMouseDown={startDragTransform("closing")}
        >
          <div className="creation-health-section-heading">
            <span>Closing Vision</span>
            <h2>Creation Health is psychiatry reimagined as community life</h2>
          </div>
          <p>
            The goal is not simply to remove people from hospitals. It is to replace coercive,
            fragmented systems with a model that restores dignity, competence, and meaning. Creation
            Health treats healing as something people grow into through rhythm, land, nourishment,
            skill, beauty, belonging, and truth.
          </p>
          <div className="creation-health-actions">
            <div
              className={`creator-action-debug${
                debuggerVisible && debugTarget === "primaryButton" ? " is-selected" : ""
              }`}
              style={getBlockStyle("primaryButton")}
              onMouseDown={startDragTransform("primaryButton")}
            >
              <Link href={withLocale(locale, "/meet-the-creator")} className="creation-health-primary-action">
                Meet the Creator
              </Link>
            </div>
            <div
              className={`creator-action-debug${
                debuggerVisible && debugTarget === "secondaryButton" ? " is-selected" : ""
              }`}
              style={getBlockStyle("secondaryButton")}
              onMouseDown={startDragTransform("secondaryButton")}
            >
              <Link href={withLocale(locale, "/")} className="creation-health-secondary-action">
                Back to Astrology Today
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="creation-health-under-construction">
        <div className="creation-health-under-construction-panel">
          <p className="creation-health-under-construction-kicker">Creation Health</p>
          <h2>Check Back Soon For Updates!</h2>
          <Link href={withLocale(locale, "/")} className="creation-health-primary-action">
            Back to Astrology Today
          </Link>
        </div>
      </div>

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
              onChange={(event) => setDebugTarget(event.target.value as SectionTarget)}
            >
              <option value="hero">hero</option>
              <option value="portfolio">portfolio framing</option>
              <option value="lifespace">lifespace block</option>
              <option value="modalities">modalities table</option>
              <option value="cost">cost comparison</option>
              <option value="animalBenefits">animal therapy text</option>
              <option value="nutrition">nutrition table</option>
              <option value="gallery">image gallery</option>
              <option value="concept">concept art</option>
              <option value="closing">closing statement</option>
              <option value="primaryButton">meet the creator button</option>
              <option value="secondaryButton">back home button</option>
            </select>
          </label>
          <div className="creator-debugger-readout">
            {`X ${activeTransform.x} Y ${activeTransform.y} S ${activeTransform.scale.toFixed(2)}`}
          </div>
          <div className="creator-debugger-hint">
            Arrow keys nudge. Hold Shift for bigger steps. Drag sections directly.
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
        </aside>
      ) : (
        <button
          type="button"
          className="creator-debugger-toggle-button"
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
