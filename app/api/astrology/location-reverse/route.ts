import { NextRequest, NextResponse } from "next/server";
import { reverseAstrologyLocation } from "../../../../lib/server/astrology";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const latitude = Number(request.nextUrl.searchParams.get("lat"));
    const longitude = Number(request.nextUrl.searchParams.get("lon"));

    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      return NextResponse.json({ error: "Latitude and longitude are required." }, { status: 400 });
    }

    const result = await reverseAstrologyLocation(latitude, longitude);
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Reverse location lookup failed.",
      },
      { status: 400 }
    );
  }
}
