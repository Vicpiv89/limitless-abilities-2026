# Limitless Abilities 2026 — Outstanding TODOs

## Content (must update before launch)

- **Speakers** — All 16 listed are 2025 speakers. Replace with 2026 lineup when confirmed. The section heading already says "2025 Speakers" to flag this.
- **Partner logos** — Bezbarjernist, BPD, Enabel, RTV, Patients of Ukraine. Verify which partnerships carry forward to 2026.
- **Sponsor logos** — BPD, Enabel, Steeper shown as 2025 supporters. Update with 2026 sponsors once confirmed.
- **Nav logo** — Uses inline SVG (scraped from protezhub.com). Verify it's the correct current logo.
- **About image** — Picsum placeholder in place. Replace with real event photo when available.
- **Sponsor contact email** — Confirmed: `info@protezhub.com` (from protezhub.com).
- **Sponsor application deadline** — CTA banner doesn't include a date. Add one once confirmed.

## Technical (must fix before launch)

- **Form backend** — `action="#"` is a placeholder. Integrate Formspree or similar:
  ```html
  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```
  Or wire up to a Google Form / backend endpoint.
- **Social links** — Confirmed from protezhub.com: Facebook + Instagram = `/protezhub`, YouTube = `@protezhub`. LinkedIn does not exist — removed from footer.

## Nice to have

- SEO meta tags: `<meta name="description">`, Open Graph / Twitter cards
- Ukrainian language toggle — translate full content
- Google Analytics or Plausible tracking snippet
- Replace "View Full Program" button with real program PDF link once available

## Done

- Redesigned from original index.html → option-a.html (white bg, SVG waves, scroll reveals, Raleway font)
- Renamed throughout from "Endless Possibilities" → "Limitless Abilities"
- Added animated hero blob (scale pulse, no translate to avoid clipping)
- Added dot grid background to hero section
- Added count-up animation on stats
- Added glow pulse on rules and stat numbers
- Added wave breathing animation
- Enhanced card and button hover effects
- Backed up as option-a-backup.html
- SEO meta tags added (description, canonical, OG, Twitter card)
- Footer redesigned to white, LinkedIn removed, YouTube added
- Intro curtain: full-blue screen with "Limitless / Abilities" text matched exactly to h1 position via getBoundingClientRect(), fades out at 950ms. Two white brand-shape blobs float upward during curtain (ambient, no rotation, very low opacity)
- Hero yellow brush blob removed from first fold
- Hero copy cleaned up: eyebrow above title, pill tags for date/location, no swipe-in animations on reveal
- Blob colors matched to brand Wave SVGs: all decorative blobs now #09A4DB (about, speakers, program)
- Border radius tightened: r-md 12→4px, r-sm 6→3px; hero tags, topic tags, schedule tabs de-pilled to 3px
- About section: picsum placeholder photo replacing ghost text
