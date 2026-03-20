import { apiFetch } from "@/lib/fetch";
import type { SkillGroup } from "@/types/skill";

interface SkillsResponse {
  data: SkillGroup[];
}

export const skillsService = {
  async getAllGroups(): Promise<SkillGroup[]> {
    const res = await apiFetch<SkillsResponse>("/api/skills", {
      next: { revalidate: 3600 },
    });
    return res.data;
  },
};
