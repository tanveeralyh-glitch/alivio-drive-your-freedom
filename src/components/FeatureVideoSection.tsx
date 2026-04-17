import { motion } from "framer-motion";
import { Sparkles, Gauge, Heart } from "lucide-react";
import interiorVideo from "@/assets/feature-interior.mp4.asset.json";
import performanceVideo from "@/assets/feature-performance.mp4.asset.json";
import comfortVideo from "@/assets/feature-comfort.mp4.asset.json";

const features = [
  {
    title: "Interior",
    tagline: "Crafted in detail",
    description: "Hand-stitched leather, brushed aluminum, ambient gold lighting.",
    icon: Sparkles,
    video: interiorVideo.url,
  },
  {
    title: "Performance",
    tagline: "Engineered to thrill",
    description: "Acceleration that rewrites your sense of speed and silence.",
    icon: Gauge,
    video: performanceVideo.url,
  },
  {
    title: "Comfort",
    tagline: "Designed to disappear",
    description: "A cabin that quiets the world and amplifies the journey.",
    icon: Heart,
    video: comfortVideo.url,
  },
];

const FeatureVideoSection = () => {
  return (
    <section id="featured-experience" className="relative py-24 overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(43 72% 52% / 0.6) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-xs font-semibold mb-4">The Alivio Experience</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Three pillars of <span className="gold-text">luxury</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every Alivio vehicle is curated around an obsession with detail, performance, and serenity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative rounded-3xl overflow-hidden border border-border/50 bg-card aspect-[4/5] gold-glow-hover"
              >
                <video
                  src={feature.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="w-10 h-10 rounded-full bg-primary/15 backdrop-blur-md border border-primary/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-primary uppercase tracking-[0.25em] text-xs font-semibold">
                      {feature.tagline}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">{feature.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureVideoSection;
