import { motion, useScroll, useTransform } from "framer-motion";
import { Search, MapPin, CalendarDays, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroCar} alt="Luxury car" className="w-full h-full object-cover scale-110" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, hsl(43 72% 52% / 0.4) 0%, transparent 70%)" }} />

      <motion.div className="relative z-10 container mx-auto px-4 text-center pt-20" style={{ y: textY, opacity }}>
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
          {"Drive Your Freedom".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
          <br />
          <motion.span
            className="gold-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            with Alivio
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12"
        >
          Experience the finest luxury vehicles. Unmatched comfort, style, and performance for every journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="max-w-3xl mx-auto bg-card/60 backdrop-blur-2xl rounded-2xl p-6 border border-border/50 shadow-2xl shadow-background/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3 border border-border/30">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <input
                type="text"
                placeholder="Pick-up location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent w-full text-foreground placeholder:text-muted-foreground outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3 border border-border/30">
              <CalendarDays className="w-5 h-5 text-primary shrink-0" />
              <input
                type="date"
                className="bg-transparent w-full text-foreground outline-none text-sm"
              />
            </div>
            <motion.button
              onClick={() => navigate("/cars")}
              className="gold-gradient text-primary-foreground rounded-xl px-6 py-3 font-semibold flex items-center justify-center gap-2 gold-glow-hover"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Search className="w-5 h-5" />
              Search Cars
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
