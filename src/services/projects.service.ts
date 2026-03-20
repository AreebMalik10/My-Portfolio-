import { apiFetch } from "@/lib/fetch";
import type { Project } from "@/types/project";

interface ProjectsResponse {
  data: Project[];
}

interface ProjectResponse {
  data: Project;
}

export const projectsService = {
  async getAll(): Promise<Project[]> {
    const res = await apiFetch<ProjectsResponse>("/api/projects", {
      next: { revalidate: 60 },
    });
    return res.data;
  },

  async getFeatured(): Promise<Project[]> {
    const all = await projectsService.getAll();
    return all.filter((p) => p.featured);
  },

  async getBySlug(slug: string): Promise<Project | null> {
    try {
      const res = await apiFetch<ProjectResponse>(`/api/projects/${slug}`, {
        next: { revalidate: 60 },
      });
      return res.data;
    } catch {
      return null;
    }
  },
};
