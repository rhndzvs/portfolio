import { Facebook, Github, Linkedin } from "@boxicons/react";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import Container from "@/components/ui/Container";

function SocialIcon({ kind }: { kind: (typeof socials)[number]["kind"] }) {
  if (kind === "facebook") {
    return <Facebook size="sm" aria-hidden="true" />;
  }

  if (kind === "linkedin") {
    return <Linkedin size="sm" aria-hidden="true" />;
  }

  if (kind === "github") {
    return <Github size="sm" aria-hidden="true" />;
  }

}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-6 py-8 text-body text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className="flex flex-wrap items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.kind}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-2 text-foreground hover:text-foreground"
                aria-label={social.label}
              >
                <SocialIcon kind={social.kind} />
                <span>{social.label}</span>
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="flex min-h-11 items-center text-foreground hover:text-foreground"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
