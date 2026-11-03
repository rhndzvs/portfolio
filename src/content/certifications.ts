export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    id: "ai-fundamentals",
    title: "AI Fundamentals",
    issuer: "DataCamp",
    issueDate: "May 2026",
    credentialUrl:
      "https://media.licdn.com/dms/image/v2/D562DAQHzbxzjr8G5_w/profile-treasury-document-images_1280/B56Z5a6rg7JEAg-/1/1779641793691?e=1794441600&v=beta&t=w7n9lfMKUnunsRrvrrxy0nbPm3nvtVE5B0GPSqBHwIA",
  },
  {
    id: "comptia-a-plus",
    title: "CompTIA A+",
    issuer: "CompTIA",
    issueDate: "Mar 2026",
    credentialUrl:
      "https://media.licdn.com/dms/image/v2/D562DAQFiojQzFoPcPQ/profile-treasury-image-shrink_1280_1280/B56aGFwT6YK0AY-/0/1793245396930?e=1794294000&v=beta&t=-NP3MQ1coRGgGWpzNi_SJdShj7jgLbxHTlrBQUDQwq8",
  },
  {
    id: "github-foundations",
    title: "GitHub Foundations",
    issuer: "DataCamp",
    issueDate: "Feb 2026",
    credentialUrl:
      "https://media.licdn.com/dms/image/v2/D562DAQHgQQAyWnwJIQ/profile-treasury-document-cover-images_1920/B56Z0U_.DoKYBM-/0/1774173808823?e=1794294000&v=beta&t=j8W-tAqPXE95VDjcXS27NlRZudCfecQyXvLPd7A4EZY",
  },
];
