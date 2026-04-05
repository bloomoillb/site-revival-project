import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Leaf, Heart, Sparkles, Clock, CheckCircle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

interface ProductConfig {
  nameKey: string;
  taglineKey: string;
  descriptionKey: string;
  price: string;
  size: string;
  image: string;
  video?: string;
  benefitKeys: string[];
  ingredients: { nameKey: string; benefitKey?: string }[];
  howToUseKeys: string[];
  whatsappText: string;
  advisoryOverrideKeys?: { boldKey: string; textKey: string }[];
  seo: { title: string; description: string; canonical: string };
  resultStatements: string[];
  faq: { q: string; a: string }[];
}

const productData: Record<string, ProductConfig> = {
  hair: {
    nameKey: "product.hair.name",
    taglineKey: "product.hair.tagline",
    descriptionKey: "product.hair.description",
    price: "$25",
    size: "100 ml / 3.4 oz",
    image: "/images/hair-oil.webp",
    benefitKeys: ["product.hair.benefit1", "product.hair.benefit2", "product.hair.benefit3", "product.hair.benefit4", "product.hair.benefit5"],
    ingredients: [
      { nameKey: "product.hair.ing1", benefitKey: "product.hair.ing1b" },
      { nameKey: "product.hair.ing2", benefitKey: "product.hair.ing2b" },
      { nameKey: "product.hair.ing3", benefitKey: "product.hair.ing3b" },
      { nameKey: "product.hair.ing4", benefitKey: "product.hair.ing4b" },
      { nameKey: "product.hair.ing5", benefitKey: "product.hair.ing5b" },
    ],
    howToUseKeys: ["product.hair.use1", "product.hair.use2", "product.hair.use3", "product.hair.use4"],
    whatsappText: "Hello!%20I%27m%20interested%20in%20the%20Premium%20Hair%20Oil.",
    seo: {
      title: "Bloom Oil Hair | Repair & Shine Oil",
      description: "Nourish and strengthen your hair with Bloom Oil's natural blend of coconut, castor, and almond oils. Visible shine and softness in weeks.",
      canonical: "/product/hair",
    },
    resultStatements: [
      "Noticeably softer, silkier hair within 1–2 weeks of regular use.",
      "Improved shine and manageability after just a few applications.",
      "Reduced appearance of split ends and breakage over 3–4 weeks.",
      "Scalp feels refreshed and conditioned with consistent overnight use.",
    ],
    faq: [
      { q: "Can I use it on colored hair?", a: "Yes, our hair oil is gentle and safe for color-treated hair." },
      { q: "How much oil should I use per session?", a: "3–5 drops for short hair, 5–8 drops for longer hair. Adjust based on thickness." },
      { q: "Will it make my hair greasy?", a: "No, the lightweight formula absorbs quickly without leaving a greasy residue when used in the right amount." },
    ],
  },
  body: {
    nameKey: "product.body.name",
    taglineKey: "product.body.tagline",
    descriptionKey: "product.body.description",
    price: "$30",
    size: "100 ml / 3.4 oz",
    image: "/images/body-oil-new.png",
    benefitKeys: Array.from({ length: 10 }, (_, i) => `product.body.benefit${i + 1}`),
    ingredients: [
      { nameKey: "ing.sweetAlmond" },
      { nameKey: "ing.vitaminE" },
      { nameKey: "ing.sweetOrange" },
      { nameKey: "ing.rosemaryOil" },
      { nameKey: "ing.ginger" },
    ],
    howToUseKeys: ["product.body.use1", "product.body.use2", "product.body.use3"],
    whatsappText: "Hello!%20I%27m%20interested%20in%20the%20Luxurious%20Body%20Oil.",
    seo: {
      title: "Bloom Oil Body | Hydrating Skin Oil",
      description: "Deeply hydrate and nourish your skin with Bloom Oil's body oil. Fast-absorbing, natural glow formula with sweet almond and vitamin E.",
      canonical: "/product/body",
    },
    resultStatements: [
      "Skin feels deeply moisturized and supple from the first application.",
      "Natural, healthy-looking glow develops within days of daily use.",
      "Rough patches and dry areas feel noticeably smoother after 1–2 weeks.",
      "Skin stays soft and hydrated for hours without greasy residue.",
    ],
    faq: [
      { q: "Can I use it on my face?", a: "This oil is formulated for body use. For facial care, we recommend our specialized products." },
      { q: "Is it suitable for use during pregnancy?", a: "Our ingredients are natural, but we recommend consulting your doctor before use during pregnancy." },
      { q: "Does it stain clothes?", a: "The oil absorbs quickly. Allow a minute before dressing for best results." },
    ],
  },
  nails: {
    nameKey: "product.nails.name",
    taglineKey: "product.nails.tagline",
    descriptionKey: "product.nails.description",
    price: "$7",
    size: "15 ml / 0.5 oz",
    image: "/images/nail-oil.webp",
    benefitKeys: ["product.nails.benefit1", "product.nails.benefit2", "product.nails.benefit3", "product.nails.benefit4", "product.nails.benefit5"],
    ingredients: [
      { nameKey: "product.nails.ing1", benefitKey: "product.nails.ing1b" },
      { nameKey: "product.nails.ing2", benefitKey: "product.nails.ing2b" },
      { nameKey: "product.nails.ing3", benefitKey: "product.nails.ing3b" },
      { nameKey: "product.nails.ing4", benefitKey: "product.nails.ing4b" },
    ],
    howToUseKeys: ["product.nails.use1", "product.nails.use2", "product.nails.use3"],
    whatsappText: "Hello!%20I%27m%20interested%20in%20the%20Nail%20Care%20Oil.",
    seo: {
      title: "Bloom Oil Nails | Nail Strength & Care Oil",
      description: "Strengthen brittle nails and hydrate cuticles with Bloom Oil's nail care formula. Natural oils for healthy, smooth, radiant nails.",
      canonical: "/product/nails",
    },
    resultStatements: [
      "Nails feel stronger and less prone to breakage within 1–2 weeks.",
      "Cuticles appear softer and healthier with daily application.",
      "Natural nail shine improves noticeably after consistent use.",
      "Reduced splitting and peeling over 3–4 weeks of regular care.",
    ],
    faq: [
      { q: "Can I apply it over nail polish?", a: "For best absorption, apply directly to bare nails and cuticles." },
      { q: "How long until I see stronger nails?", a: "Most users notice improvement in nail strength within 2–3 weeks of daily use." },
      { q: "Can I use it on toenails too?", a: "Yes, the formula works equally well on fingernails and toenails." },
    ],
  },
  eyebrows: {
    nameKey: "product.eyebrows.name",
    taglineKey: "product.eyebrows.tagline",
    descriptionKey: "product.eyebrows.description",
    price: "$12",
    size: "15 ml / 0.5 oz",
    image: "/images/brow-oil.png",
    video: "/images/Bloomoil_Lebanon_Eyelash.mp4",
    benefitKeys: ["product.eyebrows.benefit1", "product.eyebrows.benefit2", "product.eyebrows.benefit3", "product.eyebrows.benefit4", "product.eyebrows.benefit5"],
    ingredients: [
      { nameKey: "ing.castor" },
      { nameKey: "ing.sweetAlmond" },
      { nameKey: "ing.argan" },
      { nameKey: "ing.vitaminE" },
    ],
    howToUseKeys: ["product.eyebrows.use1", "product.eyebrows.use2", "product.eyebrows.use3"],
    whatsappText: "Hello!%20I%27m%20interested%20in%20the%20Brow%20&%20Lash%20Elixir.",
    advisoryOverrideKeys: [
      { boldKey: "advisory.lash.bold", textKey: "advisory.lash.text" },
      { boldKey: "advisory.external.bold", textKey: "advisory.external.text" },
      { boldKey: "advisory.sensitivity.bold", textKey: "advisory.sensitivity.text" },
      { boldKey: "advisory.allergies.bold", textKey: "advisory.allergies.text" },
      { boldKey: "advisory.storage.bold", textKey: "advisory.storage.text" },
      { boldKey: "advisory.children.bold", textKey: "advisory.children.text" },
    ],
    seo: {
      title: "Bloom Oil Brows | Brow & Lash Growth Elixir",
      description: "Promote fuller brows and longer lashes naturally with Bloom Oil's elixir. Castor and argan oils for visible growth in 4–6 weeks.",
      canonical: "/product/eyebrows",
    },
    resultStatements: [
      "Brows appear fuller and more defined within 4–6 weeks of nightly use.",
      "Lashes look naturally enhanced, soft, and well-groomed over time.",
      "Sparse areas begin to fill in with consistent application.",
      "Brow and lash hairs feel conditioned and softer after the first week.",
    ],
    faq: [
      { q: "Is it safe to use near my eyes?", a: "Yes, apply along the lash line carefully. Avoid direct contact with the eye itself." },
      { q: "Can I use it with lash extensions?", a: "We recommend applying to natural lashes only. Consult your lash technician before use with extensions." },
      { q: "How long before I see fuller brows?", a: "Most users see noticeable improvement in brow fullness after 4–6 weeks of nightly use." },
    ],
  },
};

