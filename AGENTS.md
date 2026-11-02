# AGENTS.md

Instructions for AI coding agents working on this repo. Read this file and `DESIGN.md` before making any change.

## Project

Personal portfolio website for a 4th-year BS Information Technology student (Mobile and Internet Technologies) at Asia Pacific College, aiming to be a Software and AI Engineer. Currently an AI Engineer Intern at AR Data Intelligence Solutions Inc.

Goal: a fast, minimal, mobile-friendly site that shows projects first, then experience. Recruiters spend under a minute on it, so clarity beats cleverness.

## Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS (v4: configure through `@theme` in `src/app/globals.css`, there is no `tailwind.config.js`)
- `motion` for animation (import from `motion/react`)
- `next-themes` for dark and light mode
- `next/font` for fonts
- Boxicons for icons. Check the current official docs for the correct React package and import style before installing. Do not guess package names.
- Hosting on Vercel
- No backend and no database. The contact form uses a Next.js route handler with Resend.

Do not add any other dependency without asking. No shadcn/ui, no component libraries, no CSS-in-JS.

## Commands

```bash
npm run dev       # start dev server
npm run build     # production build, must pass before finishing a task
npm run lint      # must pass before finishing a task
npx tsc --noEmit  # type check, must pass before finishing a task
```

## Structure

```
src/
  app/
    layout.tsx          # fonts, ThemeProvider, MotionConfig, nav, footer
    page.tsx            # home: hero, projects, experience, certifications
    about/page.tsx
    contact/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    api/contact/route.ts
    globals.css         # Tailwind import, design tokens, base styles
  components/
    layout/             # Nav, Footer, ThemeToggle
    sections/           # Hero, ProjectsPreview, ExperiencePreview, Certifications
    ui/                 # Button, Container, SectionHeading, Tag, Reveal
  content/              # ALL site content lives here (see below)
    profile.ts
    projects.ts
    experience.ts
    certifications.ts
    socials.ts
  lib/
public/
  images/
```

## Content rules

- All text content (name, bio, project details, experience, certifications, socials) lives in `src/content/`. Components import from there. Never hardcode content inside components.
- Content is currently placeholder. Mark placeholder values clearly (for example `"Project name (placeholder)"`) so they are easy to find and replace.
- Never invent facts about the owner. Do not make up metrics, employers, tools, awards, or project details. If you need real content, use an obvious placeholder.
- Screenshots are placeholders for now. Use a neutral empty box with the correct aspect ratio until real images are added to `public/images/`.

## Code conventions

- TypeScript strict. No `any`. Type the content data.
- Server Components by default. Add `"use client"` only for components that need state, effects, or browser APIs (theme toggle, mobile menu, animated wrappers, form).
- Mobile-first. Write base styles for a 375px screen, then add `md:` and `lg:` overrides.
- Use Tailwind classes and the design tokens from `DESIGN.md`. No inline styles, no arbitrary hex values in components.
- Use `next/image` for all images with a correct `sizes` prop. Use `next/link` for internal links.
- Semantic HTML: one `h1` per page, `header`, `nav`, `main`, `section`, `footer`. Every interactive element is keyboard reachable with a visible focus state.
- Every image has meaningful `alt` text. Icon-only buttons have an `aria-label`.
- Wrap the app in `<MotionConfig reducedMotion="user">`.
- `next-themes`: default to the system theme, set `suppressHydrationWarning` on `<html>`.
- Keep components small and single-purpose. Prefer plain functions over abstractions.
- No comments that restate the code. Comment only the non-obvious.

## Contact form

- Fields: name, email, subject, message.
- Include a hidden honeypot field. Silently discard submissions where it is filled.
- Validate on both client and server. Return clear error messages.
- Send with Resend from `src/app/api/contact/route.ts`. Read keys from environment variables. Never commit secrets. Keep `.env.local` out of git and document the needed variables in `.env.example`.
- Also show a plain `mailto:` link next to the form.

## Workflow

- Work on one section or one task per request. Do not build the whole site in one go.
- Before writing code, state in a couple of lines what you are about to change.
- After finishing, run lint, type check, and build, and report the result.
- Do not refactor or restyle unrelated files.
- If a request conflicts with `DESIGN.md`, point out the conflict and ask instead of silently choosing.
- Do not guess. If any part of a request is unclear, ambiguous, or missing information, stop and ask me questions before writing code. Asking is always better than assuming.
- After every change, end with a short summary in simple, plain language:
  - What you changed and why, written so a student can follow it. Avoid jargon, or explain it briefly when you must use it.
  - Which files you created, edited, or deleted.
  - Anything I should check in the browser.
  - One suggested commit message in this exact format: `<type>: <description>`
- Commit message rules:
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`
  - Description is lowercase, starts with a verb, and is under 72 characters
  - Example: `feat: add hero section with placeholder content`
  - Suggest only one message per change. Do not commit or push yourself. I will do it.

## Build order

1. Foundation: fonts, design tokens, theme provider, nav, footer
2. Hero
3. Projects preview on home, then `/projects` and `/projects/[slug]`
4. Experience
5. Certifications
6. About (passion, hobbies, education)
7. Contact page and form
8. Motion pass (subtle only)
9. SEO and metadata, Open Graph image, favicon
10. Accessibility and mobile check at 375px, 768px, and 1280px