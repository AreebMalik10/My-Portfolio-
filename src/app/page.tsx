import HeroSection from "@/features/hero/HeroSection";
import ProjectsSection from "@/features/projects/ProjectsSection";
import SkillsSection from "@/features/skills/SkillsSection";
import ExperienceSection from "@/features/experience/ExperienceSection";
import ContactSection from "@/features/contact/ContactSection";

// This page is dynamically rendered — data is fetched per-request.
export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
