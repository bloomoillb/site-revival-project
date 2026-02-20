import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const FooterCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto text-center max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Beauty care, without the complexity.
        </h2>
        <p className="text-muted-foreground mb-8">
          Balanced natural oil blends for everyday care
        </p>
        <a href="https://wa.me/79403188" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="rounded-full gap-2 px-8">
            <MessageCircle className="w-5 h-5" />
            Contact Us on WhatsApp
          </Button>
        </a>
      </motion.div>

      <div className="container mx-auto mt-16 pt-8 border-t border-border text-center space-y-4">
        <div className="flex items-center justify-center gap-4">
          <a href="https://www.instagram.com/bloomoillb" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://www.tiktok.com/@bloomoil" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" aria-label="TikTok">
            <TikTokIcon />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© 2025 Bloom Oil. Natural Beauty Solutions. All rights reserved.</p>
      </div>
    </section>
  );
};

export default FooterCTA;
