import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import AdvisorySection from "@/components/AdvisorySection";
import FooterCTA from "@/components/FooterCTA";

const productData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  price: string;
  size: string;
  image: string;
  benefits: string[];
  ingredients: { name: string; benefit?: string }[];
  howToUse: string[];
  whatsappText: string;
  advisoryOverrides?: { bold: string; text: string }[];
}> = {
  hair: {
    name: "Premium Hair Oil",
    tagline: "Nourish and strengthen your hair naturally",
    description: "Our Premium Hair Oil is a luxurious blend of nature's finest oils, carefully formulated to transform your hair from the roots to the tips. Enriched with vitamins and essential fatty acids, this oil deeply nourishes each strand while promoting healthy hair growth.",
    price: "$25",
    size: "100 ml / 3.4 oz",
    image: "/images/hair-oil.png",
    benefits: [
      "Deep hydration and strengthens hair",
      "Promotes healthy hair growth and density",
      "Nourishes scalp and reduces flakiness",
      "Adds brilliant shine and softness",
      "Helps prevent breakage and split ends",
    ],
    ingredients: [
      { name: "Coconut Oil", benefit: "Deep hydration" },
      { name: "Castor Oil", benefit: "Hair growth & density" },
      { name: "Sweet Almond Oil", benefit: "Nourishment & softness" },
      { name: "Rosemary Extract", benefit: "Scalp health" },
      { name: "Vitamin E", benefit: "Antioxidant protection" },
    ],
    howToUse: [
      "Apply a few drops to damp or dry hair.",
      "Massage gently from roots to tips.",
      "For deep conditioning, apply generously and leave overnight.",
      "Use 2-3 times per week for best results.",
    ],
    whatsappText: "Hello!%20I%27m%20interested%20in%20the%20Premium%20Hair%20Oil.",
  },
  body: {
    name: "Luxurious Body Oil",
    tagline: "Hydrate and rejuvenate your skin",
    description: "Indulge in our Luxurious Body Oil, a rich blend that melts into your skin, leaving it silky smooth and deeply moisturized. Perfect for daily use, this lightweight yet nourishing formula absorbs quickly without leaving a greasy residue.",
    price: "$30",
    size: "100 ml / 3.4 oz",
    image: "/images/body-oil.png",
    benefits: [
      "Deeply nourishes the skin and keeps it feeling soft for hours",
      "Helps lock in moisture after showering to prevent dryness",
      "Improves skin smoothness and makes rough areas feel softer",
      "Gives the skin a natural, healthy-looking glow",
      "Supports more elastic, supple-looking skin over time",
      "Helps protect skin from daily environmental stress with antioxidant-rich ingredients",
      "Revives dull-looking skin and makes it look fresher and more radiant",
      "Enhances relaxation when used for body massage",
      "Absorbs well and leaves skin silky without a heavy, greasy feel",
      "Leaves a light, refreshing natural scent that boosts the self-care experience",
    ],
    ingredients: [
      { name: "Sweet Almond Oil" },
      { name: "Vitamin E" },
      { name: "Sweet Orange Oil" },
      { name: "Rosemary Oil" },
      { name: "Ginger Oil" },
    ],
    howToUse: [
      "Apply after showering while skin is still slightly damp.",
      "Massage in circular motions until fully absorbed.",
      "Use daily for best results.",
    ],
    whatsappText: "Hello!%20I%27m%20interested%20in%20the%20Luxurious%20Body%20Oil.",
  },
  nails: {
    name: "Nail Care Oil",
    tagline: "Strengthen and nourish your nails",
    description: "Give your nails the care they deserve with our specialized Nail Care Oil. This concentrated formula penetrates deep into the nail bed and cuticles, providing essential nutrients for stronger, healthier nails.",
    price: "$7",
    size: "15 ml / 0.5 oz",
    image: "/images/nail-oil.png",
    benefits: [
      "Strengthens weak, brittle nails",
      "Softens and conditions cuticles",
      "Promotes faster nail growth",
      "Prevents splitting and peeling",
      "Adds natural shine to nails",
    ],
    ingredients: [
      { name: "Jojoba Oil" },
      { name: "Vitamin E" },
      { name: "Tea Tree Oil" },
      { name: "Lemon Essential Oil" },
      { name: "Sweet Almond Oil" },
    ],
    howToUse: [
      "Apply a small drop to each nail and cuticle.",
      "Massage gently for 1-2 minutes.",
      "Use twice daily for best results, especially before bedtime.",
    ],
    whatsappText: "Hello!%20I%27m%20interested%20in%20the%20Nail%20Care%20Oil.",
  },
  eyebrows: {
    name: "Brow & Lash Elixir",
    tagline: "Achieve fuller, more defined brows and lashes",
    description: "Transform your brows and lashes with our specially formulated Elixir. Designed to stimulate hair growth and nourish existing brows and lashes, this elixir helps you achieve naturally fuller, thicker results over time.",
    price: "$12",
    size: "15 ml / 0.5 oz",
    image: "/images/brow-oil.png",
    benefits: [
      "Promotes brow and lash growth",
      "Thickens and darkens brows naturally",
      "Conditions and softens brow and lash hairs",
      "Fills in sparse areas over time",
      "Gentle formula for sensitive skin",
    ],
    ingredients: [
      { name: "Castor Oil" },
      { name: "Sweet Almond Oil" },
      { name: "Argan Oil" },
      { name: "Vitamin E" },
    ],
    howToUse: [
      "Using the applicator or a clean spoolie, apply a thin layer to clean brows and along the lash line (avoid direct contact with eyes) before bedtime.",
      "Leave on overnight and gently cleanse in the morning.",
      "Use consistently for 4–6 weeks for best visible results in the appearance of brows and lashes.",
    ],
    whatsappText: "Hello!%20I%27m%20interested%20in%20the%20Brow%20&%20Lash%20Elixir.",
    advisoryOverrides: [
      { bold: "Lash Application:", text: "Apply along the lash line only — avoid direct contact with eyes." },
      { bold: "External Use Only:", text: "Keep away from eyes and mucous membranes." },
      { bold: "Allergies:", text: "Discontinue use if irritation, redness, or allergic reaction occurs." },
      { bold: "Storage:", text: "Store in a cool, dry place away from direct sunlight." },
      { bold: "Children:", text: "Keep out of reach of children." },
    ],
  },
};

