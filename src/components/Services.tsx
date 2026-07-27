"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { iconMap } from "@/lib/icon-map";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="bg-mist px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-gold-dark">
          What We Do
        </span>
        <h2 className="mt-4 text-4xl font-bold text-slate md:text-5xl">
          Electrical Services Built On Trust
        </h2>
        <p className="mt-4 text-slate-muted">
          From a single power point to a full switchboard upgrade, every job
          is handled with the same licensed workmanship and honest advice —
          no shortcuts, no surprises.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="mx-auto mt-16 grid max-w-8xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon];

          return (
            <motion.div key={service.slug} variants={cardVariants}>
              <Link
                href={`/services/${service.slug}`}
                aria-label={`Learn more about ${service.title}`}
                className="group block h-full rounded-2xl bg-white p-8 shadow-card transition-shadow duration-200 ease-out hover:shadow-card-hover"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="flex h-full flex-col"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald/10 text-emerald transition-colors duration-200 ease-out group-hover:bg-emerald group-hover:text-white"
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-slate">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-muted">
                    {service.shortDescription}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-emerald transition-colors duration-200 ease-out group-hover:text-gold-dark">
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
