import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { cars } from "@/data/cars";
import CarCard from "./CarCard";

const RecentlyViewed = ({ viewedIds }: { viewedIds: string[] }) => {
  const recentCars = viewedIds
    .map((id) => cars.find((c) => c.id === id))
    .filter(Boolean) as typeof cars;

  if (recentCars.length === 0) return null;

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" /> Recently Viewed
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Continue <span className="gold-text">Browsing</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentCars.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
