export type SocialKind = "github" | "linkedin";

export type SocialLink = {
  label: string;
  kind: SocialKind;
  href: string;
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    kind: "github",
    href: "https://github.com/your-username",
  },
  {
    label: "LinkedIn",
    kind: "linkedin",
    href: "https://www.linkedin.com/in/your-username",
  },
];
