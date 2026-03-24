import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import PromoBanner from "@/components/PromoBanner";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0b08] text-[#f5eee6]">
      <PageLoader />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <MenuSection />
      <PromoBanner />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}