import { skillsService } from "@/services/skills.service";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillGroup } from "./SkillGroup";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default async function SkillsSection() {
  const skillGroups = await skillsService.getAllGroups();

  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-900/50">
      <SectionHeading title="Skills" subtitle="Technologies I work with." />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillGroup key={group.category} group={group} />
        ))}
      </div>
    </SectionWrapper>
  );
}
