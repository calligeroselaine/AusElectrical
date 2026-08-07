import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.businessName} collects, uses, and protects your personal information.`,
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 md:px-10">
      <Breadcrumbs
        items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy-policy" }]}
      />

      <h1 className="mt-8 text-4xl font-bold text-slate md:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-slate-muted">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="prose-content mt-10 space-y-8 leading-relaxed text-slate-muted">
        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            Who we are
          </h2>
          <p className="mt-3">
            This privacy policy applies to the website operated by{" "}
            {siteConfig.businessName} ({siteConfig.siteUrl}), a licensed
            electrical and air conditioning contractor based at{" "}
            {siteConfig.address}. If you have questions about this policy or
            how your information is handled, contact us at{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-emerald hover:text-gold-dark"
            >
              {siteConfig.email}
            </a>{" "}
            or {siteConfig.phoneDisplay}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            What information we collect
          </h2>
          <p className="mt-3">
            We only collect personal information that you provide directly to
            us, through the quote request form, the contact form, or by
            calling or emailing us. This may include your name, phone number,
            email address, suburb, and details about the electrical or air
            conditioning work you're enquiring about.
          </p>
          <p className="mt-3">
            We do not require you to create an account, and we do not process
            any payments through this website.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            How we use your information
          </h2>
          <p className="mt-3">
            Information submitted through our forms is used only to respond
            to your enquiry, provide a quote, and arrange or carry out the
            electrical or air conditioning work you've requested. We don't
            use it for unrelated marketing, and we don't sell or rent your
            information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            How your information is handled
          </h2>
          <p className="mt-3">
            When you submit the quote or contact form, the details are sent
            directly to our business email via Resend, a third-party email
            delivery service, and are not stored in a separate database on
            this website. Our website is hosted on Vercel, which — like most
            hosting providers — may log basic technical information (such as
            IP address and browser type) for security and performance
            purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            Cookies and tracking
          </h2>
          <p className="mt-3">
            This website does not currently use tracking or advertising
            cookies, and does not run third-party analytics or advertising
            scripts.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            Your rights
          </h2>
          <p className="mt-3">
            You can ask us at any time what personal information we hold
            about you, request that we correct it, or ask us to delete it,
            by contacting us using the details above.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-slate">
            Changes to this policy
          </h2>
          <p className="mt-3">
            We may update this policy from time to time — for example, if we
            add new tools or services to the website. Any changes will be
            reflected on this page.
          </p>
        </section>
      </div>
    </main>
  );
}
