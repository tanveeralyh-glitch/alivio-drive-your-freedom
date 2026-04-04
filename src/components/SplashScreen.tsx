import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/alivio-logo.png";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Radial glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(43 72% 52% / 0.15) 0%, transparent 70%)" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.5, 1.2], opacity: [0, 0.8, 0.4] }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <motion.img
          src={logo}
          alt="Alivio"
          className="h-24 md:h-32 w-auto"
          initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Gold line */}
        <motion.div
          className="h-[2px] gold-gradient mt-6 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Tagline */}
        <motion.p
          className="text-muted-foreground text-sm tracking-[0.3em] uppercase mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          onAnimationComplete={() => {
            setTimeout(onComplete, 800);
          }}
        >
          Luxury Car Rental
        </motion.p>
      </div>
    </motion.div>
  </AnimatePresence>
);

export default SplashScreen;
