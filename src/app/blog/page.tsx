import { Metadata } from "next";
import BlogScreen from "@/screens/Blog/BlogScreen";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, web development, and technology.",
};

export default function BlogPage() {
  return <BlogScreen />;
}
