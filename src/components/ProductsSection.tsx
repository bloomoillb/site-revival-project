import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Premium Hair Oil",
    desc: "Nourish and strengthen your hair with our blend of natural oils",
    price: "$25",
    size: "100 ml / 3.4 oz",
    image: "/images/hair-oil.webp",
    path: "/product/hair",
  },
  {
    name: "Luxurious Body Oil",
    desc: "Hydrate and rejuvenate your skin with our premium body oil blend",
    price: "$30",
    size: "100 ml / 3.4 oz",
    image: "/images/body-oil-new.png",
    path: "/product/body",
  },
  {
    name: "Nail Care Oil",
    desc: "Strengthen and nourish your nails with our specialized formula",
    price: "$7",
    size: "15 ml / 0.5 oz",
    image: "/images/nail-oil.webp",
    path: "/product/nails",
  },
  {
    name: "Brow & Lash Elixir",
    desc: "Achieve fuller, more defined brows and lashes with our nourishing elixir",
    price: "$12",
    size: "15 ml / 0.5 oz",
    image: "/images/brow-oil.png",
    path: "/product/eyebrows",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Premium Collection</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Choose from our carefully curated range of natural beauty oils
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={p.path}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 h-full">
                  <div className="aspect-square bg-secondary/50 flex items-center justify-center p-6 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      width={400}
                      height={400}
                      loading={i < 2 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground text-lg mb-1">{p.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{p.desc}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{p.price}</span>
                      <span className="text-xs text-muted-foreground">{p.size}</span>
                    </div>
                    <p className="text-sm text-primary font-medium mt-3 group-hover:underline">Learn More →</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
