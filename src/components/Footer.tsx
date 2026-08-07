import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "/services" },
  { label: "About", href: "#about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Get a Quote", href: "/quote" },
  { label: "Book Online", href: "/booking" },
  { label: "All Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal px-6 py-16 text-white/70 md:px-10">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            {siteConfig.businessName}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Resources
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
            Get In Touch
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-light" aria-hidden="true" />
              <a
                href={siteConfig.phoneHref}
                className="transition-colors duration-200 hover:text-white"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-light" aria-hidden="true" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors duration-200 hover:text-white"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-light" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-8xl border-t border-white/10 pt-8">
        <p className="text-xs leading-relaxed text-white/50">
          Proudly servicing {siteConfig.serviceAreas.join(", ")}.
        </p>
        <div className="mt-4 flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.businessName}. All rights reserved.
            {" "}Licence No. {siteConfig.licenceNo} &middot; ABN{" "}
            {siteConfig.abn}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
