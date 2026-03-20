import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsService } from "@/services/projects.service";
import ProjectDetailScreen from "@/screens/ProjectDetail/ProjectDetailScreen";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await projectsService.getBySlug(slug);

  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await projectsService.getBySlug(slug);

  if (!project) notFound();

  return <ProjectDetailScreen project={project} />;
}
