export type Profile = {
  name: string;
  tagline: string;
  email: string;
  pageTitles: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
};

export const profile: Profile = {
  name: "Your Name (placeholder)",
  tagline: "Portfolio tagline (placeholder)",
  email: "hello@example.com",
  pageTitles: {
    home: "Home placeholder",
    projects: "Projects placeholder",
    about: "About placeholder",
    contact: "Contact placeholder",
  },
};
