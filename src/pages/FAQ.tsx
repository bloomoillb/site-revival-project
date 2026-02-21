import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What makes Bloom Oil products different from other beauty oils?",
    a: "Bloom Oil products are crafted with 100% natural, carefully sourced ingredients. Each formula is designed for a specific beauty need — hair, body, nails, or brows — ensuring targeted nourishment and visible results.",
  },
  {
    q: "Are your oils 100% natural?",
    a: "Yes! All Bloom Oil products are made with pure, natural ingredients. We never use synthetic fragrances, parabens, or harsh chemicals.",
  },
  {
    q: "How long does delivery take?",
    a: "Delivery times vary by location. We offer cash on delivery for local orders. Contact us via WhatsApp for specific delivery estimates to your area.",
  },
  {
    q: "How long before I see results?",
    a: "Most customers notice visible improvements within 2-4 weeks of regular use. For brow and lash products, consistent use for 4-6 weeks is recommended for best results.",
  },
  {
    q: "Are Bloom Oil products suitable for sensitive skin?",
    a: "Our products are formulated with gentle, natural ingredients. However, we always recommend performing a patch test 24 hours before first use, especially if you have sensitive skin.",
  },
  {
    q: "How should I store my Bloom Oil products?",
    a: "Store in a cool, dry place away from direct sunlight. This helps maintain the quality and effectiveness of the natural ingredients.",
  },
  {
    q: "Can I use multiple Bloom Oil products together?",
    a: "Absolutely! Our products are designed to complement each other. You can use the hair oil, body oil, nail oil, and brow elixir as part of your complete beauty routine.",
  },
  {
    q: "How do I place an order?",
    a: "Simply click 'Order via WhatsApp' on any product page to message us directly. We offer cash on delivery for your convenience.",
  },
  {
    q: "Do you offer refunds or exchanges?",
    a: "Please contact us via WhatsApp to discuss any concerns with your order. We're committed to your satisfaction.",
  },
  {
    q: "Are your products cruelty-free?",
    a: "Yes! Bloom Oil is 100% cruelty-free. We never test our products on animals.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Frequently Asked Questions
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Find answers to common questions about our products, ordering, and delivery
        </p>
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
