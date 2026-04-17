import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Fuel, Users, Gauge, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { Car } from "@/data/cars";
import carPreviewVideo from "@/assets/car-preview.mp4.asset.json";

const CarCard = ({ car, index = 0 }: { car: Car; index?: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isHovered) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [isHovered]);

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
          {/* Hover video preview */}
          <video
            ref={videoRef}
            src={carPreviewVideo.url}
            muted
            loop
            playsInline
            preload="none"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
          {car.featured && (
            <span className="absolute top-4 left-4 gold-gradient text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Featured
            </span>
          )}

          {/* Quick details overlay on hover (over video) */}
          <motion.div
            className="absolute inset-0 flex flex-col items-end justify-end gap-2 p-5 bg-gradient-to-t from-background via-background/60 to-transparent"
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ pointerEvents: isHovered ? "auto" : "none" }}
          >
            <div className="w-full flex items-center justify-between text-muted-foreground text-xs">
              <span className="text-primary font-semibold">{car.horsepower} HP</span>
              <span>{car.acceleration}</span>
              <span>{car.topSpeed}</span>
            </div>
            <motion.span
              className="mt-1 gold-gradient text-primary-foreground px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 self-end"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-3.5 h-3.5" /> Quick Book
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
