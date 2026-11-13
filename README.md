# Deer Park Roof Repair Pros — v2 site

Static HTML + CSS + vanilla JS only. No framework, no CMS, no database, no build step.

## Pages (9)
- `/` — Roof Repair in Deer Park, TX
- `/roof-leak-repair/` — Roof Leak Repair
- `/storm-hail-damage-repair/` — Hail Damage Roof Repair
- `/emergency-roof-repair-tarping/` — Emergency Roof Repair & Tarping
- `/shingle-repair/` — Shingle Repair
- `/flashing-pipe-boot-repair/` — Pipe Boot Repair
- `/areas/` — Areas We Serve in Deer Park (hub; the 6 thin v1 neighbourhood pages were deleted)
- `/contact/` — contact + form placeholder (does not send anywhere)
- `/privacy-policy/`

Plus `styles.css`, `script.js`, `favicon.svg`, `sitemap.xml`, `robots.txt`, `images/` (12 local photos).

## Dummy phone — swap in ONE place
Phone shown everywhere is the DUMMY **(281) 555-0147** (tel +12815550147). It is defined in
`script.js` as SITE_PHONE_DISPLAY / SITE_PHONE_TEL and hard-coded in the HTML. Search for
`555-0147` to swap it for the real Ringba number before real calls / LeadSmart.

## Rules this build follows
- No fake reviews, star ratings, testimonials, years-in-business, licence numbers, real
  street address, or real roofer names anywhere.
- No Pricing page and no Reviews page as standalone pages. Price RANGES (Houston 2026,
  sourced from RISE Mar 2026 / Angi Jul 2026 / JC&C Sep 2026) appear in a section on
  service pages, labelled as ranges, not quotes. Tarping is shown as $150–$1,500 across
  sources — never a single price.
- Photos in `images/` are illustrative photos downloaded from public roofing pages
  (see IMAGE-SOURCES.md), not photos of work at a specific Deer Park home. The footer
  says so on every page.
- No guaranteed response times. Hours: Mon–Sat 7am–7pm, emergency tarping 24/7 (call first).
- No LeadSmart application, no purchases, no deploy — local build only.
