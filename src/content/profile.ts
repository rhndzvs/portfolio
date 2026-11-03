export type ProfilePhoto = {
  src: string;
  alt: string;
  objectPosition: string;
};

export type Profile = {
  name: string;
  professionalTitle: string;
  tagline: string;
  greeting: string;
  heroHeading: string;
  heroDescription: string;
  metadataDescription: string;
  photoPlaceholder: string;
  photos: {
    hero: ProfilePhoto;
    about: ProfilePhoto;
  };
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
  greeting: "Hi, I'm Rhundei",
  heroHeading: "I build software and AI projects.",
  heroDescription:
    "I enjoy building useful things with code and AI. This is where I share the projects I've made, the work I've done, and what I'm learning along the way.",
  metadataDescription:
    "Software and AI projects by Rhundei Zen Ballesteros, a 4th-year IT student at Asia Pacific College.",
  photoPlaceholder: "Photo placeholder",
  photos: {
    hero: {
      src: "/images/profile/hero.jpg",
      alt: "Portrait of Rhundei Zen Ballesteros in a black suit and tie",
      objectPosition: "center",
    },
    about: {
      src: "/images/profile/about.jpg",
      alt: "Rhundei sitting on a rock with his back to the camera, looking out over a pine forest and hills",
      objectPosition: "center 70%",
    },
  },
  email: "rhundeizenballesteros@gmail.com",
  pageTitles: {
    home: "Home placeholder",
    projects: "Projects placeholder",
    about: "About placeholder",
    contact: "Contact placeholder",
  },
};
