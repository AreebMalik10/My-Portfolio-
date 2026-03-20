import { experienceService } from "@/services/experience.service";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "./ExperienceCard";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default async function ExperienceSection() {
  const experiences = await experienceService.getAll();

  return (
    <SectionWrapper id="experience">
      <SectionHeading title="Experience" subtitle="My professional journey." />
      <div className="mx-auto max-w-3xl space-y-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </SectionWrapper>
  );
}
