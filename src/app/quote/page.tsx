import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Get a Quote",
  description: `Request a free quote from ${siteConfig.businessName}. Tell us about your job and we'll get back to you with a price.`,
};

export default function QuotePage() {
  return (
    <main className="bg-mist px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-slate md:text-5xl">
          Get a Quote
        </h1>
        <p className="mt-4 text-slate-muted">
          Fill in the details below and we'll get back to you with a price.
          For urgent jobs, calling is always fastest.
        </p>
      </div>

      <div className="mt-16">
        <QuoteForm />
      </div>
    </main>
  );
}
