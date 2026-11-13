# Deer Park Roof Repair Pros — static site

Business: Deer Park Roof Repair Pros
Domain (user buys it — do NOT buy anything here): deerparkroofrepair.com
Service area: Deer Park, TX 77536 only

## Dummy phone — IMPORTANT
Every phone number on the site is the DUMMY number:
- Display: (281) 555-0147
- tel: +12815550147

It is defined in `script.js` as SITE_PHONE_DISPLAY / SITE_PHONE_TEL and marked
DUMMY in code/comments, and hard-coded in the HTML the same way. To go live,
replace it in `script.js` and in the HTML files (search for 555-0147) with the
real Ringba number, including in the JSON-LD schema in `index.html`.

## Files
- 14 pages (see sitemap.xml): homepage, 5 service pages, 6 neighbourhood
  pages, contact, privacy policy
- styles.css — shared CSS, mobile-first, system fonts, no external requests
- script.js — mobile menu, FAQ accordion, contact-form placeholder
- sitemap.xml, robots.txt — canonical domain deerparkroofrepair.com

## Rules followed
- No Pricing page, no Reviews/Testimonials page, no fake testimonials,
  no fake ratings, no price list anywhere on the site.
- No street address published — service-area business, Deer Park, TX 77536.
- Contact form is a placeholder only — it does not send anywhere.
- No arrival times, years in business, or unverified local landmarks invented.
- Copy was written fresh for this site; not copied from competitor sites.

## Test locally
cd site && python3 -m http.server 8137
Then open http://127.0.0.1:8137/

## Deploy (NOT done — parent agent to do with user approval)
1. Create private GitHub repo `deer-park-roof-repair-pros`, push these files.
2. Connect repo to Vercel (note: Vercel team scope muse-7bfb needed a
   team-access approval on 2026-11-13 — clear that first).
3. Add custom domain deerparkroofrepair.com after the user buys it.
4. Submit sitemap to Search Console.
