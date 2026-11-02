export type Profile = {
  name: string;
  professionalTitle: string;
  tagline: string;
  heroHeading: string;
  heroDescription: string;
  metadataDescription: string;
  photoPlaceholder: string;
  email: string;
  pageTitles: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
};

export const profile: Profile = {
  name: "Rhundei Zen Ballesteros",
  professionalTitle: "Software & AI Engineer",
  tagline: "I build software and AI projects.",
  heroHeading: "I build software and AI projects.",
  heroDescription:
    "I am a 4th-year IT student at Asia Pacific College. This is where I share what I have built, what I have worked on, and what I am learning.",
  metadataDescription:
    "Software and AI projects by Rhundei Zen Ballesteros, a 4th-year IT student at Asia Pacific College.",
  photoPlaceholder: "Photo placeholder",
  email: "hello@example.com",
  pageTitles: {
    home: "Home placeholder",
    projects: "Projects placeholder",
    about: "About placeholder",
    contact: "Contact placeholder",
  },
};
