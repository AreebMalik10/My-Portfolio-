import { NextResponse } from "next/server";
import type { BlogPost } from "@/types/blog";

/**
 * GET /api/blog
 * Returns the list of all published blog posts.
 */
export async function GET() {
  // TODO: Replace with real data source (DB / CMS / MDX)
  const posts: BlogPost[] = [];

  return NextResponse.json({ data: posts }, { status: 200 });
}
