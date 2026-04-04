import { motion } from "framer-motion";
import { cars } from "@/data/cars";
import CarCard from "./CarCard";

const FeaturedCars = () => {
  const featured = cars.filter((c) => c.featured);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-3">Our Fleet</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="gold-text">Vehicles</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
