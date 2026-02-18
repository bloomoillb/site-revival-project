import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const advisories = [
  { bold: "Patch Test Required:", text: "Always perform a patch test 24 hours before first use." },
  { bold: "External Use Only:", text: "Keep away from eyes and mucous membranes." },
  { bold: "Allergies:", text: "Discontinue use if irritation, redness, or allergic reaction occurs." },
  { bold: "Storage:", text: "Store in a cool, dry place away from direct sunlight." },
  { bold: "Children:", text: "Keep out of reach of children." },
];

const AdvisorySection = () => {
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
            <h4 className="font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Usage Advisory</h4>
          </div>
          <ul className="space-y-2">
            {advisories.map((a) => (
              <li key={a.bold} className="text-sm text-muted-foreground flex gap-2">
                <span>•</span>
                <span><strong className="text-foreground">{a.bold}</strong> {a.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvisorySection;
