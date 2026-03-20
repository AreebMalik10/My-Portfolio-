import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of projects — from web apps to open-source contributions.",
};

export default function ProjectsPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">Projects</h1>
      {/* Projects grid will be populated dynamically */}
    </section>
  );
}