const defaultAdvisories = [
  { bold: "Patch Test Required:", text: "Always perform a patch test 24 hours before first use." },
  { bold: "External Use Only:", text: "Keep away from eyes and mucous membranes." },
  { bold: "Allergies:", text: "Discontinue use if irritation, redness, or allergic reaction occurs." },
  { bold: "Storage:", text: "Store in a cool, dry place away from direct sunlight." },
  { bold: "Children:", text: "Keep out of reach of children." },
];

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productData[id] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const advisories = product.advisoryOverrides || defaultAdvisories;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-secondary/50 rounded-2xl p-8 flex items-center justify-center aspect-square"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-sm text-primary font-medium mb-2">Bloom Oil Collection</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">{product.tagline}</p>
            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1 text-sm text-primary">
                <Leaf className="w-4 h-4" /> 100% Natural
              </span>
              <span className="inline-flex items-center gap-1 text-sm text-primary">
                <Heart className="w-4 h-4" /> Cruelty Free
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-4xl font-bold text-primary">{product.price}</span>
              <span className="text-muted-foreground">{product.size}</span>
            </div>

            <a href={`https://wa.me/79403188?text=${product.whatsappText}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full gap-2 px-8 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Key Benefits
          </h3>
          <ul className="space-y-3">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Premium Natural Ingredients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Premium Natural Ingredients
          </h3>
          <ul className="space-y-3">
            {product.ingredients.map((ing) => (
              <li key={ing.name} className="flex items-start gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <span>
                  <strong className="text-foreground">{ing.name}</strong>
                  {ing.benefit && <span> — {ing.benefit}</span>}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* How to Use */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            How to Use
          </h3>
          <div className="space-y-3">
            {product.howToUse.map((step, i) => (
              <p key={i} className="text-muted-foreground">{step}</p>
            ))}
          </div>
        </motion.div>

        {/* Usage Advisory */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 mb-8"
        >
          <div className="bg-secondary/60 rounded-2xl p-8 border border-border max-w-2xl">
            <h4 className="font-semibold text-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Usage Advisory
            </h4>
            <ul className="space-y-2">
              {advisories.map((a) => (
                <li key={a.bold} className="text-sm text-muted-foreground flex gap-2">
                  <span>•</span>
                  <span><strong className="text-foreground">{a.bold}</strong> {a.text}</span>
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
