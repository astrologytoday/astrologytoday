"use client";

import { useEffect, useMemo, useState } from "react";

type Planet = "☉" | "☽" | "⥉" | "☿" | "♀" | "♂" | "♃" | "♄" | "♅" | "♆";
type Sign =
  | "♈︎"
  | "♉︎"
  | "♊︎"
  | "♋︎"
  | "♌︎"
  | "♍︎"
  | "♎︎"
  | "♏︎"
  | "♐︎"
  | "♑︎"
  | "♒︎"
  | "♓︎";
type Sex = "male" | "female";
type Element = "fire" | "earth" | "air" | "water";
type Modality = "cardinal" | "fixed" | "mutable";
type GenderCategory = "masculine" | "feminine" | "eunuch" | "hermaphrodite" | "virgin";
type RelationType =
  | "same-sign"
  | "same-element"
  | "elemental-harmony"
  | "competing"
  | "awkward"
  | "teamwork"
  | "okay";

type PlacementMap = Partial<Record<Planet, Sign | "">>;

type GridCell = {
  aPlanet: Planet;
  bPlanet: Planet;
  aSign: Sign;
  bSign: Sign;
  relation: RelationType;
  symbol: string;
  title: string;
  note: string;
};

type DistributionRow = {
  label: string;
  a: number;
  b: number;
  combined: number;
};

type WeightedPlacement = {
  planet: Planet;
  sign: Sign;
  weight: number;
};

const PLANETS: Planet[] = ["☉", "☽", "⥉", "☿", "♀", "♂", "♃", "♄", "♅", "♆"];
const PRIMARY_PLANETS: Planet[] = ["☉", "☽", "⥉", "☿", "♀", "♂", "♃", "♄"];
const GENERATIONAL_PLANETS: Planet[] = ["♅", "♆"];

const PLANET_LABELS: Record<Planet, string> = {
  "☉": "Sun",
  "☽": "Moon",
  "⥉": "ASC",
  "☿": "Mercury",
  "♀": "Venus",
  "♂": "Mars",
  "♃": "Jupiter",
  "♄": "Saturn",
  "♅": "Uranus",
  "♆": "Neptune",
};

const SIGNS: Sign[] = [
  "♈︎",
  "♉︎",
  "♊︎",
  "♋︎",
  "♌︎",
  "♍︎",
  "♎︎",
  "♏︎",
  "♐︎",
  "♑︎",
  "♒︎",
  "♓︎",
];

const SIGN_LABELS: Record<Sign, string> = {
  "♈︎": "Aries",
  "♉︎": "Taurus",
  "♊︎": "Gemini",
  "♋︎": "Cancer",
  "♌︎": "Leo",
  "♍︎": "Virgo",
  "♎︎": "Libra",
  "♏︎": "Scorpio",
  "♐︎": "Sagittarius",
  "♑︎": "Capricorn",
  "♒︎": "Aquarius",
  "♓︎": "Pisces",
};

const SIGN_SHORT: Record<Sign, string> = {
  "♈︎": "AR",
  "♉︎": "TA",
  "♊︎": "GE",
  "♋︎": "CA",
  "♌︎": "LE",
  "♍︎": "VI",
  "♎︎": "LI",
  "♏︎": "SC",
  "♐︎": "SA",
  "♑︎": "CP",
  "♒︎": "AQ",
  "♓︎": "PI",
};

const SIGN_INDEX: Record<Sign, number> = {
  "♈︎": 0,
  "♉︎": 1,
  "♊︎": 2,
  "♋︎": 3,
  "♌︎": 4,
  "♍︎": 5,
  "♎︎": 6,
  "♏︎": 7,
  "♐︎": 8,
  "♑︎": 9,
  "♒︎": 10,
  "♓︎": 11,
};

const ELEMENTS: Record<Sign, Element> = {
  "♈︎": "fire",
  "♉︎": "earth",
  "♊︎": "air",
  "♋︎": "water",
  "♌︎": "fire",
  "♍︎": "earth",
  "♎︎": "air",
  "♏︎": "water",
  "♐︎": "fire",
  "♑︎": "earth",
  "♒︎": "air",
  "♓︎": "water",
};

