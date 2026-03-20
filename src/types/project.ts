export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnailUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  tags: string[];
  featured: boolean;
  publishedAt: string;
}
