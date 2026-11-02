"use client";

import { Menu, X } from "@boxicons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/layout/ThemeToggle";
import Container from "@/components/ui/Container";
import { profile } from "@/content/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container>
        <nav
          className="site-nav flex items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-heading text-nav text-foreground hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            {profile.name}
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-h-11 items-center text-nav hover:text-foreground hover:underline hover:underline-offset-4 ${
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`)
                    ? "text-foreground underline underline-offset-4"
                    : "text-muted"
                }`}
                aria-current={
                  link.href === "/"
                    ? pathname === "/"
                      ? "page"
                      : undefined
                    : pathname === link.href || pathname.startsWith(`${link.href}/`)
                      ? "page"
                      : undefined
                }
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-md text-foreground hover:text-foreground"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? (
                <X size="sm" aria-hidden="true" />
              ) : (
                <Menu size="sm" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

      </Container>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full border-b border-border bg-background md:hidden"
        >
          <Container>
            <div className="flex flex-col py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex min-h-11 items-center text-nav hover:text-foreground hover:underline hover:underline-offset-4 ${
                    link.href === "/"
                      ? pathname === "/"
                      : pathname === link.href || pathname.startsWith(`${link.href}/`)
                      ? "text-foreground underline underline-offset-4"
                      : "text-muted"
                  }`}
                  aria-current={
                    link.href === "/"
                      ? pathname === "/"
                        ? "page"
                        : undefined
                      : pathname === link.href || pathname.startsWith(`${link.href}/`)
                        ? "page"
                        : undefined
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
