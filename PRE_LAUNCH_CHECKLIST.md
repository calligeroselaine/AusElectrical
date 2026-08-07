# Pre-Launch Checklist

Everything below is a placeholder standing in for a real asset or value.
Nothing here blocks development, but all of it should be resolved before
this site goes live for a real customer.

## Images
- [ ] Replace `/public/images/hero-home.jpg` with a real, licensed photo
  of a modern Australian home exterior at dusk (used in
  [Hero.tsx](src/components/Hero.tsx)).
- [x] Nick doesn't want his photo used. The About section now shows a
  stat panel (years experience + name) instead of a portrait — no photo
  needed here.
- [x] Real logo is now wired into the navbar
  ([Navbar.tsx](src/components/Navbar.tsx)) using two variants: the
  full-colour version (`public/images/logo-color.png`) on the
  scrolled/glass nav background, and a white "reversed" version
  (`public/images/logo-white.png`) on the transparent nav over the hero
  photo. Both were verified transparent and legible against real
  navbar backgrounds before wiring in — the first logo export supplied
  didn't have a usable dark-background variant, so a proper reversed
  export was requested and used instead.
- [x] `/public/logo.png` (the schema.org `image` in
  [JsonLd.tsx](src/components/JsonLd.tsx)) now uses the real full-colour
  logo instead of the placeholder.
- [ ] Add real photos for each service's `heroImage` field in
  [src/data/services.ts](src/data/services.ts) — the field exists in the
  data model but isn't wired into the `/services/[slug]` page template
  yet; add the `<Image>` when real photos are available.
- [x] Favicon ([src/app/icon.png](src/app/icon.png)) now uses the real
  icon mark (map + lightning bolt) cropped from the new logo, replacing
  the earlier generic placeholder.
- [ ] Add a real `og-image.jpg` (1200×630) to `/public` — referenced in
  [layout.tsx](src/app/layout.tsx) metadata but the file doesn't exist
  yet, so social share previews currently show no image.

## Content / data
- [x] `siteUrl` in [site-config.ts](src/lib/site-config.ts) is set to
  the confirmed real domain: `https://www.auselectricalair.com.au`
  (matches the Google Business Profile listing).
- [x] `email` in [site-config.ts](src/lib/site-config.ts) is set to the
  real address: `auselectricalandair@gmail.com`.
- [ ] Replace the placeholder years-of-experience figure ("10+ Years
  Experience") in [src/data/about.ts](src/data/about.ts) with Nick's
  actual number of years in the trade.
- [x] All 6 testimonials in [src/data/testimonials.ts](src/data/testimonials.ts)
  are real reviews — no placeholders left. They automatically feed the
  `aggregateRating`/`review` schema in [JsonLd.tsx](src/components/JsonLd.tsx),
  so adding more real reviews here keeps the structured data accurate too.
- [ ] Double-check the structured address fields in
  [site-config.ts](src/lib/site-config.ts) (`addressStreet`,
  `addressSuburb`, `addressState`, `addressPostcode`, `addressCountry`)
  match the real business address exactly — they're parsed from the
  original single-string address and feed directly into the
  `LocalBusiness`/`Electrician` schema markup in
  [JsonLd.tsx](src/components/JsonLd.tsx), which Google uses for local
  search and map listings.

## SEO / infra
- [ ] Once the real domain is live, submit `/sitemap.xml` to Google
  Search Console (and Bing Webmaster Tools) and verify `/robots.txt`
  resolves correctly against the production URL.
- [ ] Re-run the structured data through Google's Rich Results Test
  after swapping in the real address/logo, to confirm the schema still
  validates.
- [x] SEO foundation pass complete: merged `Electrician`/`HVACBusiness`
  schema with real `aggregateRating`/`review` data, added `WebSite`
  schema, per-service `Service` + `BreadcrumbList` schema, a 37-question
  FAQ dataset with `FAQPage` schema (general FAQs on the homepage,
  service-specific FAQs on each `/services/[slug]` page), canonical URLs
  on every page, `manifest.json`, and `llms.txt`. See
  [src/data/faqs.ts](src/data/faqs.ts) and
  [src/components/JsonLd.tsx](src/components/JsonLd.tsx).
- [x] Scoped-down local SEO batch complete instead of a full 15-suburb
  rebuild: real `/contact` page (with its own form + `ContactPage`
  schema), `/privacy-policy` and `/terms` pages, and 4 genuinely
  differentiated suburb pages under `/service-areas/[slug]` (Lugarno,
  Peakhurst, Hurstville, Mortdale) — each with real local context rather
  than templated filler, to avoid the thin-content risk of doing all 15
  at once. All linked from the Footer and included in the sitemap.
- [ ] **Still deferred (bigger scope, its own project):** the remaining
  11 suburbs from the original brief (Oatley, Penshurst, Riverwood,
  Padstow, Revesby, Menai, Bangor, Miranda, Sutherland, Blakehurst,
  Connells Point) if/when the first 4 show results worth expanding on; a
  real Blog/Advice Centre with published articles (currently just a
  `noindex` placeholder); a dedicated `/about` page; and
  renaming/restructuring services into categories like "Emergency
  Electrician" and "Air Conditioning Services" as standalone pages
  rather than items in the current 12-service grid.

## Routes not yet real
- [ ] `/booking` — currently a "Coming soon" placeholder, marked
  `noindex`. Build real online booking, then remove the `noindex` in
  [src/app/booking/page.tsx](src/app/booking/page.tsx) and add it to
  [sitemap.ts](src/app/sitemap.ts).
- [ ] `/blog` and `/blog/[slug]` — currently placeholders with no posts
  (`generateStaticParams` returns an empty array) and `noindex`. Once
  real posts exist, remove the `noindex` and add published post URLs to
  [sitemap.ts](src/app/sitemap.ts).

`/reviews` is already real (reads from `testimonials.ts`) and is
included in the sitemap as-is.

## Quote form (`/quote`)
- [x] The quote form ([QuoteForm.tsx](src/components/QuoteForm.tsx)) posts
  to a real API route ([src/app/api/quote/route.ts](src/app/api/quote/route.ts))
  that emails submissions to `siteConfig.email` via
  [Resend](https://resend.com). The `RESEND_API_KEY` is set locally in
  `.env.local` (gitignored).
- [ ] **Add `RESEND_API_KEY` in Vercel too** — Project Settings →
  Environment Variables → same value as `.env.local` — otherwise every
  submission fails in production with "Quote form is not configured yet."
- [ ] The route currently sends from Resend's shared sandbox address
  (`onboarding@resend.dev`), which works without any domain setup. For a
  more professional "from" address (e.g. `noreply@auselectricalair.com.au`)
  and better inbox deliverability, verify the real domain in the Resend
  dashboard and update the `from` field in
  [src/app/api/quote/route.ts](src/app/api/quote/route.ts).
