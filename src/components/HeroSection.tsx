import { motion, useScroll, useTransform } from "framer-motion";
import { Search, MapPin, CalendarDays, ChevronDown, Play } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

const HeroSection = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic background video */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y: bgY }}>
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-110"
          aria-label="Luxury car cinematic showcase"
        />
        {/* Layered gradients for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/50" />
        <div className="absolute inset-0 bg-background/20" />
      </motion.div>

      {/* Ambient gold glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(43 72% 52% / 0.5) 0%, transparent 70%)" }}
      />

      <motion.div className="relative z-10 container mx-auto px-4 text-center pt-20" style={{ y: textY, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-background/40 backdrop-blur-md"
        >
          <Play className="w-3.5 h-3.5 text-primary fill-primary" />
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-semibold">Luxury Car Rental</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl"
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
          className="text-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Cinematic vehicles. Curated experiences. Step into a world where every drive feels like the opening scene of a film.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.button
            onClick={() => navigate("/cars")}
            className="gold-gradient text-primary-foreground rounded-xl px-8 py-4 font-semibold flex items-center justify-center gap-2 gold-glow-hover text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore the Fleet
          </motion.button>
          <motion.button
            onClick={() => document.getElementById("featured-experience")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-xl px-8 py-4 font-semibold flex items-center justify-center gap-2 border border-primary/40 bg-background/30 backdrop-blur-md text-foreground hover:bg-background/50 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Play className="w-4 h-4 fill-primary text-primary" /> Watch Reel
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="max-w-3xl mx-auto bg-card/40 backdrop-blur-2xl rounded-2xl p-5 border border-primary/15 shadow-2xl shadow-background/60"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-center gap-3 bg-background/40 rounded-xl px-4 py-3 border border-border/30">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <input
                type="text"
                placeholder="Pick-up location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent w-full text-foreground placeholder:text-muted-foreground outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-3 bg-background/40 rounded-xl px-4 py-3 border border-border/30">
              <CalendarDays className="w-5 h-5 text-primary shrink-0" />
              <input type="date" className="bg-transparent w-full text-foreground outline-none text-sm" />
            </div>
            <motion.button
              onClick={() => navigate("/cars")}
              className="gold-gradient text-primary-foreground rounded-xl px-6 py-3 font-semibold flex items-center justify-center gap-2 gold-glow-hover"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Search className="w-5 h-5" />
              Search
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
