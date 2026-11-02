import { profile } from "@/content/profile";
import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[680px]">
        <h1 className="text-hero">Contact</h1>
        <p className="mt-6 text-body text-muted">
          Have a question or want to work together? Send me a message and I&apos;ll get back to you.
        </p>
        <div className="mt-8 md:mt-12">
          <ContactForm />
        </div>
        <p className="mt-8 text-body text-muted">
          Prefer email? You can reach me at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  );
}
