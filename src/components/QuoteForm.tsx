"use client";

import { useState } from "react";
import { Phone, Send } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      phone: formData.get("phone")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      suburb: formData.get("suburb")?.toString().trim() ?? "",
      service: formData.get("service")?.toString().trim() ?? "",
      details: formData.get("details")?.toString().trim() ?? "",
    };

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
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
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-8 py-4 font-display text-base font-medium text-white shadow-card transition-colors duration-200 hover:bg-gold hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
          {status === "submitting" ? "Sending..." : "Send Quote Request"}
        </button>

        {status === "success" && (
          <p role="status" className="text-sm font-medium text-emerald">
            Thanks — your request has been sent. We'll be in touch shortly.
          </p>
        )}

        {status === "error" && (
          <p role="alert" className="text-sm text-red-700">
            {errorMessage}{" "}
            <a
              href={siteConfig.phoneHref}
              className="font-medium underline hover:text-gold-dark"
            >
              Call us instead
            </a>
            .
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
