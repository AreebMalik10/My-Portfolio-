import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, web development, and technology.",
};

export default function BlogPage() {
  return (
    <section className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold">Blog</h1>
      {/* Blog post list will be populated dynamically */}
    </section>
  );
}
