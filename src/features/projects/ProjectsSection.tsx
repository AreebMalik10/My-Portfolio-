import { projectsService } from "@/services/projects.service";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import SectionWrapper from "@/components/layout/SectionWrapper";

export default async function ProjectsSection() {
  const projects = await projectsService.getFeatured();

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Projects"
        subtitle="A selection of things I have built over the years."
      />
      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects to show yet.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
