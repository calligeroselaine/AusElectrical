import type { Metadata } from "next";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import { getGeneralFaqs } from "@/data/faqs";

export const dynamic = "force-static";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Reviews />
        <section className="bg-white px-6 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-3xl">
            <FAQSection faqs={getGeneralFaqs()} eyebrow="Got Questions?" />
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
