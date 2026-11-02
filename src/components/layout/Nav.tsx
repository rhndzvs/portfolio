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

function isActiveLink(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function getLinkClassName(isActive: boolean) {
  return `flex min-h-11 items-center text-nav ${
    isActive
      ? "text-foreground underline underline-offset-4"
      : "text-muted hover:text-foreground"
  }`;
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <Container>
        <nav
          className="site-nav relative flex items-center justify-between gap-4"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-heading text-site-name tracking-site-name text-foreground"
            onClick={() => setIsOpen(false)}
          >
            {profile.name}
          </Link>

          <div className="flex items-center">
            <div
              id="mobile-navigation"
              className={`${
                isOpen ? "flex" : "hidden"
              } absolute left-0 right-0 top-full flex-col border-b border-border bg-background px-5 py-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={getLinkClassName(isActiveLink(link.href, pathname))}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActiveLink(link.href, pathname) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <ThemeToggle className="md:ml-3 md:-mr-3" />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-md text-foreground hover:text-foreground md:hidden"
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
    </header>
  );
}
