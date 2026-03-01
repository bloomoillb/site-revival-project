import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-gradient-to-b from-secondary/50 to-background overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
          {t("hero.title1")}{" "}
          <span className="text-primary">{t("hero.titleBrand")}</span>
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a href="https://wa.me/79403188" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="rounded-full gap-2 px-8 w-full sm:w-auto">
              <MessageCircle className="w-5 h-5" />
              {t("hero.orderNow")}
            </Button>
          </a>
          <a href="#products" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              {t("hero.viewProducts")}
            </Button>
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
