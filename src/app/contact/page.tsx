import { profile } from "@/content/profile";

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <h1 className="text-hero">
        {profile.pageTitles.contact}
      </h1>
    </section>
  );
}
