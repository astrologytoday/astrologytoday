import { NextRequest, NextResponse } from "next/server";
import { calculatePlanetaryClockPlacements } from "../../../../lib/server/astrology";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const at = request.nextUrl.searchParams.get("at") ?? undefined;
    const result = calculatePlanetaryClockPlacements(at);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Planetary clock calculation failed.",
      },
      { status: 400 }
    );
  }
}
