import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import ContactBanner from "@/components/ContactBanner";
import { getRelatedServices, getServiceBySlug, services } from "@/data/services";
import { iconMap } from "@/lib/icon-map";
import { siteConfig } from "@/lib/site-config";

interface ServicePageProps {
  params: { slug: string };
}

export const dynamic = "force-static";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${siteConfig.businessName}`,
      description: service.shortDescription,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon];
  const relatedServices = getRelatedServices(service.slug);

  return (
    <main>
      <section className="bg-charcoal px-6 py-24 text-center text-white md:px-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-gold">
          <Icon className="h-8 w-8" aria-hidden="true" />
        </span>
        <h1 className="mt-6 text-4xl font-bold md:text-5xl">
          {service.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          {service.longDescription}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <h2 className="font-display text-2xl font-semibold text-slate">
          Why choose {siteConfig.businessName} for {service.title.toLowerCase()}?
        </h2>
        <ul className="mt-6 space-y-4">
          {[
            `Licensed, insured electrical work backed by licence ${siteConfig.licenceNo}.`,
            "Upfront pricing with no surprise call-out fees.",
            `Local to ${siteConfig.serviceAreas[0]} and servicing ${siteConfig.serviceAreas.length}+ surrounding areas.`,
          ].map((point) => (
            <li key={point} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald"
                aria-hidden="true"
              />
              <span className="text-slate-muted">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-8xl px-6 pb-16 md:px-10">
        <ContactBanner />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 md:px-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald hover:text-gold-dark"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to all services
        </Link>

        {relatedServices.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-slate">
              Related services
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {relatedServices.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/services/${related.slug}`}
                    className="inline-block rounded-full bg-mist px-4 py-2 text-sm font-medium text-slate transition-colors duration-200 hover:bg-emerald hover:text-white"
                  >
                    {related.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
