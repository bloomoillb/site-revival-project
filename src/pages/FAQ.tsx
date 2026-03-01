import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const faqKeys = Array.from({ length: 10 }, (_, i) => ({
  qKey: `faq.q${i + 1}`,
  aKey: `faq.a${i + 1}`,
}));

const FAQ = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          {t("faq.title")}
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          {t("faq.subtitle")}
        </p>
        <Accordion type="single" collapsible className="space-y-2">
          {faqKeys.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg border px-4">
              <AccordionTrigger className="text-left text-foreground font-medium">{t(faq.qKey)}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{t(faq.aKey)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
