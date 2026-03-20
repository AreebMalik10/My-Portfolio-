import React from "react";
import { BlogPost } from "@/types/blog";

interface Props {
  post: BlogPost;
}

export default function BlogPostScreen({ post }: Props) {
  return (
    <article className="container mx-auto px-4 py-20 prose prose-lg max-w-3xl">
      <h1>{post.title}</h1>
      <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString()}</time>
      {/* Blog post content rendered here */}
    </article>
  );
}
