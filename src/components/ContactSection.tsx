"use client";

import { motion } from "framer-motion";
import ContactBanner from "@/components/ContactBanner";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-mist px-6 py-24 md:px-10 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-8xl"
      >
        <ContactBanner />
      </motion.div>
    </section>
  );
}
