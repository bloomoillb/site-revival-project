import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const productKeys = [
  { nameKey: "product.hair.name", descKey: "product.hair.desc", price: "$25", size: "100 ml / 3.4 oz", image: "/images/hair-oil.webp", path: "/product/hair" },
  { nameKey: "product.body.name", descKey: "product.body.desc", price: "$30", size: "100 ml / 3.4 oz", image: "/images/body-oil-new.png", path: "/product/body" },
  { nameKey: "product.nails.name", descKey: "product.nails.desc", price: "$7", size: "15 ml / 0.5 oz", image: "/images/nail-oil.webp", path: "/product/nails" },
  { nameKey: "product.eyebrows.name", descKey: "product.eyebrows.desc", price: "$12", size: "15 ml / 0.5 oz", image: "/images/brow-oil.png", path: "/product/eyebrows" },
];

const ProductsSection = () => {
  const { t } = useLanguage();
  return (
    <section id="products" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("products.title")}</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">{t("products.subtitle")}</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productKeys.map((p, i) => (
            <motion.div
              key={p.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={p.path}>
                <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50 h-full">
                  <div className="aspect-square bg-secondary/50 flex items-center justify-center p-6 overflow-hidden">
                    <img src={p.image} alt={t(p.nameKey)} width={400} height={400} loading={i < 2 ? "eager" : "lazy"} decoding="async" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground text-lg mb-1">{t(p.nameKey)}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{t(p.descKey)}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{p.price}</span>
                      <span className="text-xs text-muted-foreground">{p.size}</span>
                    </div>
                    <p className="text-sm text-primary font-medium mt-3 group-hover:underline">{t("products.learnMore")}</p>
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
