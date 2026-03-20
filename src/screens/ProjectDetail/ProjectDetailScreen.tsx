import React from "react";
import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectDetailScreen({ project }: Props) {
  return (
    <article className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-4 text-lg text-gray-600">{project.description}</p>
      {/* Full project detail content */}
    </article>
  );
}
