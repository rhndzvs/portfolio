import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col py-8 text-footer text-muted md:flex-row md:items-center md:justify-between md:py-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-0">
            {socials.map((social) => (
              <a
                key={social.kind}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-2 py-3 text-footer text-muted no-underline hover:text-foreground md:px-0 md:py-0"
              >
                <span>{social.label}</span>
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center px-2 py-3 text-footer text-muted no-underline hover:text-foreground md:px-0 md:py-0"
            >
              {profile.email}
            </a>
          </div>
          <p className="text-footer">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </Container>
    </footer>
  );
}
