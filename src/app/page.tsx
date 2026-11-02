import Hero from "@/components/sections/Hero";
import ExperiencePreview from "@/components/sections/ExperiencePreview";
import CertificationsPreview from "@/components/sections/CertificationsPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsPreview />
      <ExperiencePreview />
      <CertificationsPreview />
    </>
  );
}
