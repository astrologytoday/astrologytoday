import { NextRequest, NextResponse } from "next/server";
import { searchAstrologyLocations } from "../../../../lib/server/astrology";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  try {
    const results = await searchAstrologyLocations(query, 5);
    return NextResponse.json({ results });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Location search failed.",
        results: [],
      },
      { status: 400 }
    );
  }
}
