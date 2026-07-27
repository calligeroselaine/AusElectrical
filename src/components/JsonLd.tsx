import { siteConfig } from "@/lib/site-config";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    name: siteConfig.businessName,
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressStreet,
      addressLocality: siteConfig.addressSuburb,
      addressRegion: siteConfig.addressState,
      postalCode: siteConfig.addressPostcode,
      addressCountry: siteConfig.addressCountry,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
