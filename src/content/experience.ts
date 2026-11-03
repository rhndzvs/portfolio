export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: string;
  startDate: string;
  endDate: string | null;
  location?: string;
  workSetup?: string;
  bullets?: string[];
};

export const experience: Experience[] = [
  {
    id: "ai-engineer-intern-ar-data-intelligence-solutions",
    role: "AI Engineer Intern",
    company: "AR Data Intelligence Solutions Inc.",
    type: "Internship",
    startDate: "Oct 2026",
    endDate: null,
    location: "Markham, Ontario, Canada",
    workSetup: "Remote",
  },
];
