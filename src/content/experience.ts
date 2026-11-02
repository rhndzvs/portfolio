export type Experience = {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  type: string;
  startDate: string;
  endDate: string | null;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "ai-engineer-intern-ar-data-intelligence-solutions",
    role: "AI Engineer Intern",
    company: "AR Data Intelligence Solutions Inc.",
    type: "Internship",
    startDate: "Start date (placeholder)",
    endDate: null,
    bullets: [
      "What I worked on (placeholder).",
      "What I worked on (placeholder).",
      "What I worked on (placeholder).",
    ],
  },
];
