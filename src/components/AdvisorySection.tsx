import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const advisoryKeys = [
  { boldKey: "advisory.patchTest.bold", textKey: "advisory.patchTest.text" },
  { boldKey: "advisory.external.bold", textKey: "advisory.external.text" },
  { boldKey: "advisory.sensitivity.bold", textKey: "advisory.sensitivity.text" },
  { boldKey: "advisory.allergies.bold", textKey: "advisory.allergies.text" },
  { boldKey: "advisory.storage.bold", textKey: "advisory.storage.text" },
  { boldKey: "advisory.children.bold", textKey: "advisory.children.text" },
];

const AdvisorySection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary/60 rounded-2xl p-8 border border-border"
        >
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <h4 className="font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>{t("productPage.usageAdvisory")}</h4>
          </div>
          <ul className="space-y-2">
            {advisoryKeys.map((a) => (
              <li key={a.boldKey} className="text-sm text-muted-foreground flex gap-2">
                <span>•</span>
                <span><strong className="text-foreground">{t(a.boldKey)}</strong> {t(a.textKey)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvisorySection;
