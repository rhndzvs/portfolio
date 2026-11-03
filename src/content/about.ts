export type Education = {
  school: string;
  degree: string;
  specialization: string;
  period: string;
  status: string;
  honors?: string;
};

export type AboutContent = {
  intro: string[];
  passion: string[];
  hobbies: string[];
  education: Education[];
};

export const about: AboutContent = {
  intro: [
    "I'm Rhundei, a 4th-year IT student at Asia Pacific College, specializing in Mobile and Internet Technologies. I'm currently interning as an AI Engineer at AR Data Intelligence Solutions Inc., and I'm working toward a career as a software and AI engineer.",
    "My project work has been for real clients, including a security agency and a health organization. On each project, I wrote code, documented, and tested, while also handling project management.",
  ],
  passion: [
    "I first got into software through academic projects. Building software intrigued me, and it made me believe this is what I want to do.",
    "AI started to matter to me when I wanted to build automation that makes day-to-day operations easier. More broadly, I want to build systems that solve real problems for people, whether or not they involve AI.",
    "I enjoy working with a team, because it feels like a family, and I enjoy talking with real clients. Right now, I'm learning how to work with AI agents.",
  ],
  hobbies: [
    "Outside of work, I play Mobile Legends and Roblox, work out, and read.",
  ],
  education: [
    {
      school: "Asia Pacific College",
      degree: "Bachelor of Science in Information Technology",
      specialization: "Mobile and Internet Technologies",
      period: "2023 - 2027 (expected)",
      status: "4th-year student",
      honors: "SM Foundation College Scholarship",
    },
  ],
};
