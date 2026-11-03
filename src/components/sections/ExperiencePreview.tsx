import Link from "next/link";
import { experience, type Experience } from "@/content/experience";
import Reveal from "@/components/ui/Reveal";

function formatDateRange(startDate: string, endDate: string | null) {
  return `${startDate} - ${endDate ?? "Present"}`;
}

function ExperienceRow({ entry }: { entry: Experience }) {
  const place = [entry.location, entry.workSetup].filter(Boolean).join(" · ");

  return (
    <li className="border-b border-border last:border-b-0">
      <Reveal mode="in-view">
        <div className="grid gap-6 py-8 md:grid-cols-[30%_minmax(0,1fr)] md:gap-12 md:py-12">
          <div className="font-mono text-label text-muted">
            <p>{formatDateRange(entry.startDate, entry.endDate)}</p>
            {place ? <p className="mt-2">{place}</p> : null}
          </div>

          <div>
            <h3 className="text-project">{entry.role}</h3>
            <p className="mt-2 text-body text-muted">
              {entry.companyUrl ? (
                <Link
                  href={entry.companyUrl}
                  className="underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {entry.company}
                </Link>
              ) : (
                entry.company
              )}{" "}
              <span aria-hidden="true">·</span> {entry.type}
            </p>
            <ul className="mt-4 max-w-prose list-disc space-y-2 pl-5 text-body marker:text-muted">
              {entry.bullets.map((bullet, index) => (
                <li key={`${bullet}-${index}`}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </li>
  );
}

export default function ExperiencePreview() {
  return (
    <section
      className="py-16 md:py-24"
      aria-labelledby="experience-preview-heading"
    >
      <Reveal mode="in-view">
        <h2 id="experience-preview-heading" className="text-section">
          Experience
        </h2>
      </Reveal>

      <ul className="mt-8 border-t border-border md:mt-12">
        {experience.map((entry) => (
          <ExperienceRow key={entry.id} entry={entry} />
        ))}
      </ul>
    </section>
  );
}
