import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight, Code } from "@boxicons/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectImage from "@/components/sections/ProjectImage";
import Reveal from "@/components/ui/Reveal";
import {
  getAllProjects,
  getNextProject,
  getProjectBySlug,
} from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return {
    title: project?.title ?? "Project not found",
    description: project?.summary,
    alternates: project
      ? {
          canonical: `/projects/${project.slug}`,
        }
      : undefined,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(project.slug);
  const links = [
    project.liveUrl && project.liveUrl !== "#"
      ? {
          href: project.liveUrl,
          label: "Live site",
          icon: <ArrowUpRight size="sm" aria-hidden="true" />,
        }
      : null,
    project.repoUrl && project.repoUrl !== "#"
      ? {
          href: project.repoUrl,
          label: "Code",
          icon: <Code size="sm" aria-hidden="true" />,
        }
      : null,
  ].filter((link) => link !== null);

  return (
    <div className="py-16 md:py-24">
        <Link
          href="/projects"
          className="inline-flex min-h-11 items-center gap-2 text-nav text-muted underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft size="sm" aria-hidden="true" />
          Back to projects
        </Link>

        <Reveal mode="in-view">
          <header
            className="mt-12 max-w-[680px]"
            aria-labelledby="project-title"
          >
            <h1 id="project-title" className="text-hero">
              {project.title}
            </h1>
            <p className="mt-2 font-mono text-label text-muted">
              {[project.type, project.period, project.client]
                .filter(Boolean)
                .join(" · ")}
            </p>
            <p className="mt-4 text-body text-muted">{project.summary}</p>
          </header>
        </Reveal>

        <Reveal mode="in-view">
          <section className="mt-12" aria-labelledby="project-details-heading">
            <h2 id="project-details-heading" className="sr-only">
              Project details
            </h2>
            <dl className="grid gap-8 border-y border-border py-8 md:grid-cols-3 md:gap-12">
              <div>
                <dt className="font-mono text-label text-muted">Role</dt>
                <dd className="mt-2 text-body">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-label text-muted">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border px-2 py-1 font-mono text-label text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-label text-muted">Links</dt>
                <dd className="mt-2 flex flex-col items-start gap-2">
                  {links.length > 0 ? (
                    links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="inline-flex min-h-11 items-center gap-2 text-nav text-muted underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                        {link.icon}
                      </a>
                    ))
                  ) : (
                    <span className="text-body text-muted">
                      Links coming soon
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </section>
        </Reveal>

        <Reveal mode="in-view">
          <section className="mt-12" aria-labelledby="project-image-heading">
            <h2 id="project-image-heading" className="sr-only">
              Project screenshot
            </h2>
            <ProjectImage image={project.image} />
          </section>
        </Reveal>

        {project.overview && project.overview.length > 0 ? (
          <Reveal mode="in-view">
            <section
              className="mt-16 max-w-[680px] md:mt-24"
              aria-labelledby="overview-heading"
            >
              <h2 id="overview-heading" className="text-section">
                Overview
              </h2>
              <div className="mt-8 space-y-4 text-body">
                {project.overview.map((paragraph, index) => (
                  <p key={`${paragraph}-${index}`}>{paragraph}</p>
                ))}
              </div>
            </section>
          </Reveal>
        ) : null}

        <Reveal mode="in-view">
          <section
            className="mt-16 max-w-[680px] md:mt-24"
            aria-labelledby="features-heading"
          >
            <h2 id="features-heading" className="text-section">
              Main features
            </h2>
            <ul className="mt-8 list-disc space-y-2 pl-5 text-body marker:text-muted">
              {project.features.map((feature, index) => (
                <li key={`${feature}-${index}`}>{feature}</li>
              ))}
            </ul>
          </section>
        </Reveal>

        {nextProject ? (
          <Reveal mode="in-view">
            <section
              className="mt-16 border-t border-border pt-8 md:mt-24"
              aria-labelledby="next-project-heading"
            >
              <p className="font-mono text-label text-muted">Next project</p>
              <h2 id="next-project-heading" className="mt-4 text-section">
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="inline-flex max-w-full items-center gap-2 hover:text-muted focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span className="break-words">{nextProject.title}</span>
                  <ArrowRight
                    className="shrink-0"
                    size="sm"
                    aria-hidden="true"
                  />
                </Link>
              </h2>
            </section>
          </Reveal>
        ) : null}
    </div>
  );
}
