import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsSection from "@/components/ProductsSection";
import AdvisorySection from "@/components/AdvisorySection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <AdvisorySection />
        <section className="py-12 px-4 text-center">
          <p className="text-muted-foreground mb-3">Have questions about our products?</p>
          <Link to="/faq" className="text-primary font-medium hover:underline">
            Read our FAQ →
          </Link>
        </section>
        <FooterCTA />
      </main>
      {/* Hidden SEO content for search engine crawlers */}
      <div className="sr-only" aria-hidden="true">
        <h2>Bloom Oil - Natural Beauty Products</h2>
        <p>Premium natural beauty oil for hair, skin, nails, eyebrows, and lashes. Made from 100% organic, cruelty-free ingredients.</p>
        <p>Our product range includes Premium Hair Oil, Luxurious Body Oil, Nail Care Oil Mix, and Brow &amp; Lash Elixir.</p>
        <p>All Bloom Oil products are crafted with natural ingredients like castor oil, argan oil, sweet almond oil, jojoba oil, and vitamin E to nourish, soften, and give a natural glow.</p>
        <p>Shop natural beauty oils online. Free delivery available. Order via WhatsApp.</p>
      </div>
    </div>
  );
};

export default Index;
