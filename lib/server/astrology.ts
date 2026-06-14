import "server-only";

import path from "path";
import { fromZonedTime } from "date-fns-tz";
import swisseph from "swisseph";
import tzLookup from "tz-lookup";
import type {
  AstrologyCalculateRequest,
  AstrologyCalculateResponse,
  AstrologyHousePlanetKey,
  AstrologyLocationOption,
  AstrologyPlanetaryClockPlacementsResponse,
  AstrologyPlacement,
  AstrologySignName,
} from "../astrology";

const EPHE_PATH = path.join(process.cwd(), "node_modules", "swisseph", "ephe");

swisseph.swe_set_ephe_path(EPHE_PATH);

const CALCULATION_FLAGS = swisseph.SEFLG_SWIEPH | swisseph.SEFLG_SPEED;

const PLANET_IDS = {
  sun: swisseph.SE_SUN,
  moon: swisseph.SE_MOON,
  mercury: swisseph.SE_MERCURY,
  venus: swisseph.SE_VENUS,
  mars: swisseph.SE_MARS,
  jupiter: swisseph.SE_JUPITER,
  saturn: swisseph.SE_SATURN,
  uranus: swisseph.SE_URANUS,
  neptune: swisseph.SE_NEPTUNE,
  pluto: swisseph.SE_PLUTO,
  chiron: swisseph.SE_CHIRON,
  lilith: swisseph.SE_MEAN_APOG,
} as const;

const PLANETARY_CLOCK_PLANET_KEYS = [
  "saturn",
  "jupiter",
  "mars",
  "sun",
  "venus",
  "mercury",
  "moon",
] as const;

const HOUSE_PLANET_KEYS: AstrologyHousePlanetKey[] = [
  "sun",
  "moon",
  "ascendant",
  "mercury",
  "venus",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
];

const SIGN_NAMES: AstrologySignName[] = [
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
];

type RawLocationSearchResult = {
  display_name?: string;
  lat?: string;
  lon?: string;
};

type RawReverseLocationResult = {
  display_name?: string;
  lat?: string;
  lon?: string;
};

function normalizeLongitude(longitude: number) {
  const normalized = longitude % 360;
  return normalized < 0 ? normalized + 360 : normalized;
}

function longitudeToPlacement(longitude: number): AstrologyPlacement {
  const normalizedLongitude = normalizeLongitude(longitude);
  const signIndex = Math.floor(normalizedLongitude / 30) % 12;
  const degree = Number((normalizedLongitude - signIndex * 30).toFixed(4));
  return {
    sign: SIGN_NAMES[signIndex],
    degree,
    longitude: Number(normalizedLongitude.toFixed(6)),
  };
}

function isLongitudeInHouse(start: number, end: number, value: number) {
  const normalizedStart = normalizeLongitude(start);
  const normalizedEnd = normalizeLongitude(end);
  const normalizedValue = normalizeLongitude(value);

  if (normalizedStart <= normalizedEnd) {
    return normalizedValue >= normalizedStart && normalizedValue < normalizedEnd;
  }

  return normalizedValue >= normalizedStart || normalizedValue < normalizedEnd;
}

function getHouseNumber(longitude: number, houseCusps: number[]) {
  for (let index = 0; index < houseCusps.length; index += 1) {
    const start = houseCusps[index];
    const end = houseCusps[(index + 1) % houseCusps.length];
    if (isLongitudeInHouse(start, end, longitude)) {
      return index + 1;
    }
  }

  return 12;
}

function getPlanetPlacement(bodyId: number, julianDayUT: number) {
  const result = swisseph.swe_calc_ut(julianDayUT, bodyId, CALCULATION_FLAGS);
  if ("error" in result) {
    throw new Error(result.error || "Swiss Ephemeris could not calculate that placement.");
  }
  if (!("longitude" in result)) {
    throw new Error("Swiss Ephemeris returned an unexpected result.");
  }
  return longitudeToPlacement(result.longitude);
}

function buildUtcDateParts(date: string, time: string, timezone: string) {
  const localDate = fromZonedTime(`${date}T${time}:00`, timezone);
  return {
    utcDate: localDate,
    year: localDate.getUTCFullYear(),
    month: localDate.getUTCMonth() + 1,
    day: localDate.getUTCDate(),
    hour: localDate.getUTCHours(),
    minute: localDate.getUTCMinutes(),
    second: localDate.getUTCSeconds(),
  };
}

