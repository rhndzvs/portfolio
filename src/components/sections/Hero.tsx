import { Envelope, Facebook, Github, Linkedin } from "@boxicons/react";
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
    case "email":
      return <Envelope size="sm" aria-hidden="true" />;
  }
}

export default function Hero() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="hero-heading">
      <Reveal>
        <div className="grid items-start gap-12 md:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] md:gap-16">
          <div className="order-2 max-w-2xl md:order-1">
            <p className="text-base leading-[1.6] text-muted md:text-lg">
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
              {socials.map((social) => {
                const isEmail = social.kind === "email";

                return (
                  <a
                    key={social.kind}
                    href={social.href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground hover:border-foreground hover:text-foreground"
                    aria-label={social.label}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noopener noreferrer"}
                  >
                    <SocialIcon kind={social.kind} />
                  </a>
                );
              })}
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
