import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqSections = [
  {
    title: "Product & Ingredients",
    items: [
      { q: "What is Bloom Oil?", a: "Bloom Oil is a natural multi-purpose beauty oil designed to nourish hair, skin, nails, brows, and lashes using clean, effective ingredients." },
      { q: "Is Bloom Oil 100% natural?", a: "Yes, Bloom Oil is made with carefully selected natural oils known for their results and effectiveness." },
      { q: "Can I use it on sensitive skin?", a: "Yes, Bloom Oil is gentle, but we recommend a patch test before full use." },
    ],
  },
  {
    title: "Usage",
    items: [
      { q: "How do I use Bloom Oil?", a: "Apply a few drops directly to the desired area (hair, skin, nails, brows, or lashes) and massage gently." },
      { q: "How often should I use it?", a: "For best results, use daily or at least 3–4 times per week." },
      { q: "Can I leave it overnight?", a: "Yes, leaving Bloom Oil overnight can enhance absorption and results." },
    ],
  },
  {
    title: "Results",
    items: [
      { q: "When will I see results?", a: "Most users notice improved hydration and shine within several days, with stronger results after 2–3 weeks of consistent use." },
      { q: "Does it help with hair growth?", a: "Bloom Oil supports healthier hair and may promote growth by nourishing the scalp." },
    ],
  },
  {
    title: "Safety",
    items: [
      { q: "Is it safe for lashes and eyebrows?", a: "Yes, apply carefully in small amounts to avoid contact with eyes." },
      { q: "Is it suitable for all skin types?", a: "Yes, Bloom Oil is suitable for dry, normal, and combination skin types." },
    ],
  },
  {
    title: "Orders & Support",
    items: [
      { q: "How can I order?", a: "You can order directly from our website product pages." },
      { q: "Who can I contact for support?", a: "Contact us via Instagram DM (@bloomoillb) or WhatsApp (79 403 188)." },
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
  useEffect(() => {
    document.title = "Bloom Oil FAQ | Hair, Skin & Nail Oil Questions";
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta("description", "Find answers about Bloom Oil usage, results, ingredients, and benefits for hair, skin, nails, brows, and lashes.");

    // JSON-LD
    let script = document.getElementById("faq-jsonld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "faq-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqJsonLd);

    return () => {
      document.title = "Natural Beauty Oil for Hair, Skin, Nails, Brows & Lashes | Bloom Oil";
      script?.remove();
    };
  }, []);

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
          Answer the most common questions about Bloom Oil, how to use it, and the results you can expect.
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

        <div className="text-center mt-8">
          <Link to="/" className="text-primary hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
};

export default FAQ;
