import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogService } from "@/services/blog.service";
import BlogPostScreen from "@/screens/BlogPost/BlogPostScreen";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await blogService.getBySlug(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await blogService.getBySlug(slug);

  if (!post) notFound();

  return <BlogPostScreen post={post} />;
}
