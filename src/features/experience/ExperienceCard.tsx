import { Badge } from "@/components/ui/Badge";
import type { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const start = new Date(experience.startDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  const end = experience.endDate
    ? new Date(experience.endDate).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "Present";

  return (
    <div className="relative border-l-2 border-primary-500 pl-6">
      <div className="absolute -left-2 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary-500 bg-white dark:bg-gray-950" />
      <p className="text-xs font-medium text-primary-600">
        {start} — {end}
      </p>
      <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
        {experience.role}
      </h3>
      <p className="text-sm font-medium text-gray-500">{experience.company}</p>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{experience.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <Badge key={tech} label={tech} />
        ))}
      </div>
    </div>
  );
}
