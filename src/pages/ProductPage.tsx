import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const productData: Record<string, { name: string; desc: string; price: string; size: string; image: string; details: string[] }> = {
  hair: {
    name: "Premium Hair Oil",
    desc: "Nourish and strengthen your hair with our blend of natural oils",
    price: "$25",
    size: "100 ml / 3.4 oz",
    image: "/images/hair-oil.png",
    details: [
      "Blend of argan, jojoba, and coconut oils",
      "Reduces frizz and adds shine",
      "Strengthens hair from root to tip",
      "Suitable for all hair types",
    ],
  },
  body: {
    name: "Luxurious Body Oil",
    desc: "Hydrate and rejuvenate your skin with our premium body oil blend",
    price: "$30",
    size: "100 ml / 3.4 oz",
    image: "/images/body-oil.png",
    details: [
      "Deep hydration for all skin types",
      "Fast-absorbing formula",
      "Natural glow and radiance",
      "Rich in vitamins and antioxidants",
    ],
  },
  nails: {
    name: "Nail Care Oil",
    desc: "Strengthen and nourish your nails with our specialized formula",
    price: "$7",
    size: "15 ml / 0.5 oz",
    image: "/images/nail-oil.png",
    details: [
      "Strengthens brittle nails",
      "Nourishes cuticles",
      "Promotes healthy nail growth",
      "Easy roll-on application",
    ],
  },
  eyebrows: {
    name: "Brow & Lash Elixir",
    desc: "Achieve fuller, more defined brows and lashes with our nourishing elixir",
    price: "$12",
    size: "15 ml / 0.5 oz",
    image: "/images/brow-oil.png",
    details: [
      "Promotes natural brow and lash growth",
      "Castor oil and vitamin E enriched",
      "Precision applicator included",
      "Visible results in 4-6 weeks",
    ],
  },
};

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-secondary/50 rounded-2xl p-8 flex items-center justify-center aspect-square"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{product.name}</h1>
            <p className="text-muted-foreground mb-6">{product.desc}</p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-4xl font-bold text-primary">{product.price}</span>
              <span className="text-muted-foreground">{product.size}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {product.details.map((d) => (
                <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {d}
                </li>
              ))}
            </ul>

            <a href="https://wa.me/79403188" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full gap-2 px-8 w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
