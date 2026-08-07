"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/data/faqs";

interface FAQSectionProps {
  faqs: Faq[];
  heading?: string;
  eyebrow?: string;
  className?: string;
}

export default function FAQSection({
  faqs,
  heading = "Frequently Asked Questions",
  eyebrow = "FAQs",
  className = "",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={className}>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <span className="text-sm font-medium uppercase tracking-widest text-gold-dark">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-slate md:text-4xl">
        {heading}
      </h2>

      <div className="mt-8 divide-y divide-slate-muted/15 border-t border-b border-slate-muted/15">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold text-slate transition-colors duration-200 hover:text-emerald md:text-lg"
                >
                  {faq.question}
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-emerald transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <p
                id={`faq-answer-${index}`}
                hidden={!isOpen}
                className="pb-5 leading-relaxed text-slate-muted"
              >
                {faq.answer}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