const defaultAdvisoryKeys = [
  { boldKey: "advisory.patchTest.bold", textKey: "advisory.patchTest.text" },
  { boldKey: "advisory.external.bold", textKey: "advisory.external.text" },
  { boldKey: "advisory.sensitivity.bold", textKey: "advisory.sensitivity.text" },
  { boldKey: "advisory.allergies.bold", textKey: "advisory.allergies.text" },
  { boldKey: "advisory.storage.bold", textKey: "advisory.storage.text" },
  { boldKey: "advisory.children.bold", textKey: "advisory.children.text" },
];

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  const product = id ? productData[id] : null;

  useSEO({
    title: product?.seo.title || "Bloom Oil | Product Not Found",
    description: product?.seo.description || "Explore Bloom Oil's natural beauty products.",
    canonical: product?.seo.canonical || `/product/${id}`,
    jsonLd: product
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: t(product.nameKey),
          description: t(product.descriptionKey).substring(0, 200),
          image: `https://www.bloomoil.beauty${product.image}`,
          brand: { "@type": "Brand", name: "Bloom Oil" },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: product.price.replace("$", ""),
            availability: "https://schema.org/InStock",
          },
        }
      : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">{t("productPage.notFound")}</h1>
          <Link to="/" className="text-primary hover:underline">{t("productPage.backHome")}</Link>
        </div>
      </div>
    );
  }

  const advisories = product.advisoryOverrideKeys || defaultAdvisoryKeys;

  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <div className="container mx-auto px-4 py-4">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> {t("productPage.backToProducts")}
        </Link>

        {/* Hero: Image + Info */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden bg-secondary/30 flex items-center justify-center p-6"
          >
            <img src={product.image} alt={t(product.nameKey)} className="w-full max-h-[500px] object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm text-primary font-medium mb-2">{t("productPage.collection")}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{t(product.nameKey)}</h1>
            <p className="text-lg text-muted-foreground mb-4">{t(product.taglineKey)}</p>
            <div className="text-muted-foreground mb-6 space-y-3">
              {t(product.descriptionKey).split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1 text-sm text-primary">
                <Leaf className="w-4 h-4" /> {t("productPage.natural")}
              </span>
              <span className="inline-flex items-center gap-1 text-sm text-primary">
                <Heart className="w-4 h-4" /> {t("productPage.crueltyFree")}
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-4xl font-bold text-primary">{product.price}</span>
              <span className="text-muted-foreground">{product.size}</span>
            </div>

            <a href={`https://wa.me/79403188?text=${product.whatsappText}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full gap-2 px-8 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                {t("productPage.orderWhatsapp")}
              </Button>
            </a>
          </motion.div>
        </div>

        {/* H2 Sections: Benefits, Ingredients, How to Use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">{t("productPage.keyBenefits")}</h2>
            </div>
            <ul className="space-y-3">
              {product.benefitKeys.map((key) => (
                <li key={key} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">{t("productPage.ingredients")}</h2>
            </div>
            <ul className="space-y-3">
              {product.ingredients.map((ing) => (
                <li key={ing.nameKey} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>
                    <span className="text-foreground font-medium">{t(ing.nameKey)}</span>
                    {ing.benefitKey && <span> — {t(ing.benefitKey)}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">{t("productPage.howToUse")}</h2>
            </div>
            <div className="space-y-3">
              {product.howToUseKeys.map((key, i) => (
                <p key={i} className="text-sm text-muted-foreground">{t(key)}</p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* H2: Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-card rounded-2xl p-6 border border-border shadow-sm max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Results</h2>
            </div>
            <ul className="space-y-3">
              {product.resultStatements.map((statement, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {statement}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* H2: FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-foreground">FAQ</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {product.faq.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-4">
                <AccordionTrigger className="text-left text-foreground font-medium">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-4">
            <Link to="/faq" className="text-primary font-medium hover:underline text-sm">
              Read our FAQ →
            </Link>
          </div>
        </motion.div>

        {/* Usage Advisory */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 mb-8"
        >
          <div className="bg-secondary/60 rounded-2xl p-8 border border-border max-w-2xl">
            <h2 className="font-semibold text-foreground mb-4">{t("productPage.usageAdvisory")}</h2>
            <ul className="space-y-2">
              {advisories.map((a) => (
                <li key={a.boldKey} className="text-sm text-muted-foreground flex gap-2">
                  <span>•</span>
                  <span><strong className="text-foreground">{t(a.boldKey)}</strong> {t(a.textKey)}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      <FooterCTA />
    </div>
  );
};

export default ProductPage;