function getJulianDayUT(date: string, time: string, timezone: string) {
  const utc = buildUtcDateParts(date, time, timezone);
  const julian = swisseph.swe_utc_to_jd(
    utc.year,
    utc.month,
    utc.day,
    utc.hour,
    utc.minute,
    utc.second,
    swisseph.SE_GREG_CAL
  );

  if ("error" in julian) {
    throw new Error(julian.error || "Swiss Ephemeris could not convert that birth time.");
  }

  return {
    utcDate: utc.utcDate,
    julianDayUT: julian.julianDayUT,
  };
}

function getJulianDayUTFromUtcDate(date: Date) {
  const julian = swisseph.swe_utc_to_jd(
    date.getUTCFullYear(),
    date.getUTCMonth() + 1,
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    swisseph.SE_GREG_CAL
  );

  if ("error" in julian) {
    throw new Error(julian.error || "Swiss Ephemeris could not convert that time.");
  }

  return julian.julianDayUT;
}

function getPlacementForUnknownBirthTime(bodyId: number, date: string, timezone: string) {
  const startOfDay = getJulianDayUT(date, "00:00", timezone);
  const endOfDay = getJulianDayUT(date, "23:59", timezone);
  const midday = getJulianDayUT(date, "12:00", timezone);

  const placementAtStart = getPlanetPlacement(bodyId, startOfDay.julianDayUT);
  const placementAtEnd = getPlanetPlacement(bodyId, endOfDay.julianDayUT);

  if (placementAtStart.sign !== placementAtEnd.sign) {
    return null;
  }

  const placementAtMidday = getPlanetPlacement(bodyId, midday.julianDayUT);
  return {
    ...placementAtMidday,
    sign: placementAtStart.sign,
  };
}

export async function searchAstrologyLocations(query: string, limit = 5): Promise<AstrologyLocationOption[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const params = new URLSearchParams({
    q: trimmed,
    format: "jsonv2",
    addressdetails: "1",
    limit: String(limit),
  });

  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
      "User-Agent": "AstrologyToday/1.0 (contact@astrologytoday.ca)",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Location lookup failed.");
  }

  const results = (await response.json()) as RawLocationSearchResult[];

  return results
    .map((item) => {
      const latitude = Number(item.lat);
      const longitude = Number(item.lon);
      if (!item.display_name || Number.isNaN(latitude) || Number.isNaN(longitude)) {
        return null;
      }

      let timezone = "";
      try {
        timezone = tzLookup(latitude, longitude);
      } catch {
        timezone = "";
      }

      if (!timezone) return null;

      return {
        label: item.display_name,
        location: item.display_name,
        latitude,
        longitude,
        timezone,
      } satisfies AstrologyLocationOption;
    })
    .filter((item): item is AstrologyLocationOption => Boolean(item));
}

