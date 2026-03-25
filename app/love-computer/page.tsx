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
      "Where you expand and look for possibility",
    ],
  },
  "♄": {
    heading: "Fears, insecurities, fun side",
    bullets: [
      "Where you feel pressure, fear, or inhibition",
      "How you grow through responsibility",
      "The serious edge that shapes your character",
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

function buildCellReport(cell: GridCell, personAName: string, personBName: string) {
  return [
    `${cell.symbol} ${cell.title}`,
    `${cell.aPlanet} ${PLANET_LABELS[cell.aPlanet]} ${cell.aSign} x ${cell.bPlanet} ${PLANET_LABELS[cell.bPlanet]} ${cell.bSign}`,
    "",
    personAName,
    buildEntityReport(cell.aPlanet, cell.aSign),
    "",
    "X",
    "",
    personBName,
    buildEntityReport(cell.bPlanet, cell.bSign),
  ].join("\n");
}

function buildDownloadReport(grid: GridCell[][], personAName: string, personBName: string) {
  const order: RelationType[] = [
    "same-sign",
    "same-element",
    "elemental-harmony",
    "competing",
    "awkward",
    "teamwork",
    "okay",
  ];

  const sections = order
    .map((relation) => {
      const cells = grid.flat().filter((cell) => cell.relation === relation);
      if (cells.length === 0) return null;

      const heading = RELATION_STYLES[relation];

      return [
        `${heading.label.toUpperCase()} ${heading.symbol}`,
        "=".repeat(48),
        cells
          .map((cell) => buildCellReport(cell, personAName, personBName))
          .join("\n\n" + "-".repeat(48) + "\n\n"),
      ].join("\n");
    })
    .filter(Boolean)
    .join("\n\n\n");

  return [
    "LOVE COMPUTER REPORT",
    `Generated: ${new Date().toLocaleString()}`,
    `${personAName} x ${personBName}`,
    "",
    sections,
  ].join("\n");
}

export default function LoveComputerPage() {
  const [personAName, setPersonAName] = useState("Person A");
  const [personA, setPersonA] = useState<PlacementMap>(DEFAULT_A);
  const [personASex, setPersonASex] = useState<Sex>("male");
  const [personBName, setPersonBName] = useState("Person B");
  const [personB, setPersonB] = useState<PlacementMap>(DEFAULT_B);
  const [personBSex, setPersonBSex] = useState<Sex>("female");
  const [selectedCell, setSelectedCell] = useState<GridCell | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importStatus, setImportStatus] = useState("Upload an Astro-Seek synastry report to auto-fill the placements.");
  const [importWarnings, setImportWarnings] = useState<string[]>([]);
  const [debugImageUrl, setDebugImageUrl] = useState<string | null>(null);
  const [uploadedSynastryFile, setUploadedSynastryFile] = useState<File | null>(null);
  const [synastryOverridesA, setSynastryOverridesA] = useState<SynastryOverrideMap>(() => ({
    ...ASTROSEEK_SYN_A_OVERRIDES,
  }));
  const [synastryOverridesB, setSynastryOverridesB] = useState<SynastryOverrideMap>(() => ({
    ...ASTROSEEK_SYN_B_OVERRIDES,
  }));
  const [debugSide, setDebugSide] = useState<"a" | "b">("a");
  const [debugPlanet, setDebugPlanet] = useState<Planet>("☉");
  const [calibrationStatus, setCalibrationStatus] = useState("Calibration is currently using the locked-in defaults.");

  useEffect(() => {
    if (!selectedCell) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCell(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedCell]);

  useEffect(() => {
    const storedA = window.localStorage.getItem(SYN_A_STORAGE_KEY);
    const storedB = window.localStorage.getItem(SYN_B_STORAGE_KEY);

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
  }, []);

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

  const debugBoxes = useMemo(
    () => buildSynastryDebugBoxes(synastryOverridesA, synastryOverridesB),
    [synastryOverridesA, synastryOverridesB]
  );

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

  const runSynastryImport = async (file: File) => {
    setIsImporting(true);
    setImportWarnings([]);
    setImportStatus(`Analyzing ${file.name}...`);

    try {
      const result = await parseAstroSeekSynastryFile(file, synastryOverridesA, synastryOverridesB);
      setPersonA((current) => ({ ...current, ...result.personA }));
      setPersonB((current) => ({ ...current, ...result.personB }));
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
    const report = buildDownloadReport(grid, personAName, personBName);
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

  const handleAstroSeekUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

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
          title={personAName}
          subtitle="Primary chart"
          name={personAName}
          sex={personASex}
          onNameChange={setPersonAName}
          values={personA}
          onSexChange={setPersonASex}
          onChange={setPersonA}
        />
        <PlacementCard
          title={personBName}
          subtitle="Comparison chart"
          name={personBName}
          sex={personBSex}
          onNameChange={setPersonBName}
          values={personB}
          onSexChange={setPersonBSex}
          onChange={setPersonB}
        />
        <CompatibilityTable />
      </section>

      <section className="logic-card">
        <div className="logic-copy">
          <p className="eyebrow">Import Astro-Seek</p>
          <h2>Report Upload</h2>
          <p>
            Upload an Astro-Seek synastry report and the parser will fill both partners from the
            bottom comparison table.
          </p>
          <label className="upload-field">
            <span>Astro-Seek Image</span>
            <input type="file" accept="image/png,image/jpeg,image/webp" onChange={handleAstroSeekUpload} />
          </label>
          <p className="import-status">{isImporting ? "Importing..." : importStatus}</p>
          {importWarnings.length > 0 ? (
            <ul className="import-warnings">
              {importWarnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          ) : null}
          {debugImageUrl ? (
            <div className="debug-panel">
              <p className="eyebrow">Debugger</p>
              <p className="section-copy">
                These are the exact synastry table boxes the parser is sampling right now.
              </p>
              <div className="calibration-panel">
                <div className="calibration-head">
                  <strong>Fine-Tune Controls</strong>
                  <span>
                    Editing {debugSide === "a" ? personAName : personBName} {debugPlanet}
                  </span>
                </div>
                <div className="calibration-row">
                  <label>
                    Side
                    <select value={debugSide} onChange={(e) => setDebugSide(e.target.value as "a" | "b")}>
                      <option value="a">{personAName}</option>
                      <option value="b">{personBName}</option>
                    </select>
                  </label>
                  <label>
                    Planet
                    <select value={debugPlanet} onChange={(e) => setDebugPlanet(e.target.value as Planet)}>
                      {PLANETS.map((planet) => (
                        <option key={planet} value={planet}>
                          {planet} {PLANET_LABELS[planet]}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="calibration-readout">
                  <span>X: {selectedXPx}px</span>
                  <span>Y: {selectedYPx}px</span>
                  <span>Size: {selectedScale.toFixed(2)}x</span>
                </div>
                <p className="calibration-status">{calibrationStatus}</p>
                <div className="calibration-controls">
                  <button type="button" onClick={() => nudgeSelected(0, -1)}>
                    Up
                  </button>
                  <button type="button" onClick={() => nudgeSelected(-1, 0)}>
                    Left
                  </button>
                  <button type="button" onClick={() => nudgeSelected(1, 0)}>
                    Right
                  </button>
                  <button type="button" onClick={() => nudgeSelected(0, 1)}>
                    Down
                  </button>
                  <button type="button" onClick={() => resizeSelected(-0.05)}>
                    Smaller
                  </button>
                  <button type="button" onClick={() => resizeSelected(0.05)}>
                    Bigger
                  </button>
                  <button type="button" onClick={saveCurrentCalibration}>
                    Save Current Calibration
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (uploadedSynastryFile) {
                        void runSynastryImport(uploadedSynastryFile);
                      }
                    }}
                    disabled={!uploadedSynastryFile || isImporting}
                  >
                    Re-Analyze
                  </button>
                  <button type="button" onClick={resetSelected}>
                    Reset Selected
                  </button>
                  <button type="button" onClick={resetAllCalibration}>
                    Reset All
                  </button>
                </div>
              </div>
              <div className="debug-image-wrap">
                <img src={debugImageUrl} alt="Astro-Seek debug upload" className="debug-image" />
                {debugBoxes.map((box) => (
                  <div
                    key={box.key}
                    className={`debug-box debug-box-${box.tone}`}
                    style={{
                      left: `${box.rect.x * 100}%`,
                      top: `${box.rect.y * 100}%`,
                      width: `${box.rect.w * 100}%`,
                      height: `${box.rect.h * 100}%`,
                    }}
                  >
                    <span>{box.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
        <div className="logic-copy">
          <p className="eyebrow">Parser Strategy</p>
          <h2>Template-Based Import</h2>
          <p>
            The importer uses the zodiac symbols already printed around the chart wheel as visual
            templates, then matches the expected sign cells against those same-report templates.
            That keeps it deterministic and avoids loose OCR across the whole page.
          </p>
        </div>
      </section>

      <section className="chart-card">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Planet To Planet Chart</p>
            <h2>Comparison Grid</h2>
          </div>
          <div className="section-actions">
            <p className="section-copy">
              Click any symbol to open a note popup. Person A runs down the left side and Person B
              runs across the top.
            </p>
            <button type="button" className="download-button" onClick={downloadReport}>
              Download Text Report
            </button>
          </div>
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
              <span className="person-chip" data-sex={getChipTone(personASex)}>
                {personAName}: {selectedCell.aPlanet} {PLANET_LABELS[selectedCell.aPlanet]} {selectedCell.aSign}
              </span>
              <span className="person-chip" data-sex={getChipTone(personBSex)}>
                {personBName}: {selectedCell.bPlanet} {PLANET_LABELS[selectedCell.bPlanet]} {selectedCell.bSign}
              </span>
              <span>{selectedCell.symbol}</span>
            </div>
            <div className="modal-compare-grid">
              <ModalDetail planet={selectedCell.aPlanet} sign={selectedCell.aSign} />
              <div className="modal-cross">X</div>
              <ModalDetail planet={selectedCell.bPlanet} sign={selectedCell.bSign} />
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}

function PlacementCard({
  title,
  subtitle,
  name,
  sex,
  values,
  onNameChange,
  onSexChange,
  onChange,
}: {
  title: string;
  subtitle: string;
  name: string;
  sex: Sex;
  values: PlacementMap;
  onNameChange: (next: string) => void;
  onSexChange: (next: Sex) => void;
  onChange: (next: PlacementMap) => void;
}) {
  return (
    <section className="placement-card">
      <p className="eyebrow">{subtitle}</p>
      <h2>{title}</h2>
      <p className="card-copy">Leave Moon or ASC blank if birth time is unknown.</p>

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
