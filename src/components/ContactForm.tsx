"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString().trim() ?? "",
      email: formData.get("email")?.toString().trim() ?? "",
      phone: formData.get("phone")?.toString().trim() ?? "",
      message: formData.get("message")?.toString().trim() ?? "",
    };

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium text-slate">
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className={`mt-2 ${inputClasses}`}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="text-sm font-medium text-slate">
            Phone number
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            className={`mt-2 ${inputClasses}`}
            placeholder="04XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-slate">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className={`mt-2 ${inputClasses}`}
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-slate">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={`mt-2 ${inputClasses}`}
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald px-8 py-4 font-display text-base font-medium text-white shadow-card transition-colors duration-200 hover:bg-gold hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <Send className="h-5 w-5" aria-hidden="true" />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p role="status" className="text-sm font-medium text-emerald">
          Thanks — your message has been sent. We'll be in touch shortly.
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
  );
}