const MODALITIES: Record<Sign, Modality> = {
  "♈︎": "cardinal",
  "♉︎": "fixed",
  "♊︎": "mutable",
  "♋︎": "cardinal",
  "♌︎": "fixed",
  "♍︎": "mutable",
  "♎︎": "cardinal",
  "♏︎": "fixed",
  "♐︎": "mutable",
  "♑︎": "cardinal",
  "♒︎": "fixed",
  "♓︎": "mutable",
};

const SIGN_GENDERS: Record<Sign, GenderCategory[]> = {
  "♈︎": ["masculine", "masculine"],
  "♉︎": ["feminine", "feminine"],
  "♊︎": ["masculine", "virgin"],
  "♋︎": ["feminine", "feminine"],
  "♌︎": ["masculine", "masculine"],
  "♍︎": ["feminine", "virgin"],
  "♎︎": ["masculine", "feminine"],
  "♏︎": ["feminine", "masculine"],
  "♐︎": ["masculine", "eunuch"],
  "♑︎": ["feminine", "hermaphrodite"],
  "♒︎": ["masculine", "eunuch", "hermaphrodite"],
  "♓︎": ["feminine", "eunuch", "hermaphrodite"],
};

const GENDER_LABELS: Record<GenderCategory, string> = {
  masculine: "Masculine ♂",
  feminine: "Feminine ♀",
  eunuch: "Eunuch ⚲",
  hermaphrodite: "Hermaphrodite ⚧",
  virgin: "Virgin ☿",
};

const RELATION_STYLES: Record<
  RelationType,
  { label: string; symbol: string; bg: string; text: string; border: string }
> = {
  "same-sign": {
    label: "Same Sign",
    symbol: "⚯",
    bg: "#dbeafe",
    text: "#183153",
    border: "#93c5fd",
  },
  "same-element": {
    label: "Same Element",
    symbol: "☓",
    bg: "#fff2d8",
    text: "#624515",
    border: "#f3d08b",
  },
  "elemental-harmony": {
    label: "Elemental Harmony",
    symbol: "🜊",
    bg: "#fff0df",
    text: "#6b3d13",
    border: "#fdba74",
  },
  competing: {
    label: "Competing",
    symbol: "⧠",
    bg: "#fee2e2",
    text: "#7f1d1d",
    border: "#fca5a5",
  },
  awkward: {
    label: "Awkward",
    symbol: "⚲",
    bg: "#ddfbff",
    text: "#115e67",
    border: "#67e8f9",
  },
  teamwork: {
    label: "Teamwork",
    symbol: "△•",
    bg: "#dff7e8",
    text: "#214d39",
    border: "#95d5b2",
  },
  okay: {
    label: "Okay",
    symbol: "❍",
    bg: "#f5f5f4",
    text: "#44403c",
    border: "#d6d3d1",
  },
};

const DEFAULT_A: PlacementMap = {
  "☉": "♏︎",
  "☽": "♑︎",
  "⥉": "♐︎",
  "☿": "♏︎",
  "♀": "♏︎",
  "♂": "♎︎",
  "♃": "♌︎",
  "♄": "♊︎",
  "♅": "♒︎",
  "♆": "♒︎",
};

const DEFAULT_B: PlacementMap = {
  "☉": "♍︎",
  "☽": "",
  "⥉": "",
  "☿": "♍︎",
  "♀": "♎︎",
  "♂": "♓︎",
  "♃": "♍︎",
  "♄": "♊︎",
  "♅": "♒︎",
  "♆": "♑︎",
};

const DISTRIBUTION_ORDER = {
  element: ["fire", "earth", "air", "water"] as const,
  modality: ["cardinal", "fixed", "mutable"] as const,
  gender: ["masculine", "feminine", "eunuch", "hermaphrodite", "virgin"] as const,
};

function normalizeDistance(a: Sign, b: Sign) {
  const diff = Math.abs(SIGN_INDEX[a] - SIGN_INDEX[b]);
  return Math.min(diff, 12 - diff);
}

function classifyRelation(a: Sign, b: Sign): RelationType {
  const distance = normalizeDistance(a, b);

  if (distance === 0) return "same-sign";
  if (distance === 1) return "okay";
  if (distance === 2) return "elemental-harmony";
  if (distance === 3) return "competing";
  if (distance === 4) return "same-element";
  if (distance === 5) return "awkward";
  return "teamwork";
}

