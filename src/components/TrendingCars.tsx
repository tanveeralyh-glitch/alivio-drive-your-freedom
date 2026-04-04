import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { cars } from "@/data/cars";
import CarCard from "./CarCard";

const TrendingCars = () => {
  const trending = [...cars].sort((a, b) => b.rating - a.rating).slice(0, 3);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3 flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4" /> Trending Now
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Most <span className="gold-text">Popular</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trending.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCars;
