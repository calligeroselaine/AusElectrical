"use client";

import { motion } from "framer-motion";
import { Award, MapPin, Phone, ShieldCheck, type LucideIcon } from "lucide-react";
import { about } from "@/data/about";
import { siteConfig } from "@/lib/site-config";

const credibilityIconMap: Record<string, LucideIcon> = {
  Award,
  ShieldCheck,
  MapPin,
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeLeft}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-3xl bg-gold/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full bg-emerald/10"
          />
          <div className="relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden rounded-3xl bg-charcoal px-8 text-center shadow-card">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-gold">
              <ShieldCheck className="h-10 w-10" aria-hidden="true" />
            </span>
            <p className="mt-8 font-display text-6xl font-bold text-white">
              {about.statValue}
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/70">
              {about.statLabel}
            </p>
            <div className="mt-8 h-px w-16 bg-white/20" aria-hidden="true" />
            <p className="mt-8 font-display text-lg font-semibold text-white">
              {siteConfig.ownerName}
            </p>
            <p className="mt-1 text-sm text-white/60">
              Owner &amp; Licensed Electrician
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeRight}
        >
          <span className="text-sm font-medium uppercase tracking-widest text-gold-dark">
            {about.eyebrow}
          </span>
          <h2 className="mt-4 text-4xl font-bold text-slate md:text-5xl">
            {about.heading}
          </h2>

          <div className="mt-6 space-y-4">
            {about.bio.map((paragraph, index) => (
              <p key={index} className="leading-relaxed text-slate-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {about.credibilityMarkers.map((marker) => {
              const Icon = credibilityIconMap[marker.icon];
              return (
                <li
                  key={marker.label}
                  className="flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-sm font-medium text-slate"
                >
                  <Icon
                    className="h-4 w-4 text-emerald"
                    aria-hidden="true"
                  />
                  {marker.label}
                </li>
              );
            })}
          </ul>

          <a
            href={siteConfig.phoneHref}
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-8 py-4 font-display text-base font-medium text-white shadow-card transition-colors duration-200 hover:bg-gold hover:text-charcoal"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Nick
          </a>
        </motion.div>
      </div>
    </section>
  );
}
