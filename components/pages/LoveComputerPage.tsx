"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  AstrologyCalculateResponse,
  AstrologyHousePlanetKey,
  AstrologyLocationOption,
  AstrologySignName,
} from "../../lib/astrology";
import {
  getLoveComputerCloudState,
  getWebAccountByUsername,
  setLoveComputerCloudState,
} from "../../lib/firebase/lifespace";
import {
  authenticateLifespaceAccount,
  getFirebaseAuthErrorMessage,
  getStoredLifespaceSession,
  LIFESPACE_AUTH_EVENT,
  requestPasswordReset,
  type LifespaceWebSession,
} from "../../lib/lifespace/webAuth";

const LOVE_COMPUTER_CANVAS_SCALE = 0.71;

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

type GridViewMode = "couple" | "partner-a" | "partner-b";

type PlacementMap = Partial<Record<Planet | "♇", Sign | "">>;

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

type QualifierRow = {
  label: string;
  a: string;
  b: string;
  combined: string;
};

type RootPowerDefinition = {
  planet: Planet;
  text: string;
};

type RootPowerMatch = RootPowerDefinition & {
  sign: Sign;
};

type DayOfWeek = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
type ClockMode = "day" | "night";
type Meridiem = "AM" | "PM";
type HousePlanet = "☉" | "☽" | "⥉" | "☿" | "♀" | "♂" | "♃" | "♄" | "♅" | "♆" | "♇";
type HousePlacement = {
  sign: Sign | "";
  planet: HousePlanet | "";
};
type HouseAssignment = {
  placements: HousePlacement[];
};

type WeightedPlacement = {
  planet: Planet;
  sign: Sign;
  weight: number;
};

type PlanetProfile = {
  heading: string;
  bullets: string[];
};

type SignProfile = {
  dates: string;
  tagline?: string;
  bullets: string[];
};

type NormRect = {
  x: number;
  y: number;
  w: number;
  h: number;
};

type GlyphMatch = {
  sign: Sign;
  score: number;
};

type DebugBox = {
  key: string;
  label: string;
  rect: NormRect;
  tone: "a" | "b";
};

type TextImportResult = {
  personA: PlacementMap;
  personB: PlacementMap;
  warnings: string[];
};

type BirthDetails = {
  month: string;
  day: string;
  year: string;
  hour: string;
  minute: string;
  meridiem: Meridiem;
  birthTimeKnown: boolean;
  location: string;
  latitude: number | null;
  longitude: number | null;
  timezone: string;
};

type SavedChartRecord = {
  id: string;
  schemaVersion: 4;
  storageScope: "local";
  profileName: string;
  sex: Sex;
  placements: PlacementMap;
  houses: HouseAssignment[];
  birthDetails: BirthDetails | null;
  createdAt: string;
  updatedAt: string;
};

type SaveFlashState = {
  target: "a" | "b";
  kind: "saved" | "taken";
} | null;

type ModalNotesMap = Record<string, string>;
type CalculationStatus = {
  kind: "idle" | "loading" | "success" | "error";
  message: string;
};

type ResetPasswordStatus = {
  kind: "idle" | "loading" | "success" | "error";
  message: string;
};

const PLANETS: Planet[] = ["☉", "☽", "⥉", "☿", "♀", "♂", "♃", "♄", "♅", "♆"];
const PLACEMENT_CARD_PLANETS: Array<Planet | "♇"> = ["☉", "☽", "⥉", "☿", "♀", "♂", "♃", "♄", "♅", "♆", "♇"];
const HOUSE_PLANETS: HousePlanet[] = ["☉", "☽", "⥉", "☿", "♀", "♂", "♃", "♄", "♅", "♆", "♇"];
const HOUSE_CARD_PLANETS: HousePlanet[] = ["☉", "☽", "⥉", "☿", "♀", "♂", "♃", "♄", "♅", "♆", "♇"];
const PRIMARY_PLANETS: Planet[] = ["☉", "☽", "⥉", "☿", "♀", "♂", "♃", "♄"];
const SUMMARY_PERSONAL_PLANETS: Planet[] = ["☉", "☽", "☿", "♀", "♂", "♃", "♄"];
const GENERATIONAL_PLANETS: Planet[] = ["♅", "♆"];
const SUN_GROUP_PLANETS: Planet[] = ["☉", "♀", "♃"];
const MOON_GROUP_PLANETS: Planet[] = ["☽", "♂", "♄"];

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

const PLACEMENT_CARD_PLANET_LABELS: Record<Planet | "♇", string> = {
  ...PLANET_LABELS,
  "♇": "Pluto",
};

const HOUSE_PLANET_LABELS: Record<HousePlanet, string> = {
  "☉": "Sun",
  "☽": "Moon",
  "⥉": "Rising",
  "☿": "Mercury",
  "♀": "Venus",
  "♂": "Mars",
  "♃": "Jupiter",
  "♄": "Saturn",
  "♅": "Uranus",
  "♆": "Neptune",
  "♇": "Pluto",
};

const TEXT_PLANET_TO_SYMBOL: Record<string, Planet | null> = {
  Sun: "☉",
  Moon: "☽",
  Mercury: "☿",
  Venus: "♀",
  Mars: "♂",
  Jupiter: "♃",
  Saturn: "♄",
  Uranus: "♅",
  Neptune: "♆",
  Ascendant: "⥉",
  ASC: "⥉",
  MC: null,
};

const TEXT_SIGN_TO_SYMBOL: Record<string, Sign> = {
  Aries: "♈︎",
  Taurus: "♉︎",
  Gemini: "♊︎",
  Cancer: "♋︎",
  Leo: "♌︎",
  Virgo: "♍︎",
  Libra: "♎︎",
  Scorpio: "♏︎",
  Sagittarius: "♐︎",
  Capricorn: "♑︎",
  Aquarius: "♒︎",
  Pisces: "♓︎",
};

const ASTROLOGY_SIGN_TO_SYMBOL: Record<AstrologySignName, Sign> = {
  Aries: "♈︎",
  Taurus: "♉︎",
  Gemini: "♊︎",
  Cancer: "♋︎",
  Leo: "♌︎",
  Virgo: "♍︎",
  Libra: "♎︎",
  Scorpio: "♏︎",
  Sagittarius: "♐︎",
  Capricorn: "♑︎",
  Aquarius: "♒︎",
  Pisces: "♓︎",
};

