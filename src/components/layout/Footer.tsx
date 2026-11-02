import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col py-8 text-footer text-muted md:flex-row md:items-center md:justify-between md:py-6">
          <p className="order-last text-footer md:order-none">© {new Date().getFullYear()} {profile.name}</p>
          <div className="order-first flex flex-nowrap items-center gap-4 md:order-none">
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
          </div>
        </div>
      </Container>
    </footer>
  );
}