function getWeightedPlacements(values: PlacementMap) {
  const primary = PRIMARY_PLANETS.filter((planet) => values[planet]).map((planet) => ({
    planet,
    sign: values[planet] as Sign,
  }));
  const generational = GENERATIONAL_PLANETS.filter((planet) => values[planet]).map((planet) => ({
    planet,
    sign: values[planet] as Sign,
  }));

  const result: WeightedPlacement[] = [];
  let totalWeight = 0;

  if (primary.length > 0) {
    const weight = 0.9 / primary.length;
    totalWeight += 0.9;
    for (const item of primary) result.push({ ...item, weight });
  }

  if (generational.length > 0) {
    const weight = 0.1 / generational.length;
    totalWeight += 0.1;
    for (const item of generational) result.push({ ...item, weight });
  }

  if (totalWeight > 0 && totalWeight !== 1) {
    return result.map((item) => ({ ...item, weight: item.weight / totalWeight }));
  }

  return result;
}

function toRoundedPercentages<T extends string>(values: Record<T, number>, order: readonly T[]) {
  const rounded = {} as Record<T, number>;
  const raw = order.map((key) => ({ key, value: values[key] }));
  const floors = raw.map(({ key, value }) => ({ key, floor: Math.floor(value), frac: value - Math.floor(value) }));
  let used = 0;

  for (const item of floors) {
    rounded[item.key] = item.floor;
    used += item.floor;
  }

  let remaining = 100 - used;
  floors
    .sort((a, b) => b.frac - a.frac)
    .slice(0, Math.max(remaining, 0))
    .forEach((item) => {
      rounded[item.key] += 1;
    });

  if (remaining < 0) {
    floors
      .sort((a, b) => a.frac - b.frac)
      .slice(0, Math.abs(remaining))
      .forEach((item) => {
        rounded[item.key] -= 1;
      });
  }

  return rounded;
}

function buildDistributionFromWeighted<T extends string>(
  values: PlacementMap,
  order: readonly T[],
  mapper: (sign: Sign) => T
) {
  const totals = Object.fromEntries(order.map((key) => [key, 0])) as Record<T, number>;
  const placements = getWeightedPlacements(values);

  if (placements.length === 0) {
    return Object.fromEntries(order.map((key) => [key, 0])) as Record<T, number>;
  }

  for (const item of placements) {
    totals[mapper(item.sign)] += item.weight * 100;
  }

  return toRoundedPercentages(totals, order);
}

function buildElementDistribution(values: PlacementMap) {
  return buildDistributionFromWeighted(values, DISTRIBUTION_ORDER.element, (sign) => ELEMENTS[sign]);
}

function buildModalityDistribution(values: PlacementMap) {
  return buildDistributionFromWeighted(values, DISTRIBUTION_ORDER.modality, (sign) => MODALITIES[sign]);
}

function countGenderSymbols(planets: Planet[], values: PlacementMap) {
  const counts = Object.fromEntries(
    DISTRIBUTION_ORDER.gender.map((key) => [key, 0])
  ) as Record<GenderCategory, number>;

  for (const planet of planets) {
    const sign = values[planet];
    if (!sign) continue;

    for (const gender of SIGN_GENDERS[sign]) {
      counts[gender] += 1;
    }
  }

  return counts;
}

function countsToPercentages(counts: Record<GenderCategory, number>) {
  const total = Object.values(counts).reduce((sum, value) => sum + value, 0);
  const raw = Object.fromEntries(
    DISTRIBUTION_ORDER.gender.map((key) => [key, total === 0 ? 0 : (counts[key] / total) * 100])
  ) as Record<GenderCategory, number>;

  return toRoundedPercentages(raw, DISTRIBUTION_ORDER.gender);
}

function getSexDistribution(sex: Sex) {
  return {
    masculine: sex === "male" ? 100 : 0,
    feminine: sex === "female" ? 100 : 0,
    eunuch: 0,
    hermaphrodite: 0,
    virgin: 0,
  } satisfies Record<GenderCategory, number>;
}

