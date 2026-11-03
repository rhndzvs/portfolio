export type Certification = {
  id: string;
  title: string;
  issuer: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    id: "ai-fundamentals",
    title: "AI Fundamentals",
    issuer: "DataCamp",
    credentialUrl:
      "https://www.datacamp.com/skill-verification/AIF0027898536194",
  },
  {
    id: "comptia-a-plus",
    title: "CompTIA A+",
    issuer: "CompTIA",
    credentialUrl:
      "https://www.credly.com/earner/earned/badge/c9b382f9-8fb0-4950-9eb4-670ea3e28004",
  },
  {
    id: "github-foundations",
    title: "GitHub Foundations",
    issuer: "DataCamp",
    credentialUrl:
      "https://www.datacamp.com/completed/statement-of-accomplishment/track/8a7823c990550ccb5d566855a57ec3c59d3ba38d",
  },
];
