import Link from "next/link";
import { Card, CardBody, CardImage, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group focus:outline-none">
      <Card className="h-full transition-shadow group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-primary-500">
        {project.thumbnailUrl && (
          <CardImage src={project.thumbnailUrl} alt={project.title} />
        )}
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