export async function reverseAstrologyLocation(latitude: number, longitude: number): Promise<AstrologyLocationOption> {
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    throw new Error("Invalid coordinates.");
  }

  const params = new URLSearchParams({
    lat: String(latitude),
    lon: String(longitude),
    format: "jsonv2",
    zoom: "10",
    addressdetails: "1",
  });

  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?${params.toString()}`, {
    headers: {
      Accept: "application/json",
      "Accept-Language": "en",
      "User-Agent": "AstrologyToday/1.0 (contact@astrologytoday.ca)",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Reverse location lookup failed.");
  }

  const item = (await response.json()) as RawReverseLocationResult;
  const resolvedLatitude = Number(item.lat ?? latitude);
  const resolvedLongitude = Number(item.lon ?? longitude);
  const label = item.display_name?.trim();

  let timezone = "";
  try {
    timezone = tzLookup(latitude, longitude);
  } catch {
    timezone = "";
  }

  if (!label || Number.isNaN(resolvedLatitude) || Number.isNaN(resolvedLongitude) || !timezone) {
    throw new Error("We couldn't resolve that current location.");
  }

  return {
    label,
    location: label,
    latitude: resolvedLatitude,
    longitude: resolvedLongitude,
    timezone,
  };
}

export async function calculateAstrologyPlacements(
  request: AstrologyCalculateRequest
): Promise<AstrologyCalculateResponse> {
  const name = request.name.trim() || "Unnamed Chart";
  const date = request.date.trim();
  const location = request.location.trim();
  const birthTimeKnown = Boolean(request.birthTimeKnown);

  if (!date) {
    throw new Error("Birth date is required.");
  }

  if (!location) {
    throw new Error("Birth location is required.");
  }

  const matches = await searchAstrologyLocations(location, 1);
  const resolvedLocation = matches[0];

  if (!resolvedLocation) {
    throw new Error("We couldn't resolve that birth location.");
  }

  const calculationTime = birthTimeKnown ? request.time?.trim() : "12:00";

  if (!calculationTime) {
    throw new Error("Birth time is required unless marked unknown.");
  }

  const { utcDate, julianDayUT } = getJulianDayUT(date, calculationTime, resolvedLocation.timezone);

  const placements: AstrologyCalculateResponse["placements"] = {
    sun: getPlanetPlacement(PLANET_IDS.sun, julianDayUT),
    moon: birthTimeKnown
      ? getPlanetPlacement(PLANET_IDS.moon, julianDayUT)
      : getPlacementForUnknownBirthTime(PLANET_IDS.moon, date, resolvedLocation.timezone),
    ascendant: null,
    mercury: getPlanetPlacement(PLANET_IDS.mercury, julianDayUT),
    venus: getPlanetPlacement(PLANET_IDS.venus, julianDayUT),
    mars: getPlanetPlacement(PLANET_IDS.mars, julianDayUT),
    jupiter: getPlanetPlacement(PLANET_IDS.jupiter, julianDayUT),
    saturn: getPlanetPlacement(PLANET_IDS.saturn, julianDayUT),
    uranus: getPlanetPlacement(PLANET_IDS.uranus, julianDayUT),
    neptune: getPlanetPlacement(PLANET_IDS.neptune, julianDayUT),
    pluto: getPlanetPlacement(PLANET_IDS.pluto, julianDayUT),
    chiron: birthTimeKnown
      ? getPlanetPlacement(PLANET_IDS.chiron, julianDayUT)
      : getPlacementForUnknownBirthTime(PLANET_IDS.chiron, date, resolvedLocation.timezone),
    lilith: birthTimeKnown
      ? getPlanetPlacement(PLANET_IDS.lilith, julianDayUT)
      : getPlacementForUnknownBirthTime(PLANET_IDS.lilith, date, resolvedLocation.timezone),
  };

  if (birthTimeKnown) {
    const houses = swisseph.swe_houses(julianDayUT, resolvedLocation.latitude, resolvedLocation.longitude, "P");
    if ("error" in houses) {
      throw new Error(houses.error || "Swiss Ephemeris could not calculate the ascendant.");
    }
    placements.ascendant = longitudeToPlacement(houses.ascendant);

    const normalizedCusps = houses.house.map((houseLongitude) => normalizeLongitude(houseLongitude));
    const cuspData = normalizedCusps.map((houseLongitude, index) => ({
      house: index + 1,
      ...longitudeToPlacement(houseLongitude),
    }));

    const entries = HOUSE_PLANET_KEYS.map((planetKey) => {
      const placement = placements[planetKey === "ascendant" ? "ascendant" : planetKey];
      if (!placement) return null;
      return {
        house: getHouseNumber(placement.longitude, normalizedCusps),
        planet: planetKey as AstrologyHousePlanetKey,
        ...placement,
      };
    }).filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

    return {
      name,
      birth: {
        date,
        time: birthTimeKnown ? calculationTime : undefined,
        location: resolvedLocation.location,
        latitude: Number(resolvedLocation.latitude.toFixed(6)),
        longitude: Number(resolvedLocation.longitude.toFixed(6)),
        timezone: resolvedLocation.timezone,
        utcDateTime: birthTimeKnown ? utcDate.toISOString() : undefined,
        birthTimeKnown,
      },
      placements,
      houses: {
        cusps: cuspData,
        entries,
      },
    };
  }

  return {
    name,
    birth: {
      date,
      time: birthTimeKnown ? calculationTime : undefined,
      location: resolvedLocation.location,
      latitude: Number(resolvedLocation.latitude.toFixed(6)),
      longitude: Number(resolvedLocation.longitude.toFixed(6)),
      timezone: resolvedLocation.timezone,
      utcDateTime: birthTimeKnown ? utcDate.toISOString() : undefined,
      birthTimeKnown,
    },
    placements,
    houses: null,
  };
}

export function calculatePlanetaryClockPlacements(atIso?: string): AstrologyPlanetaryClockPlacementsResponse {
  const date = atIso ? new Date(atIso) : new Date();
  if (Number.isNaN(date.getTime())) {
    throw new Error("Invalid planetary clock time.");
  }

  const julianDayUT = getJulianDayUTFromUtcDate(date);
  const placements = Object.fromEntries(
    PLANETARY_CLOCK_PLANET_KEYS.map((planetKey) => [planetKey, getPlanetPlacement(PLANET_IDS[planetKey], julianDayUT)])
  ) as AstrologyPlanetaryClockPlacementsResponse["placements"];

  return {
    at: date.toISOString(),
    placements,
  };
}
