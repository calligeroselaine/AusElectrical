import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.siteUrl}/services/${service.slug}`,
    lastModified,
  }));

  const serviceAreaEntries: MetadataRoute.Sitemap = serviceAreas.map(
    (area) => ({
      url: `${siteConfig.siteUrl}/service-areas/${area.slug}`,
      lastModified,
    }),
  );

  return [
    { url: siteConfig.siteUrl, lastModified },
    { url: `${siteConfig.siteUrl}/services`, lastModified },
    ...serviceEntries,
    { url: `${siteConfig.siteUrl}/service-areas`, lastModified },
    ...serviceAreaEntries,
    { url: `${siteConfig.siteUrl}/reviews`, lastModified },
    { url: `${siteConfig.siteUrl}/quote`, lastModified },
    { url: `${siteConfig.siteUrl}/contact`, lastModified },
    { url: `${siteConfig.siteUrl}/privacy-policy`, lastModified },
    { url: `${siteConfig.siteUrl}/terms`, lastModified },
  ];
}
