import { NextResponse } from "next/server";
import type { Experience } from "@/types/experience";

/**
 * GET /api/experience
 * Returns work experience entries in reverse-chronological order.
 */
export async function GET() {
  // TODO: Replace with real data source (DB / CMS)
  const experience: Experience[] = [];

  return NextResponse.json({ data: experience }, { status: 200 });
}
