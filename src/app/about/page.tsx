import { profile } from "@/content/profile";

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <h1 className="text-hero">
        {profile.pageTitles.about}
      </h1>
    </section>
  );
}
