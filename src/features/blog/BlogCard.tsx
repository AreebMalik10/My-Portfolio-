import Link from "next/link";
import { Card, CardBody, CardTitle, CardDescription } from "@/components/ui/Card";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group focus:outline-none">
      <Card className="h-full transition-shadow group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-primary-500">
        <CardBody>
          <time
            dateTime={post.publishedAt}
            className="text-xs text-gray-400"
          >
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <CardTitle className="mt-2">{post.title}</CardTitle>
          <CardDescription>{post.excerpt}</CardDescription>
        </CardBody>
      </Card>
    </Link>
  );
}
