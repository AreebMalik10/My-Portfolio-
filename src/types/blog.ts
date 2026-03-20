export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImageUrl?: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
}
