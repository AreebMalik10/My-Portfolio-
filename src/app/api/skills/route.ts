import { NextResponse } from "next/server";
import type { SkillGroup } from "@/types/skill";

/**
 * GET /api/skills
 * Returns all skills grouped by category.
 */
export async function GET() {
  // TODO: Replace with real data source (DB / CMS)
  const skills: SkillGroup[] = [];

  return NextResponse.json({ data: skills }, { status: 200 });
}
