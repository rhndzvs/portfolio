export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    id: "certification-one-placeholder",
    title: "Certification One (placeholder)",
    issuer: "Issuer (placeholder)",
    issueDate: "Date (placeholder)",
  },
  {
    id: "certification-two-placeholder",
    title: "Certification Two (placeholder)",
    issuer: "Issuer (placeholder)",
    issueDate: "Date (placeholder)",
  },
  {
    id: "certification-three-placeholder",
    title: "Certification Three (placeholder)",
    issuer: "Issuer (placeholder)",
    issueDate: "Date (placeholder)",
  },
];
