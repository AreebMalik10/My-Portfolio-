import { Metadata } from "next";
import ProjectsScreen from "@/screens/Projects/ProjectsScreen";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of projects — from web apps to open-source contributions.",
};

export default function ProjectsPage() {
  return <ProjectsScreen />;
}
