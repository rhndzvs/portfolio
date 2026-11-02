import { profile } from "@/content/profile";

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <h1 className="text-[40px] leading-[1.1] md:text-[64px]">
        {profile.pageTitles.about}
      </h1>
    </section>
  );
}
