export type Education = {
  school: string;
  degree: string;
  specialization: string;
  period: string;
  status: string;
};

export type AboutContent = {
  intro: string[];
  passion: string[];
  hobbies: string[];
  education: Education[];
};

export const about: AboutContent = {
  intro: ["Intro paragraph about me (placeholder)."],
  passion: [
    "What I care about, my passion for software and AI (placeholder).",
    "Second paragraph about what drives me (placeholder).",
  ],
  hobbies: [
    "What I do outside of work, my hobbies and interests (placeholder).",
  ],
  education: [
    {
      school: "Asia Pacific College",
      degree: "Bachelor of Science in Information Technology",
      specialization: "Mobile and Internet Technologies",
      period: "Dates (placeholder)",
      status: "4th-year student",
    },
  ],
};
