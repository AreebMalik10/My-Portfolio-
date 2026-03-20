import { NextResponse } from "next/server";
import type { Project } from "@/types/project";

/**
 * GET /api/projects
 * Returns the list of all portfolio projects.
 */
export async function GET() {
  // TODO: Replace with real data source (DB / CMS)
  const projects: Project[] = [];

  return NextResponse.json({ data: projects }, { status: 200 });
}
