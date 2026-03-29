import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSEO } from "@/hooks/useSEO";

const faqSections = [
  {
    title: "Product & Ingredients",
    items: [
      { q: "What is Bloom Oil?", a: "Bloom Oil is a natural multi-purpose beauty oil designed to nourish hair, skin, nails, brows, and lashes using clean, effective ingredients." },
      { q: "Is Bloom Oil 100% natural?", a: "Yes, Bloom Oil is made with carefully selected natural oils known for their results and effectiveness. We never use parabens, sulfates, or synthetic fragrances." },
      { q: "Can I use it on sensitive skin?", a: "Yes, Bloom Oil is gentle. However, we recommend performing a patch test 24 hours before first use, especially if you have sensitive skin." },
      { q: "What oils are used in Bloom Oil products?", a: "Our formulas feature premium natural oils including castor oil, sweet almond oil, argan oil, coconut oil, rosemary extract, and vitamin E — each chosen for its proven benefits." },
    ],
  },
  {
    title: "Usage & Application",
    items: [
      { q: "How do I use Bloom Oil?", a: "Apply a few drops directly to the desired area — hair, skin, nails, brows, or lashes — and massage gently until absorbed." },
      { q: "How often should I use it?", a: "For best results, use daily or at least 3–4 times per week. Consistency is key to seeing visible improvement." },
      { q: "Can I leave it overnight?", a: "Yes, leaving Bloom Oil overnight can enhance absorption and deliver deeper nourishment. This is especially effective for hair and brow treatments." },
      { q: "Can I use multiple Bloom Oil products together?", a: "Absolutely. Our products are designed to complement each other. You can use the hair oil, body oil, nail oil, and brow elixir as part of a complete daily beauty routine." },
    ],
  },
  {
    title: "Results & Expectations",
    items: [
      { q: "When will I see results?", a: "Most users notice improved hydration and shine within several days. Stronger, more visible results typically appear after 2–3 weeks of consistent use." },
      { q: "Does it help with hair growth?", a: "Bloom Oil supports healthier hair by nourishing the scalp and strengthening strands. With regular use, hair may appear fuller and more vibrant over time." },
      { q: "How long before my nails get stronger?", a: "Most users report visibly stronger, less brittle nails within 2–3 weeks of daily application to nails and cuticles." },
      { q: "Will I see fuller brows with the Brow Elixir?", a: "With consistent nightly use for 4–6 weeks, most users notice brows appearing more defined and fuller. Lashes may also look naturally enhanced." },
    ],
  },
  {
    title: "Safety & Storage",
    items: [
      { q: "Is it safe for lashes and eyebrows?", a: "Yes, our Brow & Lash Elixir is specifically formulated for this area. Apply carefully in small amounts along the lash line, avoiding direct eye contact." },
      { q: "Is it suitable for all skin types?", a: "Yes, Bloom Oil is suitable for dry, normal, and combination skin types. The natural formula works gently on all skin without clogging pores." },
      { q: "Are your products cruelty-free?", a: "Yes, Bloom Oil is 100% cruelty-free. We never test our products on animals." },
      { q: "How should I store my Bloom Oil?", a: "Store in a cool, dry place away from direct sunlight. This preserves the quality and potency of the natural ingredients." },
    ],
  },
  {
    title: "Orders & Delivery",
    items: [
      { q: "How can I order?", a: "You can order directly from our website product pages by tapping 'Order via WhatsApp'. We also accept orders through Instagram DM." },
      { q: "How long does delivery take?", a: "Delivery takes up to 4 working days depending on your location. We offer cash on delivery for all local orders across Lebanon." },
      { q: "Is there free delivery?", a: "Yes, we offer free delivery on all orders over $49. Orders under $49 have a small delivery fee." },
      { q: "Who can I contact for support?", a: "Reach us anytime via WhatsApp at 79 403 188, email at info@bloomoil.beauty, or Instagram DM @bloomoillb. We're happy to help!" },
    ],
  },
];

const allFaqItems = faqSections.flatMap((s) => s.items);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const FAQ = () => {
  useSEO({
    title: "Bloom Oil FAQ | Hair, Skin & Nail Oil Questions",
    description: "Find answers about Bloom Oil usage, results, ingredients, and benefits for hair, skin, nails, brows, and lashes. Natural beauty oil FAQ.",
    canonical: "/faq",
    jsonLd: faqJsonLd,
  });

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <h1
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Frequently Asked Questions
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          Everything you need to know about Bloom Oil — from how to use it, to what results you can expect, to ordering and delivery. Browse our most common questions below.
        </p>

        {faqSections.map((section, si) => (
          <div key={si} className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">{section.title}</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {section.items.map((item, qi) => (
                <AccordionItem
                  key={qi}
                  value={`s${si}-q${qi}`}
                  className="bg-card rounded-lg border border-border px-4"
                >
                  <AccordionTrigger className="text-left text-foreground font-medium">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}

        <div className="text-center mt-8 space-y-3">
          <p className="text-muted-foreground text-sm">
            Still have questions? We're here to help.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="https://wa.me/79403188" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline text-sm">
              Contact us on WhatsApp
            </a>
            <span className="text-muted-foreground">·</span>
            <Link to="/" className="text-primary font-medium hover:underline text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
};

export default FAQ;
