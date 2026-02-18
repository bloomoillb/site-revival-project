import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Are your products 100% natural?", a: "Yes, all Bloom Oil products are made from pure, organic ingredients sourced responsibly." },
  { q: "How do I use the hair oil?", a: "Apply a small amount to damp or dry hair. Massage into scalp and distribute through lengths. Can be used as a leave-in treatment or pre-wash mask." },
  { q: "Are your products tested on animals?", a: "No. Bloom Oil is 100% cruelty-free. We never test on animals." },
  { q: "How long until I see results?", a: "Most customers notice visible improvements within 2-4 weeks of regular use." },
  { q: "How do I place an order?", a: "Simply click 'Order Now via WhatsApp' to message us directly. We offer cash on delivery." },
  { q: "Do you ship internationally?", a: "Please contact us via WhatsApp to discuss shipping options for your location." },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Frequently Asked Questions
        </h1>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg border px-4">
              <AccordionTrigger className="text-left text-foreground font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <FooterCTA />
    </div>
  );
};

export default FAQ;
