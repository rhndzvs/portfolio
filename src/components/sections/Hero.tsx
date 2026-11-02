import { Facebook, Github, Linkedin } from "@boxicons/react";
import { profile } from "@/content/profile";
import { socials, type SocialKind } from "@/content/socials";
import PhotoPlaceholder from "@/components/sections/PhotoPlaceholder";
import Reveal from "@/components/ui/Reveal";

function SocialIcon({ kind }: { kind: SocialKind }) {
  switch (kind) {
    case "facebook":
      return <Facebook size="sm" aria-hidden="true" />;
    case "linkedin":
      return <Linkedin size="sm" aria-hidden="true" />;
    case "github":
      return <Github size="sm" aria-hidden="true" />;
  }
}

export default function Hero() {
  return (
    <section
      className="hero flex items-center py-16 md:py-24"
      aria-labelledby="hero-heading"
    >
      <Reveal>
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] md:gap-16">
          <div className="order-2 max-w-2xl md:order-1">
            <p className="font-heading text-xl italic leading-[1.2] text-foreground md:text-[22px]">
              {profile.greeting}
            </p>
            <h1
              id="hero-heading"
              className="mt-2 text-[40px] leading-[1.1] md:mt-3 md:text-[64px]"
            >
              {profile.heroHeading}
            </h1>
            <p className="mt-6 max-w-[520px] text-base leading-[1.6] text-muted md:text-lg">
              {profile.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3" aria-label="Social links">
              {socials.map((social) => (
                <a
                  key={social.kind}
                  href={social.href}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-150 hover:border-foreground hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon kind={social.kind} />
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 flex justify-start md:order-2 md:justify-end">
            <PhotoPlaceholder />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