const PLANET_PROFILES: Record<Planet, PlanetProfile> = {
  "☉": {
    heading: "Core identity",
    bullets: [
      "Core identity and ego",
      "How you shine and express yourself",
      "Life purpose and main storyline",
      "What you are proud of and want recognition for",
    ],
  },
  "☽": {
    heading: "Your emotional, feminine, nurturing side",
    bullets: [
      "Who you want to be and what you admire",
      "Gut reactions and moods",
      "Emotional instincts and private needs",
    ],
  },
  "⥉": {
    heading: "Perception and self-expression",
    bullets: [
      "How people first read you",
      "Your style of self-expression",
      "The tone you set when entering a room",
    ],
  },
  "☿": {
    heading: "Mind and communication",
    bullets: [
      "How you think, speak, and process",
      "Your communication style",
      "How you learn and make connections",
    ],
  },
  "♀": {
    heading: "Love energy",
    bullets: [
      "How you give and receive affection",
      "Your tastes, attractions, and style of intimacy",
      "What feels beautiful, romantic, and pleasurable",
    ],
  },
  "♂": {
    heading: "Drive and aggression",
    bullets: [
      "How you pursue what you want",
      "Your anger style and competitive edge",
      "Your stamina, sex drive, and force of action",
    ],
  },
  "♃": {
    heading: "Beliefs, worldview, and philosophy",
    bullets: [
      "The way you make meaning out of life",
      "Your faith, ideals, and personal truth",
      "How you socialize in a structured way",
    ],
  },
  "♄": {
    heading: "Fears, insecurities, fun side",
    bullets: [
      "Where you feel pressure, fear, or inhibition",
      "Your discipline and how you regulate yourself",
      "How you socialize in an unstructured way",
    ],
  },
  "♅": {
    heading: "The generation",
    bullets: [
      "Collective traits shared with your age group",
      "Where the generation rebels and breaks patterns",
      "Long-wave social influence",
    ],
  },
  "♆": {
    heading: "The generation",
    bullets: [
      "Collective traits shared with your age group",
      "Dreams, illusions, and spiritual tone of a generation",
      "Long-wave cultural influence",
    ],
  },
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

const SIGN_DATES: Record<Sign, string> = {
  "♈︎": "March 21-April 19",
  "♉︎": "April 20-May 20",
  "♊︎": "May 21-June 20",
  "♋︎": "June 21-July 22",
  "♌︎": "July 23-August 22",
  "♍︎": "August 23-September 22",
  "♎︎": "September 23-October 22",
  "♏︎": "October 23-November 21",
  "♐︎": "November 22-December 21",
  "♑︎": "December 22-January 19",
  "♒︎": "January 20-February 18",
  "♓︎": "February 19-March 20",
};

const SIGN_PROFILES: Partial<Record<Sign, SignProfile>> = {
  "♈︎": {
    dates: SIGN_DATES["♈︎"],
    tagline: "Creation/Assertive",
    bullets: [
      "Direct, impulsive, action-oriented",
      "Likes to start things and take the lead",
      "Can be impatient or hot-headed",
      "Quick to act and speak, they prefer to speak than listen",
      "Quick of mind, quick to anger, and arrogant",
      "Calculates risks with lightning speed and acts accordingly",
      "Anxiety-prone",
      "Generous",
      "Frank and spontaneous",
      "Emotionally immature",
      "Can't hide if they don't like you",
      "Makeup sex",
      "Very independent, doesn't like taking others advice",
      "Respect is very important to them",
      "If they think you're up to no good, they'll cut you off quickly",
      "Loyal",
      "Hard-headed and stubborn",
      "Loves to be in the spotlight, class or office clown",
      "Falls for toxic people",
      "Needs reciprocation",
      "Very independent, doesn't wait for anybody",
    ],
  },
  "♉︎": {
    dates: SIGN_DATES["♉︎"],
    tagline: "Abundance/Possessive",
    bullets: [
      "Steady, grounded, comfort-seeking",
      "Values stability, touch, food, and security",
      "Can be stubborn or resistant to change",
      "Strong sense of practicality and common sense",
      "Enjoys routine, predictability, and familiar environments",
      "Sensual and very tuned into the body and physical pleasure",
      "Dislikes being rushed, pressured, or forced into decisions",
      "Feels the need to be right",
      "Cool calm and collected, but if you get them mad, you get the horns",
      "Love language is food",
      "Loves bargains, deals and discounts",
    ],
  },
  "♊︎": {
    dates: SIGN_DATES["♊︎"],
    tagline: "Communicate/Curiosity",
    bullets: [
      "Curious, chatty, mentally active",
      "Likes variety, information, and conversation",
      "Can be scattered or inconsistent",
      "Versatile and able to switch between topics, roles, or moods quickly",
      "Easily bored without mental stimulation",
      'Not a "deep-diver"',
      "Skilled at seeing multiple sides of a situation and arguing from any angle",
      "Can come across as detached or insincere",
    ],
  },
  "♋︎": {
    dates: SIGN_DATES["♋︎"],
    tagline: "Security/Feeler",
    bullets: [
      "Emotional, protective, family-focused",
      "Needs safety, home, and emotional closeness",
      "Can be moody or defensive",
      "Very sensitive but hides behind a tough exterior (like a crab)",
      "Envious",
      "When one crab tries to get out of a bucket, all the other crabs pull it down because they don't want to see someone succeed if they can't succeed",
      'Nurturing and caring, often taking on a "mom" or protector role in groups',
      "Highly intuitive and sensitive to the emotional atmosphere in a room",
      "Deeply attached to memories, traditions, and sentimental objects",
      "Can hold grudges and find it hard to fully let go of past hurts",
      "Withdraws into their shell when overwhelmed or feeling unsafe",
      "Strong instinct to protect loved ones, sometimes to the point of overprotection or control",
      "Forgives easily and then unforgives",
      "Ride or die",
      "Will assimilate to their partners",
      "Distant if upset or annoyed",
    ],
  },
  "♌︎": {
    dates: SIGN_DATES["♌︎"],
    tagline: "Expression/Creative",
    bullets: [
      "Expressive, proud, dramatic in a playful way",
      "Wants recognition, appreciation, and admiration",
      "Can be attention-seeking or ego-sensitive",
      "Charming",
      "Magnetic",
      "Sociable",
      "Creative",
      "Egotistical with a strong sense of personal pride and dignity",
      'Loyal to those they love and protective of their "pride" or inner circle',
      "Loves fun, parties, and environments where they can shine",
      "Needs to feel admired and respected to stay fully engaged",
      "Not hurt by insults",
      "Cuts people off",
    ],
  },
  "♍︎": {
    dates: SIGN_DATES["♍︎"],
    tagline: "Analysis/Analyze",
    bullets: [
      "Analytical, detail-focused, practical",
      "Likes fixing and improving including with their partners",
      "Can be self-critical or anxious about imperfections",
      "Service-oriented, likes being useful and supportive behind the scenes",
      "Judgmental",
      "Loves giving recommendations",
      "Returns compliments",
    ],
  },
  "♎︎": {
    dates: SIGN_DATES["♎︎"],
    tagline: "Relating/Harmony",
    bullets: [
      "Social, diplomatic, relationship-focused",
      "Needs fairness, balance, and pleasing aesthetics",
      "Can be indecisive or people-pleasing",
      "The masculine side of a feminine planet",
      "Avoidant, procrastinates",
      "Ability to see both sides of everything",
      "Peacemaking",
      "Talkative",
      "Will tell you if they don't like something",
      "Bottles up feelings",
      "Good at manipulation",
      "Vengeful",
      "Lies",
      "Reciprocation is important to them",
      "Loves to be in love",
      "Promiscuous",
      "High standards",
      "Flirts whether they want to or not",
      "Prodigal, likes expensive things",
      "Bad with money",
      "Social justice warrior",
      "Self-aware of how they are perceived by others",
      "Charismatic and charming when they want something",
      "Drawn to beauty, art, fashion, and design",
      "Hates conflict but starts it indirectly if feeling wronged",
      "Needs partnership or close connection to feel complete",
      "Can stay in unbalanced relationships to avoid being alone",
      "Uses charm, humor, or sweetness to avoid heavy emotional confrontations",
    ],
  },
  "♏︎": {
    dates: SIGN_DATES["♏︎"],
    tagline: "Power/Transformative",
    bullets: [
      "Intense, private, and emotionally deep",
      "Drawn to power and transformation",
      "Can be suspicious, controlling, or all-or-nothing",
      'Will try to "find you out"',
      "Sees things and then acts like they didn't",
      "Largely associated with the symbol of death",
      "The feminine side of a masculine planet",
      'Magnetic and mysterious, others often feel "pulled in" by their presence',
      "Highly intuitive and good at reading hidden motives and subtext",
      "Loyal to the point of obsession once trust is earned",
      "Holds grudges and has difficulty forgiving true betrayals",
      "Fascinated by taboos, psychology, secrets, and the darker side of life",
      "Capable of extreme self-destruction or powerful self-reinvention",
      "Can be both deeply healing and deeply wounding, depending on how they use their power",
      "Trust issues",
      "Is very good at reading people",
      "Judges people",
      "Good secret-keeper",
      '"My way or the highway"',
      "Stares when they are attracted to somebody",
      "Good at reading people but they themselves are hard to read",
    ],
  },
  "♐︎": {
    dates: SIGN_DATES["♐︎"],
    tagline: "Wisdom/Idealize",
    bullets: [
      "Likes challenge and adventure",
      "Seeks truth, freedom, and new experiences",
      "Can be blunt, restless, or commitment-shy",
      "Narcissist",
      "Lacks self-awareness",
      "Don't admit mistakes",
      "Don't compromise",
      "Optimistic to the point of overlooking practical details",
      "Philosophical, always searching for a larger meaning or big-picture lesson",
      "Loves travel, exploration, and breaking out of routines",
      "No filter",
      "Says what they think even when it is tactless or poorly timed",
      "Tends to exaggerate stories or promises without fully following through",
      "Values independence so much that they can sabotage closeness or stability",
      "Can come off as morally superior or know-it-all when convinced they are right",
      "FOMO",
      "Loves instant gratification",
      "Deals some low blows",
      "Stirs the pot",
      "You wanted someone so bad in your life but he broke your heart and went away and because of that you faced trauma",
    ],
  },
  "♑︎": {
    dates: SIGN_DATES["♑︎"],
    tagline: "Ambition/Achieve",
    bullets: [
      "Ambitious, responsible, goal-oriented",
      "Focused on status, results, and long-term success",
      "Can be strict, cold, or overly work-focused",
      "Highly disciplined",
      "Willing to sacrifice now for future gains, which makes them entrepreneurial",
      "Loves money and mainly stability, thinks about money a lot",
      "Practical, realistic, and cautious in decision-making",
      "Strong sense of duty and obligation to family, work, or community",
      "Values structure, rules, and clear hierarchies",
      "Respectful of authority but also desires authority",
      "Emotionally and uncomfortable with vulnerability",
      "Measures worth (their own and others') by reliability, competence, and achievement",
      "Comes off really serious but then is really fun and goofy when comfortable",
      "Romantic",
      "Suspicious of others, doesn't trust people",
    ],
  },
  "♒︎": {
    dates: SIGN_DATES["♒︎"],
    tagline: "Innovation/Networking",
    bullets: [
      "Independent, unconventional, future-focused",
      "Values ideas, causes, and community",
      "Can be detached or rebellious",
      "Strong need for personal freedom and space in relationships",
      "Low social battery",
      "Often feels like an outsider",
      "Friendly on the surface but slow to let people into their inner world",
      "Can be unpredictable, doing the opposite of what others expect",
      "Values equality and hates hypocrisy, double standards, or unfair systems",
      "Awkward when they're attracted to you",
      "Good leadership",
    ],
  },
  "♓︎": {
    dates: SIGN_DATES["♓︎"],
    tagline: "Connection/Intuition",
    bullets: [
      "Can feel overwhelmed or insecure when things are too aggressive",
      "Highly sensitive, empathetic, and imaginative",
      "Needs emotional flow, creativity, and spiritual or emotional meaning",
      "Can escape into fantasy, art, or avoidance when stressed",
      "Absorbs other people's moods and energy like a sponge",
      "Has a rich inner world of dreams, symbols, and subtle impressions",
      "Can have trouble saying no",
      "Easily moved by music, film, poetry, and anything emotionally evocative",
      "Can appear spaced out, vague, or unreliable when overwhelmed",
      "Falls in love easily",
      "Sensitive to tone",
      "Strongly avoidant if they sense negative energy",
      "Social butterfly",
      "Values fairness",
      "Sees everyone in a positive light until it's not and then that person is dead to them",
      "Cuts people off and never looks back",
      "Loyal, gives their whole selves in their relationships",
      "Nasty in bed",
      "Nurturing and protective",
      "Resilient",
      "Plays dumb",
    ],
  },
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

const ASTROSEEK_PERSON_A_ROWS: Array<{ planet: Planet; rowIndex: number }> = [
  { planet: "☉", rowIndex: 0 },
  { planet: "☽", rowIndex: 1 },
  { planet: "☿", rowIndex: 2 },
  { planet: "♀", rowIndex: 3 },
  { planet: "♂", rowIndex: 4 },
  { planet: "♃", rowIndex: 5 },
  { planet: "♄", rowIndex: 6 },
  { planet: "♅", rowIndex: 7 },
  { planet: "♆", rowIndex: 8 },
  { planet: "⥉", rowIndex: 15 },
];

const ASTROSEEK_PERSON_B_COLUMNS: Array<{ planet: Planet; columnIndex: number }> = [
  { planet: "☉", columnIndex: 0 },
  { planet: "☽", columnIndex: 1 },
  { planet: "☿", columnIndex: 2 },
  { planet: "♀", columnIndex: 3 },
  { planet: "♂", columnIndex: 4 },
  { planet: "♃", columnIndex: 5 },
  { planet: "♄", columnIndex: 6 },
  { planet: "♅", columnIndex: 7 },
  { planet: "♆", columnIndex: 8 },
  { planet: "⥉", columnIndex: 15 },
];

type SynastryRectOverride = {
  dx: number;
  dy: number;
  scale?: number;
};

type SynastryOverrideMap = Partial<Record<Planet, SynastryRectOverride>>;

const SYN_A_STORAGE_KEY = "love-computer-synastry-a";
const SYN_B_STORAGE_KEY = "love-computer-synastry-b";
const SAVED_CHARTS_STORAGE_KEY = "love-computer-saved-charts";
const MODAL_NOTES_STORAGE_KEY = "love-computer-modal-notes";
const NOTE_MARKER_STORAGE_KEY = "love-computer-note-marker-offset";
const REPORT_SKIN_STORAGE_KEY = "love-computer-report-skin";
const CLOCK_CALCULATOR_STORAGE_KEY = "love-computer-clock-calculator";
const PAGE_NAV_ITEMS = [
  { href: "#placements", symbol: "✎", label: "Placements" },
  { href: "#comparison-grid", symbol: "▤", label: "Comparison Grid" },
  { href: "#summaries", symbol: "☯", label: "Elements And Gender" },
  { href: "#roots-of-element", symbol: "◉", label: "Roots Of The Element" },
  { href: "#houses", symbol: "⌂", label: "Houses" },
] as const;

function getSavedChartsStorageKey(usernameLower?: string | null) {
  return usernameLower ? `${SAVED_CHARTS_STORAGE_KEY}:${usernameLower}` : SAVED_CHARTS_STORAGE_KEY;
}

function getModalNotesStorageKey(usernameLower?: string | null) {
  return usernameLower ? `${MODAL_NOTES_STORAGE_KEY}:${usernameLower}` : MODAL_NOTES_STORAGE_KEY;
}

const ASTROSEEK_SYN_A_OVERRIDES: SynastryOverrideMap = {
  "☉": { dx: -21 / 700, dy: 9 / 1275, scale: 1.1 },
  "☽": { dx: -20 / 700, dy: 10 / 1275 },
  "☿": { dx: -20 / 700, dy: 20 / 1275 },
  "♀": { dx: -20 / 700, dy: 20 / 1275 },
  "♂": { dx: -20 / 700, dy: 20 / 1275 },
  "♃": { dx: -20 / 700, dy: 20 / 1275 },
  "♄": { dx: -20 / 700, dy: 20 / 1275 },
  "♅": { dx: -20 / 700, dy: 20 / 1275 },
  "♆": { dx: -20 / 700, dy: 20 / 1275 },
  "⥉": { dx: -18 / 700, dy: 32 / 1275 },
};

const ASTROSEEK_SYN_B_OVERRIDES: SynastryOverrideMap = {
  "☉": { dx: 33 / 700, dy: -46 / 1275 },
  "☽": { dx: 33 / 700, dy: -46 / 1275 },
  "☿": { dx: 33 / 700, dy: -46 / 1275 },
  "♀": { dx: 30 / 700, dy: -46 / 1275 },
  "♂": { dx: 27 / 700, dy: -46 / 1275 },
  "♃": { dx: 26 / 700, dy: -46 / 1275 },
  "♄": { dx: 26 / 700, dy: -46 / 1275 },
  "♅": { dx: 26 / 700, dy: -46 / 1275 },
  "♆": { dx: 26 / 700, dy: -46 / 1275 },
  "⥉": { dx: 26 / 700, dy: -46 / 1275 },
};

const ASTROSEEK_LAYOUT = {
  wheelCenterX: 0.5,
  wheelCenterY: 0.286,
  wheelSignRadius: 0.41,
  wheelTemplateBox: 0.06,
  personASignBox: {
    x: 0.197,
    y: 0.644,
    w: 0.026,
    h: 0.017,
    stepY: 0.0182,
  },
  personBSignBox: {
    x: 0.255,
    y: 0.616,
    w: 0.024,
    h: 0.018,
    stepX: 0.0366,
  },
};

const ASTROSEEK_SIGN_ANGLES: Record<Sign, number> = {
  "♈︎": 300,
  "♉︎": 270,
  "♊︎": 240,
  "♋︎": 210,
  "♌︎": 180,
  "♍︎": 150,
  "♎︎": 120,
  "♏︎": 90,
  "♐︎": 60,
  "♑︎": 30,
  "♒︎": 0,
  "♓︎": 330,
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

const ROOTS_OF_POWER_TABLE: Record<Sign, RootPowerDefinition[]> = {
  "♈︎": [
    { planet: "☉", text: "Established Strength [Virtue]" },
    { planet: "♀", text: "Perfected Work [Completion]" },
    { planet: "♂", text: "Lord of Dominion" },
  ],
  "♉︎": [
    { planet: "☽", text: "Material Success [Success]" },
    { planet: "☿", text: "Material Trouble [Worry]" },
    { planet: "♄", text: "Success Unfulfilled [Failure]" },
  ],
  "♊︎": [
    { planet: "☉", text: "Ruin" },
    { planet: "♂", text: "Despair and Cruelty [Cruelty]" },
    { planet: "♃", text: "Shortened Force [Interference]" },
  ],
  "♋︎": [
    { planet: "☽", text: "Blended Pleasure [Luxury]" },
    { planet: "☿", text: "Abundance" },
    { planet: "♀", text: "Lord of Love" },
  ],
  "♌︎": [
    { planet: "♂", text: "Valour" },
    { planet: "♃", text: "Victory" },
    { planet: "♄", text: "Strife" },
  ],
  "♍︎": [
    { planet: "☉", text: "Prudence" },
    { planet: "☿", text: "Wealth" },
    { planet: "♀", text: "Material Gain [Gain]" },
  ],
  "♎︎": [
    { planet: "☽", text: "The Lord of Peace Restored [Peace]" },
    { planet: "♃", text: "Rest from Strife [Truce]" },
    { planet: "♄", text: "Sorrow" },
  ],
  "♏︎": [
    { planet: "☉", text: "Pleasure" },
    { planet: "♀", text: "Illusionary Success [Debauch]" },
    { planet: "♂", text: "Loss in Pleasure [Disappointment]" },
  ],
  "♐︎": [
    { planet: "☽", text: "Great Strength [Strength]" },
    { planet: "☿", text: "Swiftness" },
    { planet: "♄", text: "Oppression" },
  ],
  "♑︎": [
    { planet: "☉", text: "Earthly Power [Power]" },
    { planet: "♂", text: "Material Works [Works]" },
    { planet: "♃", text: "The Lord of Harmonious Change [Change]" },
  ],
  "♒︎": [
    { planet: "☽", text: "Unstable Effort [Futility]" },
    { planet: "☿", text: "Earned Success [Science]" },
    { planet: "♀", text: "Defeat" },
  ],
  "♓︎": [
    { planet: "♂", text: "Perfected Success [Satiety]" },
    { planet: "♃", text: "Material Happiness [Happiness]" },
    { planet: "♄", text: "Abandoned Success [Indolence]" },
  ],
};

const ROOTS_ELEMENT_LABELS: Record<Element, string> = {
  air: "Roots of the Air",
  water: "Roots of the Water",
  earth: "Roots of the Earth",
  fire: "Roots of the Fire",
};

const ROOTS_ELEMENT_ORDER: Element[] = ["air", "water", "earth", "fire"];

const ROOTS_TABLE_ORDER: Sign[] = [
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

const HOUSE_COPY = [
  "Self, Mask, Impression",
  "Money, Stuff, Self-Worth",
  "Mind, Words, Siblings",
  "Home, Roots",
  "Fun, Creativity",
  "Health, Daily Habits, Routine",
  "Relationships, Partnership",
  "Intensity, Shadow",
  "Beliefs, Travel, Expansion",
  "Career, Reputation, Public Role",
  "Friends, Community, Future Goals",
  "Subconscious, Isolation",
] as const;

const MAX_HOUSE_PLACEMENTS = 4;

const DEFAULT_HOUSE_ASSIGNMENTS: HouseAssignment[] = SIGNS.map((sign) => ({
  placements: [{ sign, planet: "" }],
}));

const AUTO_HOUSE_PLANET_ORDER: HousePlanet[] = ["☉", "☽", "⥉", "☿", "♀", "♂", "♃", "♄", "♅", "♆", "♇"];
const AUTO_HOUSE_PLANET_SYMBOLS: Record<AstrologyHousePlanetKey, HousePlanet> = {
  sun: "☉",
  moon: "☽",
  ascendant: "⥉",
  mercury: "☿",
  venus: "♀",
  mars: "♂",
  jupiter: "♃",
  saturn: "♄",
  uranus: "♅",
  neptune: "♆",
  pluto: "♇",
};

const DAYS_OF_WEEK: DayOfWeek[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DAY_RULERS: Record<DayOfWeek, Planet> = {
  Sunday: "☉",
  Monday: "☽",
  Tuesday: "♂",
  Wednesday: "☿",
  Thursday: "♃",
  Friday: "♀",
  Saturday: "♄",
};

const PLANETARY_HOUR_ORDER: Planet[] = ["♄", "♃", "♂", "☉", "♀", "☿", "☽"];

const PLANETARY_HOUR_WORDS: Record<Planet, string> = {
  "☉": "Strength",
  "♀": "Happiness",
  "☿": "Mind",
  "☽": "Intuition",
  "♄": "Pressure",
  "♃": "Wealth",
  "♂": "Aggression",
  "⥉": "",
  "♅": "",
  "♆": "",
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

const SIGN_RULERS: Record<Sign, Planet[]> = {
  "♈︎": ["♂"],
  "♉︎": ["♀"],
  "♊︎": ["☿"],
  "♋︎": ["☽"],
  "♌︎": ["☉"],
  "♍︎": ["☿"],
  "♎︎": ["♀"],
  "♏︎": ["♂"],
  "♐︎": ["♃"],
  "♑︎": ["♄"],
  "♒︎": ["♄", "♅"],
  "♓︎": ["♃", "♆"],
};

const EVOLVED_SELF_PLANETS: Planet[] = ["☉", "☽", "☿", "♀", "♂", "♃", "♄"];

const EVOLVED_SELF_TRAITS: Record<
  Sign,
  {
    phrase: string;
    usesAt: boolean;
    starseedName: string;
  }
> = {
  "♈︎": { phrase: "asserting", usesAt: true, starseedName: "Aries" },
  "♉︎": { phrase: "keeping possessions", usesAt: true, starseedName: "Taurus" },
  "♊︎": { phrase: "communicating", usesAt: true, starseedName: "Gemini" },
  "♋︎": { phrase: "emoting", usesAt: true, starseedName: "Cancer" },
  "♌︎": { phrase: "radiating", usesAt: true, starseedName: "Leo" },
  "♍︎": { phrase: "analyzing", usesAt: true, starseedName: "Virgo" },
  "♎︎": { phrase: "relating", usesAt: true, starseedName: "Libra" },
  "♏︎": { phrase: "transforming", usesAt: true, starseedName: "Scorpio" },
  "♐︎": { phrase: "crusading", usesAt: true, starseedName: "Sagittarius" },
  "♑︎": { phrase: "entrepreneurship", usesAt: true, starseedName: "Capricorn" },
  "♒︎": { phrase: "innovating", usesAt: true, starseedName: "Aquarius" },
  "♓︎": { phrase: "intuition", usesAt: false, starseedName: "Pisces" },
};

const EVOLVED_SELF_COMPETING: Record<Sign, Sign[]> = {
  "♈︎": ["♑︎", "♋︎"],
  "♉︎": ["♌︎", "♒︎"],
  "♊︎": ["♓︎", "♍︎"],
  "♋︎": ["♈︎", "♎︎"],
  "♌︎": ["♏︎", "♉︎"],
  "♍︎": ["♊︎", "♐︎"],
  "♎︎": ["♑︎", "♋︎"],
  "♏︎": ["♌︎", "♒︎"],
  "♐︎": ["♓︎", "♍︎"],
  "♑︎": ["♈︎", "♎︎"],
  "♒︎": ["♏︎", "♉︎"],
  "♓︎": ["♊︎", "♐︎"],
};

const EVOLVED_SELF_AWKWARD: Record<Sign, Sign[]> = {
  "♈︎": ["♍︎", "♏︎"],
  "♉︎": ["♎︎", "♐︎"],
  "♊︎": ["♏︎", "♑︎"],
  "♋︎": ["♐︎", "♒︎"],
  "♌︎": ["♑︎", "♓︎"],
  "♍︎": ["♈︎", "♒︎"],
  "♎︎": ["♓︎", "♉︎"],
  "♏︎": ["♈︎", "♊︎"],
  "♐︎": ["♉︎", "♋︎"],
  "♑︎": ["♊︎", "♌︎"],
  "♒︎": ["♋︎", "♍︎"],
  "♓︎": ["♎︎", "♌︎"],
};

const EVOLVED_SELF_QUALITY_LABELS = [
  "Very poor",
  "Poor",
  "O.K.",
  "Good",
  "Great",
  "Excellent",
  "Godmind",
] as const;

const NEW_SIGNS: Sign[] = ["♓︎", "♐︎", "♌︎", "♋︎", "♎︎", "♉︎"];
const OLD_SIGNS: Sign[] = ["♒︎", "♑︎", "♈︎", "♏︎", "♊︎", "♍︎"];
const NEW_PLACEMENTS: Planet[] = ["♃", "☉", "☽", "♀"];
const OLD_PLACEMENTS: Planet[] = ["♄", "☿", "♂"];

const PLANET_QUALIFIERS: Record<Planet, string> = {
  "☉": "self",
  "☽": "dark side",
  "⥉": "politics",
  "☿": "mind",
  "♀": "heart",
  "♂": "drive",
  "♃": "philosophy of life",
  "♄": "discipline",
  "♅": "generation",
  "♆": "generation",
};

const SIGN_QUALIFIERS: Record<Sign, string> = {
  "♈︎": "assertive",
  "♉︎": "possessive",
  "♊︎": "well-spoken",
  "♋︎": "emotional",
  "♌︎": "inspiring",
  "♍︎": "analytical",
  "♎︎": "objective",
  "♏︎": "transformational",
  "♐︎": "liberating",
  "♑︎": "entrepreneurial",
  "♒︎": "innovative",
  "♓︎": "intuitive",
};

const CHART_SUMMARY_PLANET_WORDS: Record<Planet, string> = {
  "☉": "Ego",
  "☽": "Emotion",
  "⥉": "Perception",
  "☿": "Mind",
  "♀": "Heart",
  "♂": "Drive",
  "♃": "Philosophy",
  "♄": "Discipline",
  "♅": "Generation",
  "♆": "Generation",
};

const CHART_SUMMARY_SIGN_WORDS: Record<Sign, string> = {
  "♈︎": "assertive",
  "♉︎": "possessive",
  "♊︎": "well-spoken",
  "♋︎": "emotional",
  "♌︎": "inspiring",
  "♍︎": "analytical",
  "♎︎": "relating",
  "♏︎": "transformational",
  "♐︎": "liberating",
  "♑︎": "entrepreneurial",
  "♒︎": "innovative",
  "♓︎": "intuitive",
};

const UNEVOLVED_RISING_WORDS: Record<Sign, string> = {
  "♈︎": "impulsive",
  "♉︎": "lazy",
  "♊︎": "nosy",
  "♋︎": "faux-naif",
  "♌︎": "self absorbed",
  "♍︎": "pseudo-intellectual",
  "♎︎": "phony",
  "♏︎": "sly",
  "♐︎": "loudly stupid",
  "♑︎": "negging",
  "♒︎": "pretentious",
  "♓︎": "delusional",
};

const UNEVOLVED_SUN_WORDS: Record<Sign, string> = {
  "♈︎": "rabid chihuahua",
  "♉︎": "gold digger",
  "♊︎": "two-faced meddler",
  "♋︎": "hangry toddler",
  "♌︎": "bratty drama queen",
  "♍︎": "obnoxious wiseacre",
  "♎︎": "manipulative mean-girl",
  "♏︎": "sadistic puppet-master",
  "♐︎": "sanctimonious preacher",
  "♑︎": "coldhearted strategist",
  "♒︎": "arrogant ghoster",
  "♓︎": "whiny escapist",
};

const UNEVOLVED_MOON_WORDS: Record<Sign, string> = {
  "♈︎": "to be put in a strait jacket",
  "♉︎": "to stop treating people like possessions",
  "♊︎": "to get their shit together",
  "♋︎": "anger management therapy",
  "♌︎": "to realize the world doesn't revolve around them",
  "♍︎": "some fucking xanax",
  "♎︎": 'to add the word "honesty" to their vocabulary',
  "♏︎": "to learn to feel empathy for others than themselves",
  "♐︎": "to shut the fuck up sometimes",
  "♑︎": "laxatives for that emotional constipation",
  "♒︎": "to stop gaslighting everyone (especially themselves)",
  "♓︎": "a reality check",
};

const ELEMENT_SYMBOLS: Record<Element, string> = {
  fire: "🜂",
  earth: "🜃",
  air: "🜁",
  water: "🜄",
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

const MONTH_OPTIONS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const DAY_OPTIONS = Array.from({ length: 31 }, (_, index) => String(index + 1));
const MAX_BIRTH_YEAR = Math.max(new Date().getFullYear(), 2045);
const YEAR_OPTIONS = Array.from({ length: MAX_BIRTH_YEAR - 1899 }, (_, index) =>
  String(MAX_BIRTH_YEAR - index)
);
const HOUR_OPTIONS = Array.from({ length: 12 }, (_, index) => String(index + 1));
const MINUTE_OPTIONS = Array.from({ length: 60 }, (_, index) => String(index).padStart(2, "0"));

const DISTRIBUTION_ORDER = {
  element: ["fire", "earth", "air", "water"] as const,
  modality: ["cardinal", "fixed", "mutable"] as const,
  gender: ["masculine", "feminine", "eunuch", "hermaphrodite", "virgin"] as const,
};

const ROMANTIC_MATCH_TARGET_PLANETS: Planet[] = ["☉", "☽", "☿", "♀", "♂", "♄", "♃"];

const ROMANTIC_MATCH_POINTS: Record<RelationType, number> = {
  "same-sign": 2,
  "same-element": 1,
  "elemental-harmony": 3,
  teamwork: 3,
  competing: -2,
  awkward: -1,
  okay: 0,
};

const NATURE_LABELS: Record<Element, Partial<Record<Element, string>>> = {
  fire: { water: "Lonely", earth: "Assertive", air: "Brave" },
  water: { fire: "Defensive", earth: "Naughty", air: "Mischievous" },
  earth: { fire: "Modest", water: "Mild", air: "Gentle" },
  air: { fire: "Timid", water: "Hasty", earth: "Happy & Naive" },
};

const ENERGY_COMBINATIONS: Record<string, { title: string; symbol: string }> = {
  "feminine+hermaphrodite": { title: "Open Energy", symbol: "⚣" },
  "hermaphrodite+masculine": { title: "Oppressed Energy", symbol: "☻" },
  "eunuch+hermaphrodite": { title: "Chastised Energy", symbol: "⚲" },
  "feminine+masculine": { title: "Harmonized Energy", symbol: "⚤" },
  "feminine+feminine": { title: "Hyper-Feminine Energy", symbol: "♀" },
  "masculine+masculine": { title: "Hyper-Masculine Energy", symbol: "♂" },
  "feminine+virgin": { title: "Divine Feminine Energy", symbol: "✧" },
  "masculine+virgin": { title: "Sacred Masculine Energy", symbol: "✦" },
  "hermaphrodite+virgin": { title: "Unholy Energy", symbol: "⚝" },
  "eunuch+virgin": { title: "Holy Energy", symbol: "✡" },
  "eunuch+masculine": { title: "Chauvinist Energy", symbol: "⚦" },
  "eunuch+feminine": { title: "Prudent Energy", symbol: "✟" },
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

function genderGlyph(category: GenderCategory) {
  switch (category) {
    case "masculine":
      return "♂";
    case "feminine":
      return "♀";
    case "eunuch":
      return "⚲";
    case "hermaphrodite":
      return "⚧";
    case "virgin":
      return "☿";
  }
}

function getSignGenderText(sign: Sign) {
  return SIGN_GENDERS[sign].map(genderGlyph).join("");
}

function getSignProfile(sign: Sign) {
  const profile = SIGN_PROFILES[sign];

  if (profile) return profile;

  return {
    dates: SIGN_DATES[sign],
    bullets: ["Custom sign interpretation coming next."],
  } satisfies SignProfile;
}

function getWeightedPlacements(values: PlacementMap) {
  const primary = SUMMARY_PERSONAL_PLANETS.filter((planet) => values[planet]).map((planet) => ({
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
  const astrological = countsToPercentages(countGenderSymbols(SUMMARY_PERSONAL_PLANETS, values));
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

function pickVisiblePlanets(showGenerational: boolean) {
  return showGenerational ? PLANETS : PRIMARY_PLANETS.filter((planet) => planet !== "⥉");
}

function filterPlacementMap(values: PlacementMap, visiblePlanets: Planet[]) {
  const next: PlacementMap = {};
  for (const planet of visiblePlanets) {
    next[planet] = values[planet] ?? "";
  }
  return next;
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

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function buildYinYangDistribution(elementDistribution: Record<Element, number>) {
  return {
    yin: elementDistribution.water + elementDistribution.earth,
    yang: elementDistribution.fire + elementDistribution.air,
  };
}

function buildYinYangRows(
  a: Record<"yin" | "yang", number>,
  b: Record<"yin" | "yang", number>,
  combined: Record<"yin" | "yang", number>
) {
  return [
    { label: "Yin", a: a.yin, b: b.yin, combined: combined.yin },
    { label: "Yang", a: a.yang, b: b.yang, combined: combined.yang },
  ] satisfies DistributionRow[];
}

function pickExtremeElement(distribution: Record<Element, number>, mode: "max" | "min") {
  const ordered = DISTRIBUTION_ORDER.element.map((element) => ({
    element,
    value: distribution[element],
  }));

  return ordered.reduce((best, current) => {
    if (mode === "max") return current.value > best.value ? current : best;
    return current.value < best.value ? current : best;
  }).element;
}

function getNatureQualifier(distribution: Record<Element, number>) {
  const highest = pickExtremeElement(distribution, "max");
  const lowest = pickExtremeElement(distribution, "min");
  return NATURE_LABELS[highest][lowest] ?? "Balanced";
}

function buildQualifierRows(label: string, a: string, b: string, combined: string) {
  return [{ label, a, b, combined }] satisfies QualifierRow[];
}

function sortGenderKey(a: GenderCategory, b: GenderCategory) {
  return [a, b].sort().join("+");
}

function getEnergyPair(distribution: Record<GenderCategory, number>): [GenderCategory, GenderCategory] {
  if (distribution.masculine > 60) return ["masculine", "masculine"];
  if (distribution.feminine > 60) return ["feminine", "feminine"];

  const all = DISTRIBUTION_ORDER.gender
    .map((key) => ({ key, value: distribution[key] }))
    .sort((a, b) => b.value - a.value);

  const atypical = all.filter(
    (item) => item.key === "eunuch" || item.key === "hermaphrodite" || item.key === "virgin"
  );
  const aboveTwenty = atypical.filter((item) => item.value > 20);

  if (aboveTwenty.length >= 2) {
    return [aboveTwenty[0].key, aboveTwenty[1].key];
  }

  const topTwo = all.slice(0, 2);
  const topIsTypicalPair =
    topTwo.every((item) => item.key === "masculine" || item.key === "feminine");
  const aboveSeventeen = atypical.filter((item) => item.value >= 17);

  if (topIsTypicalPair && aboveSeventeen.length > 0) {
    const lead = distribution.masculine >= distribution.feminine ? "masculine" : "feminine";
    return [lead, aboveSeventeen[0].key];
  }

  return [topTwo[0].key, topTwo[1].key];
}

function getEnergyQualifier(distribution: Record<GenderCategory, number>) {
  const [first, second] = getEnergyPair(distribution);
  const combo = ENERGY_COMBINATIONS[sortGenderKey(first, second)];

  if (combo) return `${combo.title} ${combo.symbol}`;

  return `${capitalize(first)} + ${capitalize(second)}`;
}

function formatMultiplierNumber(value: number) {
  return value.toFixed(2).replace(/\.?0+$/, "");
}

function scoreRomanticBaseAgainstPartner(
  sourcePlacements: PlacementMap,
  partnerPlacements: PlacementMap,
  basePlanet: "♀" | "♂"
) {
  const baseSign = sourcePlacements[basePlanet];
  if (!baseSign) return 0;

  let score = 0;

  for (const targetPlanet of ROMANTIC_MATCH_TARGET_PLANETS) {
    const partnerSign = partnerPlacements[targetPlanet];
    if (!partnerSign) continue;

    const relation = classifyRelation(baseSign as Sign, partnerSign as Sign);
    score += ROMANTIC_MATCH_POINTS[relation];
  }

  return score;
}

function buildRomanticMatchMultiplier(personA: PlacementMap, personB: PlacementMap) {
  const aLoveScore = scoreRomanticBaseAgainstPartner(personA, personB, "♀");
  const bLoveScore = scoreRomanticBaseAgainstPartner(personB, personA, "♀");
  const aSexScore = scoreRomanticBaseAgainstPartner(personA, personB, "♂");
  const bSexScore = scoreRomanticBaseAgainstPartner(personB, personA, "♂");

  const loveMatch = (aLoveScore + bLoveScore) / 2;
  const sexMatch = (aSexScore + bSexScore) / 2;
  const aRomanticMatch = (aLoveScore + aSexScore) / 2;
  const bRomanticMatch = (bLoveScore + bSexScore) / 2;
  const romanticMatch = (loveMatch + sexMatch) / 2;

  return {
    aLoveScore,
    bLoveScore,
    loveMatch,
    aSexScore,
    bSexScore,
    sexMatch,
    aRomanticMatch,
    bRomanticMatch,
    romanticMatch,
    aMultiplier: `${formatMultiplierNumber(aRomanticMatch)}x`,
    bMultiplier: `${formatMultiplierNumber(bRomanticMatch)}x`,
  };
}

function ModalDetail({
  planet,
  sign,
}: {
  planet: Planet;
  sign: Sign;
}) {
  const planetProfile = PLANET_PROFILES[planet];
  const signProfile = getSignProfile(sign);

  return (
    <div className="modal-detail">
      <div className="modal-block">
        <p className="modal-block-label">
          {planet} {PLANET_LABELS[planet]}
        </p>
        <h3>{planetProfile.heading}</h3>
        <ul className="modal-list">
          {planetProfile.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>

      <div className="modal-divider">=</div>

      <div className="modal-block">
        <p className="modal-block-label">
          {SIGN_LABELS[sign]} {getSignGenderText(sign)}
          {signProfile.tagline ? ` (${signProfile.tagline})` : ""}
        </p>
        <p className="modal-date">{signProfile.dates}</p>
        <ul className="modal-list">
          {signProfile.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function getChipTone(sex: Sex) {
  return sex === "male" ? "male" : "female";
}

function getCardPlanetLabel(planet: Planet) {
  return planet === "⥉" ? "Rising" : PLANET_LABELS[planet];
}

function placementSignature(values: PlacementMap) {
  return PLANETS.map((planet) => `${planet}:${values[planet] || "-"}`).join("|");
}

function normalizeSoloCellKey(cell: GridCell) {
  const pair = [
    { planet: cell.aPlanet, sign: cell.aSign },
    { planet: cell.bPlanet, sign: cell.bSign },
  ].sort((left, right) => PLANETS.indexOf(left.planet) - PLANETS.indexOf(right.planet));

  return `${pair[0].planet}:${pair[0].sign}|${pair[1].planet}:${pair[1].sign}`;
}

function buildModalNoteKey(
  cell: GridCell,
  mode: GridViewMode,
  personAName: string,
  personA: PlacementMap,
  personBName: string,
  personB: PlacementMap
) {
  if (mode === "couple") {
    return [
      "couple",
      personAName,
      placementSignature(personA),
      personBName,
      placementSignature(personB),
      `${cell.aPlanet}:${cell.aSign}|${cell.bPlanet}:${cell.bSign}`,
    ].join("::");
  }

  const soloName = mode === "partner-a" ? personAName : personBName;
  const soloPlacements = mode === "partner-a" ? personA : personB;

  return ["solo", soloName, placementSignature(soloPlacements), normalizeSoloCellKey(cell)].join("::");
}

function getNoteMarkerRotation(noteKey: string) {
  let hash = 0;
  for (let index = 0; index < noteKey.length; index += 1) {
    hash = (hash * 31 + noteKey.charCodeAt(index)) % 9973;
  }

  const normalized = (hash % 9) - 4;
  return normalized * 0.6;
}

function getInteractionVerb(relation: RelationType) {
  switch (relation) {
    case "teamwork":
      return "works well with";
    case "awkward":
      return "is awkward with";
    case "competing":
      return "is competing with";
    case "elemental-harmony":
      return "is harmonized with";
    case "same-element":
      return "works similarly to";
    case "same-sign":
      return "is similar to";
    case "okay":
      return "is okay with";
  }
}

function getRelationStatus(relation: RelationType) {
  switch (relation) {
    case "same-sign":
      return "very similar";
    case "elemental-harmony":
      return "harmonized";
    case "same-element":
      return "very defined";
    case "awkward":
      return "awkward";
    case "teamwork":
      return "bliss";
    case "competing":
      return "competing with each other";
    case "okay":
      return "fine together";
  }
}

function getPlacementPhrase(sign: Sign, planet: Planet) {
  return `${SIGN_LABELS[sign]} ${getCardPlanetLabel(planet)}`;
}

function getInteractionPlacementPhrase(sign: Sign, planet: Planet) {
  return planet === "♃" ? "philosophy of life" : getPlacementPhrase(sign, planet);
}

function isSamePlanetPlacement(planet: Planet, sign: Sign) {
  return SIGN_RULERS[sign].includes(planet);
}

function isOldNewPlacementMismatch(planet: Planet, sign: Sign) {
  const signIsNew = NEW_SIGNS.includes(sign);
  const signIsOld = OLD_SIGNS.includes(sign);
  const planetIsNew = NEW_PLACEMENTS.includes(planet);
  const planetIsOld = OLD_PLACEMENTS.includes(planet);

  return (signIsNew && planetIsOld) || (signIsOld && planetIsNew);
}

function getGenerationWord(counterpartPlanet: Planet) {
  return counterpartPlanet === "♃" ? "generations" : "generation";
}

function normalizeSinglePairKey(aPlanet: Planet, bPlanet: Planet) {
  return [aPlanet, bPlanet]
    .sort((left, right) => PLANETS.indexOf(left) - PLANETS.indexOf(right))
    .join("|");
}

function ensureTerminalPunctuation(text: string) {
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function adjustSameElementInteractionText(text: string) {
  return text.replace(/^How much\b/, "How");
}

function stripTerminalPunctuation(text: string) {
  return text.replace(/[.!?]+$/, "");
}

function getPossessivePronoun(sex: Sex) {
  return sex === "male" ? "his" : "her";
}

function getSubjectPronoun(sex: Sex) {
  return sex === "male" ? "he" : "she";
}

function getObjectPronoun(sex: Sex) {
  return sex === "male" ? "him" : "her";
}

function replaceLastOccurrence(text: string, search: string, replacement: string) {
  const index = text.lastIndexOf(search);
  if (index === -1) return text;
  return `${text.slice(0, index)}${replacement}${text.slice(index + search.length)}`;
}

function normalizeSummaryText(text: string, relation: RelationType, mode: GridViewMode, name?: string, sex?: Sex) {
  let normalized = stripTerminalPunctuation(text);

  if (normalized.includes(" + ")) {
    const [left, right] = normalized.split(" + ");
    if (left && right) {
      normalized = `${left} ${getInteractionVerb(relation)} ${right}`;
    }
  }

  normalized = normalized.replace(/\btheir generation\b/g, "their generations");

  return normalized;
}

function isGenerationalPlanet(planet: Planet) {
  return GENERATIONAL_PLANETS.includes(planet);
}

function shouldOmitSummaryDescription(cell: GridCell) {
  const isRisingGenerationalPair =
    (cell.aPlanet === "⥉" && isGenerationalPlanet(cell.bPlanet)) ||
    (cell.bPlanet === "⥉" && isGenerationalPlanet(cell.aPlanet));

  return isRisingGenerationalPair && cell.relation !== "awkward";
}

function getSoloRisingGenerationSummaryText(cell: GridCell, name: string, sex: Sex) {
  return `The way ${name} is perceived ${getInteractionVerb(cell.relation)} ${getPossessivePronoun(sex)} generation`;
}

function getSoloSummaryInteractionText(cell: GridCell, name: string, sex: Sex) {
  const key = normalizeSinglePairKey(cell.aPlanet, cell.bPlanet);
  const interaction = getInteractionVerb(cell.relation);
  const possessive = getPossessivePronoun(sex);
  const subject = getSubjectPronoun(sex);
  const aIsGenerational = GENERATIONAL_PLANETS.includes(cell.aPlanet);
  const bIsGenerational = GENERATIONAL_PLANETS.includes(cell.bPlanet);
  const soloPlanet = aIsGenerational ? cell.bPlanet : cell.aPlanet;
  const soloPlacement = aIsGenerational
    ? getInteractionPlacementPhrase(cell.bSign, cell.bPlanet)
    : getInteractionPlacementPhrase(cell.aSign, cell.aPlanet);

  if (aIsGenerational && bIsGenerational) {
    return `The generations are ${getRelationStatus(cell.relation)}`;
  }

  if (aIsGenerational || bIsGenerational) {
    return `${name}'s ${soloPlacement} ${interaction} their ${getGenerationWord(soloPlanet)}`;
  }

  const templates: Partial<Record<string, string>> = {
    "☉|☽": `${name}'s emotionality ${interaction} ${possessive} core self`,
    "☉|⥉": `How ${name} is perceived ${interaction} how ${subject} really is`,
    "☉|☿": `${name}'s mind ${interaction} ${possessive} ego`,
    "☉|♀": `${name}'s heart ${interaction} ${possessive} ego`,
    "☉|♂": `${name}'s drive ${interaction} ${possessive} ego`,
    "☉|♃": `${name}'s philosophy of life ${interaction} ${possessive} core self`,
    "☉|♄": `${name}'s ego ${interaction} ${possessive} level of emotional security`,
    "☽|⥉": `${name}'s mood ${interaction} how others perceive ${name}`,
    "☽|☿": `${name}'s dark side ${interaction} ${possessive} mind`,
    "☽|♀": `${name}'s dark side ${interaction} ${possessive} heart`,
    "☽|♃": `${name}'s magical side`,
    "☽|♄": `${name}'s feminine side ${interaction} ${possessive} moods`,
    "⥉|☿": `${name}'s mind ${interaction} ${possessive} desire`,
    "⥉|♀": `${name}'s heart's desire`,
    "⥉|♂": `${name}'s body's desire`,
    "⥉|♃": `${name}'s politics`,
    "⥉|♄": `${name}'s guilty pleasures`,
    "☿|♀": `${name}'s mind ${interaction} ${possessive} interests`,
    "☿|♂": `${name}'s mind ${interaction} ${possessive} drive`,
    "☿|♃": `${name}'s mind ${interaction} ${possessive} morality`,
    "☿|♄": `${name}'s social strategy + how ${subject} copes`,
    "♀|♂": `${name}'s body ${interaction} ${possessive} heart`,
    "♀|♃": `${name}'s heart ${interaction} ${possessive} philosophy of life`,
    "♀|♄": `${name}'s heart ${interaction} ${possessive} rebellious side`,
    "♂|♃": `${name}'s drive + how ${subject} seeks growth`,
    "♂|♄": `How ${name} attracts the opposite sex`,
    "♃|♄": `How ${name} socializes`,
  };

  return templates[key] ?? "This planetary interaction shapes how these two parts of you work together";
}

function cellHasSamePlanetQualifier(cell: GridCell) {
  return isSamePlanetPlacement(cell.aPlanet, cell.aSign) || isSamePlanetPlacement(cell.bPlanet, cell.bSign);
}

function cellHasOldNewQualifier(cell: GridCell) {
  return (
    isOldNewPlacementMismatch(cell.aPlanet, cell.aSign) ||
    isOldNewPlacementMismatch(cell.bPlanet, cell.bSign)
  );
}

function getMergedSymbolTail(cells: GridCell[]) {
  const planets = Array.from(new Set(cells.flatMap((cell) => [cell.aPlanet, cell.bPlanet])));
  return planets.sort((left, right) => PLANETS.indexOf(left) - PLANETS.indexOf(right)).join(" ");
}

function formatSummaryEntryLine(text: string, cells: GridCell[]) {
  const symbols = getMergedSymbolTail(cells);
  return symbols ? `= ${text} ${symbols}` : `= ${text}`;
}

function getSectionLetter(index: number) {
  return String.fromCharCode("A".charCodeAt(0) + index);
}

function shouldWrapNotation(sideText: string) {
  return sideText.includes(" + ");
}

function formatNotationSide(sign: Sign, planets: Planet[]) {
  return `${sign} ${planets.join(" + ")}`;
}

function formatCombinedNotation(left: string, right: string) {
  const leftText = shouldWrapNotation(left) ? `( ${left} )` : left;
  const rightText = shouldWrapNotation(right) ? `( ${right} )` : right;
  return `${leftText} + ${rightText}`;
}

function getSortedUniquePlanets(planets: Planet[]) {
  return Array.from(new Set(planets)).sort((left, right) => PLANETS.indexOf(left) - PLANETS.indexOf(right));
}

function joinWithAnd(items: string[]) {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

function formatSamePlanetSummary(sign: Sign, planets: Planet[], name: string) {
  const relevantPlanets = getSortedUniquePlanets(planets).filter((planet) => !GENERATIONAL_PLANETS.includes(planet));
  if (relevantPlanets.length === 0) return null;

  const qualifiers = relevantPlanets.map((planet) => `${SIGN_QUALIFIERS[sign]} ${PLANET_QUALIFIERS[planet]}`);
  const verb = relevantPlanets.length === 1 ? "is very pronounced" : "are very pronounced";

  return [
    `${sign} ${relevantPlanets.join(" + ")}`,
    `= ${name}'s ${joinWithAnd(qualifiers)} ${verb} ${relevantPlanets.join(" ")}`,
  ].join("\n");
}

function buildChartSummarySection(placements: PlacementMap) {
  const order: Planet[] = ["☉", "☽", "⥉", "☿", "♀", "♂", "♃", "♄"];
  const lines = order
    .map((planet) => {
      const sign = placements[planet];
      if (!sign) return null;
      return `${CHART_SUMMARY_PLANET_WORDS[planet]} = ${CHART_SUMMARY_SIGN_WORDS[sign]}`;
    })
    .filter((value): value is string => Boolean(value));

  const uranusSign = placements["♅"];
  const neptuneSign = placements["♆"];
  if (uranusSign && neptuneSign) {
    lines.push(
      `Generation = ${CHART_SUMMARY_SIGN_WORDS[uranusSign]}-${CHART_SUMMARY_SIGN_WORDS[neptuneSign]}`
    );
  }

  if (lines.length === 0) return "";

  return ["CHART SUMMARY", ...lines].join("\n");
}

function formatPercent(value: number) {
  return `${Math.round(value)}%`;
}

function buildChaoticMetricsSection(cells: GridCell[]) {
  const tensionCells = cells.filter(
    (cell) => cell.relation === "awkward" || cell.relation === "competing"
  );
  const harmonyCells = cells.filter(
    (cell) => cell.relation === "elemental-harmony" || cell.relation === "teamwork"
  );

  const chaoticTension =
    tensionCells.length === 0
      ? 0
      : (tensionCells.filter((cell) => cellHasOldNewQualifier(cell)).length / tensionCells.length) * 100;
  const chaoticHarmony =
    harmonyCells.length === 0
      ? 0
      : (harmonyCells.filter((cell) => cellHasOldNewQualifier(cell)).length / harmonyCells.length) * 100;
  const orderedHarmony = Math.max(0, 100 - Math.round(chaoticTension) - Math.round(chaoticHarmony));

  return [
    "CHAOTIC METRICS",
    `Chaotic tension: ${formatPercent(chaoticTension)}`,
    `Chaotic harmony: ${formatPercent(chaoticHarmony)}`,
    `Ordered harmony: ${orderedHarmony}%`,
  ].join("\n");
}

function getIndefiniteArticle(phrase: string) {
  return /^[aeiou]/i.test(phrase.trim()) ? "An" : "A";
}

function buildUnevolvedSelfSection(placements: PlacementMap) {
  const rising = placements["⥉"];
  const sun = placements["☉"];
  const moon = placements["☽"];

  const descriptorParts = [
    rising ? UNEVOLVED_RISING_WORDS[rising] : "",
    sun ? UNEVOLVED_SUN_WORDS[sun] : "",
  ].filter(Boolean);
  const moonWord = moon ? UNEVOLVED_MOON_WORDS[moon] : "";

  if (descriptorParts.length === 0 && !moonWord) return "";

  const descriptor = descriptorParts.join(" ");
  const article = descriptor ? getIndefiniteArticle(descriptorParts[0]) : "";
  const sentenceParts = [
    "Unevolved self:",
    descriptor ? `${article} ${descriptor}` : "",
    moonWord ? `who needs ${moonWord}` : "",
  ].filter(Boolean);

  return sentenceParts.join(" ");
}

function getEvolvedSelfBaseScore(sunSign: Sign | "") {
  return (targetSign: Sign) => {
    if (!sunSign) return 0;
    if (EVOLVED_SELF_AWKWARD[sunSign].includes(targetSign)) return -2;
    if (EVOLVED_SELF_COMPETING[sunSign].includes(targetSign)) return -1;
    return 0;
  };
}

function getEvolvedSelfQualityLabel(score: number) {
  if (score <= -2) return EVOLVED_SELF_QUALITY_LABELS[0];
  if (score === -1) return EVOLVED_SELF_QUALITY_LABELS[1];
  if (score === 0) return EVOLVED_SELF_QUALITY_LABELS[2];
  if (score === 1) return EVOLVED_SELF_QUALITY_LABELS[3];
  if (score === 2) return EVOLVED_SELF_QUALITY_LABELS[4];
  if (score === 3) return EVOLVED_SELF_QUALITY_LABELS[5];
  return EVOLVED_SELF_QUALITY_LABELS[6];
}

function formatEvolvedSelfLine(sign: Sign, score: number) {
  const quality = getEvolvedSelfQualityLabel(score);
  const trait = EVOLVED_SELF_TRAITS[sign];
  return trait.usesAt ? `${quality} at ${trait.phrase}` : `${quality} ${trait.phrase}`;
}

function buildEvolvedSelfSection(placements: PlacementMap, name: string) {
  const sunSign = placements["☉"] ?? "";
  const getBaseScore = getEvolvedSelfBaseScore(sunSign);
  const scoredSigns = (Object.keys(SIGN_INDEX) as Sign[]).map((sign) => {
    const matchingPlanets = EVOLVED_SELF_PLANETS.filter((planet) => placements[planet] === sign);
    const bonusPoints = matchingPlanets.filter((planet) => isSamePlanetPlacement(planet, sign)).length;
    const score = getBaseScore(sign) + matchingPlanets.length + bonusPoints;

    return {
      sign,
      score,
      line: formatEvolvedSelfLine(sign, score),
      starseed: score >= 5 ? `${name} is a ${EVOLVED_SELF_TRAITS[sign].starseedName} starseed.` : null,
    };
  });

  const orderedLines = scoredSigns
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      return SIGN_INDEX[left.sign] - SIGN_INDEX[right.sign];
    })
    .map((entry) => entry.line);

  const starseedLines = scoredSigns
    .filter((entry) => Boolean(entry.starseed))
    .sort((left, right) => SIGN_INDEX[left.sign] - SIGN_INDEX[right.sign])
    .map((entry) => entry.starseed as string);

  const tail = starseedLines.length > 0 ? ["", ...starseedLines] : [];
  return ["EVOLVED SELF", ...orderedLines, ...tail].join("\n");
}

function formatQualifiedPlanetPhrase(sign: Sign, planet: Planet) {
  return `${SIGN_QUALIFIERS[sign]} ${PLANET_QUALIFIERS[planet]}`;
}

function buildQualifiedReportLine(
  cells: GridCell[],
  mode: GridViewMode,
  leftName: string,
  rightName: string
) {
  const leftEntries = getSortedUniquePlanets(cells.map((cell) => cell.aPlanet)).map((planet) =>
    formatQualifiedPlanetPhrase(cells.find((cell) => cell.aPlanet === planet)?.aSign as Sign, planet)
  );
  const rightEntries = getSortedUniquePlanets(cells.map((cell) => cell.bPlanet)).map((planet) =>
    formatQualifiedPlanetPhrase(cells.find((cell) => cell.bPlanet === planet)?.bSign as Sign, planet)
  );

  if (mode === "couple") {
    return `= ${leftName}'s ${joinWithAnd(leftEntries)} + ${rightName}'s ${joinWithAnd(rightEntries)}`;
  }

  return `= ${leftName}'s ${joinWithAnd(leftEntries)} + ${leftName}'s ${joinWithAnd(rightEntries)}`;
}

function groupSummaryLines(
  cells: GridCell[],
  relation: RelationType,
  mode: GridViewMode,
  leftName: string,
  rightName: string,
  sex?: Sex
) {
  const textMap = new Map<string, GridCell[]>();

  for (const cell of cells) {
    if (shouldOmitSummaryDescription(cell)) continue;

    const rawText =
      mode !== "couple" &&
      sex &&
      ((cell.aPlanet === "⥉" && isGenerationalPlanet(cell.bPlanet)) ||
        (cell.bPlanet === "⥉" && isGenerationalPlanet(cell.aPlanet)))
        ? getSoloRisingGenerationSummaryText(cell, leftName, sex)
        : mode === "couple"
          ? getCoupleInteractionText(cell, leftName, rightName)
          : sex
            ? getSoloSummaryInteractionText(cell, leftName, sex)
            : getSingleInteractionText(cell, leftName);
    const text = normalizeSummaryText(rawText, relation, mode, leftName, sex);
    const existing = textMap.get(text);
    if (existing) {
      existing.push(cell);
    } else {
      textMap.set(text, [cell]);
    }
  }

  return Array.from(textMap.entries()).map(([text, groupedCells]) => formatSummaryEntryLine(text, groupedCells));
}

function buildSoloRelationSummary(
  relation: RelationType,
  placements: PlacementMap,
  name: string,
  sex: Sex
) {
  const grid = buildGrid(placements, placements);
  const cells = grid.flat().filter((cell) => cell.relation === relation && !isMirroredDuplicateCell(cell));

  if (relation === "teamwork" && cells.length === 0) {
    return ["TEAM WORK", "= NO TEAM WORK ENTRIES"].join("\n");
  }

  if (cells.length === 0) return "";

  if (relation === "same-sign") {
    const groups = new Map<Sign, GridCell[]>();
    for (const cell of cells) {
      const list = groups.get(cell.aSign) ?? [];
      list.push(cell);
      groups.set(cell.aSign, list);
    }

    return Array.from(groups.entries())
      .map(([sign, signCells]) => {
        const planets = getSortedUniquePlanets(signCells.flatMap((cell) => [cell.aPlanet, cell.bPlanet]));
        const lines = groupSummaryLines(signCells, relation, "partner-a", name, name, sex);
        const qualifierLine = buildQualifiedReportLine(signCells, "partner-a", name, name);
        return [`${sign} ${planets.join(" + ")}`, qualifierLine, ...lines].join("\n");
      })
      .join("\n\n");
  }

  if (relation === "same-element" || relation === "elemental-harmony" || relation === "awkward" || relation === "competing") {
    const groups = new Map<string, GridCell[]>();
    for (const cell of cells) {
      const key = `${cell.aSign}|${cell.bSign}`;
      const list = groups.get(key) ?? [];
      list.push(cell);
      groups.set(key, list);
    }

    return Array.from(groups.entries())
      .map(([key, pairCells]) => {
        const [leftSignRaw, rightSignRaw] = key.split("|");
        const leftSign = leftSignRaw as Sign;
        const rightSign = rightSignRaw as Sign;
        const leftPlanets = getSortedUniquePlanets(pairCells.map((cell) => cell.aPlanet));
        const rightPlanets = getSortedUniquePlanets(pairCells.map((cell) => cell.bPlanet));
        const notation = formatCombinedNotation(
          formatNotationSide(leftSign, leftPlanets),
          formatNotationSide(rightSign, rightPlanets)
        );
        const lines = groupSummaryLines(pairCells, relation, "partner-a", name, name, sex);
        const qualifierLine = buildQualifiedReportLine(pairCells, "partner-a", name, name);
        return [notation, qualifierLine, ...lines].join("\n");
      })
      .join("\n\n");
  }

  if (relation === "teamwork") {
    const lines = groupSummaryLines(cells, relation, "partner-a", name, name, sex);
    return lines.join("\n");
  }

  return groupSummaryLines(cells, relation, "partner-a", name, name, sex).join("\n");
}

function buildSamePlanetSection(placements: PlacementMap, name: string) {
  const groups = new Map<Sign, Planet[]>();

  for (const planet of PLANETS) {
    const sign = placements[planet];
    if (!sign) continue;
    if (!SIGN_RULERS[sign].includes(planet)) continue;

    const planets = groups.get(sign) ?? [];
    planets.push(planet);
    groups.set(sign, planets);
  }

  const lines = Array.from(groups.entries())
    .map(([sign, planets]) => formatSamePlanetSummary(sign, planets, name))
    .filter((value): value is string => Boolean(value));

  if (lines.length === 0) return "";

  return ["SAME PLANET ⊛", ...lines].join("\n");
}

function buildSoloSummarySection(name: string, placements: PlacementMap, sex: Sex) {
  const relationOrder: RelationType[] = ["same-sign", "same-element", "elemental-harmony", "teamwork", "awkward", "competing"];
  const blocks: string[] = [];

  blocks.push(`${name.toUpperCase()} REPORT`);

  const chartSummaryBlock = buildChartSummarySection(placements);
  if (chartSummaryBlock) blocks.push(chartSummaryBlock);

  const unevolvedSelfBlock = buildUnevolvedSelfSection(placements);
  if (unevolvedSelfBlock) blocks.push(unevolvedSelfBlock);

  const evolvedSelfBlock = buildEvolvedSelfSection(placements, name);
  if (evolvedSelfBlock) blocks.push(evolvedSelfBlock);

  const sameSignBlock = buildSoloRelationSummary("same-sign", placements, name, sex);
  if (sameSignBlock) blocks.push(`SAME SIGN ${RELATION_STYLES["same-sign"].symbol}\n${sameSignBlock}`);

  const samePlanetBlock = buildSamePlanetSection(placements, name);
  if (samePlanetBlock) blocks.push(samePlanetBlock);

  for (const relation of relationOrder.filter((item) => item !== "same-sign")) {
    const block = buildSoloRelationSummary(relation, placements, name, sex);
    if (!block) continue;

    if (relation === "same-element") {
      const elements = Array.from(
        new Set(
          buildGrid(placements, placements)
            .flat()
            .filter((cell) => cell.relation === relation && !isMirroredDuplicateCell(cell))
            .flatMap((cell) => [ELEMENTS[cell.aSign], ELEMENTS[cell.bSign]])
        )
      ) as Element[];
      blocks.push(`SAME ELEMENT ${elements.map((element) => ELEMENT_SYMBOLS[element]).join("")}\n${block}`);
    } else if (relation === "teamwork") {
      blocks.push(block);
    } else {
      blocks.push(`${RELATION_STYLES[relation].label.toUpperCase()} ${RELATION_STYLES[relation].symbol}\n${block}`);
    }
  }

  return blocks.join("\n\n");
}

function buildCoupleRelationSummary(relation: RelationType, personA: PlacementMap, personB: PlacementMap, personAName: string, personBName: string) {
  const cells = buildGrid(personA, personB).flat().filter((cell) => cell.relation === relation);

  if (relation === "teamwork" && cells.length === 0) {
    return ["TEAM WORK", "= NO TEAM WORK ENTRIES"].join("\n");
  }

  if (cells.length === 0) return "";

  if (relation === "same-sign") {
    const groups = new Map<Sign, GridCell[]>();
    for (const cell of cells) {
      const list = groups.get(cell.aSign) ?? [];
      list.push(cell);
      groups.set(cell.aSign, list);
    }

    return Array.from(groups.entries())
      .map(([sign, signCells]) => {
        const leftPlanets = getSortedUniquePlanets(signCells.map((cell) => cell.aPlanet));
        const rightPlanets = getSortedUniquePlanets(signCells.map((cell) => cell.bPlanet));
        const notation = formatCombinedNotation(formatNotationSide(sign, leftPlanets), formatNotationSide(sign, rightPlanets));
        const lines = groupSummaryLines(signCells, relation, "couple", personAName, personBName);
        const qualifierLine = buildQualifiedReportLine(signCells, "couple", personAName, personBName);
        return [notation, qualifierLine, ...lines].join("\n");
      })
      .join("\n\n");
  }

  if (relation === "same-element" || relation === "elemental-harmony" || relation === "awkward" || relation === "competing" || relation === "teamwork") {
    const groups = new Map<string, GridCell[]>();
    for (const cell of cells) {
      const key = `${cell.aSign}|${cell.bSign}`;
      const list = groups.get(key) ?? [];
      list.push(cell);
      groups.set(key, list);
    }

    return Array.from(groups.entries())
      .map(([key, pairCells]) => {
        const [leftSignRaw, rightSignRaw] = key.split("|");
        const leftSign = leftSignRaw as Sign;
        const rightSign = rightSignRaw as Sign;
        const leftPlanets = getSortedUniquePlanets(pairCells.map((cell) => cell.aPlanet));
        const rightPlanets = getSortedUniquePlanets(pairCells.map((cell) => cell.bPlanet));
        const notation = formatCombinedNotation(
          formatNotationSide(leftSign, leftPlanets),
          formatNotationSide(rightSign, rightPlanets)
        );
        const lines = groupSummaryLines(pairCells, relation, "couple", personAName, personBName);
        const qualifierLine = buildQualifiedReportLine(pairCells, "couple", personAName, personBName);
        return [notation, qualifierLine, ...lines].join("\n");
      })
      .join("\n\n");
  }

  return groupSummaryLines(cells, relation, "couple", personAName, personBName).join("\n");
}

function buildCoupleSummarySection(personAName: string, personA: PlacementMap, personBName: string, personB: PlacementMap) {
  const relationOrder: RelationType[] = ["same-sign", "same-element", "elemental-harmony", "teamwork", "awkward", "competing"];
  const romanticMatch = buildRomanticMatchMultiplier(personA, personB);
  const blocks = [
    "COUPLE REPORT",
    [
      "ROMANTIC MATCH MULTIPLIER",
      `${personAName} -> ${personBName} Love Match: ${formatMultiplierNumber(romanticMatch.aLoveScore)}`,
      `${personBName} -> ${personAName} Love Match: ${formatMultiplierNumber(romanticMatch.bLoveScore)}`,
      `Love Match Average: ${formatMultiplierNumber(romanticMatch.loveMatch)}`,
      "",
      `${personAName} -> ${personBName} Sex Match: ${formatMultiplierNumber(romanticMatch.aSexScore)}`,
      `${personBName} -> ${personAName} Sex Match: ${formatMultiplierNumber(romanticMatch.bSexScore)}`,
      `Sex Match Average: ${formatMultiplierNumber(romanticMatch.sexMatch)}`,
      "",
      `${personAName} -> ${personBName} Romantic Match: ${formatMultiplierNumber(romanticMatch.aRomanticMatch)}`,
      `${personAName} -> ${personBName} Romantic Multiplier: ${romanticMatch.aMultiplier}`,
      `${personBName} -> ${personAName} Romantic Match: ${formatMultiplierNumber(romanticMatch.bRomanticMatch)}`,
      `${personBName} -> ${personAName} Romantic Multiplier: ${romanticMatch.bMultiplier}`,
    ].join("\n"),
  ];

  for (const relation of relationOrder) {
    const block = buildCoupleRelationSummary(relation, personA, personB, personAName, personBName);
    if (!block) continue;

    if (relation === "same-element") {
      const elements = Array.from(
        new Set(
          buildGrid(personA, personB)
            .flat()
            .filter((cell) => cell.relation === relation)
            .flatMap((cell) => [ELEMENTS[cell.aSign], ELEMENTS[cell.bSign]])
        )
      ) as Element[];
      blocks.push(`SAME ELEMENT ${elements.map((element) => ELEMENT_SYMBOLS[element]).join("")}\n${block}`);
    } else if (relation === "teamwork") {
      blocks.push(block);
    } else {
      blocks.push(`${RELATION_STYLES[relation].label.toUpperCase()} ${RELATION_STYLES[relation].symbol}\n${block}`);
    }
  }

  return blocks.join("\n\n");
}

function buildMiniSummaryReport(options: {
  personAName: string;
  personA: PlacementMap;
  personASex: Sex;
  personBName: string;
  personB: PlacementMap;
  personBSex: Sex;
}) {
  return [
    `A. ${buildSoloSummarySection(options.personAName, options.personA, options.personASex)}`,
    `B. ${buildSoloSummarySection(options.personBName, options.personB, options.personBSex)}`,
    `C. ${buildCoupleSummarySection(options.personAName, options.personA, options.personBName, options.personB)}`,
  ].join("\n\n\n");
}

function getCoupleInteractionText(cell: GridCell, leftName: string, rightName: string) {
  const interaction = getInteractionVerb(cell.relation);
  const leftPlacement = getInteractionPlacementPhrase(cell.aSign, cell.aPlanet);
  const rightPlacement = getInteractionPlacementPhrase(cell.bSign, cell.bPlanet);
  const normalizedKey = normalizeSinglePairKey(cell.aPlanet, cell.bPlanet);

  const aIsGenerational = GENERATIONAL_PLANETS.includes(cell.aPlanet);
  const bIsGenerational = GENERATIONAL_PLANETS.includes(cell.bPlanet);

  if (aIsGenerational && bIsGenerational) {
    return `The generations are ${getRelationStatus(cell.relation)}.`;
  }

  if (!aIsGenerational && bIsGenerational) {
    return `${leftName}'s ${leftPlacement} ${interaction} ${rightName}'s ${getGenerationWord(cell.aPlanet)}.`;
  }

  if (aIsGenerational && !bIsGenerational) {
    return `${rightName}'s ${rightPlacement} ${interaction} ${leftName}'s ${getGenerationWord(cell.bPlanet)}.`;
  }

  const getRole = (planet: Planet) => {
    if (cell.aPlanet === planet) {
      return {
        name: leftName,
        placement: leftPlacement,
      };
    }

    return {
      name: rightName,
      placement: rightPlacement,
    };
  };

  const sun = getRole("☉");
  const moon = getRole("☽");
  const rising = getRole("⥉");
  const mercury = getRole("☿");
  const venus = getRole("♀");
  const mars = getRole("♂");
  const jupiter = getRole("♃");
  const saturn = getRole("♄");

  const templates: Partial<Record<string, string>> = {
    "☉|☉": `${rightName}'s identity ${interaction} ${leftName}'s identity`,
    "☉|☽": `${moon.name}'s emotional and/or nurturing side ${interaction} ${sun.name}'s identity`,
    "☉|☿": `How ${mercury.name} thinks about ${sun.name}`,
    "☉|⥉": `How ${sun.name} perceives ${rising.name}`,
    "☉|♀": `How much ${venus.name} loves ${sun.name}`,
    "☉|♂": `How driven or aggressive ${mars.name} is towards ${sun.name}`,
    "☉|♃": `How ${jupiter.name} socializes with ${sun.name} in a structured way`,
    "☉|♄": `How secure ${sun.name} makes ${saturn.name} feel`,
    "☽|☽": `${rightName}'s emotionality ${interaction} ${leftName}'s emotionality`,
    "☽|☿": `What ${mercury.name} thinks about ${moon.name}'s dark side and feminine side`,
    "☽|⥉": `${moon.name}'s gut reactions towards ${rising.name}`,
    "☽|♀": `How much ${venus.name} loves ${moon.name}'s feminine side and nurturing side`,
    "☽|♂": `${moon.name}'s sensitivity level ${interaction} ${mars.name}'s aggression level`,
    "☽|♃": `How ${moon.name} feels when socializing with ${jupiter.name} in a structured way`,
    "☽|♄": `How ${moon.name} feels when socializing with ${saturn.name} in an unstructured way`,
    "⥉|⥉": `How much ${leftName} and ${rightName} like each other at first`,
    "⥉|☿": `What ${mercury.name} thinks about ${rising.name} at first`,
    "⥉|♀": `How much ${venus.name} loves ${rising.name} at first`,
    "⥉|♂": `On first interactions, ${mars.name} believes their aggression level ${interaction} with ${rising.name}`,
    "⥉|♃": `How ${rising.name} feels about ${jupiter.name}'s worldview, politics, or philosophy`,
    "⥉|♄": `How judged ${saturn.name} initially feels by ${rising.name}`,
    "☿|☿": `${rightName}'s mind ${interaction} ${leftName}'s mind`,
    "☿|♀": `How much ${venus.name} loves ${mercury.name}'s mind`,
    "☿|♂": `What ${mercury.name} thinks about ${mars.name}'s drive and aggression`,
    "☿|♃": `What ${mercury.name} thinks about ${jupiter.name}'s philosophy or worldview`,
    "☿|♄": `How judged ${saturn.name} feels by ${mercury.name}`,
    "♀|♀": `How much ${leftName} and ${rightName} love each other`,
    "♀|♂": `How much ${venus.name} loves ${mars.name}'s drive`,
    "♀|♃": `How much ${venus.name} loves ${jupiter.name}'s worldview or philosophy`,
    "♀|♄": `How much ${venus.name} loves ${saturn.name}'s dark and fun side`,
    "♂|♂": `${leftName}'s aggression level ${interaction} with ${rightName}'s`,
    "♂|♃": `How attracted ${mars.name} is to ${jupiter.name} in a structured setting`,
    "♂|♄": `How attracted ${mars.name} is to ${saturn.name} in an unstructured setting`,
    "♃|♃": `${rightName}'s philosophy of life ${interaction} ${leftName}'s`,
    "♃|♄": `${jupiter.name}'s morality ${interaction} ${saturn.name}'s`,
    "♄|♄": `How ${leftName} and ${rightName} socialize in an unstructured setting`,
  };

  const sameSignTemplates: Partial<Record<string, string>> = {
    "☉|☉": "The way their identities mirror each other",
    "☉|☽": `The way ${moon.name}'s emotional and nurturing side relates to ${sun.name}'s identity`,
    "☉|☿": `The way ${mercury.name} thinks about ${sun.name}`,
    "☉|⥉": `The way ${sun.name} perceives ${rising.name}`,
    "☉|♀": `The way ${venus.name} loves ${sun.name}`,
    "☉|♂": `The way ${mars.name} directs drive or aggression toward ${sun.name}`,
    "☉|♃": `The way ${jupiter.name} socializes with ${sun.name} in a structured way`,
    "☉|♄": `The way ${sun.name} makes ${saturn.name} feel secure`,
    "☽|☽": "The way their emotional worlds mirror each other",
    "☽|☿": `The way ${mercury.name} thinks about ${moon.name}'s dark and feminine side`,
    "☽|⥉": `The way ${moon.name} instinctively reacts to ${rising.name}`,
    "☽|♀": `The way ${venus.name} loves ${moon.name}'s feminine and nurturing side`,
    "☽|♂": `The way ${moon.name}'s sensitivity meets ${mars.name}'s aggression`,
    "☽|♃": `The way ${moon.name} feels when socializing with ${jupiter.name} in a structured way`,
    "☽|♄": `The way ${moon.name} feels when socializing with ${saturn.name} in an unstructured way`,
    "⥉|⥉": "The way they like each other at first",
    "⥉|☿": `The way ${mercury.name} thinks about ${rising.name} at first`,
    "⥉|♀": `The way ${venus.name} loves ${rising.name} at first`,
    "⥉|♂": `The way ${mars.name} experiences their aggression in relation to ${rising.name} on first meeting`,
    "⥉|♃": `The way ${rising.name} feels about ${jupiter.name}'s worldview, politics, or philosophy`,
    "⥉|♄": `The way ${saturn.name} initially feels judged by ${rising.name}`,
    "☿|☿": "The way their minds mirror each other",
    "☿|♀": `The way ${venus.name} loves ${mercury.name}'s mind`,
    "☿|♂": `What ${mercury.name} thinks about ${mars.name}'s drive and aggression`,
    "☿|♃": `The way ${mercury.name} thinks about ${jupiter.name}'s philosophy or worldview`,
    "☿|♄": `The way ${saturn.name} feels judged by ${mercury.name}`,
    "♀|♀": "The way they love each other",
    "♀|♂": `The way ${venus.name} loves ${mars.name}'s drive`,
    "♀|♃": `The way ${venus.name} loves ${jupiter.name}'s worldview or philosophy`,
    "♀|♄": `The way ${venus.name} loves ${saturn.name}'s dark and fun side`,
    "♂|♂": "The way their aggression mirrors each other",
    "♂|♃": `The way ${mars.name} is attracted to ${jupiter.name} in a structured setting`,
    "♂|♄": `The way ${mars.name} is attracted to ${saturn.name} in an unstructured setting`,
    "♃|♃": "The way their philosophies of life mirror each other",
    "♃|♄": `The way ${jupiter.name}'s morality relates to ${saturn.name}'s`,
    "♄|♄": "The way they socialize in an unstructured setting",
  };

  const text =
    (cell.relation === "same-sign" ? sameSignTemplates[normalizedKey] : undefined) ??
    templates[normalizedKey] ??
    `${leftName}'s ${leftPlacement} ${interaction} ${rightName}'s ${rightPlacement}`;

  const adjustedText =
    cell.relation === "same-element" ? adjustSameElementInteractionText(text) : text;

  return ensureTerminalPunctuation(adjustedText);
}

function getSingleInteractionText(cell: GridCell, soloName: string) {
  const key = normalizeSinglePairKey(cell.aPlanet, cell.bPlanet);
  const interaction = getInteractionVerb(cell.relation);
  const aIsGenerational = GENERATIONAL_PLANETS.includes(cell.aPlanet);
  const bIsGenerational = GENERATIONAL_PLANETS.includes(cell.bPlanet);
  const soloPlanet = aIsGenerational ? cell.bPlanet : cell.aPlanet;
  const soloPlacement = aIsGenerational
    ? getInteractionPlacementPhrase(cell.bSign, cell.bPlanet)
    : getInteractionPlacementPhrase(cell.aSign, cell.aPlanet);

  if (aIsGenerational && bIsGenerational) {
    return `The generations are ${getRelationStatus(cell.relation)}.`;
  }

  if (aIsGenerational || bIsGenerational) {
    return `${soloName}'s ${soloPlacement} ${interaction} their ${getGenerationWord(soloPlanet)}.`;
  }

  const templates: Partial<Record<string, string>> = {
    "☉|☽": `Your emotionality ${interaction} your core self`,
    "☉|⥉": `How you are perceived ${interaction} how you really are`,
    "☉|☿": `Your mind ${interaction} your ego`,
    "☉|♀": `Your heart ${interaction} your ego`,
    "☉|♂": `Your drive ${interaction} your ego`,
    "☉|♃": `Your philosophy of life ${interaction} your core self`,
    "☉|♄": `Your ego ${interaction} your level of emotional security`,
    "☽|⥉": `Your mood ${interaction} how others perceive you`,
    "☽|☿": `Your dark side ${interaction} your mind`,
    "☽|♀": `Your dark side ${interaction} your heart`,
    "☽|♂": "Your sex drive",
    "☽|♃": "Your magical side",
    "☽|♄": `Your feminine side ${interaction} your moods`,
    "⥉|☿": `Your mind ${interaction} your desire`,
    "⥉|♀": "Your heart's desire",
    "⥉|♂": "Your body's desire",
    "⥉|♃": "Your politics",
    "⥉|♄": "Your guilty pleasures",
    "☿|♀": `Your mind ${interaction} your interests`,
    "☿|♂": `Your mind ${interaction} your drive`,
    "☿|♃": `Your mind ${interaction} your morality`,
    "☿|♄": "How you cope",
    "♀|♂": `Your body ${interaction} your heart`,
    "♀|♃": `Your heart ${interaction} your philosophy of life`,
    "♀|♄": `Your heart ${interaction} your rebellious side`,
    "♂|♃": "How you seek growth",
    "♂|♄": "How you attract the opposite sex",
    "♃|♄": "How you socialize",
  };

  const text = templates[key] ?? "This planetary interaction shapes how these two parts of you work together";
  return ensureTerminalPunctuation(text);
}

function buildSynastryDebugBoxes(
  personAOverrides: SynastryOverrideMap,
  personBOverrides: SynastryOverrideMap
) {
  const personABoxes: DebugBox[] = ASTROSEEK_PERSON_A_ROWS.map((item) => ({
    key: `a-${item.planet}`,
    label: `A ${item.planet}`,
    rect: getAstroSeekPersonARect(item.rowIndex, item.planet, personAOverrides),
    tone: "a",
  }));

  const personBBoxes: DebugBox[] = ASTROSEEK_PERSON_B_COLUMNS.map((item) => ({
    key: `b-${item.planet}`,
    label: `B ${item.planet}`,
    rect: getAstroSeekPersonBRect(item.columnIndex, item.planet, personBOverrides),
    tone: "b",
  }));

  return [...personABoxes, ...personBBoxes];
}

function rectFromCenter(cx: number, cy: number, size: number): NormRect {
  return {
    x: cx - size / 2,
    y: cy - size / 2,
    w: size,
    h: size,
  };
}

function getAstroSeekWheelRect(sign: Sign): NormRect {
  const angle = (ASTROSEEK_SIGN_ANGLES[sign] * Math.PI) / 180;
  const cx = ASTROSEEK_LAYOUT.wheelCenterX + Math.cos(angle) * ASTROSEEK_LAYOUT.wheelSignRadius;
  const cy = ASTROSEEK_LAYOUT.wheelCenterY + Math.sin(angle) * ASTROSEEK_LAYOUT.wheelSignRadius;
  return rectFromCenter(cx, cy, ASTROSEEK_LAYOUT.wheelTemplateBox);
}

function getAstroSeekPersonARect(
  rowIndex: number,
  planet?: Planet,
  overrides: SynastryOverrideMap = ASTROSEEK_SYN_A_OVERRIDES
): NormRect {
  const override = planet ? overrides[planet] : undefined;
  const scale = override?.scale ?? 1;
  const width = ASTROSEEK_LAYOUT.personASignBox.w * scale;
  const height = ASTROSEEK_LAYOUT.personASignBox.h * scale;
  const x =
    ASTROSEEK_LAYOUT.personASignBox.x +
    (override?.dx ?? 0) -
    (width - ASTROSEEK_LAYOUT.personASignBox.w) / 2;
  const y =
    ASTROSEEK_LAYOUT.personASignBox.y +
    ASTROSEEK_LAYOUT.personASignBox.stepY * rowIndex +
    (override?.dy ?? 0) -
    (height - ASTROSEEK_LAYOUT.personASignBox.h) / 2;

  return {
    x,
    y,
    w: width,
    h: height,
  };
}

function getAstroSeekPersonBRect(
  columnIndex: number,
  planet?: Planet,
  overrides: SynastryOverrideMap = ASTROSEEK_SYN_B_OVERRIDES
): NormRect {
  const override = planet ? overrides[planet] : undefined;

  return {
    x:
      ASTROSEEK_LAYOUT.personBSignBox.x +
      ASTROSEEK_LAYOUT.personBSignBox.stepX * columnIndex +
      (override?.dx ?? 0),
    y: ASTROSEEK_LAYOUT.personBSignBox.y + (override?.dy ?? 0),
    w: ASTROSEEK_LAYOUT.personBSignBox.w,
    h: ASTROSEEK_LAYOUT.personBSignBox.h,
  };
}

function clampRect(rect: NormRect): NormRect {
  return {
    x: Math.max(0, rect.x),
    y: Math.max(0, rect.y),
    w: Math.min(1 - Math.max(0, rect.x), rect.w),
    h: Math.min(1 - Math.max(0, rect.y), rect.h),
  };
}

function extractGlyphSample(
  ctx: CanvasRenderingContext2D,
  imageWidth: number,
  imageHeight: number,
  rect: NormRect
) {
  const safe = clampRect(rect);
  const sx = Math.max(0, Math.floor(safe.x * imageWidth));
  const sy = Math.max(0, Math.floor(safe.y * imageHeight));
  const sw = Math.max(1, Math.floor(safe.w * imageWidth));
  const sh = Math.max(1, Math.floor(safe.h * imageHeight));
  const imageData = ctx.getImageData(sx, sy, sw, sh).data;

  const points: Array<{ x: number; y: number; value: number }> = [];
  let minX = sw;
  let minY = sh;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < sh; y += 1) {
    for (let x = 0; x < sw; x += 1) {
      const index = (y * sw + x) * 4;
      const r = imageData[index];
      const g = imageData[index + 1];
      const b = imageData[index + 2];
      const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const ink = Math.max(0, 255 - brightness);

      if (ink > 22) {
        points.push({ x, y, value: ink });
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }

  if (maxX < 0 || maxY < 0) {
    return new Array(28 * 28).fill(0);
  }

  const trimmedWidth = Math.max(1, maxX - minX + 1);
  const trimmedHeight = Math.max(1, maxY - minY + 1);
  const trimmed = new Array(trimmedWidth * trimmedHeight).fill(0);

  for (const point of points) {
    const tx = point.x - minX;
    const ty = point.y - minY;
    trimmed[ty * trimmedWidth + tx] = point.value / 255;
  }

  const targetSize = 28;
  const normalized = new Array(targetSize * targetSize).fill(0);

  for (let y = 0; y < targetSize; y += 1) {
    for (let x = 0; x < targetSize; x += 1) {
      const sourceX = Math.min(trimmedWidth - 1, Math.floor((x / targetSize) * trimmedWidth));
      const sourceY = Math.min(trimmedHeight - 1, Math.floor((y / targetSize) * trimmedHeight));
      normalized[y * targetSize + x] = trimmed[sourceY * trimmedWidth + sourceX];
    }
  }

  return normalized;
}

function buildRenderedSignTemplates() {
  const canvas = document.createElement("canvas");
  canvas.width = 96;
  canvas.height = 96;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas context unavailable.");
  }

  const templates = {} as Record<Sign, number[]>;

  for (const sign of SIGNS) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#111111";
    ctx.font = '56px "Times New Roman", "Arial Unicode MS", "Segoe UI Symbol", serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(sign, canvas.width / 2, canvas.height / 2 + 2);
    templates[sign] = extractGlyphSample(ctx, canvas.width, canvas.height, {
      x: 0,
      y: 0,
      w: 1,
      h: 1,
    });
  }

  return templates;
}

function compareGlyphs(a: number[], b: number[]) {
  let total = 0;
  for (let i = 0; i < a.length; i += 1) {
    total += Math.abs(a[i] - b[i]);
  }
  return total / a.length;
}

function matchGlyph(sample: number[], templates: Record<Sign, number[]>): GlyphMatch {
  let bestSign = SIGNS[0];
  let bestScore = Number.POSITIVE_INFINITY;

  for (const sign of SIGNS) {
    const score = compareGlyphs(sample, templates[sign]);
    if (score < bestScore) {
      bestScore = score;
      bestSign = sign;
    }
  }

  return { sign: bestSign, score: bestScore };
}

function matchGlyphWithSearch(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  baseRect: NormRect,
  templates: Record<Sign, number[]>
) {
  const search = [-0.006, -0.003, 0, 0.003, 0.006];
  let best: GlyphMatch = { sign: SIGNS[0], score: Number.POSITIVE_INFINITY };

  for (const dx of search) {
    for (const dy of search) {
      const sample = extractGlyphSample(ctx, width, height, {
        ...baseRect,
        x: baseRect.x + dx,
        y: baseRect.y + dy,
      });
      const match = matchGlyph(sample, templates);
      if (match.score < best.score) best = match;
    }
  }

  return best;
}

async function parseAstroSeekSynastryFile(
  file: File,
  personAOverrides: SynastryOverrideMap,
  personBOverrides: SynastryOverrideMap
) {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas context unavailable.");
  }

  ctx.drawImage(bitmap, 0, 0);

  const templates = buildRenderedSignTemplates();

  const personA: PlacementMap = {};
  const personB: PlacementMap = {};
  const warnings: string[] = [];

  for (const item of ASTROSEEK_PERSON_A_ROWS) {
    const match = matchGlyphWithSearch(
      ctx,
      bitmap.width,
      bitmap.height,
      getAstroSeekPersonARect(item.rowIndex, item.planet, personAOverrides),
      templates
    );
    personA[item.planet] = match.sign;
    if (match.score > 0.22) {
      warnings.push(`Low confidence for Person A ${PLANET_LABELS[item.planet]} (${match.score.toFixed(2)}).`);
    }
  }

  for (const item of ASTROSEEK_PERSON_B_COLUMNS) {
    const match = matchGlyphWithSearch(
      ctx,
      bitmap.width,
      bitmap.height,
      getAstroSeekPersonBRect(item.columnIndex, item.planet, personBOverrides),
      templates
    );
    personB[item.planet] = match.sign;
    if (match.score > 0.22) {
      warnings.push(`Low confidence for Person B ${PLANET_LABELS[item.planet]} (${match.score.toFixed(2)}).`);
    }
  }

  return { personA, personB, warnings };
}

function parseAstroSeekTextExport(text: string): TextImportResult {
  const personA: PlacementMap = {};
  const personB: PlacementMap = {};
  const warnings: string[] = [];
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  const pattern =
    /^(Sun|Moon|Mercury|Venus|Mars|Jupiter|Saturn|Uranus|Neptune|Ascendant|ASC|MC)\s+in\s+(Aries|Taurus|Gemini|Cancer|Leo|Virgo|Libra|Scorpio|Sagittarius|Capricorn|Aquarius|Pisces)\b.*?\b(Sun|Moon|Mercury|Venus|Mars|Jupiter|Saturn|Uranus|Neptune|Ascendant|ASC|MC)\s+in\s+(Aries|Taurus|Gemini|Cancer|Leo|Virgo|Libra|Scorpio|Sagittarius|Capricorn|Aquarius|Pisces)\b/i;

  for (const line of lines) {
    const match = line.match(pattern);
    if (!match) continue;

    const [, rawAPlanet, rawASign, rawBPlanet, rawBSign] = match;
    const aPlanet = TEXT_PLANET_TO_SYMBOL[rawAPlanet];
    const bPlanet = TEXT_PLANET_TO_SYMBOL[rawBPlanet];
    const aSign = TEXT_SIGN_TO_SYMBOL[rawASign];
    const bSign = TEXT_SIGN_TO_SYMBOL[rawBSign];

    if (aPlanet) {
      if (personA[aPlanet] && personA[aPlanet] !== aSign) {
        warnings.push(
          `Conflicting text export values for Person A ${PLANET_LABELS[aPlanet]}. Keeping ${SIGN_LABELS[personA[aPlanet] as Sign]}.`
        );
      } else {
        personA[aPlanet] = aSign;
      }
    }

    if (bPlanet) {
      if (personB[bPlanet] && personB[bPlanet] !== bSign) {
        warnings.push(
          `Conflicting text export values for Person B ${PLANET_LABELS[bPlanet]}. Keeping ${SIGN_LABELS[personB[bPlanet] as Sign]}.`
        );
      } else {
        personB[bPlanet] = bSign;
      }
    }
  }

  if (Object.keys(personA).length === 0 && Object.keys(personB).length === 0) {
    throw new Error("No placements were detected in the pasted export.");
  }

  const missingA = PLANETS.filter((planet) => !personA[planet]);
  const missingB = PLANETS.filter((planet) => !personB[planet]);

  if (missingA.length > 0) {
    warnings.push(`Text import did not find ${missingA.map((planet) => PLANET_LABELS[planet]).join(", ")} for Person A.`);
  }

  if (missingB.length > 0) {
    warnings.push(`Text import did not find ${missingB.map((planet) => PLANET_LABELS[planet]).join(", ")} for Person B.`);
  }

  return { personA, personB, warnings };
}


function formatBullets(lines: string[]) {
  return lines.map((line) => `- ${line}`).join("\n");
}

function buildEntityReport(planet: Planet, sign: Sign) {
  const planetProfile = PLANET_PROFILES[planet];
  const signProfile = getSignProfile(sign);
  const signHeading = `${SIGN_LABELS[sign]} ${getSignGenderText(sign)}${
    signProfile.tagline ? ` (${signProfile.tagline})` : ""
  }`;

  return [
    `${planetProfile.heading}`,
    "=",
    signHeading,
    signProfile.dates,
    formatBullets(planetProfile.bullets),
    "=",
    formatBullets(signProfile.bullets),
  ].join("\n");
}

function buildCombinedEntityReport(planets: Planet[], sign: Sign) {
  const uniquePlanets = getSortedUniquePlanets(planets);
  const planetHeadings = uniquePlanets.map((planet) => PLANET_PROFILES[planet].heading).join(" + ");
  const mergedPlanetBullets = Array.from(
    new Set(uniquePlanets.flatMap((planet) => PLANET_PROFILES[planet].bullets))
  );
  const signProfile = getSignProfile(sign);
  const signHeading = `${SIGN_LABELS[sign]} ${getSignGenderText(sign)}${
    signProfile.tagline ? ` (${signProfile.tagline})` : ""
  }`;

  return [
    planetHeadings,
    "=",
    signHeading,
    signProfile.dates,
    formatBullets(mergedPlanetBullets),
    "=",
    formatBullets(signProfile.bullets),
  ].join("\n");
}

function buildCellReport(
  cell: GridCell,
  personAName: string,
  personBName: string,
  interactionText: string,
  note?: string
) {
  const normalizedNote = note?.trim();
  const isSharedPlacement = cell.aPlanet === cell.bPlanet && cell.aSign === cell.bSign;
  const isSharedSign = cell.aSign === cell.bSign;
  const sharedName = personAName === personBName ? personAName : `${personAName} + ${personBName}`;

  return [
    `${cell.symbol} ${cell.title}`,
    `${cell.aPlanet} ${PLANET_LABELS[cell.aPlanet]} ${cell.aSign} x ${cell.bPlanet} ${PLANET_LABELS[cell.bPlanet]} ${cell.bSign}`,
    "",
    "Planetary Interaction",
    interactionText,
    ...(normalizedNote ? ["", `NOTE: ${normalizedNote}`] : []),
    "",
    ...(isSharedPlacement
      ? [`${personAName} + ${personBName}`, buildEntityReport(cell.aPlanet, cell.aSign)]
      : isSharedSign
        ? [sharedName, buildCombinedEntityReport([cell.aPlanet, cell.bPlanet], cell.aSign)]
      : [
          personAName,
          buildEntityReport(cell.aPlanet, cell.aSign),
          "",
          "X",
          "",
          personBName,
          buildEntityReport(cell.bPlanet, cell.bSign),
        ]),
  ].join("\n");
}

function formatDistributionTable(
  title: string,
  rows: DistributionRow[],
  labels?: { a?: string; b?: string; combined?: string; note?: string }
) {
  const headerA = labels?.a ?? "Partner A";
  const headerB = labels?.b ?? "Partner B";
  const headerCombined = labels?.combined ?? "Together";
  const lines = [
    title.toUpperCase(),
    "-".repeat(48),
    [("Type").padEnd(18), headerA.padStart(10), headerB.padStart(10), headerCombined.padStart(10)].join(" "),
    ...rows.map((row) =>
      [row.label.padEnd(18), `${row.a}%`.padStart(10), `${row.b}%`.padStart(10), `${row.combined}%`.padStart(10)].join(
        " "
      )
    ),
  ];

  if (labels?.note) {
    lines.push("", labels.note);
  }

  return lines.join("\n");
}

function formatQualifierSection(title: string, rows: QualifierRow[]) {
  const row = rows[0];
  if (!row) return `${title.toUpperCase()}\n${"-".repeat(48)}\nNo data available.`;

  return [
    title.toUpperCase(),
    "-".repeat(48),
    `Partner A ${row.label}: ${row.a}`,
    `Partner B ${row.label}: ${row.b}`,
    `Relationship ${row.label}: ${row.combined}`,
  ].join("\n");
}

function formatRomanticMatchSection(
  personAName: string,
  personBName: string,
  romanticMatch: {
    aLoveScore: number;
    bLoveScore: number;
    loveMatch: number;
    aSexScore: number;
    bSexScore: number;
    sexMatch: number;
    aRomanticMatch: number;
    bRomanticMatch: number;
    romanticMatch: number;
    aMultiplier: string;
    bMultiplier: string;
  }
) {
  return [
    "ROMANTIC MATCH MULTIPLIER",
    "-".repeat(48),
    `${personAName} -> ${personBName} Love Match: ${formatMultiplierNumber(romanticMatch.aLoveScore)}`,
    `${personBName} -> ${personAName} Love Match: ${formatMultiplierNumber(romanticMatch.bLoveScore)}`,
    `Love Match Average: ${formatMultiplierNumber(romanticMatch.loveMatch)}`,
    "",
    `${personAName} -> ${personBName} Sex Match: ${formatMultiplierNumber(romanticMatch.aSexScore)}`,
    `${personBName} -> ${personAName} Sex Match: ${formatMultiplierNumber(romanticMatch.bSexScore)}`,
    `Sex Match Average: ${formatMultiplierNumber(romanticMatch.sexMatch)}`,
    "",
    `${personAName} -> ${personBName} Romantic Match: ${formatMultiplierNumber(romanticMatch.aRomanticMatch)}`,
    `${personAName} -> ${personBName} Romantic Multiplier: ${romanticMatch.aMultiplier}`,
    `${personBName} -> ${personAName} Romantic Match: ${formatMultiplierNumber(romanticMatch.bRomanticMatch)}`,
    `${personBName} -> ${personAName} Romantic Multiplier: ${romanticMatch.bMultiplier}`,
  ].join("\n");
}

function buildCalculationReport(options: {
  personAName: string;
  personBName: string;
  elementRows: DistributionRow[];
  modalityRows: DistributionRow[];
  genderRows: DistributionRow[];
  yinYangRows: DistributionRow[];
  natureRows: QualifierRow[];
  energyRows: QualifierRow[];
  astrologicalGenderA: Record<GenderCategory, number>;
  astrologicalGenderB: Record<GenderCategory, number>;
  generationalGenderA: Record<GenderCategory, number>;
  generationalGenderB: Record<GenderCategory, number>;
  romanticMatch: {
    aLoveScore: number;
    bLoveScore: number;
    loveMatch: number;
    aSexScore: number;
    bSexScore: number;
    sexMatch: number;
    aRomanticMatch: number;
    bRomanticMatch: number;
    romanticMatch: number;
    aMultiplier: string;
    bMultiplier: string;
  };
}) {
  const astrologicalGenderCombined = combineDistributions(
    options.astrologicalGenderA,
    options.astrologicalGenderB,
    DISTRIBUTION_ORDER.gender
  );
  const generationalGenderCombined = combineDistributions(
    options.generationalGenderA,
    options.generationalGenderB,
    DISTRIBUTION_ORDER.gender
  );

  const astrologicalGenderRows = buildSummaryRows(
    GENDER_LABELS,
    options.astrologicalGenderA,
    options.astrologicalGenderB,
    astrologicalGenderCombined,
    DISTRIBUTION_ORDER.gender
  );
  const generationalGenderRows = buildSummaryRows(
    GENDER_LABELS,
    options.generationalGenderA,
    options.generationalGenderB,
    generationalGenderCombined,
    DISTRIBUTION_ORDER.gender
  );

  return [
    "CALCULATIONS",
    "=".repeat(48),
    formatDistributionTable("Element", options.elementRows),
    formatDistributionTable("Modality", options.modalityRows),
    formatDistributionTable("Final Gender Expression", options.genderRows),
    formatDistributionTable("Astrological Gender Expression", astrologicalGenderRows),
    formatDistributionTable("Generational Gender Expression", generationalGenderRows),
    formatDistributionTable("Yin Yang", options.yinYangRows),
    formatQualifierSection("Nature", options.natureRows),
    formatQualifierSection("Energy", options.energyRows),
    formatRomanticMatchSection(options.personAName, options.personBName, options.romanticMatch),
  ].join("\n\n");
}

function formatShortReportDate(date: Date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear() % 100;
  return `${day}/${month}/${year}`;
}

function buildRootsOfPowerMatches(values: PlacementMap) {
  const grouped: Record<Element, RootPowerMatch[]> = {
    air: [],
    water: [],
    earth: [],
    fire: [],
  };

  for (const planet of SUMMARY_PERSONAL_PLANETS) {
    const sign = values[planet];
    if (!sign) continue;
    const match = ROOTS_OF_POWER_TABLE[sign].find((entry) => entry.planet === planet);
    if (!match) continue;
    grouped[ELEMENTS[sign]].push({ ...match, sign });
  }

  for (const element of ROOTS_ELEMENT_ORDER) {
    grouped[element].sort((a, b) => {
      const signDelta = SIGN_INDEX[a.sign] - SIGN_INDEX[b.sign];
      if (signDelta !== 0) return signDelta;
      return SUMMARY_PERSONAL_PLANETS.indexOf(a.planet) - SUMMARY_PERSONAL_PLANETS.indexOf(b.planet);
    });
  }

  return grouped;
}

function formatClockTime(totalMinutes: number) {
  const minutesInDay = 24 * 60;
  const normalized = ((totalMinutes % minutesInDay) + minutesInDay) % minutesInDay;
  const hour24 = Math.floor(normalized / 60);
  const minute = normalized % 60;
  const meridiem = hour24 >= 12 ? "P.M." : "A.M.";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${meridiem}`;
}

function buildPlanetaryHourSequence(day: DayOfWeek, mode: ClockMode) {
  const dayRuler = DAY_RULERS[day];
  const startIndex = PLANETARY_HOUR_ORDER.indexOf(dayRuler);
  const offset = mode === "day" ? 0 : 12;

  return Array.from({ length: 12 }, (_, index) => {
    const planet = PLANETARY_HOUR_ORDER[(startIndex + offset + index) % PLANETARY_HOUR_ORDER.length];
    return {
      planet,
      label: PLANETARY_HOUR_WORDS[planet],
    };
  });
}

function buildHouseNoteKey(scope: string, houseIndex: number) {
  return `house-note-${scope}-${houseIndex}`;
}

function formatSavedTimestamp(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString();
}

function cloneHouseAssignments(houses: HouseAssignment[]) {
  return houses.map((item) => ({
    placements: item.placements.map((placement) => ({ ...placement })),
  }));
}

function mergeSavedChartRecords(localCharts: SavedChartRecord[], remoteCharts: SavedChartRecord[]) {
  const merged = new Map<string, SavedChartRecord>();

  for (const chart of [...remoteCharts, ...localCharts]) {
    const key = chart.profileName.trim().toLowerCase() || chart.id;
    const existing = merged.get(key);
    if (!existing) {
      merged.set(key, chart);
      continue;
    }

    const existingUpdatedAt = new Date(existing.updatedAt).getTime();
    const candidateUpdatedAt = new Date(chart.updatedAt).getTime();
    merged.set(
      key,
      candidateUpdatedAt >= existingUpdatedAt || Number.isNaN(existingUpdatedAt) ? chart : existing
    );
  }

  return Array.from(merged.values()).sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

function mergeModalNoteMaps(localNotes: ModalNotesMap, remoteNotes: ModalNotesMap) {
  return {
    ...remoteNotes,
    ...localNotes,
  };
}

function createDefaultBirthDetails(): BirthDetails {
  return {
    month: "",
    day: "",
    year: "",
    hour: "12",
    minute: "00",
    meridiem: "PM",
    birthTimeKnown: true,
    location: "",
    latitude: null,
    longitude: null,
    timezone: "",
  };
}

function normalizeBirthDetails(value: unknown): BirthDetails | null {
  if (!value || typeof value !== "object") return null;
  const source = value as Partial<BirthDetails>;
  const fallback = createDefaultBirthDetails();
  const meridiem = source.meridiem === "AM" ? "AM" : source.meridiem === "PM" ? "PM" : fallback.meridiem;

  return {
    month: typeof source.month === "string" ? source.month : fallback.month,
    day: typeof source.day === "string" ? source.day : fallback.day,
    year: typeof source.year === "string" ? source.year : fallback.year,
    hour: typeof source.hour === "string" ? source.hour : fallback.hour,
    minute: typeof source.minute === "string" ? source.minute : fallback.minute,
    meridiem,
    birthTimeKnown: source.birthTimeKnown !== false,
    location: typeof source.location === "string" ? source.location : fallback.location,
    latitude: typeof source.latitude === "number" ? source.latitude : null,
    longitude: typeof source.longitude === "number" ? source.longitude : null,
    timezone: typeof source.timezone === "string" ? source.timezone : fallback.timezone,
  };
}

function createSavedChartRecord(
  name: string,
  sex: Sex,
  placements: PlacementMap,
  houses: HouseAssignment[],
  birthDetails: BirthDetails | null
): SavedChartRecord {
  const now = new Date().toISOString();
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `chart-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  return {
    id,
    schemaVersion: 4,
    storageScope: "local",
    profileName: name.trim() || "Unnamed Chart",
    sex,
    placements: { ...placements },
    houses: cloneHouseAssignments(houses),
    birthDetails: birthDetails ? { ...birthDetails } : null,
    createdAt: now,
    updatedAt: now,
  };
}

function normalizeHouseAssignments(value: unknown): HouseAssignment[] {
  if (!Array.isArray(value) || value.length !== 12) {
    return cloneHouseAssignments(DEFAULT_HOUSE_ASSIGNMENTS);
  }

  return value.map((item, index) => {
    const fallback = DEFAULT_HOUSE_ASSIGNMENTS[index];
    if (!item || typeof item !== "object") {
      return {
        placements: fallback.placements.map((placement) => ({ ...placement })),
      };
    }
    const candidate = item as Partial<HouseAssignment> & {
      sign?: Sign | "";
      planet?: HousePlanet | "";
      planetA?: HousePlanet | "";
      planetB?: HousePlanet | "";
      placements?: Array<Partial<HousePlacement>>;
    };
    const normalizeSign = (sign: Sign | "" | undefined, fallbackSign: Sign | "") =>
      sign === "" ? "" : sign && SIGNS.includes(sign) ? sign : fallbackSign;
    const normalizePlanet = (planet: HousePlanet | "" | undefined): HousePlanet | "" =>
      planet === "" ? "" : planet && HOUSE_PLANETS.includes(planet) ? planet : "";

    if (Array.isArray(candidate.placements)) {
      const placements = candidate.placements
        .slice(0, MAX_HOUSE_PLACEMENTS)
        .map((placement, placementIndex) => {
          const fallbackPlacement = fallback.placements[Math.min(placementIndex, fallback.placements.length - 1)];
          return {
            sign: normalizeSign(placement.sign, fallbackPlacement.sign),
            planet: normalizePlanet(placement.planet),
          };
        });

      return {
        placements: placements.length > 0 ? placements : fallback.placements.map((placement) => ({ ...placement })),
      };
    }

    const sign = normalizeSign(candidate.sign, fallback.placements[0].sign);
    const legacyPlacements: HousePlacement[] = [
      {
        sign,
        planet: normalizePlanet(candidate.planetA ?? candidate.planet),
      },
    ];

    const legacyPlanetB = normalizePlanet(candidate.planetB);
    if (legacyPlanetB) {
      legacyPlacements.push({
        sign,
        planet: legacyPlanetB,
      });
    }

    return {
      placements: legacyPlacements,
    };
  });
}

function normalizeSavedChartRecords(records: Array<Partial<SavedChartRecord>>): SavedChartRecord[] {
  return records.map((record) => ({
    id: record.id ?? `chart-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    schemaVersion: 4 as const,
    storageScope: "local" as const,
    profileName: record.profileName?.trim() || "Unnamed Chart",
    sex: (record.sex === "female" ? "female" : "male") as Sex,
    placements: { ...createEmptyPlacementMap(), ...(record.placements ?? {}) },
    houses: normalizeHouseAssignments(record.houses),
    birthDetails: normalizeBirthDetails(record.birthDetails),
    createdAt: record.createdAt ?? new Date().toISOString(),
    updatedAt: record.updatedAt ?? record.createdAt ?? new Date().toISOString(),
  }));
}

function createEmptyPlacementMap(): PlacementMap {
  return PLANETS.reduce<PlacementMap>((accumulator, planet) => {
    accumulator[planet] = "";
    return accumulator;
  }, {});
}

function createBlankHouseAssignments(): HouseAssignment[] {
  return Array.from({ length: 12 }, () => ({
    placements: [{ sign: "", planet: "" }],
  }));
}

function buildHouseAssignmentsFromCalculation(result: AstrologyCalculateResponse): HouseAssignment[] {
  if (!result.houses) {
    return createBlankHouseAssignments();
  }

  return Array.from({ length: 12 }, (_, houseIndex) => {
    const houseNumber = houseIndex + 1;
    const entries: HousePlacement[] =
      result.houses?.entries
      .filter((entry) => entry.house === houseNumber)
      .sort(
        (left, right) =>
          AUTO_HOUSE_PLANET_ORDER.indexOf(AUTO_HOUSE_PLANET_SYMBOLS[left.planet]) -
          AUTO_HOUSE_PLANET_ORDER.indexOf(AUTO_HOUSE_PLANET_SYMBOLS[right.planet])
      )
      .map((entry) => ({
        sign: ASTROLOGY_SIGN_TO_SYMBOL[entry.sign],
        planet: AUTO_HOUSE_PLANET_SYMBOLS[entry.planet],
      })) ?? [];

    const cusp = result.houses?.cusps.find((item) => item.house === houseNumber);
    if (cusp) {
      const cuspSign = ASTROLOGY_SIGN_TO_SYMBOL[cusp.sign];
      const alreadyRepresented = entries.some((entry) => entry.sign === cuspSign);
      if (!alreadyRepresented && entries.length < MAX_HOUSE_PLACEMENTS) {
        entries.push({
          sign: cuspSign,
          planet: "",
        });
      }
    }

    return {
      placements: entries.length > 0 ? entries.slice(0, MAX_HOUSE_PLACEMENTS) : [{ sign: "", planet: "" }],
    };
  });
}

function isMirroredDuplicateCell(cell: GridCell) {
  return PLANETS.indexOf(cell.bPlanet) <= PLANETS.indexOf(cell.aPlanet);
}

function shouldHideSoloGridCell(mode: GridViewMode, cell: GridCell) {
  const aIndex = PLANETS.indexOf(cell.aPlanet);
  const bIndex = PLANETS.indexOf(cell.bPlanet);

  if (aIndex === bIndex) return true;
  if (mode === "partner-a") return bIndex < aIndex;
  if (mode === "partner-b") return bIndex > aIndex;
  return false;
}

function buildDownloadReport(
  grid: GridCell[][],
  personAName: string,
  personBName: string,
  options?: {
    omitSamePlanetComparisons?: boolean;
    omitMirroredComparisons?: boolean;
    singleReportName?: string;
    mode?: GridViewMode;
    originalPersonAName?: string;
    originalPersonA?: PlacementMap;
    originalPersonASex?: Sex;
    originalPersonAHouses?: HouseAssignment[];
    originalPersonAHouseNoteScope?: string;
    originalPersonBName?: string;
    originalPersonB?: PlacementMap;
    originalPersonBSex?: Sex;
    originalPersonBHouses?: HouseAssignment[];
    originalPersonBHouseNoteScope?: string;
    modalNotes?: ModalNotesMap;
    calculations?: string;
  }
) {
  const order: RelationType[] = [
    "same-sign",
    "same-element",
    "elemental-harmony",
    "competing",
    "awkward",
    "teamwork",
  ];

  const buildRelationSections = ({
    grid,
    leftName,
    rightName,
    mode,
    originalPersonAName,
    originalPersonA,
    originalPersonBName,
    originalPersonB,
    omitSamePlanetComparisons,
    omitMirroredComparisons,
    sectionOffset,
  }: {
    grid: GridCell[][];
    leftName: string;
    rightName: string;
    mode: GridViewMode;
    originalPersonAName: string;
    originalPersonA: PlacementMap;
    originalPersonBName: string;
    originalPersonB: PlacementMap;
    omitSamePlanetComparisons?: boolean;
    omitMirroredComparisons?: boolean;
    sectionOffset?: number;
  }) =>
    order
      .map((relation) => {
        const cells = grid.flat().filter((cell) => {
          if (cell.relation !== relation) return false;
          if (omitSamePlanetComparisons && cell.aPlanet === cell.bPlanet) return false;
          if (omitMirroredComparisons && isMirroredDuplicateCell(cell)) return false;
          return true;
        });
        if (cells.length === 0) return null;

        const heading = RELATION_STYLES[relation];
        const headingText =
          typeof sectionOffset === "number"
            ? `${getSectionLetter(order.indexOf(relation) + sectionOffset)}. ${heading.label.toUpperCase()} ${heading.symbol}`
            : `${heading.label.toUpperCase()} ${heading.symbol}`;

        return [
          headingText,
          "=".repeat(48),
          cells
            .map((cell) => {
              const noteKey = buildModalNoteKey(
                cell,
                mode,
                originalPersonAName,
                originalPersonA,
                originalPersonBName,
                originalPersonB
              );
              const note = noteKey ? options?.modalNotes?.[noteKey] : "";
              const interactionText =
                mode === "couple"
                  ? getCoupleInteractionText(cell, leftName, rightName)
                  : getSingleInteractionText(cell, leftName);

              return buildCellReport(cell, leftName, rightName, interactionText, note);
            })
            .join("\n\n" + "-".repeat(48) + "\n\n"),
        ].join("\n");
      })
      .filter(Boolean)
      .join("\n\n\n");

  const formatHousePlacements = (assignment: HouseAssignment) => {
    const placements = assignment.placements.filter((placement) => placement.sign || placement.planet);
    if (placements.length === 0) return "N/A";

    return placements
      .map((placement) => {
        if (!placement.sign && !placement.planet) return "N/A";
        if (!placement.sign) return placement.planet || "N/A";
        if (!placement.planet) return `${SIGN_LABELS[placement.sign]} ${placement.sign}`;
        return `${SIGN_LABELS[placement.sign]} ${placement.sign} ${placement.planet}`;
      })
      .join(" + ");
  };

  const buildHouseSection = (name: string, houses: HouseAssignment[] | undefined, noteScope: string | undefined) => {
    if (!houses || houses.length === 0) return "";

    const lines = houses.map((assignment, index) => {
      const noteKey = noteScope ? buildHouseNoteKey(noteScope, index) : "";
      const note = noteKey ? options?.modalNotes?.[noteKey]?.trim() ?? "" : "";
      const placementLine = `${index + 1}. ${HOUSE_COPY[index]}: ${formatHousePlacements(assignment)}`;
      return note ? `${placementLine}\n   Note: ${note}` : placementLine;
    });

    return [`${name.toUpperCase()} HOUSES`, ...lines].join("\n");
  };

  if (options?.singleReportName) {
    const soloSummary =
      options.mode === "partner-b" &&
      options.originalPersonB &&
      options.originalPersonBName &&
      options.originalPersonBSex
        ? `A. ${buildSoloSummarySection(
            options.originalPersonBName,
            options.originalPersonB,
            options.originalPersonBSex
          )}`
        : options.originalPersonA && options.originalPersonAName && options.originalPersonASex
          ? `A. ${buildSoloSummarySection(
              options.originalPersonAName,
              options.originalPersonA,
              options.originalPersonASex
            )}`
          : "";
    const soloSections =
      options.mode &&
      options.originalPersonAName &&
      options.originalPersonA &&
      options.originalPersonBName &&
      options.originalPersonB
        ? buildRelationSections({
            grid,
            leftName: personAName,
            rightName: personBName,
            mode: options.mode,
            originalPersonAName: options.originalPersonAName,
            originalPersonA: options.originalPersonA,
            originalPersonBName: options.originalPersonBName,
            originalPersonB: options.originalPersonB,
            omitSamePlanetComparisons: options.omitSamePlanetComparisons,
            omitMirroredComparisons: options.omitMirroredComparisons,
            sectionOffset: 1,
          })
        : "";
    const soloHouseSection =
      options.mode === "partner-b"
        ? buildHouseSection(
            options.originalPersonBName ?? options.singleReportName,
            options.originalPersonBHouses,
            options.originalPersonBHouseNoteScope
          )
        : buildHouseSection(
            options.originalPersonAName ?? options.singleReportName,
            options.originalPersonAHouses,
            options.originalPersonAHouseNoteScope
          );

    return [
      `${options.singleReportName} Report ${formatShortReportDate(new Date())}`,
      "",
      ...(soloSummary ? [soloSummary, ""] : []),
      ...(soloHouseSection ? [soloHouseSection, ""] : []),
      soloSections,
      ...(options.calculations ? ["", "", options.calculations] : []),
    ].join("\n");
  }

  const coupleSummary =
    options?.originalPersonA &&
    options.originalPersonASex &&
    options.originalPersonB &&
    options.originalPersonBSex
      ? buildCoupleSummarySection(
          options.originalPersonAName ?? personAName,
          options.originalPersonA,
          options.originalPersonBName ?? personBName,
          options.originalPersonB
        )
      : "";
  const soloABlock =
    options?.originalPersonA &&
    options.originalPersonAName &&
    options.originalPersonASex &&
    options.originalPersonB &&
    options.originalPersonBName
      ? [
          `A. ${buildSoloSummarySection(options.originalPersonAName, options.originalPersonA, options.originalPersonASex)}`,
          buildRelationSections({
            grid: buildGrid(options.originalPersonA, options.originalPersonA),
            leftName: options.originalPersonAName,
            rightName: options.originalPersonAName,
            mode: "partner-a",
            originalPersonAName: options.originalPersonAName,
            originalPersonA: options.originalPersonA,
            originalPersonBName: options.originalPersonBName,
            originalPersonB: options.originalPersonB,
            omitSamePlanetComparisons: true,
            omitMirroredComparisons: true,
          }),
        ].join("\n\n")
      : "";
  const soloBBlock =
    options?.originalPersonB &&
    options.originalPersonBName &&
    options.originalPersonBSex &&
    options.originalPersonA &&
    options.originalPersonAName
      ? [
          `B. ${buildSoloSummarySection(options.originalPersonBName, options.originalPersonB, options.originalPersonBSex)}`,
          buildRelationSections({
            grid: buildGrid(options.originalPersonB, options.originalPersonB),
            leftName: options.originalPersonBName,
            rightName: options.originalPersonBName,
            mode: "partner-b",
            originalPersonAName: options.originalPersonAName,
            originalPersonA: options.originalPersonA,
            originalPersonBName: options.originalPersonBName,
            originalPersonB: options.originalPersonB,
            omitSamePlanetComparisons: true,
            omitMirroredComparisons: true,
          }),
        ].join("\n\n")
      : "";
  const coupleBlock =
    options?.originalPersonA &&
    options.originalPersonAName &&
    options.originalPersonB &&
    options.originalPersonBName
      ? [
          `C. ${coupleSummary}`,
          buildRelationSections({
            grid,
            leftName: personAName,
            rightName: personBName,
            mode: "couple",
            originalPersonAName: options.originalPersonAName,
            originalPersonA: options.originalPersonA,
            originalPersonBName: options.originalPersonBName,
            originalPersonB: options.originalPersonB,
          }),
        ].join("\n\n")
      : "";
  const houseABlock = buildHouseSection(
    options?.originalPersonAName ?? personAName,
    options?.originalPersonAHouses,
    options?.originalPersonAHouseNoteScope
  );
  const houseBBlock = buildHouseSection(
    options?.originalPersonBName ?? personBName,
    options?.originalPersonBHouses,
    options?.originalPersonBHouseNoteScope
  );

  return [
    "LOVE COMPUTER REPORT",
    `Generated: ${new Date().toLocaleString()}`,
    `${personAName} x ${personBName}`,
    "",
    ...(soloABlock ? [soloABlock, ""] : []),
    ...(houseABlock ? [houseABlock, ""] : []),
    ...(soloBBlock ? [soloBBlock, ""] : []),
    ...(houseBBlock ? [houseBBlock, ""] : []),
    ...(coupleBlock ? [coupleBlock] : []),
    ...(options?.calculations ? ["", "", options.calculations] : []),
  ].join("\n");
}

export default function LoveComputerPage() {
  const [lifespaceSession, setLifespaceSession] = useState<LifespaceWebSession | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [localStateReady, setLocalStateReady] = useState(false);
  const [cloudStateReady, setCloudStateReady] = useState(false);
  const [cloudStateUsername, setCloudStateUsername] = useState<string | null>(null);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetPasswordStatus, setResetPasswordStatus] = useState<ResetPasswordStatus>({
    kind: "idle",
    message: "",
  });
  const [loginBusy, setLoginBusy] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [houseTarget, setHouseTarget] = useState<"a" | "b">("a");
  const [houseAssignmentsA, setHouseAssignmentsA] = useState<HouseAssignment[]>(
    DEFAULT_HOUSE_ASSIGNMENTS.map((item) => ({ ...item }))
  );
  const [houseAssignmentsB, setHouseAssignmentsB] = useState<HouseAssignment[]>(
    DEFAULT_HOUSE_ASSIGNMENTS.map((item) => ({ ...item }))
  );
  const [clockDay, setClockDay] = useState<DayOfWeek>("Thursday");
  const [sunriseHour, setSunriseHour] = useState(6);
  const [sunriseMinute, setSunriseMinute] = useState(31);
  const [clockMode, setClockMode] = useState<ClockMode>("day");
  const [reportSkin, setReportSkin] = useState<"classic" | "teal">("classic");
  const [personAName, setPersonAName] = useState("Person A");
  const [personA, setPersonA] = useState<PlacementMap>(DEFAULT_A);
  const [personASex, setPersonASex] = useState<Sex>("male");
  const [birthDetailsA, setBirthDetailsA] = useState<BirthDetails>(() => createDefaultBirthDetails());
  const [calculationStatusA, setCalculationStatusA] = useState<CalculationStatus>({
    kind: "idle",
    message: "",
  });
  const [personBName, setPersonBName] = useState("Person B");
  const [personB, setPersonB] = useState<PlacementMap>(DEFAULT_B);
  const [personBSex, setPersonBSex] = useState<Sex>("female");
  const [birthDetailsB, setBirthDetailsB] = useState<BirthDetails>(() => createDefaultBirthDetails());
  const [calculationStatusB, setCalculationStatusB] = useState<CalculationStatus>({
    kind: "idle",
    message: "",
  });
  const [selectedCell, setSelectedCell] = useState<GridCell | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importStatus, setImportStatus] = useState("Upload an Astro-Seek synastry report to auto-fill the placements.");
  const [importWarnings, setImportWarnings] = useState<string[]>([]);
  const [debugImageUrl, setDebugImageUrl] = useState<string | null>(null);
  const [uploadedSynastryFile, setUploadedSynastryFile] = useState<File | null>(null);
  const [textImportValue, setTextImportValue] = useState("");
  const [synastryOverridesA, setSynastryOverridesA] = useState<SynastryOverrideMap>(() => ({
    ...ASTROSEEK_SYN_A_OVERRIDES,
  }));
  const [synastryOverridesB, setSynastryOverridesB] = useState<SynastryOverrideMap>(() => ({
    ...ASTROSEEK_SYN_B_OVERRIDES,
  }));
  const [debugSide, setDebugSide] = useState<"a" | "b">("a");
  const [debugPlanet, setDebugPlanet] = useState<Planet>("☉");
  const [calibrationStatus, setCalibrationStatus] = useState("Calibration is currently using the locked-in defaults.");
  const [gridViewMode, setGridViewMode] = useState<GridViewMode>("couple");
  const [showGenerationalPlanets, setShowGenerationalPlanets] = useState(true);
  const [focusedRows, setFocusedRows] = useState<Planet[]>([]);
  const [focusedCols, setFocusedCols] = useState<Planet[]>([]);
  const [focusedRelations, setFocusedRelations] = useState<RelationType[]>([]);
  const [noteMarkerOffset, setNoteMarkerOffset] = useState({ x: 0, y: 0 });
  const [savedCharts, setSavedCharts] = useState<SavedChartRecord[]>([]);
  const [modalNotes, setModalNotes] = useState<ModalNotesMap>({});
  const [noteExpanded, setNoteExpanded] = useState(false);
  const [saveStatus, setSaveStatus] = useState("Charts are stored locally in this browser for now.");
  const [saveFlashState, setSaveFlashState] = useState<SaveFlashState>(null);
  const [loadPrimarySelection, setLoadPrimarySelection] = useState("");
  const [loadComparisonSelection, setLoadComparisonSelection] = useState("");
  const [deleteChartSelection, setDeleteChartSelection] = useState("");
  const [loadedChartIdA, setLoadedChartIdA] = useState("");
  const [loadedChartIdB, setLoadedChartIdB] = useState("");
  const backdropPointerStartedRef = useRef(false);
  const saveFlashTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const syncSession = () => {
      setLifespaceSession(getStoredLifespaceSession());
      setAuthReady(true);
    };

    syncSession();
    window.addEventListener(LIFESPACE_AUTH_EVENT, syncSession);
    return () => window.removeEventListener(LIFESPACE_AUTH_EVENT, syncSession);
  }, []);

  useEffect(() => {
    if (!selectedCell) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCell(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedCell]);

  useEffect(() => {
    setNoteExpanded(false);
  }, [selectedCell]);

  useEffect(() => {
    return () => {
      if (saveFlashTimeoutRef.current) {
        window.clearTimeout(saveFlashTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setSelectedCell(null);
    setFocusedRows([]);
    setFocusedCols([]);
    setFocusedRelations([]);
  }, [gridViewMode, showGenerationalPlanets]);

  useEffect(() => {
    if (!loginErrorMessage) return;
    const timeoutId = window.setTimeout(() => {
      setLoginErrorMessage("");
    }, 9000);
    return () => window.clearTimeout(timeoutId);
  }, [loginErrorMessage]);

  useEffect(() => {
    const storedA = window.localStorage.getItem(SYN_A_STORAGE_KEY);
    const storedB = window.localStorage.getItem(SYN_B_STORAGE_KEY);
    const storedNoteMarkerOffset = window.localStorage.getItem(NOTE_MARKER_STORAGE_KEY);
    const storedReportSkin = window.localStorage.getItem(REPORT_SKIN_STORAGE_KEY);
    const storedClockCalculator = window.localStorage.getItem(CLOCK_CALCULATOR_STORAGE_KEY);

    if (storedReportSkin === "classic" || storedReportSkin === "teal") {
      setReportSkin(storedReportSkin);
    }

    if (storedA) {
      try {
        setSynastryOverridesA(JSON.parse(storedA) as SynastryOverrideMap);
      } catch {
        window.localStorage.removeItem(SYN_A_STORAGE_KEY);
      }
    }

    if (storedB) {
      try {
        setSynastryOverridesB(JSON.parse(storedB) as SynastryOverrideMap);
      } catch {
        window.localStorage.removeItem(SYN_B_STORAGE_KEY);
      }
    }

    if (storedA || storedB) {
      setCalibrationStatus("Saved calibration loaded from this browser.");
    }

    if (storedNoteMarkerOffset) {
      try {
        setNoteMarkerOffset(JSON.parse(storedNoteMarkerOffset) as { x: number; y: number });
      } catch {
        window.localStorage.removeItem(NOTE_MARKER_STORAGE_KEY);
      }
    }

    if (storedClockCalculator) {
      try {
        const parsed = JSON.parse(storedClockCalculator) as {
          day?: DayOfWeek;
          sunriseHour?: number;
          sunriseMinute?: number;
          mode?: ClockMode;
        };

        if (parsed.day && DAYS_OF_WEEK.includes(parsed.day)) {
          setClockDay(parsed.day);
        }

        if (typeof parsed.sunriseHour === "number" && parsed.sunriseHour >= 1 && parsed.sunriseHour <= 12) {
          setSunriseHour(parsed.sunriseHour);
        }

        if (
          typeof parsed.sunriseMinute === "number" &&
          Number.isInteger(parsed.sunriseMinute) &&
          parsed.sunriseMinute >= 1 &&
          parsed.sunriseMinute <= 59
        ) {
          setSunriseMinute(parsed.sunriseMinute);
        }

        if (parsed.mode === "day" || parsed.mode === "night") {
          setClockMode(parsed.mode);
        }
      } catch {
        window.localStorage.removeItem(CLOCK_CALCULATOR_STORAGE_KEY);
      }
    }

    setLocalStateReady(true);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(REPORT_SKIN_STORAGE_KEY, reportSkin);
  }, [reportSkin]);

  useEffect(() => {
    window.localStorage.setItem(
      CLOCK_CALCULATOR_STORAGE_KEY,
      JSON.stringify({
        day: clockDay,
        sunriseHour,
        sunriseMinute,
        mode: clockMode,
      })
    );
  }, [clockDay, sunriseHour, sunriseMinute, clockMode]);

  useEffect(() => {
    if (!localStateReady || !authReady) return;

    if (!lifespaceSession?.usernameLower) {
      setCloudStateUsername(null);
      const guestChartsKey = getSavedChartsStorageKey();
      const guestNotesKey = getModalNotesStorageKey();
      const storedCharts = window.localStorage.getItem(guestChartsKey);
      const storedModalNotes = window.localStorage.getItem(guestNotesKey);

      if (storedCharts) {
        try {
          const parsed = JSON.parse(storedCharts) as Array<Partial<SavedChartRecord>>;
          setSavedCharts(normalizeSavedChartRecords(parsed));
          setSaveStatus("Saved charts loaded from this browser.");
        } catch {
          setSavedCharts([]);
          window.localStorage.removeItem(guestChartsKey);
        }
      } else {
        setSavedCharts([]);
      }

      if (storedModalNotes) {
        try {
          setModalNotes(JSON.parse(storedModalNotes) as ModalNotesMap);
        } catch {
          setModalNotes({});
          window.localStorage.removeItem(guestNotesKey);
        }
      } else {
        setModalNotes({});
      }

      setCloudStateReady(false);
      return;
    }

    setCloudStateReady(false);
    setCloudStateUsername(null);
    setSavedCharts([]);
    setModalNotes({});

    let cancelled = false;
    const targetUsername = lifespaceSession.usernameLower;

    const loadAccountLoveComputerData = async () => {
      const accountChartsKey = getSavedChartsStorageKey(targetUsername);
      const accountNotesKey = getModalNotesStorageKey(targetUsername);

      try {
        const [remoteState, account] = await Promise.all([
          getLoveComputerCloudState(targetUsername),
          getWebAccountByUsername(targetUsername),
        ]);
        if (cancelled) return;

        const remoteChartsUnfiltered = normalizeSavedChartRecords(
          (remoteState?.savedCharts ?? []) as Array<Partial<SavedChartRecord>>
        );
        const accountCreatedAt = account?.createdAt?.getTime() ?? null;
        const remoteCharts =
          accountCreatedAt === null
            ? remoteChartsUnfiltered
            : remoteChartsUnfiltered.filter((chart) => {
                const chartCreatedAt = new Date(chart.createdAt).getTime();
                return Number.isNaN(chartCreatedAt) || chartCreatedAt >= accountCreatedAt;
              });
        const remoteNotes = remoteState?.modalNotes ?? {};
        const nextCharts = remoteState ? remoteCharts : [];
        const nextNotes = remoteState ? remoteNotes : {};

        setSavedCharts(nextCharts);
        setModalNotes(nextNotes);
        window.localStorage.setItem(accountChartsKey, JSON.stringify(nextCharts));
        window.localStorage.setItem(accountNotesKey, JSON.stringify(nextNotes));
        setCloudStateUsername(targetUsername);
        setCloudStateReady(true);
        setSaveStatus(
          remoteState
            ? `${nextCharts.length} saved ${nextCharts.length === 1 ? "chart" : "charts"} loaded for ${targetUsername}.`
            : "No saved charts yet for this account."
        );

        if (
          remoteState &&
          remoteCharts.length !== remoteChartsUnfiltered.length
        ) {
          await setLoveComputerCloudState(targetUsername, {
            savedCharts: nextCharts,
            modalNotes: nextNotes,
          });
        }
      } catch (error) {
        if (cancelled) return;
        setSavedCharts([]);
        setModalNotes({});
        setCloudStateReady(false);
        setCloudStateUsername(null);
        setSaveStatus(
          error instanceof Error
            ? `Account sync unavailable: ${error.message}`
            : "Account sync unavailable right now."
        );
      }
    };

    void loadAccountLoveComputerData();

    return () => {
      cancelled = true;
    };
  }, [authReady, localStateReady, lifespaceSession?.usernameLower]);

  useEffect(() => {
    if (!cloudStateReady || !lifespaceSession?.usernameLower) return;
    if (cloudStateUsername !== lifespaceSession.usernameLower) return;

    void setLoveComputerCloudState(lifespaceSession.usernameLower, {
      savedCharts,
      modalNotes,
    }).catch((error) => {
      setSaveStatus(
        error instanceof Error
          ? `Account sync unavailable: ${error.message}`
          : "Account sync unavailable right now."
      );
    });
  }, [cloudStateReady, cloudStateUsername, lifespaceSession?.usernameLower, savedCharts, modalNotes]);

  const visiblePlanets = useMemo(
    () => pickVisiblePlanets(showGenerationalPlanets),
    [showGenerationalPlanets]
  );

  const gridPersonA = useMemo(() => {
    if (gridViewMode === "partner-b") return filterPlacementMap(personB, visiblePlanets);
    return filterPlacementMap(personA, visiblePlanets);
  }, [gridViewMode, personA, personB, visiblePlanets]);

  const gridPersonB = useMemo(() => {
    if (gridViewMode === "partner-a") return filterPlacementMap(personA, visiblePlanets);
    if (gridViewMode === "partner-b") return filterPlacementMap(personB, visiblePlanets);
    return filterPlacementMap(personB, visiblePlanets);
  }, [gridViewMode, personA, personB, visiblePlanets]);

  const gridLeftName = gridViewMode === "partner-b" ? personBName : personAName;
  const gridTopName = gridViewMode === "partner-a" ? personAName : personBName;

  const grid = useMemo(() => buildGrid(gridPersonA, gridPersonB), [gridPersonA, gridPersonB]);
  const rows = visiblePlanets.filter((planet) => gridPersonA[planet]);
  const cols = visiblePlanets.filter((planet) => gridPersonB[planet]);

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
  const yinYangA = useMemo(() => buildYinYangDistribution(elementA), [elementA]);
  const yinYangB = useMemo(() => buildYinYangDistribution(elementB), [elementB]);
  const yinYangCombined = useMemo(
    () => combineDistributions(yinYangA, yinYangB, ["yin", "yang"] as const),
    [yinYangA, yinYangB]
  );
  const relationshipGrid = useMemo(() => buildGrid(personA, personB), [personA, personB]);
  const romanticMatch = useMemo(() => buildRomanticMatchMultiplier(personA, personB), [personA, personB]);

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
  const yinYangRows = buildYinYangRows(yinYangA, yinYangB, yinYangCombined);
  const natureRows = buildQualifierRows(
    "Nature",
    getNatureQualifier(elementA),
    getNatureQualifier(elementB),
    getNatureQualifier(elementCombined)
  );
  const energyRows = buildQualifierRows(
    "Energy",
    getEnergyQualifier(genderA.final),
    getEnergyQualifier(genderB.final),
    getEnergyQualifier(genderCombined)
  );
  const planetaryHourRows = useMemo(() => {
    const baseMinutes = ((sunriseHour % 12) + (clockMode === "day" ? 0 : 12)) * 60 + sunriseMinute;
    const sequence = buildPlanetaryHourSequence(clockDay, clockMode);

    return sequence.map((entry, index) => ({
      time: formatClockTime(baseMinutes + index * 60),
      ...entry,
    }));
  }, [clockDay, clockMode, sunriseHour, sunriseMinute]);

  const debugBoxes = useMemo(
    () => buildSynastryDebugBoxes(synastryOverridesA, synastryOverridesB),
    [synastryOverridesA, synastryOverridesB]
  );

  const alphabetizedSavedCharts = useMemo(
    () =>
      [...savedCharts].sort((a, b) =>
        a.profileName.localeCompare(b.profileName, undefined, { sensitivity: "base" })
      ),
    [savedCharts]
  );
  const primaryDropdownCharts = useMemo(
    () =>
      alphabetizedSavedCharts.filter(
        (record) => record.profileName.localeCompare(personAName, undefined, { sensitivity: "base" }) !== 0
      ),
    [alphabetizedSavedCharts, personAName]
  );
  const comparisonDropdownCharts = useMemo(
    () =>
      alphabetizedSavedCharts.filter(
        (record) => record.profileName.localeCompare(personBName, undefined, { sensitivity: "base" }) !== 0
      ),
    [alphabetizedSavedCharts, personBName]
  );
  const selectedCellNoteKey = useMemo(() => {
    if (!selectedCell) return "";
    return buildModalNoteKey(selectedCell, gridViewMode, personAName, personA, personBName, personB);
  }, [selectedCell, gridViewMode, personAName, personA, personBName, personB]);
  const selectedCellNote = selectedCellNoteKey ? modalNotes[selectedCellNoteKey] ?? "" : "";
  const selectedCellHasNote = selectedCellNote.trim().length > 0;
  const shouldShowExpandedNote = noteExpanded || selectedCellHasNote;
  const selectedLeftHasSamePlanetStar = selectedCell
    ? isSamePlanetPlacement(selectedCell.aPlanet, selectedCell.aSign)
    : false;
  const selectedRightHasSamePlanetStar = selectedCell
    ? isSamePlanetPlacement(selectedCell.bPlanet, selectedCell.bSign)
    : false;
  const selectedInteractionText = useMemo(() => {
    if (!selectedCell) return "";
    if (gridViewMode === "couple") {
      return getCoupleInteractionText(selectedCell, gridLeftName, gridTopName);
    }
    return getSingleInteractionText(selectedCell, gridLeftName);
  }, [selectedCell, gridViewMode, gridLeftName, gridTopName]);

  const updateSelectedCellNote = (value: string) => {
    if (!selectedCellNoteKey) return;
    const next = {
      ...modalNotes,
      [selectedCellNoteKey]: value,
    };
    persistModalNotes(next);
  };

  const updateModalNote = (key: string, value: string) => {
    const next = {
      ...modalNotes,
      [key]: value,
    };
    persistModalNotes(next);
  };

  const clearHouseModalNotes = (scope: string) => {
    const next = Object.fromEntries(
      Object.entries(modalNotes).filter(([key]) => !key.startsWith(`house-note-${scope}-`))
    );
    persistModalNotes(next);
  };

  const restoreHouseModalNotes = (scope: string, nextScopeNotes: ModalNotesMap) => {
    const next = {
      ...Object.fromEntries(Object.entries(modalNotes).filter(([key]) => !key.startsWith(`house-note-${scope}-`))),
      ...nextScopeNotes,
    };
    persistModalNotes(next);
  };

  const selectedOverride =
    (debugSide === "a" ? synastryOverridesA : synastryOverridesB)[debugPlanet] ?? { dx: 0, dy: 0, scale: 1 };
  const selectedScale = selectedOverride.scale ?? 1;
  const selectedXPx = Math.round(selectedOverride.dx * 700);
  const selectedYPx = Math.round(selectedOverride.dy * 1275);

  const updateSelectedOverride = (changes: Partial<SynastryRectOverride>) => {
    const setter = debugSide === "a" ? setSynastryOverridesA : setSynastryOverridesB;
    const source = debugSide === "a" ? synastryOverridesA : synastryOverridesB;
    const current = source[debugPlanet] ?? { dx: 0, dy: 0, scale: 1 };

    setter({
      ...source,
      [debugPlanet]: {
        ...current,
        ...changes,
      },
    });
  };

  const nudgeSelected = (dxPx: number, dyPx: number) => {
    updateSelectedOverride({
      dx: selectedOverride.dx + dxPx / 700,
      dy: selectedOverride.dy + dyPx / 1275,
    });
  };

  const resizeSelected = (delta: number) => {
    updateSelectedOverride({
      scale: Math.max(0.6, Number((selectedScale + delta).toFixed(2))),
    });
  };

  const resetSelected = () => {
    const defaults = debugSide === "a" ? ASTROSEEK_SYN_A_OVERRIDES : ASTROSEEK_SYN_B_OVERRIDES;
    const setter = debugSide === "a" ? setSynastryOverridesA : setSynastryOverridesB;

    setter({
      ...(debugSide === "a" ? synastryOverridesA : synastryOverridesB),
      [debugPlanet]: defaults[debugPlanet] ?? { dx: 0, dy: 0, scale: 1 },
    });
  };

  const saveCurrentCalibration = () => {
    window.localStorage.setItem(SYN_A_STORAGE_KEY, JSON.stringify(synastryOverridesA));
    window.localStorage.setItem(SYN_B_STORAGE_KEY, JSON.stringify(synastryOverridesB));
    setCalibrationStatus("Current calibration saved in this browser.");
  };

  const resetAllCalibration = () => {
    setSynastryOverridesA({ ...ASTROSEEK_SYN_A_OVERRIDES });
    setSynastryOverridesB({ ...ASTROSEEK_SYN_B_OVERRIDES });
    window.localStorage.removeItem(SYN_A_STORAGE_KEY);
    window.localStorage.removeItem(SYN_B_STORAGE_KEY);
    setCalibrationStatus("Calibration reset to the locked-in defaults.");
  };

  const detachImportFromLoadedCharts = () => {
    setLoadedChartIdA("");
    setLoadedChartIdB("");
    setLoadPrimarySelection("");
    setLoadComparisonSelection("");
  };

  const runSynastryImport = async (file: File) => {
    detachImportFromLoadedCharts();
    setIsImporting(true);
    setImportWarnings([]);
    setImportStatus(`Analyzing ${file.name}...`);
    setBirthDetailsA(createDefaultBirthDetails());
    setBirthDetailsB(createDefaultBirthDetails());
    setCalculationStatusA({ kind: "idle", message: "" });
    setCalculationStatusB({ kind: "idle", message: "" });

    try {
      const result = await parseAstroSeekSynastryFile(file, synastryOverridesA, synastryOverridesB);
      setPersonA({ ...createEmptyPlacementMap(), ...result.personA });
      setPersonB({ ...createEmptyPlacementMap(), ...result.personB });
      setImportWarnings(result.warnings);
      setImportStatus(
        result.warnings.length > 0
          ? "Synastry report imported with a few low-confidence placements. Please review the filled signs."
          : "Synastry report imported successfully."
      );
    } catch (error) {
      setImportStatus(
        error instanceof Error ? `Import failed: ${error.message}` : "Import failed unexpectedly."
      );
      setImportWarnings([]);
    } finally {
      setIsImporting(false);
    }
  };

  const downloadReport = () => {
    const calculations = buildCalculationReport({
      personAName,
      personBName,
      elementRows,
      modalityRows,
      genderRows,
      yinYangRows,
      natureRows,
      energyRows,
      astrologicalGenderA: genderA.astrological,
      astrologicalGenderB: genderB.astrological,
      generationalGenderA: genderA.generational,
      generationalGenderB: genderB.generational,
      romanticMatch,
    });
    const report = buildDownloadReport(grid, gridLeftName, gridTopName, {
      omitSamePlanetComparisons: gridViewMode !== "couple",
      omitMirroredComparisons: gridViewMode !== "couple",
      singleReportName: gridViewMode === "couple" ? undefined : gridLeftName,
      mode: gridViewMode,
      originalPersonAName: personAName,
      originalPersonA: personA,
      originalPersonASex: personASex,
      originalPersonAHouses: houseAssignmentsA,
      originalPersonAHouseNoteScope: loadedChartIdA || "draft-a",
      originalPersonBName: personBName,
      originalPersonB: personB,
      originalPersonBSex: personBSex,
      originalPersonBHouses: houseAssignmentsB,
      originalPersonBHouseNoteScope: loadedChartIdB || "draft-b",
      modalNotes,
      calculations,
    });
    const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const stamp = new Date().toISOString().slice(0, 10);

    link.href = url;
    link.download = `love-computer-report-${stamp}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const persistModalNotes = (next: ModalNotesMap) => {
    setModalNotes(next);
    window.localStorage.setItem(
      getModalNotesStorageKey(lifespaceSession?.usernameLower),
      JSON.stringify(next)
    );
  };

  const handleAstroSeekUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    detachImportFromLoadedCharts();
    setIsImporting(true);
    setImportWarnings([]);
    setUploadedSynastryFile(file);
    setDebugImageUrl((current) => {
      if (current) URL.revokeObjectURL(current);
      return URL.createObjectURL(file);
    });
    await runSynastryImport(file);
    event.target.value = "";
  };

  const handleTextImport = () => {
    if (!textImportValue.trim()) {
      setImportStatus("Paste an Astro-Seek text export first.");
      return;
    }

    detachImportFromLoadedCharts();
    setImportWarnings([]);
    setDebugImageUrl(null);
    setUploadedSynastryFile(null);
    setBirthDetailsA(createDefaultBirthDetails());
    setBirthDetailsB(createDefaultBirthDetails());
    setCalculationStatusA({ kind: "idle", message: "" });
    setCalculationStatusB({ kind: "idle", message: "" });

    try {
      const result = parseAstroSeekTextExport(textImportValue);
      setPersonA({ ...createEmptyPlacementMap(), ...result.personA });
      setPersonB({ ...createEmptyPlacementMap(), ...result.personB });
      setImportWarnings(result.warnings);
      setImportStatus(
        result.warnings.length > 0
          ? "Text export imported with a few missing or conflicting placements. Please review the filled signs."
          : "Text export imported successfully."
      );
    } catch (error) {
      setImportStatus(
        error instanceof Error ? `Text import failed: ${error.message}` : "Text import failed unexpectedly."
      );
      setImportWarnings([]);
    }
  };

  const persistSavedCharts = (next: SavedChartRecord[]) => {
    setSavedCharts(next);
    window.localStorage.setItem(
      getSavedChartsStorageKey(lifespaceSession?.usernameLower),
      JSON.stringify(next)
    );
  };

  const syncLoadedChartRecord = (
    recordId: string,
    updates: {
      profileName: string;
      sex: Sex;
      placements: PlacementMap;
      houses: HouseAssignment[];
      birthDetails: BirthDetails | null;
    }
  ) => {
    if (!recordId) return;
    const existingIndex = savedCharts.findIndex((record) => record.id === recordId);
    if (existingIndex < 0) return;

    const existing = savedCharts[existingIndex];
    const nextPlacements = { ...updates.placements };
    const nextHouses = cloneHouseAssignments(updates.houses);
    const nextBirthDetails = updates.birthDetails ? { ...updates.birthDetails } : null;
    const nextProfileName = updates.profileName.trim() || existing.profileName;
    const placementsChanged = JSON.stringify(existing.placements) !== JSON.stringify(nextPlacements);
    const housesChanged = JSON.stringify(existing.houses) !== JSON.stringify(nextHouses);
    const birthDetailsChanged = JSON.stringify(existing.birthDetails ?? null) !== JSON.stringify(nextBirthDetails);
    const nameChanged = existing.profileName !== nextProfileName;
    const sexChanged = existing.sex !== updates.sex;

    if (!placementsChanged && !housesChanged && !birthDetailsChanged && !nameChanged && !sexChanged) return;

    const updatedRecord: SavedChartRecord = {
      ...existing,
      profileName: nextProfileName,
      sex: updates.sex,
      placements: nextPlacements,
      houses: nextHouses,
      birthDetails: nextBirthDetails,
      updatedAt: new Date().toISOString(),
    };

    const next = [...savedCharts];
    next.splice(existingIndex, 1);
    persistSavedCharts([updatedRecord, ...next]);
  };

  const saveChart = (
    target: "a" | "b",
    name: string,
    sex: Sex,
    placements: PlacementMap,
    houses: HouseAssignment[],
    birthDetails: BirthDetails | null
  ) => {
    const normalizedName = name.trim().toLowerCase();
    const hasDuplicateName = savedCharts.some(
      (record) => record.profileName.trim().toLowerCase() === normalizedName
    );

    if (normalizedName && hasDuplicateName) {
      setSaveStatus("Name already taken.");
      setSaveFlashState({ target, kind: "taken" });
      if (saveFlashTimeoutRef.current) {
        window.clearTimeout(saveFlashTimeoutRef.current);
      }
      saveFlashTimeoutRef.current = window.setTimeout(() => {
        setSaveFlashState(null);
        saveFlashTimeoutRef.current = null;
      }, 1600);
      return;
    }

    const record = createSavedChartRecord(name, sex, placements, houses, birthDetails);
    const next = [record, ...savedCharts];
    persistSavedCharts(next);
    if (target === "a") {
      setLoadedChartIdA(record.id);
    } else {
      setLoadedChartIdB(record.id);
    }
    setSaveStatus(`${record.profileName} saved locally.`);
    setSaveFlashState({ target, kind: "saved" });
    if (saveFlashTimeoutRef.current) {
      window.clearTimeout(saveFlashTimeoutRef.current);
    }
    saveFlashTimeoutRef.current = window.setTimeout(() => {
      setSaveFlashState(null);
      saveFlashTimeoutRef.current = null;
    }, 1600);
  };

  const saveHousesChart = (
    target: "a" | "b",
    name: string,
    sex: Sex,
    placements: PlacementMap,
    houses: HouseAssignment[],
    birthDetails: BirthDetails | null
  ) => {
    const normalizedName = name.trim().toLowerCase();
    const now = new Date().toISOString();
    const nextHouses = cloneHouseAssignments(houses);

    if (!normalizedName) {
      setSaveStatus("Enter a chart name before saving houses.");
      return false;
    }

    const existingIndex = savedCharts.findIndex(
      (record) => record.profileName.trim().toLowerCase() === normalizedName
    );

    if (existingIndex >= 0) {
      const existing = savedCharts[existingIndex];
      const updatedRecord: SavedChartRecord = {
        ...existing,
        sex,
        placements: { ...placements },
        houses: nextHouses,
        birthDetails: birthDetails ? { ...birthDetails } : existing.birthDetails,
        updatedAt: now,
      };
      const next = [...savedCharts];
      next.splice(existingIndex, 1);
      persistSavedCharts([updatedRecord, ...next]);
      if (target === "a") {
        setLoadedChartIdA(updatedRecord.id);
      } else {
        setLoadedChartIdB(updatedRecord.id);
      }
      setSaveStatus(`${updatedRecord.profileName} houses saved locally.`);
      return true;
    }

    const record = createSavedChartRecord(name, sex, placements, nextHouses, birthDetails);
    persistSavedCharts([record, ...savedCharts]);
    if (target === "a") {
      setLoadedChartIdA(record.id);
    } else {
      setLoadedChartIdB(record.id);
    }
    setSaveStatus(`${record.profileName} saved locally.`);
    setSaveFlashState({ target, kind: "saved" });
    if (saveFlashTimeoutRef.current) {
      window.clearTimeout(saveFlashTimeoutRef.current);
    }
    saveFlashTimeoutRef.current = window.setTimeout(() => {
      setSaveFlashState(null);
      saveFlashTimeoutRef.current = null;
    }, 1600);
    return true;
  };

  const loadSavedChart = (target: "a" | "b", record: SavedChartRecord) => {
    if (target === "a") {
      setLoadedChartIdA(record.id);
      setPersonAName(record.profileName);
      setPersonASex(record.sex);
      setPersonA({ ...record.placements });
      setHouseAssignmentsA(normalizeHouseAssignments(record.houses));
      setBirthDetailsA(record.birthDetails ? { ...record.birthDetails } : createDefaultBirthDetails());
      setCalculationStatusA({ kind: "idle", message: "" });
    } else {
      setLoadedChartIdB(record.id);
      setPersonBName(record.profileName);
      setPersonBSex(record.sex);
      setPersonB({ ...record.placements });
      setHouseAssignmentsB(normalizeHouseAssignments(record.houses));
      setBirthDetailsB(record.birthDetails ? { ...record.birthDetails } : createDefaultBirthDetails());
      setCalculationStatusB({ kind: "idle", message: "" });
    }
    setSaveStatus(`${record.profileName} loaded into ${target === "a" ? "Primary" : "Comparison"} Chart.`);
  };

  const deleteSavedChart = (id: string) => {
    const next = savedCharts.filter((record) => record.id !== id);
    persistSavedCharts(next);
    if (loadedChartIdA === id) setLoadedChartIdA("");
    if (loadedChartIdB === id) setLoadedChartIdB("");
    setSaveStatus("Saved chart removed from this browser.");
  };

  const handleLoadSavedChart = (target: "a" | "b", id: string) => {
    const record = savedCharts.find((item) => item.id === id);
    if (!record) return;
    loadSavedChart(target, record);
    if (target === "a") {
      setLoadPrimarySelection("");
    } else {
      setLoadComparisonSelection("");
    }
  };

  const handleDeleteSavedChart = (id: string) => {
    if (!id) return;
    deleteSavedChart(id);
    setDeleteChartSelection("");
  };

  const handleProtectedLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginBusy(true);
    setLoginErrorMessage("");

    try {
      const session = await authenticateLifespaceAccount(loginUsername, loginPassword);
      if (!session) {
        setLoginErrorMessage("Invalid username or password.");
        return;
      }

      setLifespaceSession(session);
      setLoginPassword("");
    } finally {
      setLoginBusy(false);
    }
  };

  const handlePasswordReset = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = resetEmail.trim().toLowerCase();

    if (!trimmedEmail) {
      setResetPasswordStatus({ kind: "error", message: "Enter your email address." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setResetPasswordStatus({ kind: "error", message: "Enter a valid email address." });
      return;
    }

    setResetPasswordStatus({ kind: "loading", message: "Sending reset email..." });

    try {
      await requestPasswordReset(trimmedEmail);
      setResetPasswordStatus({
        kind: "success",
        message: "If an account exists for that email, a password reset link has been sent.",
      });
    } catch (error) {
      setResetPasswordStatus({
        kind: "error",
        message: getFirebaseAuthErrorMessage(
          error,
          error instanceof Error ? error.message : "Unable to send the reset email right now."
        ),
      });
    }
  };

  const buildBirthDateString = (details: BirthDetails) => {
    if (!details.month || !details.day || !details.year) return "";
    const monthIndex = MONTH_OPTIONS.indexOf(details.month as (typeof MONTH_OPTIONS)[number]);
    if (monthIndex < 0) return "";
    return `${details.year}-${String(monthIndex + 1).padStart(2, "0")}-${details.day.padStart(2, "0")}`;
  };

  const buildBirthTimeString = (details: BirthDetails) => {
    const hourNumber = Number(details.hour);
    const minuteNumber = Number(details.minute);
    if (!Number.isFinite(hourNumber) || !Number.isFinite(minuteNumber)) return undefined;
    const hour24 = details.meridiem === "AM" ? (hourNumber % 12) : (hourNumber % 12) + 12;
    return `${String(hour24).padStart(2, "0")}:${String(minuteNumber).padStart(2, "0")}`;
  };

  const applyCalculatedPlacements = (result: AstrologyCalculateResponse): PlacementMap => ({
    ...createEmptyPlacementMap(),
    "☉": ASTROLOGY_SIGN_TO_SYMBOL[result.placements.sun.sign],
    "☽": result.placements.moon ? ASTROLOGY_SIGN_TO_SYMBOL[result.placements.moon.sign] : "",
    "⥉": result.placements.ascendant ? ASTROLOGY_SIGN_TO_SYMBOL[result.placements.ascendant.sign] : "",
    "☿": ASTROLOGY_SIGN_TO_SYMBOL[result.placements.mercury.sign],
    "♀": ASTROLOGY_SIGN_TO_SYMBOL[result.placements.venus.sign],
    "♂": ASTROLOGY_SIGN_TO_SYMBOL[result.placements.mars.sign],
    "♃": ASTROLOGY_SIGN_TO_SYMBOL[result.placements.jupiter.sign],
    "♄": ASTROLOGY_SIGN_TO_SYMBOL[result.placements.saturn.sign],
    "♅": ASTROLOGY_SIGN_TO_SYMBOL[result.placements.uranus.sign],
    "♆": ASTROLOGY_SIGN_TO_SYMBOL[result.placements.neptune.sign],
    "♇": ASTROLOGY_SIGN_TO_SYMBOL[result.placements.pluto.sign],
  });

  const runPlacementCalculation = async (
    target: "a" | "b",
    name: string,
    details: BirthDetails,
    setPlacements: (next: PlacementMap) => void,
    setHouseAssignments: (next: HouseAssignment[]) => void,
    setBirthDetails: (next: BirthDetails) => void,
    setCalculationStatus: (next: CalculationStatus) => void
  ) => {
    const date = buildBirthDateString(details);
    if (!date) {
      setCalculationStatus({ kind: "error", message: "Choose a full birth date first." });
      return;
    }

    if (!details.location.trim()) {
      setCalculationStatus({ kind: "error", message: "Enter a birth city or town first." });
      return;
    }

    if (details.birthTimeKnown && !buildBirthTimeString(details)) {
      setCalculationStatus({ kind: "error", message: "Choose a valid birth time first." });
      return;
    }

    setCalculationStatus({ kind: "loading", message: "Generating chart..." });

    try {
      const response = await fetch("/api/astrology/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim() || "Unnamed Chart",
          date,
          time: details.birthTimeKnown ? buildBirthTimeString(details) : undefined,
          location: details.location.trim(),
          birthTimeKnown: details.birthTimeKnown,
        }),
      });

      const data = (await response.json()) as AstrologyCalculateResponse | { error?: string };

      if (!response.ok || !("placements" in data)) {
        throw new Error(data && "error" in data && data.error ? data.error : "Chart generation failed.");
      }

      setPlacements(applyCalculatedPlacements(data));
      setHouseAssignments(buildHouseAssignmentsFromCalculation(data));
      setBirthDetails({
        ...details,
        location: data.birth.location,
        latitude: data.birth.latitude,
        longitude: data.birth.longitude,
        timezone: data.birth.timezone,
      });
      setCalculationStatus({
        kind: "success",
        message: data.birth.birthTimeKnown
          ? "Placements and houses generated. You can still edit any dropdown manually."
          : "Placements generated with unknown birth time. Moon fills only if one sign is certain; ASC and houses remain ungenerated.",
      });
      setSaveStatus(`${data.name} placements generated for ${target === "a" ? "Primary" : "Comparison"} Chart.`);
    } catch (error) {
      setCalculationStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Chart generation failed unexpectedly.",
      });
    }
  };

  const hasAxisFocus = focusedRows.length > 0 || focusedCols.length > 0;

  useEffect(() => {
    syncLoadedChartRecord(loadedChartIdA, {
      profileName: personAName,
      sex: personASex,
      placements: personA,
      houses: houseAssignmentsA,
      birthDetails: birthDetailsA,
    });
  }, [loadedChartIdA, personAName, personASex, personA, houseAssignmentsA, birthDetailsA, savedCharts]);

  useEffect(() => {
    syncLoadedChartRecord(loadedChartIdB, {
      profileName: personBName,
      sex: personBSex,
      placements: personB,
      houses: houseAssignmentsB,
      birthDetails: birthDetailsB,
    });
  }, [loadedChartIdB, personBName, personBSex, personB, houseAssignmentsB, birthDetailsB, savedCharts]);
  const hasRelationFocus = focusedRelations.length > 0;
  const hasFocusMode = hasAxisFocus || hasRelationFocus;

  const toggleFocusGroup = (group: "sun" | "moon") => {
    const sourcePlanets = group === "sun" ? SUN_GROUP_PLANETS : MOON_GROUP_PLANETS;
    const nextRows = rows.filter((planet) => sourcePlanets.includes(planet));
    const nextCols = cols.filter((planet) => sourcePlanets.includes(planet));
    const sameRows =
      focusedRows.length === nextRows.length && focusedRows.every((planet) => nextRows.includes(planet));
    const sameCols =
      focusedCols.length === nextCols.length && focusedCols.every((planet) => nextCols.includes(planet));

    if (sameRows && sameCols) {
      setFocusedRows([]);
      setFocusedCols([]);
      return;
    }

    setFocusedRows(nextRows);
    setFocusedCols(nextCols);
  };

  const toggleFocusedAxis = (type: "row" | "col", planet: Planet) => {
    if (type === "row") {
      setFocusedRows((current) => {
        const exists = current.includes(planet);
        if (exists && current.length === 1 && focusedCols.length === 0) return [];
        if (exists) return current.filter((item) => item !== planet);
        return [...current, planet];
      });
      return;
    }

    setFocusedCols((current) => {
      const exists = current.includes(planet);
      if (exists && current.length === 1 && focusedRows.length === 0) return [];
      if (exists) return current.filter((item) => item !== planet);
      return [...current, planet];
    });
  };

  const toggleFocusedRelation = (relation: RelationType) => {
    setFocusedRelations((current) =>
      current.includes(relation) ? current.filter((item) => item !== relation) : [...current, relation]
    );
  };

  const resetSectionToggles = () => {
    setSelectedCell(null);
    setGridViewMode("couple");
    setShowGenerationalPlanets(true);
    setFocusedRows([]);
    setFocusedCols([]);
    setFocusedRelations([]);
  };

  const handlePageJump = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    resetSectionToggles();

    const target = document.querySelector(href);
    if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!authReady) {
    return <main className="love-computer-auth-shell" />;
  }

  if (!lifespaceSession) {
    return (
      <main className="love-computer-auth-shell">
        <section className="love-computer-auth-card">
          <h1>Relationship Calculator</h1>
          {showResetPassword ? (
            <>
              <p>Enter your recovery email to reset your password.</p>
              <form className="love-computer-auth-form" onSubmit={handlePasswordReset}>
                <input
                  className="love-computer-auth-input"
                  type="email"
                  placeholder="Recovery Email"
                  aria-label="Recovery Email"
                  value={resetEmail}
                  onChange={(event) => setResetEmail(event.target.value)}
                />
                {resetPasswordStatus.message ? (
                  <p
                    className={
                      resetPasswordStatus.kind === "success"
                        ? "love-computer-auth-success"
                        : "love-computer-auth-error"
                    }
                  >
                    {resetPasswordStatus.message}
                  </p>
                ) : null}
                <button
                  type="submit"
                  className="love-computer-auth-button"
                  disabled={resetPasswordStatus.kind === "loading"}
                >
                  {resetPasswordStatus.kind === "loading" ? "Sending..." : "Send Reset Email"}
                </button>
              </form>
              <button
                type="button"
                className="love-computer-auth-text-link"
                onClick={() => {
                  setShowResetPassword(false);
                  setResetPasswordStatus({ kind: "idle", message: "" });
                }}
              >
                Back to Login
              </button>
            </>
          ) : (
            <>
              <p>Log in to access the Relationship Calculator.</p>
              <form className="love-computer-auth-form" onSubmit={handleProtectedLogin}>
                <input
                  className="love-computer-auth-input"
                  type="text"
                  placeholder="Username"
                  aria-label="Username"
                  value={loginUsername}
                  onChange={(event) => setLoginUsername(event.target.value)}
                />
                <input
                  className="love-computer-auth-input"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                  value={loginPassword}
                  onChange={(event) => setLoginPassword(event.target.value)}
                />
                {loginErrorMessage ? <p className="love-computer-auth-error">{loginErrorMessage}</p> : null}
                <button type="submit" className="love-computer-auth-button" disabled={loginBusy}>
                  {loginBusy ? "Logging in..." : "Log In"}
                </button>
              </form>
              <p className="love-computer-auth-signup">
                Don&apos;t have an account? <Link href="sign-up">Sign up</Link>
              </p>
              <button
                type="button"
                className="love-computer-auth-text-link love-computer-auth-text-link-centered"
                onClick={() => {
                  setShowResetPassword(true);
                  setLoginErrorMessage("");
                  setResetPasswordStatus({ kind: "idle", message: "" });
                }}
              >
                Forgot Password?
              </button>
            </>
          )}
        </section>
      </main>
    );
  }

  return (
    <main className={`report-shell${reportSkin === "teal" ? " report-shell-teal" : ""}`}>
      <div
        className="love-computer-zoom-shell"
        style={{ ["--love-computer-scale" as string]: `${LOVE_COMPUTER_CANVAS_SCALE}` } as CSSProperties}
      >
        <nav className="page-jump-nav" aria-label="Page sections">
          {PAGE_NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="page-jump-link"
              title={item.label}
              aria-label={item.label}
              onClick={handlePageJump(item.href)}
            >
              <span>{item.symbol}</span>
            </a>
          ))}
        </nav>

        <div className="love-computer-zoom-surface">
          <section className="report-header">
            <div>
              <p className="eyebrow">The Grand Counsel of Paizen</p>
              <h1>Relationship Calculator</h1>
            </div>
            <div className="report-meta">
              <label className="skin-switch">
                <span>Skin</span>
                <select value={reportSkin} onChange={(event) => setReportSkin(event.target.value as "classic" | "teal")}>
                  <option value="classic">Sandbox</option>
                  <option value="teal">Teal</option>
                </select>
              </label>
              <p>AstrologyToday.ca</p>
              <p>Love Computer Prototype</p>
              <p>Version 1.0</p>
            </div>
      </section>

          <section id="placements" className="report-top-grid">
        <PlacementCard
          title={personAName}
          subtitle="Primary chart"
          name={personAName}
          sex={personASex}
          birthDetails={birthDetailsA}
          calculationStatus={calculationStatusA}
          showGenerational={showGenerationalPlanets}
          onNameChange={setPersonAName}
          values={personA}
          onSexChange={setPersonASex}
          onBirthDetailsChange={setBirthDetailsA}
          onChange={setPersonA}
          onGenerate={() =>
            runPlacementCalculation(
              "a",
              personAName,
              birthDetailsA,
              setPersonA,
              setHouseAssignmentsA,
              setBirthDetailsA,
              setCalculationStatusA
            )
          }
          saveFeedback={
            saveFlashState?.target === "a" ? saveFlashState.kind : null
          }
          onSave={() => saveChart("a", personAName, personASex, personA, houseAssignmentsA, birthDetailsA)}
        />
        <PlacementCard
          title={personBName}
          subtitle="Comparison chart"
          name={personBName}
          sex={personBSex}
          birthDetails={birthDetailsB}
          calculationStatus={calculationStatusB}
          showGenerational={showGenerationalPlanets}
          onNameChange={setPersonBName}
          values={personB}
          onSexChange={setPersonBSex}
          onBirthDetailsChange={setBirthDetailsB}
          onChange={setPersonB}
          onGenerate={() =>
            runPlacementCalculation(
              "b",
              personBName,
              birthDetailsB,
              setPersonB,
              setHouseAssignmentsB,
              setBirthDetailsB,
              setCalculationStatusB
            )
          }
          saveFeedback={
            saveFlashState?.target === "b" ? saveFlashState.kind : null
          }
          onSave={() => saveChart("b", personBName, personBSex, personB, houseAssignmentsB, birthDetailsB)}
        />
        <div className="report-top-tools">
          <CompatibilityTable />
          <ClockCalculatorCard
            day={clockDay}
            onDayChange={setClockDay}
            sunriseHour={sunriseHour}
            onSunriseHourChange={setSunriseHour}
            sunriseMinute={sunriseMinute}
            onSunriseMinuteChange={setSunriseMinute}
            mode={clockMode}
            onModeChange={setClockMode}
            rows={planetaryHourRows}
          />
        </div>
      </section>

          <section id="saved-charts" className="logic-card">
        <div className="logic-copy">
          <p className="eyebrow">Saved Charts</p>
          <h2>Local Archive</h2>
          <p>
            Save any Primary or Comparison chart now, then load it back into either side later. This is
            browser-local today, but the record structure is ready to migrate into account storage when
            we add logins.
          </p>
          <p className="section-copy">{saveStatus}</p>
        </div>
        <div className="logic-copy">
          {savedCharts.length > 0 ? (
            <div className="saved-chart-panel">
              <div className="saved-chart-loaders compact">
                <label>
                  Load to Primary
                  <select
                    value={loadPrimarySelection}
                    onChange={(event) => {
                      const id = event.target.value;
                      setLoadPrimarySelection(id);
                      if (id) handleLoadSavedChart("a", id);
                    }}
                    >
                      <option value="">{personAName}</option>
                    {primaryDropdownCharts.map((record) => (
                      <option key={record.id} value={record.id}>
                        {record.profileName}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Load to Comparison
                  <select
                    value={loadComparisonSelection}
                    onChange={(event) => {
                      const id = event.target.value;
                      setLoadComparisonSelection(id);
                      if (id) handleLoadSavedChart("b", id);
                    }}
                    >
                      <option value="">{personBName}</option>
                    {comparisonDropdownCharts.map((record) => (
                      <option key={record.id} value={record.id}>
                        {record.profileName}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Manage Saved Charts
                  <div className="saved-chart-manage">
                    <select
                      value={deleteChartSelection}
                      onChange={(event) => setDeleteChartSelection(event.target.value)}
                    >
                      <option value="">Choose a saved chart</option>
                      {alphabetizedSavedCharts.map((record) => (
                        <option key={record.id} value={record.id}>
                          {record.profileName}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => handleDeleteSavedChart(deleteChartSelection)}
                      disabled={!deleteChartSelection}
                    >
                      Delete
                    </button>
                  </div>
                </label>
              </div>
              <p className="saved-chart-count">
                {savedCharts.length} saved {savedCharts.length === 1 ? "chart" : "charts"} available in this browser.
              </p>
            </div>
          ) : (
            <p className="section-copy">No saved charts yet. Use Save Chart on either card to start building your archive.</p>
          )}
        </div>
      </section>

          <section
            id="comparison-grid"
            className="chart-card"
            style={
              {
                ["--note-marker-shift-x" as string]: `${noteMarkerOffset.x}px`,
                ["--note-marker-shift-y" as string]: `${noteMarkerOffset.y}px`,
              } as CSSProperties
            }
          >
        <div className="section-heading">
          <div>
            <p className="eyebrow">Planet To Planet Chart</p>
            <h2>Comparison Grid</h2>
          </div>
          <div className="section-actions">
            <div className="grid-toggles">
              <label>
                <select value={gridViewMode} onChange={(event) => setGridViewMode(event.target.value as GridViewMode)}>
                  <option value="couple">Couple</option>
                  <option value="partner-a">{personAName} Only</option>
                  <option value="partner-b">{personBName} Only</option>
                </select>
              </label>
              <label className="grid-toggle-check">
                <input
                  type="checkbox"
                  checked={showGenerationalPlanets}
                  onChange={(event) => setShowGenerationalPlanets(event.target.checked)}
                />
                <span>Show Generational Planets</span>
              </label>
            </div>
            <div className="grid-action-row">
              <p className="section-copy">
                Click any symbol to open a note card.
              </p>
              <button type="button" className="download-button" onClick={downloadReport}>
                Download Text Report
              </button>
            </div>
          </div>
        </div>

        <div className="chart-scroll">
          <table className="chart-table">
            <thead>
              <tr>
                <th>A ↓ / B →</th>
                {cols.map((planet) => (
                <th
                  key={planet}
                  className={
                      hasAxisFocus
                        ? focusedCols.includes(planet)
                          ? "axis-th-focused"
                          : "axis-th-dimmed"
                        : undefined
                    }
                  >
                    <button
                      type="button"
                      className="axis-focus-button"
                      onClick={() => toggleFocusedAxis("col", planet)}
                    >
                      <div className="axis-symbol">{planet}</div>
                      <div className="axis-subcopy">
                        {PLANET_LABELS[planet]} {gridPersonB[planet]}
                      </div>
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {grid.map((row, rowIndex) => {
                const rowPlanet = rows[rowIndex];

                return (
                  <tr key={rowPlanet}>
                    <th
                      className={
                        hasAxisFocus
                          ? focusedRows.includes(rowPlanet)
                            ? "axis-th-focused"
                            : "axis-th-dimmed"
                          : undefined
                      }
                    >
                      <button
                        type="button"
                        className="axis-focus-button"
                        onClick={() => toggleFocusedAxis("row", rowPlanet)}
                      >
                        <div className="axis-symbol">{rowPlanet}</div>
                        <div className="axis-subcopy">
                          {PLANET_LABELS[rowPlanet]} {gridPersonA[rowPlanet]}
                        </div>
                      </button>
                    </th>
                    {row.map((cell) => {
                      if (gridViewMode !== "couple" && shouldHideSoloGridCell(gridViewMode, cell)) {
                        return <td key={`${cell.aPlanet}-${cell.bPlanet}`} className="chart-cell-empty" />;
                      }

                      const style = RELATION_STYLES[cell.relation];
                      const cellNoteKey = buildModalNoteKey(
                        cell,
                        gridViewMode,
                        personAName,
                        personA,
                        personBName,
                        personB
                      );
                      const hasSavedNote = (modalNotes[cellNoteKey] ?? "").trim().length > 0;
                      const noteRotation = getNoteMarkerRotation(cellNoteKey);
                      const hasSamePlanetStar = cellHasSamePlanetQualifier(cell);
                      const isFocused =
                        !hasFocusMode ||
                        focusedRows.includes(cell.aPlanet) ||
                        focusedCols.includes(cell.bPlanet) ||
                        focusedRelations.includes(cell.relation);

                      return (
                        <td key={`${cell.aPlanet}-${cell.bPlanet}`}>
                          <button
                            type="button"
                            className={`chart-cell${isFocused ? "" : " chart-cell-dimmed"}`}
                            onClick={() => setSelectedCell(cell)}
                            style={{
                              background: style.bg,
                              color: style.text,
                              borderColor: style.border,
                            }}
                          >
                            {hasSamePlanetStar ? (
                              <span className="chart-cell-star-marker" aria-hidden="true">
                                ✦
                              </span>
                            ) : null}
                            {hasSavedNote ? (
                              <span
                                className={`chart-cell-note-marker${hasSamePlanetStar ? " chart-cell-note-marker-shifted" : ""}`}
                                aria-hidden="true"
                                style={{ ["--note-marker-rotation" as string]: `${noteRotation}deg` }}
                              >
                                <img src="/sticky-note.png" alt="" />
                              </span>
                            ) : null}
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

        <div className="grid-filter-row">
          <div className="relation-filter-bar" aria-label="Relation filters">
            {(Object.keys(RELATION_STYLES) as RelationType[]).map((relation) => {
              const style = RELATION_STYLES[relation];
              const isActive = focusedRelations.includes(relation);

              return (
                <button
                  type="button"
                  key={relation}
                  className={`legend-item relation-filter-button${isActive ? " is-active" : ""}`}
                  onClick={() => toggleFocusedRelation(relation)}
                >
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
                </button>
              );
            })}
          </div>

          <div className="grid-focus-shortcuts">
            <button
              type="button"
              className={
                focusedRows.length === rows.filter((planet) => SUN_GROUP_PLANETS.includes(planet)).length &&
                focusedCols.length === cols.filter((planet) => SUN_GROUP_PLANETS.includes(planet)).length &&
                focusedRows.every((planet) => SUN_GROUP_PLANETS.includes(planet)) &&
                focusedCols.every((planet) => SUN_GROUP_PLANETS.includes(planet))
                  ? "focus-shortcut-button is-active"
                  : "focus-shortcut-button"
              }
              onClick={() => toggleFocusGroup("sun")}
              aria-label="Focus Sun, Venus, and Jupiter"
              title="Focus Sun, Venus, and Jupiter"
            >
              ☉
            </button>
            <button
              type="button"
              className={
                focusedRows.length === rows.filter((planet) => MOON_GROUP_PLANETS.includes(planet)).length &&
                focusedCols.length === cols.filter((planet) => MOON_GROUP_PLANETS.includes(planet)).length &&
                focusedRows.every((planet) => MOON_GROUP_PLANETS.includes(planet)) &&
                focusedCols.every((planet) => MOON_GROUP_PLANETS.includes(planet))
                  ? "focus-shortcut-button is-active"
                  : "focus-shortcut-button"
              }
              onClick={() => toggleFocusGroup("moon")}
              aria-label="Focus Moon, Mars, and Saturn"
              title="Focus Moon, Mars, and Saturn"
            >
              ☽
            </button>
          </div>
        </div>
          </section>

          <section id="summaries" className="summary-grid">
        <SummaryCard
          title="Element"
          copy="Weighted 90/10 across personal and generational planets. ASC is excluded."
          rows={elementRows}
        />
        <SummaryCard
          title="Modality"
          copy="Weighted with the same personal-versus-generational split. ASC is excluded."
          rows={modalityRows}
        />
        <SummaryCard
          title="Gender Expression"
          copy="Final score = 65% astrological + 20% generation + 15% sex. ASC is excluded."
          rows={genderRows}
        />
          </section>

          <section className="summary-grid summary-grid-secondary">
        <SummaryCard
          title="Yin Yang"
          copy="Yin = water + earth. Yang = fire + air. Built from the same weighted element totals."
          rows={yinYangRows}
          symbol="☯︎"
        />
        <QualifierCard
          title="Nature"
          copy="Based on each chart's highest element versus lowest element."
          rows={natureRows}
          labels={["Partner A Nature", "Partner B Nature", "Relationship Nature"]}
        />
        <QualifierCard
          title="Energy"
          copy="Built from the two most relevant gender-expression energies using your threshold rules."
          rows={energyRows}
          labels={["Partner A Energy", "Partner B Energy", "Relationship Energy"]}
        />
          </section>

          <section className="summary-grid summary-grid-roots">
        <RootsOfPowerCard personA={personA} personB={personB} />
          </section>

          <section className="summary-grid summary-grid-tools">
            <HousesCard
              target={houseTarget}
              noteScope={houseTarget === "a" ? loadedChartIdA || "draft-a" : loadedChartIdB || "draft-b"}
              onTargetChange={setHouseTarget}
              houseAssignments={houseTarget === "a" ? houseAssignmentsA : houseAssignmentsB}
              onHouseAssignmentsChange={houseTarget === "a" ? setHouseAssignmentsA : setHouseAssignmentsB}
              modalNotes={modalNotes}
              onModalNoteChange={updateModalNote}
              onClearHouseNotes={clearHouseModalNotes}
              onRestoreHouseNotes={restoreHouseModalNotes}
            />
          </section>

          <section className="love-computer-seo-reference" aria-label="Love Calculator reference">
            <h2>Love Calculator Reference</h2>
            <p>
              This relationship calculator combines zodiac sign meanings and planetary profiles to help interpret
              compatibility, attraction, communication patterns, and emotional chemistry.
            </p>

            <section aria-labelledby="love-computer-seo-signs-heading">
              <h3 id="love-computer-seo-signs-heading">Zodiac sign meanings</h3>
              {SIGNS.map((sign) => {
                const profile = SIGN_PROFILES[sign];
                if (!profile) return null;

                return (
                  <article key={`seo-sign-${sign}`}>
                    <h4>
                      {SIGN_LABELS[sign]} ({sign})
                    </h4>
                    <p>
                      {profile.dates} · {profile.tagline}
                    </p>
                    <ul>
                      {profile.bullets.map((bullet, index) => (
                        <li key={`seo-sign-${sign}-${index}`}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </section>

            <section aria-labelledby="love-computer-seo-planets-heading">
              <h3 id="love-computer-seo-planets-heading">Planet meanings in compatibility</h3>
              {PLANETS.map((planet) => {
                const profile = PLANET_PROFILES[planet];

                return (
                  <article key={`seo-planet-${planet}`}>
                    <h4>
                      {PLANET_LABELS[planet]} ({planet})
                    </h4>
                    <p>{profile.heading}</p>
                    <ul>
                      {profile.bullets.map((bullet, index) => (
                        <li key={`seo-planet-${planet}-${index}`}>{bullet}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </section>
          </section>

          {selectedCell ? (
            <div
              className="modal-backdrop"
              onMouseDown={(event) => {
                backdropPointerStartedRef.current = event.target === event.currentTarget;
              }}
              onClick={(event) => {
                if (backdropPointerStartedRef.current && event.target === event.currentTarget) {
                  setSelectedCell(null);
                }
                backdropPointerStartedRef.current = false;
              }}
              role="presentation"
            >
              <div className="modal-layout" onClick={(event) => event.stopPropagation()}>
                <div className="modal-card" role="dialog" aria-modal="true">
                  <button type="button" className="modal-close" onClick={() => setSelectedCell(null)}>
                    Close
                  </button>
                  <p className="eyebrow">Connection Detail</p>
                  <h2>{selectedCell.title}</h2>
                  <div className="modal-tags">
                    <span
                      className="person-chip"
                      data-sex={getChipTone(gridViewMode === "partner-b" ? personBSex : personASex)}
                    >
                      {SIGN_LABELS[selectedCell.aSign]} {getCardPlanetLabel(selectedCell.aPlanet)} {selectedCell.aPlanet}
                      {selectedLeftHasSamePlanetStar ? <span className="same-planet-inline-star">★</span> : null}
                    </span>
                    <span
                      className="person-chip"
                      data-sex={getChipTone(gridViewMode === "partner-a" ? personASex : personBSex)}
                    >
                      {SIGN_LABELS[selectedCell.bSign]} {getCardPlanetLabel(selectedCell.bPlanet)} {selectedCell.bPlanet}
                      {selectedRightHasSamePlanetStar ? <span className="same-planet-inline-star">★</span> : null}
                    </span>
                    <span>{selectedCell.symbol}</span>
                  </div>
                  <div className="modal-interaction-card">
                    <p className="modal-block-label">Planetary Interaction</p>
                    <p>{selectedInteractionText}</p>
                  </div>
                  <div className="modal-compare-grid">
                    <ModalDetail planet={selectedCell.aPlanet} sign={selectedCell.aSign} />
                    <div className="modal-cross" aria-hidden="true" />
                    <ModalDetail planet={selectedCell.bPlanet} sign={selectedCell.bSign} />
                  </div>
                </div>
                <aside
                  className={`sticky-note-wrap${shouldShowExpandedNote ? " is-open" : ""}`}
                  onClick={(event) => event.stopPropagation()}
                >
                  <button
                    type="button"
                    className="sticky-note-tab"
                    onClick={() => setNoteExpanded((current) => !current)}
                    aria-expanded={noteExpanded}
                    aria-label="Open notes"
                  >
                    <span className="sticky-note-tab-label" aria-hidden="true" />
                  </button>
                  {shouldShowExpandedNote ? (
                    <div className="sticky-note-pad">
                      <div className="sticky-note-head">
                        <p className="sticky-note-label" aria-hidden="true" />
                        {!selectedCellHasNote ? (
                          <button type="button" className="sticky-note-close" onClick={() => setNoteExpanded(false)}>
                            X
                          </button>
                        ) : null}
                      </div>
                      <textarea
                        value={selectedCellNote}
                        onChange={(event) => updateSelectedCellNote(event.target.value)}
                        placeholder="Write notes here..."
                      />
                    </div>
                  ) : null}
                </aside>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}

function PlacementCard({
  title,
  subtitle,
  name,
  sex,
  birthDetails,
  calculationStatus,
  showGenerational,
  values,
  onNameChange,
  onSexChange,
  onBirthDetailsChange,
  onChange,
  onGenerate,
  saveFeedback,
  onSave,
}: {
  title: string;
  subtitle: string;
  name: string;
  sex: Sex;
  birthDetails: BirthDetails;
  calculationStatus: CalculationStatus;
  showGenerational: boolean;
  values: PlacementMap;
  onNameChange: (next: string) => void;
  onSexChange: (next: Sex) => void;
  onBirthDetailsChange: (next: BirthDetails) => void;
  onChange: (next: PlacementMap) => void;
  onGenerate: () => void;
  saveFeedback: "saved" | "taken" | null;
  onSave: () => void;
}) {
  const [locationSuggestions, setLocationSuggestions] = useState<AstrologyLocationOption[]>([]);
  const [locationSearchBusy, setLocationSearchBusy] = useState(false);
  const [locationSearchOpen, setLocationSearchOpen] = useState(false);

  useEffect(() => {
    const query = birthDetails.location.trim();
    const hasResolvedLocation =
      birthDetails.latitude !== null && birthDetails.longitude !== null && Boolean(birthDetails.timezone);

    if (!locationSearchOpen && hasResolvedLocation) {
      setLocationSuggestions([]);
      setLocationSearchBusy(false);
      return;
    }

    if (query.length < 2) {
      setLocationSuggestions([]);
      setLocationSearchBusy(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(async () => {
      setLocationSearchBusy(true);
      try {
        const response = await fetch(`/api/astrology/location-search?q=${encodeURIComponent(query)}`, {
          signal: controller.signal,
        });
        const data = (await response.json()) as { results?: AstrologyLocationOption[] };
        if (!response.ok) {
          throw new Error("Location search failed.");
        }
        setLocationSuggestions(data.results ?? []);
        setLocationSearchOpen(true);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLocationSuggestions([]);
      } finally {
        setLocationSearchBusy(false);
      }
    }, 220);

    return () => {
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, [birthDetails.location]);

  const handleBirthDetailChange = (updates: Partial<BirthDetails>) => {
    onBirthDetailsChange({ ...birthDetails, ...updates });
  };

  return (
    <section className="placement-card">
      <p className="eyebrow">{subtitle}</p>
      <h2>{title}</h2>
      <p className="card-copy">This app utilizes Swiss Ephemeris high-precision astronomical calculation engine.</p>
      <button
        type="button"
        className={`card-save-button${
          saveFeedback === "saved"
            ? " card-save-button-saved"
            : saveFeedback === "taken"
              ? " card-save-button-error"
              : ""
        }`}
        onClick={onSave}
      >
        {saveFeedback === "saved"
          ? "Saved"
          : saveFeedback === "taken"
            ? "Name already taken"
            : "Save Chart"}
      </button>

      <label className="sex-row">
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
          placeholder="Enter a name"
        />
      </label>

      <label className="sex-row">
        <span>Sex</span>
        <select value={sex} onChange={(event) => onSexChange(event.target.value as Sex)}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <div className="birth-form-block">
        <label className="sex-row">
          <span>Birth Day</span>
          <div className="birth-grid birth-grid-date">
            <select value={birthDetails.month} onChange={(event) => handleBirthDetailChange({ month: event.target.value })}>
              <option value="">Month</option>
              {MONTH_OPTIONS.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select value={birthDetails.day} onChange={(event) => handleBirthDetailChange({ day: event.target.value })}>
              <option value="">Day</option>
              {DAY_OPTIONS.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select value={birthDetails.year} onChange={(event) => handleBirthDetailChange({ year: event.target.value })}>
              <option value="">Year</option>
              {YEAR_OPTIONS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </label>

        <label className="sex-row">
          <span>Birth Time</span>
          <div className="birth-grid birth-grid-time">
            <select
              value={birthDetails.hour}
              disabled={!birthDetails.birthTimeKnown}
              onChange={(event) => handleBirthDetailChange({ hour: event.target.value })}
            >
              {HOUR_OPTIONS.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
            <span className="birth-time-separator">:</span>
            <select
              value={birthDetails.minute}
              disabled={!birthDetails.birthTimeKnown}
              onChange={(event) => handleBirthDetailChange({ minute: event.target.value })}
            >
              {MINUTE_OPTIONS.map((minute) => (
                <option key={minute} value={minute}>
                  {minute}
                </option>
              ))}
            </select>
            <select
              value={birthDetails.meridiem}
              disabled={!birthDetails.birthTimeKnown}
              onChange={(event) => handleBirthDetailChange({ meridiem: event.target.value as Meridiem })}
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          <div className="birth-time-unknown">
            <input
              type="checkbox"
              checked={!birthDetails.birthTimeKnown}
              onChange={(event) =>
                handleBirthDetailChange({
                  birthTimeKnown: !event.target.checked,
                  hour: "12",
                  minute: "00",
                  meridiem: "PM",
                })
              }
            />
            <span>Birth time unknown</span>
          </div>
        </label>

        <label className="sex-row location-search-row">
          <span>Birth City/Town</span>
          <div className="location-search-wrap">
            <input
              type="text"
              value={birthDetails.location}
              onChange={(event) => {
                handleBirthDetailChange({
                  location: event.target.value,
                  latitude: null,
                  longitude: null,
                  timezone: "",
                });
                setLocationSearchOpen(true);
              }}
              onFocus={() => {
                if (locationSuggestions.length > 0) setLocationSearchOpen(true);
              }}
              placeholder="Enter city or town"
              autoComplete="off"
            />
            {locationSearchBusy ? <span className="location-search-status">Searching...</span> : null}
            {locationSearchOpen && locationSuggestions.length > 0 ? (
              <div className="location-suggestions" role="listbox">
                {locationSuggestions.map((option) => (
                  <button
                    key={`${option.label}-${option.latitude}-${option.longitude}`}
                    type="button"
                    className="location-suggestion"
                    onClick={() => {
                      onBirthDetailsChange({
                        ...birthDetails,
                        location: option.location,
                        latitude: option.latitude,
                        longitude: option.longitude,
                        timezone: option.timezone,
                      });
                      setLocationSuggestions([]);
                      setLocationSearchOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </label>

        <button type="button" className="card-generate-button" onClick={onGenerate}>
          {calculationStatus.kind === "loading" ? "Generating..." : "Generate Chart"}
        </button>
        {calculationStatus.message ? (
          <p className={`birth-form-status birth-form-status-${calculationStatus.kind}`}>{calculationStatus.message}</p>
        ) : null}
      </div>

      <div className="placement-list">
        {PLACEMENT_CARD_PLANETS.filter((planet) =>
          planet === "♇" ? true : showGenerational || !GENERATIONAL_PLANETS.includes(planet)
        ).map((planet) => (
          <label key={planet} className="placement-row">
            <div className="planet-mark">
              <strong>{planet}</strong>
              <span>{PLACEMENT_CARD_PLANET_LABELS[planet]}</span>
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
            <div key={relation} className="legend-item legend-item-static">
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
  symbol,
}: {
  title: string;
  copy: string;
  rows: DistributionRow[];
  symbol?: string;
}) {
  return (
    <section className="summary-card">
      <p className="eyebrow">{title}</p>
      <h2>
        {symbol ? <span className="summary-title-symbol">{symbol}</span> : null}
        {title}
      </h2>
      <p>{copy}</p>
      <div className="summary-table">
        <div className="summary-head">Type</div>
        <div className="summary-head">Partner A</div>
        <div className="summary-head">Partner B</div>
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

function QualifierCard({
  title,
  copy,
  rows,
  labels,
}: {
  title: string;
  copy: string;
  rows: QualifierRow[];
  labels: [string, string, string];
}) {
  const row = rows[0] ?? { label: title, a: "—", b: "—", combined: "—" };

  return (
    <section className="summary-card">
      <p className="eyebrow">{title}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
      <div className="qualifier-stack">
        <div className="qualifier-line">
          <span>{labels[0]}:</span>
          <strong>{row.a}</strong>
        </div>
        <div className="qualifier-line">
          <span>{labels[1]}:</span>
          <strong>{row.b}</strong>
        </div>
        <div className="qualifier-line">
          <span>{labels[2]}:</span>
          <strong>{row.combined}</strong>
        </div>
      </div>
    </section>
  );
}

function RootsOfPowerCard({
  personA,
  personB,
}: {
  personA: PlacementMap;
  personB: PlacementMap;
}) {
  const personARoots = buildRootsOfPowerMatches(personA);
  const personBRoots = buildRootsOfPowerMatches(personB);

  return (
    <section id="roots-of-element" className="summary-card roots-card">
      <div className="roots-card-heading">
        <div className="roots-card-heading-copy">
          <p className="eyebrow">Roots of the Element</p>
          <h2 className="roots-card-title">Roots of the Element</h2>
          <p className="roots-card-intro">
            A snapshot of where each chart draws power, loss, peace, pleasure, work, and change
            through the classical roots assigned to each sign.
          </p>
        </div>
      </div>

      <div className="roots-card-top">
        <div className="roots-card-panels">
          <div className="roots-person-panel-wrap">
            <p className="roots-panel-label">Person A</p>
            <div className="roots-person-panel">
              {ROOTS_ELEMENT_ORDER.map((element) => (
                <div key={element} className="roots-element-block">
                  <p className="roots-element-heading">{ROOTS_ELEMENT_LABELS[element]}</p>
                  {personARoots[element].length ? (
                    personARoots[element].map((entry) => (
                      <div key={`${entry.sign}-${entry.planet}`} className="roots-element-line">
                        <span className="roots-entry-symbols">
                          {entry.sign} {entry.planet}
                        </span>
                        <span className="roots-entry-text">{entry.text}</span>
                      </div>
                    ))
                  ) : (
                    <div className="roots-element-line roots-element-line-empty">No active roots here</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="roots-person-panel-wrap">
            <p className="roots-panel-label">Person B</p>
            <div className="roots-person-panel">
              {ROOTS_ELEMENT_ORDER.map((element) => (
                <div key={element} className="roots-element-block">
                  <p className="roots-element-heading">{ROOTS_ELEMENT_LABELS[element]}</p>
                  {personBRoots[element].length ? (
                    personBRoots[element].map((entry) => (
                      <div key={`${entry.sign}-${entry.planet}`} className="roots-element-line">
                        <span className="roots-entry-symbols">
                          {entry.sign} {entry.planet}
                        </span>
                        <span className="roots-entry-text">{entry.text}</span>
                      </div>
                    ))
                  ) : (
                    <div className="roots-element-line roots-element-line-empty">No active roots here</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="roots-table-header">
        <p className="roots-table-title">Roots Table</p>
        <p className="roots-table-copy">Reference guide for the classical roots assigned across the zodiac.</p>
      </div>
      <div className="roots-table-grid">
        {ROOTS_TABLE_ORDER.map((sign) => (
          <div key={sign} className="roots-table-sign-card">
            <p className="roots-table-sign-heading">{SIGN_LABELS[sign]}</p>
            {ROOTS_OF_POWER_TABLE[sign].map((entry) => (
              <div key={`${sign}-${entry.planet}`} className="roots-table-sign-line">
                {entry.planet} = {entry.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function HousesCard({
  target,
  noteScope,
  onTargetChange,
  houseAssignments,
  onHouseAssignmentsChange,
  modalNotes,
  onModalNoteChange,
  onClearHouseNotes,
  onRestoreHouseNotes,
}: {
  target: "a" | "b";
  noteScope: string;
  onTargetChange: (next: "a" | "b") => void;
  houseAssignments: HouseAssignment[];
  onHouseAssignmentsChange: (next: HouseAssignment[]) => void;
  modalNotes: ModalNotesMap;
  onModalNoteChange: (key: string, value: string) => void;
  onClearHouseNotes: (scope: string) => void;
  onRestoreHouseNotes: (scope: string, nextScopeNotes: ModalNotesMap) => void;
}) {
  const [clearFeedback, setClearFeedback] = useState<"idle" | "cleared">("idle");
  const [confirmClearOpen, setConfirmClearOpen] = useState(false);
  const [lastClearedState, setLastClearedState] = useState<
    Record<"a" | "b", { assignments: HouseAssignment[]; notes: ModalNotesMap; noteScope: string } | null>
  >({
    a: null,
    b: null,
  });
  const [redoStacks, setRedoStacks] = useState<Record<"a" | "b", Array<{ houseIndex: number; placement: HousePlacement }>>>({
    a: [],
    b: [],
  });
  const [expandedHouseNotes, setExpandedHouseNotes] = useState<Record<string, boolean>>({});

  const resetHouseAssignments = () => cloneHouseAssignments(DEFAULT_HOUSE_ASSIGNMENTS);

  const updatePlacement = (houseIndex: number, placementIndex: number, patch: Partial<HousePlacement>) => {
    const next = cloneHouseAssignments(houseAssignments);
    const targetPlacement = next[houseIndex]?.placements[placementIndex];
    if (!targetPlacement) return;
    next[houseIndex].placements[placementIndex] = {
      ...targetPlacement,
      ...patch,
    };
    onHouseAssignmentsChange(next);
  };

  const addPlacement = (houseIndex: number) => {
    const next = cloneHouseAssignments(houseAssignments);
    const current = next[houseIndex];
    if (!current || current.placements.length >= MAX_HOUSE_PLACEMENTS) return;
    const fallbackSign = current.placements.at(-1)?.sign || DEFAULT_HOUSE_ASSIGNMENTS[houseIndex].placements[0].sign;
    current.placements.push({ sign: fallbackSign, planet: "" });
    setRedoStacks((currentRedoStacks) => ({
      ...currentRedoStacks,
      [target]: [],
    }));
    onHouseAssignmentsChange(next);
  };

  const executeClearPlacements = () => {
    const scopedNotes = Object.fromEntries(
      Object.entries(modalNotes).filter(([key]) => key.startsWith(`house-note-${noteScope}-`))
    );
    setLastClearedState((current) => ({
      ...current,
      [target]: {
        assignments: cloneHouseAssignments(houseAssignments),
        notes: scopedNotes,
        noteScope,
      },
    }));
    setRedoStacks((currentRedoStacks) => ({
      ...currentRedoStacks,
      [target]: [],
    }));
    onClearHouseNotes(noteScope);
    onHouseAssignmentsChange(resetHouseAssignments());
    setExpandedHouseNotes((current) =>
      Object.fromEntries(Object.entries(current).filter(([key]) => !key.startsWith(`house-note-${noteScope}-`)))
    );
    setClearFeedback("cleared");
    window.setTimeout(() => {
      setClearFeedback("idle");
    }, 1200);
  };

  const undoAddedPlacement = () => {
    const lastClear = lastClearedState[target];
    if (lastClear) {
      onHouseAssignmentsChange(cloneHouseAssignments(lastClear.assignments));
      onRestoreHouseNotes(lastClear.noteScope, lastClear.notes);
      setLastClearedState((current) => ({
        ...current,
        [target]: null,
      }));
      return;
    }

    for (let houseIndex = houseAssignments.length - 1; houseIndex >= 0; houseIndex -= 1) {
      const current = houseAssignments[houseIndex];
      if (!current || current.placements.length <= 1) continue;
      const next = cloneHouseAssignments(houseAssignments);
      const removedPlacement = next[houseIndex].placements.pop();
      if (!removedPlacement) return;
      setRedoStacks((currentRedoStacks) => ({
        ...currentRedoStacks,
        [target]: [...currentRedoStacks[target], { houseIndex, placement: removedPlacement }],
      }));
      onHouseAssignmentsChange(next);
      return;
    }
  };

  const redoAddedPlacement = () => {
    const redoEntry = redoStacks[target].at(-1);
    if (!redoEntry) return;
    const next = cloneHouseAssignments(houseAssignments);
    const current = next[redoEntry.houseIndex];
    if (!current || current.placements.length >= MAX_HOUSE_PLACEMENTS) return;
    current.placements.push({ ...redoEntry.placement });
    setRedoStacks((currentRedoStacks) => ({
      ...currentRedoStacks,
      [target]: currentRedoStacks[target].slice(0, -1),
    }));
    onHouseAssignmentsChange(next);
  };

  const canUndoAddedPlacement =
    Boolean(lastClearedState[target]) || houseAssignments.some((assignment) => assignment.placements.length > 1);
  const canRedoAddedPlacement = redoStacks[target].length > 0;

  return (
    <section id="houses" className="summary-card astro-tool-card">
      <p className="eyebrow">Houses</p>
      <h2>Houses</h2>
      <div className="houses-shell">
        <div className="houses-list">
          {HOUSE_COPY.map((label, index) => (
            <div key={label} className="houses-row">
              <div className="houses-number">{index + 1}</div>
              <div className="houses-slots">
                {(houseAssignments[index]?.placements ?? DEFAULT_HOUSE_ASSIGNMENTS[index].placements).map(
                  (placement, placementIndex) => (
                    <div key={`${label}-${placementIndex}`} className="houses-slot">
                      <select
                        className="astro-tool-select houses-sign-select"
                        value={placement.sign}
                        onChange={(event) =>
                          updatePlacement(index, placementIndex, { sign: event.target.value as Sign | "" })
                        }
                      >
                        <option value="">N/A</option>
                        {SIGNS.map((sign) => (
                          <option key={sign} value={sign}>
                            {sign} {SIGN_LABELS[sign]}
                          </option>
                        ))}
                      </select>
                      <select
                        className="astro-tool-select houses-planet-select"
                        value={placement.planet}
                        onChange={(event) =>
                          updatePlacement(index, placementIndex, { planet: event.target.value as HousePlanet | "" })
                        }
                      >
                        <option value="">N/A</option>
                        {HOUSE_CARD_PLANETS.map((planet) => (
                          <option key={planet} value={planet}>
                            {planet}
                          </option>
                        ))}
                      </select>
                    </div>
                  )
                )}
                {(houseAssignments[index]?.placements.length ?? DEFAULT_HOUSE_ASSIGNMENTS[index].placements.length) <
                MAX_HOUSE_PLACEMENTS ? (
                  <button
                    type="button"
                    className="houses-add-button"
                    onClick={() => addPlacement(index)}
                    aria-label={`Add another placement to house ${index + 1}`}
                  >
                    +
                  </button>
                ) : null}
              </div>
              <div className="houses-copy">
                <span>{label}</span>
              </div>
              {(() => {
                const noteKey = buildHouseNoteKey(noteScope, index);
                const noteValue = modalNotes[noteKey] ?? "";
                const hasNote = noteValue.trim().length > 0;
                const isOpen = expandedHouseNotes[noteKey] ?? false;

                return (
                  <aside className={`house-note-wrap sticky-note-wrap${isOpen ? " is-open" : ""}`}>
                    <button
                      type="button"
                      className="sticky-note-tab"
                      onClick={() =>
                        setExpandedHouseNotes((current) => ({
                          ...current,
                          [noteKey]: !isOpen,
                        }))
                      }
                      aria-expanded={isOpen}
                      aria-label={`Open house ${index + 1} notes`}
                    >
                      <span className="sticky-note-tab-label house-note-tab-label" aria-hidden="true">
                        {!isOpen && hasNote ? "★" : ""}
                      </span>
                    </button>
                    {isOpen ? (
                      <div className="sticky-note-pad house-note-pad">
                        <div className="sticky-note-head">
                          <p className="sticky-note-label" aria-hidden="true" />
                          <button
                            type="button"
                            className="sticky-note-close"
                            onClick={() =>
                              setExpandedHouseNotes((current) => ({
                                ...current,
                                [noteKey]: false,
                              }))
                            }
                          >
                            X
                          </button>
                        </div>
                        <textarea
                          value={noteValue}
                          onChange={(event) => onModalNoteChange(noteKey, event.target.value)}
                          placeholder="Write notes here..."
                        />
                      </div>
                    ) : null}
                  </aside>
                );
              })()}
            </div>
          ))}
        </div>
        <div className="houses-actions">
          <div className="houses-target-toggle" aria-label="Choose chart to save house values into">
            <button
              type="button"
              className={target === "a" ? "houses-target-button is-active" : "houses-target-button"}
              onClick={() => onTargetChange("a")}
              aria-pressed={target === "a"}
              aria-label="Edit Primary chart houses"
            >
              A
            </button>
            <button
              type="button"
              className={target === "b" ? "houses-target-button is-active" : "houses-target-button"}
              onClick={() => onTargetChange("b")}
              aria-pressed={target === "b"}
              aria-label="Edit Comparison chart houses"
            >
              B
            </button>
          </div>
          <div className="houses-action-buttons">
            <button
              type="button"
              className="houses-undo-button"
              onClick={undoAddedPlacement}
              aria-label="Undo last added house field"
              disabled={!canUndoAddedPlacement}
            >
              ↶
            </button>
            <button
              type="button"
              className="houses-undo-button"
              onClick={redoAddedPlacement}
              aria-label="Redo last removed house field"
              disabled={!canRedoAddedPlacement}
            >
              ↷
            </button>
            <button
              type="button"
              className={clearFeedback === "cleared" ? "houses-clear-button is-cleared" : "houses-clear-button"}
              onClick={() => setConfirmClearOpen(true)}
            >
              {clearFeedback === "cleared" ? "Cleared" : "Clear Fields"}
            </button>
          </div>
        </div>
      </div>
      {confirmClearOpen ? (
        <div className="modal-backdrop" role="presentation" onClick={() => setConfirmClearOpen(false)}>
          <div className="modal-card houses-confirm-card" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <p className="eyebrow">Clear Fields</p>
            <h2>Are you sure you want to clear all fields?</h2>
            <div className="houses-confirm-actions">
              <button type="button" className="houses-confirm-button is-confirm" onClick={() => {
                setConfirmClearOpen(false);
                executeClearPlacements();
              }}>
                Yes
              </button>
              <button type="button" className="houses-confirm-button" onClick={() => setConfirmClearOpen(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ClockCalculatorCard({
  day,
  onDayChange,
  sunriseHour,
  onSunriseHourChange,
  sunriseMinute,
  onSunriseMinuteChange,
  mode,
  onModeChange,
  rows,
}: {
  day: DayOfWeek;
  onDayChange: (next: DayOfWeek) => void;
  sunriseHour: number;
  onSunriseHourChange: (next: number) => void;
  sunriseMinute: number;
  onSunriseMinuteChange: (next: number) => void;
  mode: ClockMode;
  onModeChange: (next: ClockMode) => void;
  rows: { time: string; planet: Planet; label: string }[];
}) {
  const morningRows = rows.slice(0, 6);
  const eveningRows = rows.slice(6, 12);

  return (
    <section className="summary-card astro-tool-card clock-card">
      <div className="clock-header">
        <h2>Clock Calculator</h2>
        <div className="clock-controls">
          <label className="clock-control clock-control-day">
            <span>Day</span>
            <select
              className="astro-tool-select clock-day-field"
              value={day}
              onChange={(event) => onDayChange(event.target.value as DayOfWeek)}
            >
                {DAYS_OF_WEEK.map((item) => (
                  <option key={item} value={item}>
                    {item.toUpperCase()}
                  </option>
                ))}
              </select>
          </label>
          <div className="clock-control">
            <span>Sunrise</span>
            <div className="clock-time-selects">
              <select
                className="astro-tool-select clock-time-field clock-time-field-hour"
                value={sunriseHour}
                onChange={(event) => onSunriseHourChange(Number(event.target.value))}
              >
                {Array.from({ length: 12 }, (_, index) => index + 1).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
              <span className="clock-colon">:</span>
              <select
                className="astro-tool-select clock-time-field clock-time-field-minute"
                value={sunriseMinute}
                onChange={(event) => onSunriseMinuteChange(Number(event.target.value))}
              >
                {Array.from({ length: 59 }, (_, index) => index + 1).map((value) => (
                  <option key={value} value={value}>
                    {String(value).padStart(2, "0")}
                  </option>
                ))}
              </select>
              <span className="clock-meridiem">A.M.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="clock-table clock-table-split">
        <div className="clock-column">
          {morningRows.map((row) => (
            <div key={`${mode}-${row.time}`} className="clock-row">
              <span className="clock-time">{row.time}</span>
              <span className="clock-planet">{row.planet}</span>
              <span className="clock-word">{row.label.toUpperCase()}</span>
            </div>
          ))}
        </div>
        <div className="clock-column">
          {eveningRows.map((row) => (
            <div key={`${mode}-${row.time}`} className="clock-row">
              <span className="clock-time">{row.time}</span>
              <span className="clock-planet">{row.planet}</span>
              <span className="clock-word">{row.label.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="clock-mode-toggle">
        <button
          type="button"
          className={mode === "day" ? "clock-mode-button is-active" : "clock-mode-button"}
          onClick={() => onModeChange("day")}
          aria-label="Show day hours"
        >
          ☼
        </button>
        <button
          type="button"
          className={mode === "night" ? "clock-mode-button is-active" : "clock-mode-button"}
          onClick={() => onModeChange("night")}
          aria-label="Show night hours"
        >
          ☽
        </button>
      </div>
    </section>
  );
}
