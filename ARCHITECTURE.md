# Architecture

This project is built as a reusable template for electrical-contractor
marketing sites. The current content is for AUS Electrical & Air Service,
but nothing in `src/components/` should reference that business by name —
all business-specific content lives in `src/data/` and `src/lib/site-config.ts`.

## Folder structure

```
src/
  app/                    Routes (Next.js App Router)
    layout.tsx            Root layout: fonts, global SEO metadata
    page.tsx               Home page — composes section components
    services/
      page.tsx             Services index (grid of all services)
      [slug]/page.tsx       Dynamic per-service page
    quote/page.tsx          Placeholder — quote estimator (future)
    booking/page.tsx        Placeholder — online booking (future)
    reviews/page.tsx        Full reviews page (reads src/data/testimonials.ts)
    blog/
      page.tsx               Placeholder — blog index (future)
      [slug]/page.tsx         Placeholder — blog post template (future)
  components/              Presentational components only.
                            No business-specific strings — always pull
                            from site-config.ts / services.ts / testimonials.ts.
  data/                    Typed content files.
    services.ts             All services (slug, title, descriptions, icon, image)
    testimonials.ts          Customer reviews
  lib/
    site-config.ts          Single source of truth for business facts
                             (name, phone, ABN, licence, address, service areas)
    icon-map.ts              Maps Service.icon string -> Lucide icon component
```

## Where content lives vs. where components live

- **Components** (`src/components/`) are dumb renderers. They accept data
  as props or import from `src/data/` / `src/lib/site-config.ts` — they never
  contain hardcoded business copy, names, or phone numbers.
- **Content** (`src/data/`, `src/lib/site-config.ts`) is where every fact,
  list, and piece of copy specific to this business lives.

## Re-skinning this template for a new client

To reuse this codebase for a different electrical contractor, you should
only need to touch:

1. `src/lib/site-config.ts` — business name, owner name, phone, email, ABN,
   licence number, address, service areas, site URL, tagline.
2. `src/data/services.ts` — the list of services offered, including per-service
   copy and icons.
3. `src/data/testimonials.ts` — customer reviews.
4. `public/logo.png` and any images referenced under `public/images/` —
   swap for the new client's branding and photography.
5. `tailwind.config.ts` — only if the new client's brand colours differ from
   the emerald/gold/charcoal palette defined in Stage 1.

No file in `src/components/` or `src/app/` should need to change for a
rebrand. If you find yourself editing a component to change wording, that
wording belongs in `src/data/` or `site-config.ts` instead.
