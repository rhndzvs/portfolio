import { ArrowRight } from "@boxicons/react";
import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import ProjectRow from "@/components/projects/ProjectRow";
import Reveal from "@/components/ui/Reveal";

export default function ProjectsPreview() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section
      className="py-16 md:py-24"
      aria-labelledby="projects-preview-heading"
    >
      <Reveal mode="in-view">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
          <h2
            id="projects-preview-heading"
            className="text-section"
          >
            Projects
          </h2>
          <Link
            href="/projects"
            className="relative inline-flex items-center gap-2 whitespace-nowrap text-nav text-muted underline decoration-border underline-offset-4 before:absolute before:inset-x-0 before:top-1/2 before:h-11 before:-translate-y-1/2 before:content-[''] hover:text-foreground hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
