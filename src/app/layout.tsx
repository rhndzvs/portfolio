import type { Metadata } from "next";
import { DM_Mono, Hanken_Grotesk, Newsreader } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import Providers from "@/components/layout/Providers";
import Container from "@/components/ui/Container";
import { profile } from "@/content/profile";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "http://localhost:3000"),
  ),
  title: {
    default: `${profile.name} – ${profile.professionalTitle}`,
    template: `%s - ${profile.name}`,
  },
  description: profile.metadataDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: profile.name,
    locale: "en_PH",
    title: profile.name,
    description: profile.metadataDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description: profile.metadataDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${hankenGrotesk.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <a
              href="#main"
              className="absolute left-5 top-2 z-[60] -translate-y-16 rounded-md bg-foreground px-4 py-2 text-nav text-background focus-visible:translate-y-0 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-offset-2 md:left-8"
            >
              Skip to content
            </a>
            <main id="main" className="page-main flex-1">
              <Container>{children}</Container>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
