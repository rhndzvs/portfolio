import { ArrowUpRight } from "@boxicons/react";
import { certifications, type Certification } from "@/content/certifications";
import Reveal from "@/components/ui/Reveal";

function CertificationRow({ entry }: { entry: Certification }) {
  return (
    <li className="border-b border-border last:border-b-0">
      <Reveal mode="in-view">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-5 md:py-6">
          <div className="min-w-min flex-1">
            <h3 className="text-project">{entry.title}</h3>
            <p className="mt-2 text-body text-muted">{entry.issuer}</p>
          </div>

          {entry.credentialUrl && (
            <a
              href={entry.credentialUrl}
              aria-label={`View credential for ${entry.title}`}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 whitespace-nowrap text-nav text-muted underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              target="_blank"
              rel="noopener noreferrer"
            >
              View credential
              <ArrowUpRight size="sm" aria-hidden="true" />
            </a>
          )}
        </div>
      </Reveal>
    </li>
  );
}

export default function CertificationsPreview() {
  return (
    <section
      className="py-16 md:py-24"
      aria-labelledby="certifications-preview-heading"
    >
      <Reveal mode="in-view">
        <h2 id="certifications-preview-heading" className="text-section">
          Certifications
        </h2>
      </Reveal>

      <ul className="mt-8 border-t border-border md:mt-12">
        {certifications.map((entry) => (
          <CertificationRow key={entry.id} entry={entry} />
        ))}
      </ul>
    </section>
  );
}
