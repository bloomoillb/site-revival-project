import { motion } from "framer-motion";
import { Leaf, Heart, Award, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const featureKeys = [
  { icon: Leaf, titleKey: "feat.natural", descKey: "feat.naturalDesc" },
  { icon: Heart, titleKey: "feat.cruelty", descKey: "feat.crueltyDesc" },
  { icon: Award, titleKey: "feat.quality", descKey: "feat.qualityDesc" },
  { icon: Sparkles, titleKey: "feat.results", descKey: "feat.resultsDesc" },
];

const FeaturesSection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {featureKeys.map((f, i) => (
          <motion.div
            key={f.titleKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{t(f.titleKey)}</h3>
            <p className="text-sm text-muted-foreground">{t(f.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
