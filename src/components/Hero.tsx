"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-charcoal"
    >
      {/* TODO: replace with a real licensed photo of a modern Australian home exterior before launch */}
      <Image
        src="/images/hero-home.jpg"
        alt="Modern Australian home exterior at dusk with warm interior lighting"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/60 to-charcoal/80" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative mx-auto max-w-8xl px-6 md:px-10"
      >
        <div className="max-w-2xl">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-gold"
          >
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Licensed &amp; Insured Sydney Electrician
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
          >
            Powering Sydney With Quality Electrical Solutions
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-[600px] text-lg leading-relaxed text-white/90"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-8 py-4 font-display text-base font-medium text-white shadow-card transition-colors duration-200 hover:bg-gold hover:text-charcoal"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Nick
            </a>
            <Link
              href="/quote"
              className="glass-dark inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-4 font-display text-base font-medium text-white transition-colors duration-200 hover:bg-white hover:text-emerald"
            >
              Request Quote
            </Link>
          </motion.div>

          <motion.a
            href={siteConfig.phoneHref}
            variants={itemVariants}
            className="mt-8 inline-flex items-center gap-2 text-sm text-white/80 transition-colors duration-200 hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-8 flex justify-center text-white/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
