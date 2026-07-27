import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    lastModified,
  }));

  return [
    { url: siteConfig.siteUrl, lastModified },
    { url: `${siteConfig.siteUrl}/services`, lastModified },
    ...serviceEntries,
    { url: `${siteConfig.siteUrl}/reviews`, lastModified },
    { url: `${siteConfig.siteUrl}/quote`, lastModified },
  ];
}
