import { ArrowUpRight } from "@boxicons/react";
import { certifications, type Certification } from "@/content/certifications";
import Reveal from "@/components/ui/Reveal";

function CertificationRow({ entry }: { entry: Certification }) {
  return (
    <li className="border-b border-border last:border-b-0">
      <Reveal mode="in-view">
        <div className="grid gap-4 py-6 md:grid-cols-[30%_minmax(0,1fr)] md:gap-12 md:py-8">
          <p className="font-mono text-label text-muted">{entry.issueDate}</p>

          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-6">
            <div>
              <h3 className="text-project">{entry.title}</h3>
              <p className="text-body text-muted">{entry.issuer}</p>
            </div>

            {entry.credentialUrl && (
              <a
                href={entry.credentialUrl}
                aria-label={`View credential for ${entry.title}`}
                className="inline-flex min-h-11 items-center gap-2 self-start text-nav text-muted underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                target="_blank"
                rel="noopener noreferrer"
              >
                View credential
                <ArrowUpRight size="sm" aria-hidden="true" />
              </a>
            )}
          </div>
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
