import { ArrowRight, ArrowUpRight, Code } from "@boxicons/react";
import Link from "next/link";
import { getFeaturedProjects, type Project } from "@/content/projects";
import ProjectImage from "@/components/sections/ProjectImage";
import Reveal from "@/components/ui/Reveal";

function ProjectLinks({ project }: { project: Project }) {
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

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
      {links.map((link) => (
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
      ))}
    </div>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <li className="border-b border-border last:border-b-0">
      <Reveal mode="in-view">
        <div className="grid gap-6 py-8 md:grid-cols-[45%_minmax(0,1fr)] md:gap-12 md:py-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            <span className="order-2 font-mono text-label text-muted md:order-1">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="order-1 md:order-2">
              <ProjectImage image={project.image} />
            </div>
          </div>

          <div className="flex flex-col items-start">
            <Link
              href={`/projects/${project.slug}`}
              className="rounded-sm text-project hover:text-muted focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <h3>{project.title}</h3>
            </Link>
            <p className="mt-4 max-w-xl text-body text-muted">
              {project.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-border px-2 py-1 font-mono text-label text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
            <ProjectLinks project={project} />
          </div>
        </div>
      </Reveal>
    </li>
  );
}

export default function ProjectsPreview() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      className="py-16 md:py-24"
      aria-labelledby="projects-preview-heading"
    >
      <Reveal mode="in-view">
        <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
          <h2
            id="projects-preview-heading"
            className="text-section"
          >
            Projects
          </h2>
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 self-start text-nav text-muted underline decoration-border underline-offset-4 hover:text-foreground hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background md:self-auto"
          >
            View all projects
            <ArrowRight size="sm" aria-hidden="true" />
          </Link>
        </div>
      </Reveal>

      <ul className="mt-8 border-t border-border md:mt-12">
        {featuredProjects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </ul>
    </section>
  );
}
