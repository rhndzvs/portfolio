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
    <header className="border-b border-border">
      <Container>
        <nav
          className="site-nav flex items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-heading text-xl text-foreground hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            {profile.name}
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex min-h-11 items-center hover:text-foreground hover:underline hover:underline-offset-4 ${
                  pathname === link.href
                    ? "text-foreground underline underline-offset-4"
                    : "text-muted"
                }`}
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

        {isOpen && (
          <div id="mobile-navigation" className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex min-h-11 items-center hover:text-foreground hover:underline hover:underline-offset-4 ${
                    pathname === link.href
                      ? "text-foreground underline underline-offset-4"
                      : "text-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
