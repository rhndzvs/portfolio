"use client";

import { Moon, Sun } from "@boxicons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));

    return () => cancelAnimationFrame(frame);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="flex h-11 w-11 items-center justify-center rounded-full text-foreground hover:bg-foreground/[0.08] focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {mounted ? (
        isDark ? (
          <Sun size="sm" aria-hidden="true" />
        ) : (
          <Moon size="sm" aria-hidden="true" />
        )
      ) : (
        <span className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
