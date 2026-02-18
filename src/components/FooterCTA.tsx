import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      <div className="container mx-auto mt-16 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">© 2025 Bloom Oil. Natural Beauty Solutions. All rights reserved.</p>
      </div>
    </section>
  );
};

export default FooterCTA;
