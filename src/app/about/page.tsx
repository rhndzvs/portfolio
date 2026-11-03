import { ArrowRight } from "@boxicons/react";
import type { Metadata } from "next";
import Link from "next/link";
import ProfilePhoto from "@/components/sections/ProfilePhoto";
import Reveal from "@/components/ui/Reveal";
import { about } from "@/content/about";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
};

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-body text-muted">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[minmax(0,680px)_300px] md:justify-between md:gap-16">
        <div className="max-w-[680px]">
          <Reveal mode="in-view">
            <header aria-labelledby="about-title">
              <h1 id="about-title" className="text-hero">
                About
              </h1>
              <div className="mt-6">
                <Paragraphs paragraphs={about.intro} />
              </div>
            </header>
          </Reveal>

          <Reveal mode="in-view">
            <section className="mt-16" aria-labelledby="passion-title">
              <h2 id="passion-title" className="text-section">
                What I care about
              </h2>
              <div className="mt-8">
                <Paragraphs paragraphs={about.passion} />
              </div>
            </section>
          </Reveal>

          <Reveal mode="in-view">
            <section className="mt-16" aria-labelledby="outside-title">
              <h2 id="outside-title" className="text-section">
                Outside of work
              </h2>
              <div className="mt-8">
                <Paragraphs paragraphs={about.hobbies} />
              </div>
            </section>
          </Reveal>

          <Reveal mode="in-view">
            <section
              className="mt-16 border-t border-border pt-8"
              aria-labelledby="education-title"
            >
              <h2 id="education-title" className="text-section">
                Education
              </h2>
              <ul className="mt-8 space-y-8">
                {about.education.map((entry) => (
                  <li key={entry.school}>
                    <h3 className="text-project">{entry.school}</h3>
                    <p className="mt-2 text-body text-muted">{entry.degree}</p>
                    <p className="text-body text-muted">
                      {entry.specialization}
                    </p>
                    <p className="mt-4 font-mono text-label text-muted">
                      {entry.period} · {entry.status}
                    </p>
                    {entry.honors ? (
                      <p className="mt-2 text-body text-muted">{entry.honors}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal mode="in-view">
            <p className="mt-16 text-body">
              Want to talk?{" "}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Get in touch
                <ArrowRight size="sm" aria-hidden="true" />
              </Link>
            </p>
          </Reveal>
        </div>

        <div className="order-first flex w-[160px] justify-start md:order-none md:sticky md:top-24 md:h-fit md:w-[300px] md:justify-end">
          <ProfilePhoto
            photo={profile.photos.about}
            sizes="(max-width: 767px) 160px, 320px"
          />
        </div>
      </div>
    </section>
  );
}
