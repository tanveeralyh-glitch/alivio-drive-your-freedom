import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, Fuel, Users, Gauge, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { Car } from "@/data/cars";

const CarCard = ({ car, index = 0 }: { car: Car; index?: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
    >
      <Link
        to={`/cars/${car.id}`}
        className="group block bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/40 gold-glow-hover"
      >
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={car.image}
            alt={`${car.brand} ${car.name}`}
            loading="lazy"
            width={800}
            height={512}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {car.featured && (
            <span className="absolute top-4 left-4 gold-gradient text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Featured
            </span>
          )}

          {/* Quick details overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-6"
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ pointerEvents: isHovered ? "auto" : "none" }}
          >
            <p className="text-primary text-xs uppercase tracking-[0.2em] font-semibold">{car.brand}</p>
            <p className="font-display text-2xl font-bold text-foreground">{car.name}</p>
            <div className="flex items-center gap-4 text-muted-foreground text-xs">
              <span>{car.horsepower} HP</span>
              <span>•</span>
              <span>{car.acceleration}</span>
              <span>•</span>
              <span>{car.topSpeed}</span>
            </div>
            <motion.span
              className="mt-2 gold-gradient text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4" /> Quick View
            </motion.span>
          </motion.div>
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wider">{car.brand}</p>
              <h3 className="font-display text-xl font-semibold text-foreground">{car.name}</h3>
            </div>
            <div className="flex items-center gap-1 text-primary">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">{car.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground text-xs mt-3 mb-4">
            <span className="flex items-center gap-1"><Fuel className="w-3.5 h-3.5" /> {car.fuel}</span>
            <span className="flex items-center gap-1"><Gauge className="w-3.5 h-3.5" /> {car.transmission}</span>
            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {car.seats}</span>
          </div>

          <div className="flex items-end justify-between border-t border-border pt-4">
            <div>
              <span className="text-primary font-display text-2xl font-bold">${car.pricePerDay}</span>
              <span className="text-muted-foreground text-sm"> /day</span>
            </div>
            <span className="text-primary text-sm font-semibold group-hover:underline">View Details →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CarCard;
