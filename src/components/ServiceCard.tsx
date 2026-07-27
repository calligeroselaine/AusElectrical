import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { iconMap } from "@/lib/icon-map";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h2 className="mt-4 font-display text-lg font-semibold text-slate">
        {service.title}
      </h2>
      <p className="mt-2 flex-1 text-sm text-slate-muted">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-emerald transition-colors duration-200 group-hover:text-gold-dark">
        Learn more
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Link>
  );
}
