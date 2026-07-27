import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Our Electrical Services",
  description: `From ${services[0].title.toLowerCase()} to ${services[services.length - 1].title.toLowerCase()}, explore the full range of residential and commercial electrical services offered by ${siteConfig.businessName} across ${siteConfig.serviceAreas.join(", ")}.`,
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-8xl px-6 py-24 md:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-slate md:text-5xl">
          Our Electrical Services
        </h1>
        <p className="mt-4 text-slate-muted">{siteConfig.tagline}</p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </main>
  );
}
