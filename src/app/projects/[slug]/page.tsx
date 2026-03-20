import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsService } from "@/services/projects.service";

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

  return (
    <article className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-4 text-lg text-gray-600">{project.description}</p>
      {/* Full project detail content */}
    </article>
  );
}
