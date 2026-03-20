import { apiFetch } from "@/lib/fetch";
import type { BlogPost } from "@/types/blog";

interface BlogPostsResponse {
  data: BlogPost[];
}

interface BlogPostResponse {
  data: BlogPost;
}

export const blogService = {
  async getAll(): Promise<BlogPost[]> {
    const res = await apiFetch<BlogPostsResponse>("/api/blog", {
      next: { revalidate: 300 },
    });
    return res.data;
  },

  async getBySlug(slug: string): Promise<BlogPost | null> {
    try {
      const res = await apiFetch<BlogPostResponse>(`/api/blog/${slug}`, {
        next: { revalidate: 300 },
      });
      return res.data;
    } catch {
      return null;
    }
  },
};
