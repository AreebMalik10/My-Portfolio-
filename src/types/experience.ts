export interface Experience {
  id?: string;
  company: string;
  title: string;
  location?: string;
  currentlyWorking: boolean;
  startDate: string;
  endDate?: string;
  bullets: string[];
  techStack: string[];
  images: string[];
  createdAt: string;
  updatedAt?: string;
}