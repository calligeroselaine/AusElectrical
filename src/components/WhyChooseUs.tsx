"use client";

import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Clock,
  FileCheck,
  ShieldCheck,
  Smile,
  Tag,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { whyChooseUs, type WhyChooseUsIcon } from "@/data/whyChooseUs";

const iconMap: Record<WhyChooseUsIcon, LucideIcon> = {
  ShieldCheck,
  FileCheck,
  Clock,
  Tag,
  Award,
  Zap,
  Smile,
  Building2,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-charcoal px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-gold">
          Why Sydney Trusts Us
        </span>
        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          The Difference Is In The Details
        </h2>
        <p className="mt-4 text-white/70">
          Every job comes with the same standard of licensed, insured,
          honest workmanship — no matter how big or small.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="mx-auto mt-16 grid max-w-8xl grid-cols-2 gap-8 md:grid-cols-4"
      >
        {whyChooseUs.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <motion.div
              key={item.label}
              variants={itemVariants}
              className="group flex flex-col items-center text-center"
            >
              <span
                aria-hidden="true"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors duration-200 ease-out group-hover:bg-gold/20"
              >
                <Icon className="h-7 w-7" />
              </span>
              <span className="mt-4 font-display text-sm font-medium text-white/90 md:text-base">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
