import { profile } from "@/content/profile";

export default function ProjectsPage() {
  return (
    <section className="py-16 md:py-24">
      <h1 className="text-hero">
        {profile.pageTitles.projects}
      </h1>
    </section>
  );
}
