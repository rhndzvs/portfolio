export type SocialKind = "facebook" | "linkedin" | "github";

export type SocialLink = {
  label: string;
  kind: SocialKind;
  href: string;
};

export const socials: SocialLink[] = [
  {
    label: "Facebook",
    kind: "facebook",
    href: "https://www.facebook.com/rhndzvs",
  },
  {
    label: "LinkedIn",
    kind: "linkedin",
    href: "https://www.linkedin.com/in/rhndzvs/",
  },
  {
    label: "GitHub",
    kind: "github",
    href: "https://github.com/rhndzvs",
  },
];
