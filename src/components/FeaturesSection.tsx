import { motion } from "framer-motion";
import { Leaf, Heart, Award, Sparkles } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Natural", desc: "Pure organic ingredients" },
  { icon: Heart, title: "Cruelty Free", desc: "Never tested on animals" },
  { icon: Award, title: "Premium Quality", desc: "Carefully crafted formulas" },
  { icon: Sparkles, title: "Visible Results", desc: "See the difference in weeks" },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
