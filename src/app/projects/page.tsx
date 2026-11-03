import type { Metadata } from "next";
import ProjectRow from "@/components/projects/ProjectRow";
import Reveal from "@/components/ui/Reveal";
import { getAllProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <section className="py-16 md:py-24">
      <Reveal mode="in-view">
        <header className="max-w-[680px]">
          <h1 className="text-hero">Projects</h1>
          <p className="mt-4 text-body text-muted">
            A collection of the things I&apos;ve built. Select a project to see
            the details.
          </p>
        </header>
      </Reveal>
      <ul className="mt-8 border-t border-border md:mt-12">
        {allProjects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </ul>
    </section>
  );
}
