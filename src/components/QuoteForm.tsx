"use client";

import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const suburb = formData.get("suburb")?.toString().trim() ?? "";
    const service = formData.get("service")?.toString().trim() ?? "";
    const details = formData.get("details")?.toString().trim() ?? "";

    const subject = `Quote request from ${name || "website visitor"}`;
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Suburb: ${suburb}`,
      `Service needed: ${service}`,
      "",
      "Details:",
      details,
    ].join("\n");

    const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-muted/20 bg-white px-4 py-3 text-slate placeholder:text-slate-muted/60 transition-colors duration-200 focus-visible:border-emerald";

  return (
    <div className="mx-auto max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={`mt-2 ${inputClasses}`}
              placeholder="Jane Smith"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium text-slate"
            >
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className={`mt-2 ${inputClasses}`}
              placeholder="04XX XXX XXX"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-2 ${inputClasses}`}
            placeholder="jane@example.com"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="suburb"
              className="text-sm font-medium text-slate"
            >
              Suburb
            </label>
            <input
              id="suburb"
              name="suburb"
              type="text"
              required
              className={`mt-2 ${inputClasses}`}
              placeholder="e.g. Lugarno"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="text-sm font-medium text-slate"
            >
              Service needed
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className={`mt-2 ${inputClasses}`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="details"
            className="text-sm font-medium text-slate"
          >
            Tell us about the job
          </label>
          <textarea
            id="details"
            name="details"
            rows={5}
            className={`mt-2 ${inputClasses}`}
            placeholder="A few details help us give you a more accurate quote."
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-8 py-4 font-display text-base font-medium text-white shadow-card transition-colors duration-200 hover:bg-gold hover:text-charcoal sm:w-auto"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
          Send Quote Request
        </button>

        {submitted && (
          <p role="status" className="text-sm text-slate-muted">
            Your email app should have opened with the details filled in —
            just hit send. If nothing opened,{" "}
            <a
              href={siteConfig.phoneHref}
              className="font-medium text-emerald hover:text-gold-dark"
            >
              give us a call
            </a>{" "}
            instead.
          </p>
        )}
      </form>

      <p className="mt-8 flex items-center gap-2 text-sm text-slate-muted">
        <Phone className="h-4 w-4 flex-shrink-0 text-emerald" aria-hidden="true" />
        Prefer to talk it through? Call{" "}
        <a
          href={siteConfig.phoneHref}
          className="font-medium text-emerald hover:text-gold-dark"
        >
          {siteConfig.phoneDisplay}
        </a>
      </p>
    </div>
  );
}
