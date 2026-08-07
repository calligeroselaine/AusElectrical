import type { Metadata } from "next";
import { Star } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `Read what customers say about ${siteConfig.businessName}.`,
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 md:px-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Reviews", href: "/reviews" }]} />
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-bold text-slate md:text-5xl">
          Customer Reviews
        </h1>
        <p className="mt-4 text-slate-muted">
          A full reviews page is under construction — here's what customers
          have told us so far.
        </p>
      </div>

      <div className="mt-16 space-y-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="rounded-2xl bg-white p-6 shadow-card"
          >
            <div className="flex items-center gap-1 text-gold-dark">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-dark" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-4 text-slate-muted">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="mt-4 font-display text-sm font-semibold text-slate">
              {testimonial.name}
              {testimonial.placeholder && (
                <span className="ml-2 text-xs font-normal text-slate-muted">
                  (placeholder review)
                </span>
              )}
              {testimonial.location && (
                <span className="font-normal text-slate-muted">
                  {" "}
                  &middot; {testimonial.location}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
