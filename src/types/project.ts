export interface Project {
  id?: string;
  title: string;
  description: string;
  techStack: string[];
  status: 'Draft' | 'Published';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  images?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}