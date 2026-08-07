import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `${siteConfig.businessName} services homes and businesses across southern Sydney, including ${siteConfig.serviceAreas.join(", ")}.`,
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <main className="mx-auto max-w-8xl px-6 py-24 md:px-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Service Areas", href: "/service-areas" }]} />

      <div className="mx-auto mt-8 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-slate md:text-5xl">
          Service Areas
        </h1>
        <p className="mt-4 text-slate-muted">
          Based in {siteConfig.addressSuburb}, we service homes and
          businesses across southern Sydney, including{" "}
          {siteConfig.serviceAreas.join(", ")}.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {serviceAreas.map((area) => (
          <Link
            key={area.slug}
            href={`/service-areas/${area.slug}`}
            className="group flex flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 font-display text-lg font-semibold text-slate">
              {area.name}
            </h2>
            <p className="mt-2 text-sm text-slate-muted">{area.intro}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
