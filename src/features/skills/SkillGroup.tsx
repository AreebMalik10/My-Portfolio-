import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import type { SkillGroup as SkillGroupType } from "@/types/skill";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <Card>
      <CardBody>
        <h3 className="mb-4 text-base font-semibold text-gray-900 dark:text-gray-100">
          {group.category}
        </h3>
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <Badge key={skill.name} label={skill.name} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
