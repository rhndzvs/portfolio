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

Type scale (mobile / desktop):

| Element | Mobile | Desktop | Line height |
|---|---|---|---|
| Site name (nav) | 18px | 20px | 1.2 |
| Hero heading (h1) | 36px | 56px | 1.1 |
| Section heading (h2) | 24px | 32px | 1.2 |
| Card or project title (h3) | 20px | 24px | 1.25 |
| Greeting line | 18px | 20px | 1.4 |
| Body | 16px | 16px | 1.6 |
| Nav links and buttons | 15px | 15px | 1.4 |
| Small label (mono) | 12px | 13px | 1.4 |
| Footer text | 14px | 14px | 1.5 |

Form inputs are at least 16px on mobile so phone browsers do not zoom in on focus.

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
- Every page's main content is at least one screen tall: `min-height: calc(100svh - var(--nav-height))`. The footer is never visible on first load. Use `svh`, not `vh`. On the home page, the hero fills that space with its content vertically centered.

## Components

**Nav:** Height 64px on desktop, 56px on mobile. Site name on the left (Newsreader, `foreground`, links to Home), links on the right (Home, Projects, About, Contact), theme toggle at the end. Links are `muted` at rest and `foreground` on hover, with no underline on hover. The current page's link is `foreground` with a 1px underline, and it is the only link with an underline. Home is active only on `/`. Projects is active on `/projects` and any `/projects/...` page. The theme toggle icon is `muted` at rest and `foreground` on hover, with the 8% circular fill on hover, so it matches the links. On mobile, collapse links into a menu toggle that opens a simple full-width panel, with the same active and hover rules. Toggle buttons are at least 44x44px. The nav is sticky at the top with a solid `background` fill (no transparency, no blur) and a 1px bottom border. It does not hide on scroll. Spacing: links have 24px between them on desktop. The theme toggle sits 24px after the last link, and its icon's right edge lines up with the right edge of the container (the toggle's invisible padding extends past it). The site name uses `-0.01em` letter spacing.

**Buttons:** Height 44px minimum, horizontal padding 20px, 8px radius, body font, medium weight. Visible focus ring using `foreground`.

**Tags (tech stack):** Mono font, 13px, 1px `border`, 6px to 8px radius, small padding. No colored fills.

**Project entry:** The screenshot is optional. When a project has no screenshot, render no image box and no placeholder. In rows, the layout then mirrors the Experience rows: the number and period in the left column (mono label style, `muted`), and the right column holds the title (h3), the client on one muted line, the summary, the tech stack tags, and any links. When a screenshot exists, the current layout with the image is used. Links are text links with icons, not big buttons, and only appear when a URL exists.

**Experience entry:** Two columns on desktop. The left column holds the date range (for example "Oct 2026 - Present") and, below it, the location and work setup (for example "Markham, Ontario, Canada · Remote"), both in the mono label style and `muted`. The right column holds the role as an h3, the company and employment type on one muted line, and a short bullet list. On mobile, stack in this order: dates, location line, role, company line, bullets. Do not show a duration (such as "2 mos"), since it goes stale.

**Form fields:** Visible label above each field (not placeholder only), `background` fill, 1px `border`, 8px radius, clear focus state, and inline error text. Inputs are 40px tall on desktop and 44px on mobile. Text is 15px on desktop and 16px on mobile (never below 16px on mobile, so phones do not zoom in on focus). The form column is at most 560px wide. The message textarea is 5 rows, has a fixed height, and cannot be resized by the user. Long messages scroll inside it. Gaps between fields are 20px.

**Icons:** Boxicons, 20px to 24px, inherit text color. Icon-only links must have an `aria-label`.

**Inline links (inside paragraphs):** `foreground` color with an underline, and a small underline offset. Hover increases contrast only. Navigation, social icons, and buttons are not inline links and do not use this style.

**Hero:** A greeting line above the h1 (for example "Hi, I'm Rhundei"), in Newsreader italic, `foreground` color, 20px to 22px. The h1 holds only the main statement. On desktop, text and photo columns are vertically centered with each other. The hero fills the screen (see Layout). On mobile, the profile photo is centered horizontally above the text (hero and About page). All text stays left-aligned. On desktop, the photo stays in its column as before.

**Circular icon buttons (socials):** 44px circle, 1px `border`. On hover, fill with `foreground` and change the icon to `background` (inverted), 150ms. Visible focus ring.

**Theme toggle:** 44px touch target, no border at rest. On hover, show a circular fill of `foreground` at about 8% opacity. Visible focus ring.

**Section heading with a link:** The heading and the link sit on one row at every width, with the link right-aligned and vertically aligned to the heading's baseline. The link stays on one line. It only drops below the heading if the row cannot fit it (very narrow screens).

**Footer:** Quiet and compact. Vertical padding 24px on desktop and 32px on mobile. Single row on desktop: copyright on the left, text links on the right (Facebook, LinkedIn, GitHub). No email and no icons. On mobile, the three links sit on one row, with the copyright below. All text is 14px. Links are `muted` at rest and `foreground` on hover, with no underline at rest. 1px top border. Links keep a 44px minimum touch target on mobile through padding, without making the footer taller visually.

## Motion

Use `motion` sparingly.

- Allowed: fade and upward translate of 24px on scroll into view, once only. It starts when the element is about 15% inside the viewport, not when it first touches the edge. Subtle hover transitions (150ms to 200ms) on links and buttons.
- Easing: ease-out. Reveal duration is about 700ms. Hover transitions stay 150ms to 200ms.
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