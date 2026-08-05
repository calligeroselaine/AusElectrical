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
- [ ] The navbar currently uses a text wordmark ("AUS Electrical", from
  `siteConfig.shortName`) rather than an image logo. If a real logo file
  is designed, swap the wordmark in [Navbar.tsx](src/components/Navbar.tsx)
  for an `<Image>` — decide this deliberately rather than defaulting to
  it.
- [ ] Replace `/public/logo.png` with the real AUS Electrical & Air
  Service logo — it's no longer used in the navbar, but is still
  referenced as the schema.org `image` in
  [JsonLd.tsx](src/components/JsonLd.tsx).
- [ ] Add real photos for each service's `heroImage` field in
  [src/data/services.ts](src/data/services.ts) — the field exists in the
  data model but isn't wired into the `/services/[slug]` page template
  yet; add the `<Image>` when real photos are available.
- [ ] Add a real `favicon.ico` to `/src/app` (or `/public`) — none exists
  yet, so browsers are currently falling back to a default icon.
- [ ] Add a real `og-image.jpg` (1200×630) to `/public` — referenced in
  [layout.tsx](src/app/layout.tsx) metadata but the file doesn't exist
  yet, so social share previews currently show no image.

## Content / data
- [ ] Set the real `siteUrl` in [site-config.ts](src/lib/site-config.ts)
  — currently `https://www.auselectricalandair.com.au`, unverified as
  the actual production domain.
- [ ] Set the real `email` in [site-config.ts](src/lib/site-config.ts) —
  currently a placeholder address.
- [ ] Replace the placeholder years-of-experience figure ("10+ Years
  Experience") in [src/data/about.ts](src/data/about.ts) with Nick's
  actual number of years in the trade.
- [x] Both testimonials in [src/data/testimonials.ts](src/data/testimonials.ts)
  are now real reviews (George C. and Elaine T.) — no placeholders left.
  Add more real reviews here as they come in.
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
  after swapping in the real address/logo, to confirm the
  `Electrician` schema still validates.

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
- [ ] The quote form ([QuoteForm.tsx](src/components/QuoteForm.tsx)) is
  functional but submits via a `mailto:` link (opens the visitor's email
  app pre-filled with their details) rather than a real backend. This
  works with zero setup, but has real limitations: it fails silently if
  the visitor has no email client configured (e.g. on some mobile
  browsers), and there's no server-side record of submissions. Before
  relying on this for real leads, consider wiring it to a proper backend
  — an API route emailing via Resend/SendGrid, or a form service like
  Formspree — so submissions are reliable and logged.
