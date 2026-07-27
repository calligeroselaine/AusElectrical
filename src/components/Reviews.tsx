"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-gold-dark">
          What Customers Say
        </span>
        <h2 className="mt-4 text-4xl font-bold text-slate md:text-5xl">
          Trusted By Homeowners Across Sydney
        </h2>
        <p className="mt-4 text-slate-muted">
          We let the work speak for itself — here's what customers have said
          after having us out to their home or business.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto mt-16 flex max-w-8xl snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.name}-${index}`}
            variants={cardVariants}
            className="w-[85%] flex-shrink-0 snap-center rounded-2xl bg-mist p-8 shadow-card md:w-auto md:flex-shrink"
          >
            <div className="flex items-center gap-1 text-gold-dark" aria-hidden="true">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-dark" />
              ))}
            </div>
            <p className="mt-4 leading-relaxed text-slate-muted">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="mt-6 font-display text-sm font-semibold text-slate">
              {testimonial.name}
              {testimonial.placeholder && (
                <span className="ml-2 text-xs font-normal text-slate-muted">
                  (placeholder review)
                </span>
              )}
              <span className="font-normal text-slate-muted">
                {" "}
                &middot; {testimonial.location}
              </span>
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="/reviews"
          className="inline-flex items-center gap-1 text-sm font-medium text-emerald transition-colors duration-200 hover:text-gold-dark"
        >
          Read all reviews
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
