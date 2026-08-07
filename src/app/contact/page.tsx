import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.businessName} — call, email, or send a message and we'll get back to you.`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${siteConfig.siteUrl}/contact`,
    about: { "@id": `${siteConfig.siteUrl}/#business` },
  };

  return (
    <main className="bg-mist px-6 py-24 md:px-10 md:py-32">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />

      <div className="mx-auto mt-8 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-slate md:text-5xl">
          Get In Touch
        </h1>
        <p className="mt-4 text-slate-muted">
          Call for anything urgent, or send a message below and we'll get
          back to you.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald" aria-hidden="true" />
              <div>
                <p className="font-display font-semibold text-slate">Phone</p>
                <a
                  href={siteConfig.phoneHref}
                  className="text-slate-muted transition-colors duration-200 hover:text-emerald"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald" aria-hidden="true" />
              <div>
                <p className="font-display font-semibold text-slate">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-muted transition-colors duration-200 hover:text-emerald"
                >
                  {siteConfig.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald" aria-hidden="true" />
              <div>
                <p className="font-display font-semibold text-slate">Address</p>
                <p className="text-slate-muted">{siteConfig.address}</p>
              </div>
            </li>
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-slate-muted">
            We service {siteConfig.serviceAreas.join(", ")}.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-card">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