function buildFinalGenderDistribution(values: PlacementMap, sex: Sex) {
  const astrological = countsToPercentages(countGenderSymbols(PRIMARY_PLANETS, values));
  const generational = countsToPercentages(countGenderSymbols(GENERATIONAL_PLANETS, values));
  const sexDistribution = getSexDistribution(sex);

  const raw = Object.fromEntries(
    DISTRIBUTION_ORDER.gender.map((key) => [
      key,
      astrological[key] * 0.65 + generational[key] * 0.2 + sexDistribution[key] * 0.15,
    ])
  ) as Record<GenderCategory, number>;

  return {
    astrological,
    generational,
    final: toRoundedPercentages(raw, DISTRIBUTION_ORDER.gender),
  };
}

function combineDistributions<T extends string>(
  a: Record<T, number>,
  b: Record<T, number>,
  order: readonly T[]
) {
  const raw = Object.fromEntries(order.map((key) => [key, (a[key] + b[key]) / 2])) as Record<T, number>;
  return toRoundedPercentages(raw, order);
}

function buildGrid(personA: PlacementMap, personB: PlacementMap) {
  const rows = PLANETS.filter((planet) => personA[planet]);
  const cols = PLANETS.filter((planet) => personB[planet]);

  return rows.map((aPlanet) => {
    const aSign = personA[aPlanet] as Sign;

    return cols.map((bPlanet) => {
      const bSign = personB[bPlanet] as Sign;
      const relation = classifyRelation(aSign, bSign);
      const style = RELATION_STYLES[relation];

      return {
        aPlanet,
        bPlanet,
        aSign,
        bSign,
        relation,
        symbol: style.symbol,
        title: style.label,
        note: `${PLANET_LABELS[aPlanet]} in ${SIGN_LABELS[aSign]} compared with ${PLANET_LABELS[bPlanet]} in ${SIGN_LABELS[bSign]}. ${style.label}. This popup is ready for your custom interpretation text and notation rules.`,
      } satisfies GridCell;
    });
  });
}

function buildSummaryRows(
  labels: Record<string, string>,
  a: Record<string, number>,
  b: Record<string, number>,
  combined: Record<string, number>,
  order: readonly string[]
) {
  return order.map((key) => ({
    label: labels[key] ?? key,
    a: a[key] ?? 0,
    b: b[key] ?? 0,
    combined: combined[key] ?? 0,
  }));
}

