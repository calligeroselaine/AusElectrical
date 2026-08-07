import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactBanner from "@/components/ContactBanner";
import { services } from "@/data/services";
import { getServiceAreaBySlug, serviceAreas } from "@/data/serviceAreas";

interface ServiceAreaPageProps {
  params: { slug: string };
}

export const dynamic = "force-static";

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: ServiceAreaPageProps): Metadata {
  const area = getServiceAreaBySlug(params.slug);

  if (!area) {
    return {};
  }

  return {
    title: `Electrician in ${area.name}`,
    description: `Licensed electrician servicing ${area.name} NSW ${area.postcode}. ${area.intro}`,
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
  };
}

export default function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const area = getServiceAreaBySlug(params.slug);

  if (!area) {
    notFound();
  }

  return (
    <main>
      <section className="bg-charcoal px-6 py-24 text-center text-white md:px-10">
        <span className="text-sm font-medium uppercase tracking-widest text-gold">
          Electrician in {area.name}
        </span>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          {area.name}, NSW {area.postcode}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">{area.intro}</p>
      </section>

      <div className="mx-auto max-w-4xl px-6 pt-8 md:px-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Service Areas", href: "/service-areas" },
            { name: area.name, href: `/service-areas/${area.slug}` },
          ]}
        />
      </div>

      <section className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <h2 className="font-display text-2xl font-semibold text-slate">
          Local electrical work in {area.name}
        </h2>
        <div className="mt-6 space-y-4">
          {area.localContext.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-slate-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-mist px-6 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-slate">
            Services available in {area.name}
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between gap-2 rounded-xl bg-white px-5 py-4 text-sm font-medium text-slate shadow-card transition-colors duration-200 hover:bg-emerald hover:text-white"
                >
                  {service.title}
                  <ArrowRight
                    className="h-4 w-4 flex-shrink-0 text-emerald transition-colors duration-200 group-hover:text-white"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-8xl px-6 py-16 md:px-10">
        <ContactBanner />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 md:px-10">
        <Link
          href="/service-areas"
          className="inline-flex items-center gap-2 text-sm font-medium text-emerald hover:text-gold-dark"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to all service areas
        </Link>
      </section>
    </main>
  );
}
