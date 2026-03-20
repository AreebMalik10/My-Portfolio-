import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about who I am, what I do, and my journey as a developer.",
};

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">About Me</h1>
      {/* About content will be populated dynamically */}
    </section>
  );
}
