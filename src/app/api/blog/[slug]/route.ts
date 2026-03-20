import { NextResponse } from "next/server";
import type { BlogPost } from "@/types/blog";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

/**
 * GET /api/blog/[slug]
 * Returns a single blog post by its slug.
 */
export async function GET(_request: Request, { params }: RouteParams) {
  const { slug } = await params;

  // TODO: Fetch post by slug from DB / CMS / MDX
  const post: BlogPost | null = null;

  if (!post) {
    return NextResponse.json(
      { error: `Blog post with slug "${slug}" not found` },
      { status: 404 }
    );
  }

  return NextResponse.json({ data: post }, { status: 200 });
}
