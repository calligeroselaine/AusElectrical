"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const SCROLL_THRESHOLD = 40;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "glass shadow-nav" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="#hero" className="flex items-center">
          <Image
            src={scrolled ? "/images/logo-color.png" : "/images/logo-white.png"}
            alt={siteConfig.businessName}
            width={1283}
            height={378}
            className="h-[80px] w-auto"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeId === link.href.slice(1) ? "location" : undefined}
              className={`font-display text-sm font-medium tracking-wide transition-colors duration-200 hover:text-emerald aria-[current=location]:text-emerald ${
                scrolled ? "text-slate" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="flex items-center gap-2 rounded-full bg-emerald px-6 py-3 font-display text-sm font-medium text-white shadow-card transition-colors duration-200 hover:bg-gold hover:text-charcoal"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className={`flex items-center justify-center rounded-full p-2 transition-colors duration-200 md:hidden ${
            scrolled ? "text-slate" : "text-white"
          }`}
        >
          {mobileOpen ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 top-[72px] z-40 flex flex-col bg-charcoal px-8 py-10 md:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  aria-current={activeId === link.href.slice(1) ? "location" : undefined}
                  className="border-b border-white/10 py-5 font-display text-2xl font-medium tracking-wide text-white transition-colors duration-200 hover:text-gold aria-[current=location]:text-gold"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={siteConfig.phoneHref}
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 rounded-full bg-emerald px-6 py-4 font-display text-base font-medium text-white transition-colors duration-200 hover:bg-gold hover:text-charcoal"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
