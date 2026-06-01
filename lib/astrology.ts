export const ASTROLOGY_SIGN_NAMES = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
] as const;

export type AstrologySignName = (typeof ASTROLOGY_SIGN_NAMES)[number];

export type AstrologyPlacement = {
  sign: AstrologySignName;
  degree: number;
  longitude: number;
};

export type AstrologyHousePlanetKey =
  | "sun"
  | "moon"
  | "ascendant"
  | "mercury"
  | "venus"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune"
  | "pluto";

export type AstrologyHouseCusp = AstrologyPlacement & {
  house: number;
};

export type AstrologyHouseEntry = AstrologyPlacement & {
  house: number;
  planet: AstrologyHousePlanetKey;
};

export type AstrologyCalculateRequest = {
  name: string;
  date: string;
  time?: string;
  location: string;
  birthTimeKnown: boolean;
};

export type AstrologyCalculateResponse = {
  name: string;
  birth: {
    date: string;
    time?: string;
    location: string;
    latitude: number;
    longitude: number;
    timezone: string;
    utcDateTime?: string;
    birthTimeKnown: boolean;
  };
  placements: {
    sun: AstrologyPlacement;
    moon: AstrologyPlacement | null;
    ascendant: AstrologyPlacement | null;
    mercury: AstrologyPlacement;
    venus: AstrologyPlacement;
    mars: AstrologyPlacement;
    jupiter: AstrologyPlacement;
    saturn: AstrologyPlacement;
    uranus: AstrologyPlacement;
    neptune: AstrologyPlacement;
    pluto: AstrologyPlacement;
  };
  houses: {
    cusps: AstrologyHouseCusp[];
    entries: AstrologyHouseEntry[];
  } | null;
};

export type AstrologyLocationOption = {
  label: string;
  location: string;
  latitude: number;
  longitude: number;
  timezone: string;
};

export type AstrologyPlanetaryClockPlanetKey =
  | "sun"
  | "moon"
  | "mercury"
  | "venus"
  | "mars"
  | "jupiter"
  | "saturn";

export type AstrologyPlanetaryClockPlacementsResponse = {
  at: string;
  placements: Record<AstrologyPlanetaryClockPlanetKey, AstrologyPlacement>;
};
