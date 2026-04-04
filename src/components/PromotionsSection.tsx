import { motion } from "framer-motion";
import { Sparkles, Shield, Clock } from "lucide-react";

const promos = [
  {
    icon: Sparkles,
    title: "Weekend Special",
    desc: "Get 20% off on weekend bookings. Book Friday to Sunday and save big.",
    badge: "20% OFF",
  },
  {
    icon: Shield,
    title: "Full Insurance",
    desc: "All vehicles include comprehensive insurance coverage at no extra cost.",
    badge: "INCLUDED",
  },
  {
    icon: Clock,
    title: "First-Time Bonus",
    desc: "New customers get a free upgrade to the next tier on their first rental.",
    badge: "FREE UPGRADE",
  },
];

const PromotionsSection = () => (
  <section className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3">Exclusive Offers</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Special <span className="gold-text">Promotions</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {promos.map((promo, i) => (
          <motion.div
            key={promo.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-background rounded-2xl p-8 border border-border hover:border-primary/40 transition-all group gold-glow-hover"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center">
                <promo.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="gold-gradient text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                {promo.badge}
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{promo.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{promo.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PromotionsSection;
