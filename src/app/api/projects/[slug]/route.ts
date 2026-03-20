import { NextResponse } from "next/server";
import type { Project } from "@/types/project";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

/**
 * GET /api/projects/[slug]
 * Returns a single project by its slug.
 */
export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params;

  // TODO: Fetch project by slug from DB / CMS
  const project: Project | null = null;

  if (!project) {
    return NextResponse.json(
      { error: `Project with slug "${slug}" not found` },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: project }, { status: 200 });
}
