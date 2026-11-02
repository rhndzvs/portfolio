# DESIGN.md

The design system for this portfolio. Follow it strictly. When in doubt, choose the simpler, quieter option.

## Principles

1. **Minimal and neutral.** Content is the design. No decoration that does not carry meaning.
2. **Editorial, not "tech startup."** Serif headings, generous whitespace, left-aligned text.
3. **Consistent.** A small set of choices, used everywhere.
4. **Mobile-first.** Design for 375px first, then scale up.

## Colors

Warm neutral palette. No bright accent. Define as CSS variables in `globals.css` and expose them through Tailwind's `@theme`.

| Token | Light | Dark |
|---|---|---|
| `background` | `#F7F6F3` | `#0F0F0E` |
| `foreground` | `#171717` | `#EDEDEA` |
| `muted` | `#6B6B66` | `#8E8E88` |
| `border` | `#E4E2DC` | `#262624` |
Rules:
- There is no accent color. The site is strictly neutral for now.
- Primary button: filled with `foreground`, text in `background` (inverts per theme).
- Secondary button: transparent with a `border`, text in `foreground`.
- Hover states change contrast, not hue. Muted text becomes `foreground`, and borders become `foreground` or a slightly stronger neutral.
- Text selection uses a subtle neutral tint (for example `foreground` at 15% opacity).
- Never use gradients, glows, or colored shadows.
- Check contrast. Body text and muted text must meet WCAG AA on both themes.

## Typography

All fonts load through `next/font/google` and are exposed as CSS variables.

| Role | Font | Use |
|---|---|---|
| Headings | Newsreader | h1 to h3, project titles |
| Body | Hanken Grotesk | paragraphs, nav, buttons |
| Mono | DM Mono | dates, tags, labels, small details |

Do not use Inter, Geist, Space Grotesk, Poppins, Roboto, or system default fonts.

Type scale (mobile to desktop):

| Element | Mobile | Desktop | Line height |
|---|---|---|---|
| Hero heading (h1) | 40px | 64px | 1.1 |
| Section heading (h2) | 28px | 40px | 1.15 |
| Card or project title (h3) | 22px | 28px | 1.2 |
| Body | 16px | 18px | 1.6 |
| Small label (mono) | 13px | 14px | 1.4 |

Headings use slightly tight letter spacing (`-0.01em` to `-0.02em`). Mono labels are uppercase only when short, with light tracking.

## Spacing

- Base unit: 4px (Tailwind default). Use the steps 8, 16, 24, 32, 48, 64, 96.
- Section vertical padding: 64px on mobile, 96px on desktop.
- Page side padding: 20px on mobile, 32px on desktop.
- Gap between a section heading and its content: 32px on mobile, 48px on desktop.
- Do not invent off-scale spacing values.

## Layout

- Container max width: 1100px, centered.
- Text-heavy pages (About, project write-ups): max width 680px for readable line length.
- Left-align text. Do not center body copy or headings, except where there is a strong reason.
- Hero: text on the left, photo on the right on desktop. On mobile, photo first at a modest size, then text.
- Project lists: a single column list of rows or a simple two-column grid on desktop. Avoid a wall of identical cards with icons on top.
- Border radius: 8px for everything. Do not mix radii.
- Separate sections with spacing and thin 1px borders, not background color blocks.
- No heavy shadows. Use 1px borders for structure.

## Components

**Nav:** Height 64px on desktop, 56px on mobile. Name on the left, links on the right (Home, Projects, About, Contact), theme toggle at the end. Links have no underline at rest. They use `muted` color, shift to `foreground` on hover, and show a 1px underline on hover. The current page uses `foreground` color with a 1px underline. On mobile, collapse links into a menu toggle that opens a simple full-width panel. Toggle button is at least 44x44px (it can extend beyond the nav's visual height with padding). Sticky is fine if it stays slim.

**Buttons:** Height 44px minimum, horizontal padding 20px, 8px radius, body font, medium weight. Visible focus ring using `foreground`.

**Tags (tech stack):** Mono font, 13px, 1px `border`, 6px to 8px radius, small padding. No colored fills.

**Project entry:** Screenshot (fixed aspect ratio, 1px border, 8px radius), title (serif), short description, key features, role, tech stack tags, links to live site and code. Links are text links with icons, not big buttons.

**Experience entry:** Role and company on one line, date range in mono, short bullet list of what was done.

**Form fields:** Full width, 44px minimum height, 1px `border`, 8px radius, `background` fill, visible label above each field (not placeholder only). Clear focus state and inline error text.

**Icons:** Boxicons, 20px to 24px, inherit text color. Icon-only links must have an `aria-label`.

**Inline links (inside paragraphs):** `foreground` color with an underline, and a small underline offset. Hover increases contrast only. Navigation, social icons, and buttons are not inline links and do not use this style.

**Hero:** A small muted greeting line above the h1 (for example "Hi, I'm Rhundei"), in the body or mono font at 16px to 18px. The h1 holds only the main statement. On desktop, the text column and photo column are aligned to the top.

## Motion

Use `motion` sparingly.

- Allowed: fade and slight upward translate (8px to 16px) on scroll into view, once only. Subtle hover transitions (150ms to 200ms) on links and buttons. Theme change transition on color.
- Easing: ease-out. Duration 300ms to 500ms for reveals.
- Not allowed: parallax, typewriter text, floating or bouncing elements, cursor effects, staggering every single element, infinite loops.
- Always respect reduced motion through `MotionConfig reducedMotion="user"`.

## Responsive breakpoints

Use Tailwind defaults. Test at 375px, 768px, and 1280px.

- Base (under 768px): single column, stacked layout.
- `md` (768px and up): two columns where useful, larger type.
- `lg` (1024px and up): full layout, 1100px container.

Rules:
- No horizontal scrolling at any width.
- Touch targets at least 44px. Nothing important is hover-only.
- Images use `next/image` with proper `sizes` so phones do not download desktop images.

## Things to avoid (these make a site look generated)

- Purple or blue gradients, glassmorphism, glow effects
- Rows of identical rounded cards with an icon on top
- Everything centered
- Emoji used as decoration
- Generic hero copy like "Passionate developer building the future"
- Progress bars for skills
- Animation on every element
- Stock "tech" illustrations and floating shapes