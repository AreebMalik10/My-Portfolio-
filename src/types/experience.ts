export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate?: string; // undefined means "Present"
}
