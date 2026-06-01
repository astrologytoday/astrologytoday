import { NextRequest, NextResponse } from "next/server";
import type { AstrologyCalculateRequest } from "../../../../lib/astrology";
import { calculateAstrologyPlacements } from "../../../../lib/server/astrology";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<AstrologyCalculateRequest>;

    if (
      typeof body.name !== "string" ||
      typeof body.date !== "string" ||
      typeof body.location !== "string" ||
      typeof body.birthTimeKnown !== "boolean" ||
      (body.time !== undefined && typeof body.time !== "string")
    ) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const result = await calculateAstrologyPlacements({
      name: body.name,
      date: body.date,
      time: body.time,
      location: body.location,
      birthTimeKnown: body.birthTimeKnown,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Astrology calculation failed.",
      },
      { status: 400 }
    );
  }
}
