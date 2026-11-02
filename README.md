# Rhundei Zen Ballesteros Portfolio

A personal portfolio website for Rhundei Zen Ballesteros.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- motion
- next-themes
- Boxicons
- Resend
- Vercel

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000` in a browser.

## Environment variables

- `NEXT_PUBLIC_SITE_URL`: Public site URL used for metadata, sitemap, and robots.
- `RESEND_API_KEY`: Resend API key used to send contact form emails.
- `CONTACT_TO_EMAIL`: Destination email address for contact form messages.
- `CONTACT_FROM_EMAIL`: Verified sender email address used by Resend.

## Project structure

- `src/app/`: App Router pages, metadata, generated images, sitemap, robots, and the contact route.
- `src/components/`: Layout, page sections, project, contact, and UI components.
- `src/content/`: Site content data.
- `public/`: Static files and images.

All site content lives in `src/content/`.
