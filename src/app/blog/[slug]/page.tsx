import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogService } from "@/services/blog.service";

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

  return (
    <article className="container mx-auto px-4 py-20 prose prose-lg max-w-3xl">
      <h1>{post.title}</h1>
      <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
      {/* Blog post content rendered here */}
    </article>
  );
}
