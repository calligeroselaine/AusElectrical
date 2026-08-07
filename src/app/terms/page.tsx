import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the ${siteConfig.businessName} website.`,
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 md:px-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms of Use", href: "/terms" }]} />

      <h1 className="mt-8 text-4xl font-bold text-slate md:text-5xl">
        Terms of Use
      </h1>
      <p className="mt-4 text-sm text-slate-muted">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="prose-content mt-10 space-y-8 leading-relaxed text-slate-muted">
        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            Using this website
          </h2>
          <p className="mt-3">
            These terms apply to your use of {siteConfig.siteUrl}, operated
            by {siteConfig.businessName} (ABN {siteConfig.abn}, Licence No.{" "}
            {siteConfig.licenceNo}). By using this website, you agree to
            these terms. If you don't agree with them, please don't use the
            site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            Information on this website
          </h2>
          <p className="mt-3">
            We aim to keep the information on this website accurate and up
            to date, including service descriptions and general electrical
            guidance in our FAQs. However, this content is general in nature
            and isn't a substitute for a proper on-site assessment — actual
            pricing, timeframes, and recommendations for your specific
            property will be confirmed when we quote your job. Nothing on
            this website should be relied on as electrical or safety advice
            for your specific situation without speaking to us directly.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            Quotes and bookings
          </h2>
          <p className="mt-3">
            Submitting a quote request or contact form through this website
            does not create a binding agreement between you and{" "}
            {siteConfig.businessName}. A job is only confirmed once we've
            agreed on pricing and scheduling directly with you, whether by
            phone, email, or in person.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            Intellectual property
          </h2>
          <p className="mt-3">
            The content, design, and branding on this website belong to{" "}
            {siteConfig.businessName} and may not be copied or reproduced
            without our permission.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            Limitation of liability
          </h2>
          <p className="mt-3">
            To the extent permitted by law, {siteConfig.businessName} is not
            liable for any loss or damage arising from your use of this
            website or reliance on its general content. This does not affect
            any rights you have under the Australian Consumer Law in
            relation to electrical work we actually carry out for you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            Governing law
          </h2>
          <p className="mt-3">
            These terms are governed by the laws of New South Wales,
            Australia.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            Contact
          </h2>
          <p className="mt-3">
            Questions about these terms can be sent to{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-emerald hover:text-gold-dark"
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
