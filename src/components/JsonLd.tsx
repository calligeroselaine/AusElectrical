import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/lib/site-config";

const BUSINESS_ID = `${siteConfig.siteUrl}/#business`;
const WEBSITE_ID = `${siteConfig.siteUrl}/#website`;

export default function JsonLd() {
  const ratings = testimonials.map((t) => t.rating);
  const ratingValue =
    ratings.reduce((sum, r) => sum + r, 0) / ratings.length;

  const graph = [
    {
      "@type": ["Electrician", "HVACBusiness"],
      "@id": BUSINESS_ID,
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Electrical & Air Conditioning Services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.shortDescription,
            url: `${siteConfig.siteUrl}/services/${service.slug}`,
          },
        })),
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: ratingValue.toFixed(1),
        reviewCount: testimonials.length,
      },
      review: testimonials.map((testimonial) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: testimonial.name,
        },
        reviewBody: testimonial.quote,
        reviewRating: {
          "@type": "Rating",
          ratingValue: testimonial.rating,
          bestRating: 5,
        },
      })),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: siteConfig.siteUrl,
      name: siteConfig.businessName,
      publisher: { "@id": BUSINESS_ID },
      inLanguage: "en-AU",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
