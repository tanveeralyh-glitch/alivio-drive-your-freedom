import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Fuel, Users, Gauge, Zap, ArrowLeft, MessageCircle, CalendarDays } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { cars } from "@/data/cars";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const car = cars.find((c) => c.id === id);
  const { addViewed } = useRecentlyViewed();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (id) addViewed(id);
  }, [id, addViewed]);

  const totalDays = useMemo(() => {
    if (!startDate || !endDate) return 0;
    const diff = new Date(endDate).getTime() - new Date(startDate).getTime();
    return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }, [startDate, endDate]);

  const totalPrice = car ? totalDays * car.pricePerDay : 0;

  if (!car) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Car not found</h1>
          <Link to="/cars" className="text-primary hover:underline">Back to Fleet</Link>
        </div>
      </div>
    );
  }

  const whatsappMessage = totalDays > 0
    ? `Hello, I want to book ${car.brand} ${car.name} from ${startDate} to ${endDate}. Total Price: $${totalPrice}`
    : `Hello, I'm interested in booking the ${car.brand} ${car.name} ($${car.pricePerDay}/day).`;

  const whatsappUrl = `https://wa.me/923001234567?text=${encodeURIComponent(whatsappMessage)}`;

  const specs = [
    { icon: Zap, label: "Horsepower", value: `${car.horsepower} HP` },
    { icon: Gauge, label: "0-60 mph", value: car.acceleration },
    { icon: Fuel, label: "Fuel Type", value: car.fuel },
    { icon: Users, label: "Seats", value: `${car.seats} Seats` },
  ];

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <div className="pt-24 pb-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/cars" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Fleet
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden border border-border group"
            >
              <img
                src={car.image}
                alt={`${car.brand} ${car.name}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={800}
                height={512}
              />
            </motion.div>

            {/* Details */}
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.p variants={fadeUp} className="text-primary uppercase tracking-[0.2em] text-sm font-semibold">{car.brand}</motion.p>
              <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold mt-1 mb-4">{car.name}</motion.h1>

              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1 text-primary">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">{car.rating}</span>
                </div>
                <span className="text-muted-foreground text-sm">({car.reviews} reviews)</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground text-sm">{car.type}</span>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-end gap-2 mb-8">
                <span className="font-display text-4xl font-bold text-primary">${car.pricePerDay}</span>
                <span className="text-muted-foreground mb-1">/day</span>
              </motion.div>

              {/* Specs */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mb-8">
                {specs.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    className="bg-card rounded-xl p-4 border border-border hover:border-primary/30 transition-colors"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <spec.icon className="w-5 h-5 text-primary mb-2" />
                    <p className="text-muted-foreground text-xs">{spec.label}</p>
                    <p className="font-semibold">{spec.value}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Booking */}
              <motion.div variants={fadeUp} className="bg-card rounded-2xl p-6 border border-border mb-6">
                <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-primary" /> Book This Car
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-muted-foreground text-xs block mb-1">Start Date</label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-muted rounded-lg px-4 py-3 text-foreground outline-none text-sm border border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-muted-foreground text-xs block mb-1">End Date</label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full bg-muted rounded-lg px-4 py-3 text-foreground outline-none text-sm border border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {totalDays > 0 && (
                  <motion.div
                    className="bg-muted rounded-xl p-4 mb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">${car.pricePerDay} × {totalDays} days</span>
                      <span className="font-semibold">${totalPrice}</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-2">
                      <span className="font-semibold">Total</span>
                      <span className="text-primary font-display text-xl font-bold">${totalPrice}</span>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <motion.button
                    className="gold-gradient text-primary-foreground py-3 rounded-xl font-semibold gold-glow-hover"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Book Now
                  </motion.button>
                  <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-primary-foreground py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <MessageCircle className="w-5 h-5" /> Book via WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default CarDetails;
