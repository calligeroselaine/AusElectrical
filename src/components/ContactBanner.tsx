import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ContactBanner() {
  return (
    <section className="rounded-3xl bg-emerald px-8 py-12 text-center text-white md:px-16 md:py-16">
      <h2 className="text-3xl font-bold md:text-4xl">
        Ready to get started?
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-white/80">
        {siteConfig.tagline}
      </p>
      <a
        href={siteConfig.phoneHref}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-display text-base font-medium text-emerald shadow-card transition-colors duration-200 hover:bg-gold hover:text-charcoal"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        {siteConfig.phoneDisplay}
      </a>
    </section>
  );
}
