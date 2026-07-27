import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export const dynamic = "force-static";

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
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
