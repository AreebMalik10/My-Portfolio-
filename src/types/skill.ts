export interface Skill {
  name: string;
  iconUrl?: string;
  proficiency?: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}
