import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactBanner from "@/components/ContactBanner";
import FAQSection from "@/components/FAQSection";
import { getFaqsByServiceSlug } from "@/data/faqs";
import { getRelatedServices, getServiceBySlug, services } from "@/data/services";
import { iconMap } from "@/lib/icon-map";
import { siteConfig } from "@/lib/site-config";

interface ServicePageProps {
  params: { slug: string };
}

const PROCESS_STEPS = [
  {
    title: "Get in touch",
    description:
      "Call us or send a quote request with a few details about the job — the more you can tell us upfront, the more accurate your quote will be.",
  },
  {
    title: "Upfront quote",
    description:
      "Straightforward jobs can often be quoted over the phone. More involved work gets a quick site visit so the price is accurate, with no surprises later.",
  },
  {
    title: "Work completed",
    description:
      "We arrive on time, work cleanly, and keep you informed if anything changes once we're on site — nothing happens without you knowing first.",
  },
  {
    title: "Tidy finish & compliance",
    description:
      "We clean up after ourselves and provide any compliance certification the job requires, so you've got the paperwork on file if you ever need it.",
  },
];

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
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${siteConfig.businessName}`,
      description: service.shortDescription,
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
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
  const serviceFaqs = getFaqsByServiceSlug(service.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: { "@id": `${siteConfig.siteUrl}/#business` },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

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

      <div className="mx-auto max-w-4xl px-6 pt-8 md:px-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.title, href: `/services/${service.slug}` },
          ]}
        />
      </div>

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

      <section className="bg-mist px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-slate">
            Our process
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald font-display text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="font-display font-semibold text-slate">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {serviceFaqs.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
          <FAQSection
            faqs={serviceFaqs}
            eyebrow="Common Questions"
            heading={`${service.title} FAQs`}
          />
        </section>
      )}

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