export default function LoveComputerPage() {
  const [personA, setPersonA] = useState<PlacementMap>(DEFAULT_A);
  const [personASex, setPersonASex] = useState<Sex>("male");
  const [personB, setPersonB] = useState<PlacementMap>(DEFAULT_B);
  const [personBSex, setPersonBSex] = useState<Sex>("female");
  const [selectedCell, setSelectedCell] = useState<GridCell | null>(null);

  useEffect(() => {
    if (!selectedCell) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCell(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedCell]);

  const grid = useMemo(() => buildGrid(personA, personB), [personA, personB]);
  const rows = PLANETS.filter((planet) => personA[planet]);
  const cols = PLANETS.filter((planet) => personB[planet]);

  const elementA = useMemo(() => buildElementDistribution(personA), [personA]);
  const elementB = useMemo(() => buildElementDistribution(personB), [personB]);
  const elementCombined = useMemo(
    () => combineDistributions(elementA, elementB, DISTRIBUTION_ORDER.element),
    [elementA, elementB]
  );

  const modalityA = useMemo(() => buildModalityDistribution(personA), [personA]);
  const modalityB = useMemo(() => buildModalityDistribution(personB), [personB]);
  const modalityCombined = useMemo(
    () => combineDistributions(modalityA, modalityB, DISTRIBUTION_ORDER.modality),
    [modalityA, modalityB]
  );

  const genderA = useMemo(() => buildFinalGenderDistribution(personA, personASex), [personA, personASex]);
  const genderB = useMemo(() => buildFinalGenderDistribution(personB, personBSex), [personB, personBSex]);
  const genderCombined = useMemo(
    () => combineDistributions(genderA.final, genderB.final, DISTRIBUTION_ORDER.gender),
    [genderA, genderB]
  );

  const elementRows = buildSummaryRows(
    { fire: "Fire", earth: "Earth", air: "Air", water: "Water" },
    elementA,
    elementB,
    elementCombined,
    DISTRIBUTION_ORDER.element
  );

  const modalityRows = buildSummaryRows(
    { cardinal: "Cardinal", fixed: "Fixed", mutable: "Mutable" },
    modalityA,
    modalityB,
    modalityCombined,
    DISTRIBUTION_ORDER.modality
  );

  const genderRows = buildSummaryRows(
    GENDER_LABELS,
    genderA.final,
    genderB.final,
    genderCombined,
    DISTRIBUTION_ORDER.gender
  );

  return (
    <main className="report-shell">
      <section className="report-header">
        <div>
          <p className="eyebrow">The Grand Counsel of Paizen</p>
          <h1>Astrological Report</h1>
        </div>
        <div className="report-meta">
          <p>AstrologyToday.ca</p>
          <p>Love Computer Prototype</p>
          <p>Session I</p>
        </div>
      </section>

      <section className="report-top-grid">
        <PlacementCard
          title="Person A"
          subtitle="Primary chart"
          sex={personASex}
          values={personA}
          onSexChange={setPersonASex}
          onChange={setPersonA}
        />
        <PlacementCard
          title="Person B"
          subtitle="Comparison chart"
          sex={personBSex}
          values={personB}
          onSexChange={setPersonBSex}
          onChange={setPersonB}
        />
        <CompatibilityTable />
      </section>

      <section className="chart-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Planet To Planet Chart</p>
            <h2>Comparison Grid</h2>
          </div>
          <p className="section-copy">
            Click any symbol to open a note popup. Person A runs down the left side and Person B
            runs across the top.
          </p>
        </div>

        <div className="chart-scroll">
          <table className="chart-table">
            <thead>
              <tr>
                <th>A ↓ / B →</th>
                {cols.map((planet) => (
                  <th key={planet}>
                    <div className="axis-symbol">{planet}</div>
                    <div className="axis-subcopy">
                      {PLANET_LABELS[planet]} {personB[planet]}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {grid.map((row, rowIndex) => {
                const rowPlanet = rows[rowIndex];

                return (
                  <tr key={rowPlanet}>
                    <th>
                      <div className="axis-symbol">{rowPlanet}</div>
                      <div className="axis-subcopy">
                        {PLANET_LABELS[rowPlanet]} {personA[rowPlanet]}
                      </div>
                    </th>
                    {row.map((cell) => {
                      const style = RELATION_STYLES[cell.relation];

                      return (
                        <td key={`${cell.aPlanet}-${cell.bPlanet}`}>
                          <button
                            type="button"
                            className="chart-cell"
                            onClick={() => setSelectedCell(cell)}
                            style={{
                              background: style.bg,
                              color: style.text,
                              borderColor: style.border,
                            }}
                          >
                            <span className="chart-symbol">{cell.symbol}</span>
                            <span className="chart-pair">
                              {cell.aSign} × {cell.bSign}
                            </span>
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="summary-grid">
        <SummaryCard title="Element" copy="Weighted 90/10 across personal and generational planets." rows={elementRows} />
        <SummaryCard title="Modality" copy="Weighted with the same personal-versus-generational split." rows={modalityRows} />
        <SummaryCard
          title="Gender Expression"
          copy="Final score = 65% astrological + 20% generation + 15% sex."
          rows={genderRows}
        />
      </section>

      <section className="logic-card">
        <div className="logic-copy">
          <p className="eyebrow">Calculation Notes</p>
          <h2>What Is Live Right Now</h2>
          <p>
            Element and modality now use your weighted 90/10 logic, and gender expression uses the
            65/20/15 formula with rounded whole-number output. Moon and ASC are naturally skipped
            whenever they are left unknown.
          </p>
        </div>
        <div className="logic-copy">
          <p className="eyebrow">Next Layer</p>
          <h2>Ready For Your Text Rules</h2>
          <p>
            The modal content is still placeholder interpretation text. Once you send the exact
            meaning for each connection box, I can wire those explanations into the popup system.
          </p>
        </div>
      </section>

      {selectedCell ? (
        <div className="modal-backdrop" onClick={() => setSelectedCell(null)} role="presentation">
          <div className="modal-card" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
            <button type="button" className="modal-close" onClick={() => setSelectedCell(null)}>
              Close
            </button>
            <p className="eyebrow">Connection Detail</p>
            <h2>{selectedCell.title}</h2>
            <div className="modal-tags">
              <span>
                {selectedCell.aPlanet} {PLANET_LABELS[selectedCell.aPlanet]} {selectedCell.aSign}
              </span>
              <span>
                {selectedCell.bPlanet} {PLANET_LABELS[selectedCell.bPlanet]} {selectedCell.bSign}
              </span>
              <span>{selectedCell.symbol}</span>
            </div>
            <p className="modal-copy">{selectedCell.note}</p>
          </div>
        </div>
      ) : null}
    </main>
  );
}

function PlacementCard({
  title,
  subtitle,
  sex,
  values,
  onSexChange,
  onChange,
}: {
  title: string;
  subtitle: string;
  sex: Sex;
  values: PlacementMap;
  onSexChange: (next: Sex) => void;
  onChange: (next: PlacementMap) => void;
}) {
  return (
    <section className="placement-card">
      <p className="eyebrow">{subtitle}</p>
      <h2>{title}</h2>
      <p className="card-copy">Leave Moon or ASC blank if birth time is unknown.</p>

      <label className="sex-row">
        <span>Sex</span>
        <select value={sex} onChange={(event) => onSexChange(event.target.value as Sex)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <div className="placement-list">
        {PLANETS.map((planet) => (
          <label key={planet} className="placement-row">
            <div className="planet-mark">
              <strong>{planet}</strong>
              <span>{PLANET_LABELS[planet]}</span>
            </div>

            <select
              value={values[planet] ?? ""}
              onChange={(event) => onChange({ ...values, [planet]: event.target.value as Sign | "" })}
            >
              <option value="">Unknown</option>
              {SIGNS.map((sign) => (
                <option key={sign} value={sign}>
                  {sign} {SIGN_LABELS[sign]}
                </option>
              ))}
            </select>
          </label>
        ))}
      </div>
    </section>
  );
}

function CompatibilityTable() {
  return (
    <section className="compatibility-card">
      <div className="section-heading compact">
        <div>
          <p className="eyebrow">Spreadsheet Logic</p>
          <h2>Compatibility Table</h2>
        </div>
        <p className="section-copy">
          This is the sign-to-sign matrix from your Excel sheet, translated into the site.
        </p>
      </div>

      <div className="compatibility-scroll">
        <table className="compatibility-table">
          <thead>
            <tr>
              <th />
              {SIGNS.map((sign) => (
                <th key={sign}>{SIGN_SHORT[sign]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SIGNS.map((rowSign) => (
              <tr key={rowSign}>
                <th>{SIGN_SHORT[rowSign]}</th>
                {SIGNS.map((colSign) => {
                  const relation = classifyRelation(rowSign, colSign);
                  const style = RELATION_STYLES[relation];

                  return (
                    <td key={`${rowSign}-${colSign}`}>
                      <span
                        className="compatibility-symbol"
                        style={{
                          background: style.bg,
                          color: style.text,
                          borderColor: style.border,
                        }}
                        title={`${SIGN_LABELS[rowSign]} × ${SIGN_LABELS[colSign]}: ${style.label}`}
                      >
                        {style.symbol}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="legend-grid">
        {(Object.keys(RELATION_STYLES) as RelationType[]).map((relation) => {
          const style = RELATION_STYLES[relation];

          return (
            <div key={relation} className="legend-item">
              <span
                className="compatibility-symbol"
                style={{
                  background: style.bg,
                  color: style.text,
                  borderColor: style.border,
                }}
              >
                {style.symbol}
              </span>
              <span>{style.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function SummaryCard({
  title,
  copy,
  rows,
}: {
  title: string;
  copy: string;
  rows: DistributionRow[];
}) {
  return (
    <section className="summary-card">
      <p className="eyebrow">{title}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
      <div className="summary-table">
        <div className="summary-head">Type</div>
        <div className="summary-head">A</div>
        <div className="summary-head">B</div>
        <div className="summary-head">Together</div>
        {rows.map((row) => (
          <SummaryRow key={row.label} row={row} />
        ))}
      </div>
    </section>
  );
}

function SummaryRow({ row }: { row: DistributionRow }) {
  return (
    <>
      <div>{row.label}</div>
      <div>{row.a}%</div>
      <div>{row.b}%</div>
      <div>{row.combined}%</div>
    </>
  );
}
