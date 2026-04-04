import { motion } from "framer-motion";
import { Search, MapPin, CalendarDays } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroCar} alt="Luxury car" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary uppercase tracking-[0.3em] text-sm font-semibold mb-6"
        >
          Luxury Car Rental
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Drive Your Freedom
          <br />
          <span className="gold-text">with Alivio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Experience the finest luxury vehicles. Unmatched comfort, style, and performance for every journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <input
                type="text"
                placeholder="Pick-up location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent w-full text-foreground placeholder:text-muted-foreground outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-3 bg-muted rounded-xl px-4 py-3">
              <CalendarDays className="w-5 h-5 text-primary shrink-0" />
              <input
                type="date"
                className="bg-transparent w-full text-foreground outline-none text-sm"
              />
            </div>
            <button
              onClick={() => navigate("/cars")}
              className="gold-gradient text-primary-foreground rounded-xl px-6 py-3 font-semibold flex items-center justify-center gap-2 transition-all gold-glow-hover"
            >
              <Search className="w-5 h-5" />
              Search Cars
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
