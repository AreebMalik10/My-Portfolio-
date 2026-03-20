import { apiFetch } from "@/lib/fetch";
import type { Experience } from "@/types/experience";

interface ExperienceResponse {
  data: Experience[];
}

export const experienceService = {
  async getAll(): Promise<Experience[]> {
    const res = await apiFetch<ExperienceResponse>("/api/experience", {
      next: { revalidate: 3600 },
    });
    return res.data;
  },
};
