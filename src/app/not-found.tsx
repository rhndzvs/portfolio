import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container>
      <section className="page-main flex flex-col justify-center py-16 md:py-24">
        <h1 className="text-hero">Page not found</h1>
        <p className="mt-6 text-body text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center text-nav text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Back to home
        </Link>
      </section>
    </Container>
  );
}
