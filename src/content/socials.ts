import { profile } from "@/content/profile";

export type SocialKind = "facebook" | "linkedin" | "github" | "email";

export type SocialLink = {
  label: string;
  kind: SocialKind;
  href: string;
};

export const socials: SocialLink[] = [
  {
    label: "Facebook",
    kind: "facebook",
    href: "https://www.facebook.com/your-username",
  },
  {
    label: "LinkedIn",
    kind: "linkedin",
    href: "https://www.linkedin.com/in/your-username",
  },
  {
    label: "GitHub",
    kind: "github",
    href: "https://github.com/your-username",
  },
  {
    label: "Email",
    kind: "email",
    href: `mailto:${profile.email}`,
  },
];
