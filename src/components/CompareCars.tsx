import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight, X } from "lucide-react";
import { cars, type Car } from "@/data/cars";

const CompareCars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [car1, setCar1] = useState<Car | null>(null);
  const [car2, setCar2] = useState<Car | null>(null);

  const specs = [
    { key: "pricePerDay", label: "Price / Day", fmt: (v: number) => `$${v}` },
    { key: "horsepower", label: "Horsepower", fmt: (v: number) => `${v} HP` },
    { key: "acceleration", label: "0-60 mph", fmt: (v: string) => v },
    { key: "topSpeed", label: "Top Speed", fmt: (v: string) => v },
    { key: "fuel", label: "Fuel", fmt: (v: string) => v },
    { key: "seats", label: "Seats", fmt: (v: number) => `${v}` },
    { key: "transmission", label: "Transmission", fmt: (v: string) => v },
  ] as const;

  return (
    <>
      {/* Floating trigger */}
      <motion.button
        className="fixed bottom-6 right-6 z-40 gold-gradient text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg gold-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        title="Compare Cars"
      >
        <ArrowLeftRight className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              className="relative bg-card border border-border rounded-t-2xl sm:rounded-2xl w-full sm:max-w-3xl max-h-[85vh] overflow-y-auto p-6"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-bold">
                  Compare <span className="gold-text">Cars</span>
                </h2>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[{ val: car1, set: setCar1 }, { val: car2, set: setCar2 }].map((slot, i) => (
                  <div key={i}>
                    <select
                      value={slot.val?.id || ""}
                      onChange={(e) => slot.set(cars.find((c) => c.id === e.target.value) || null)}
                      className="w-full bg-muted border border-border rounded-lg px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
                    >
                      <option value="">Select car {i + 1}</option>
                      {cars.map((c) => (
                        <option key={c.id} value={c.id}>{c.brand} {c.name}</option>
                      ))}
                    </select>
                    {slot.val && (
                      <img src={slot.val.image} alt={slot.val.name} className="mt-3 rounded-lg w-full aspect-[16/10] object-cover" />
                    )}
                  </div>
                ))}
              </div>

              {car1 && car2 && (
                <div className="space-y-2">
                  {specs.map((spec) => (
                    <div key={spec.key} className="grid grid-cols-3 gap-2 text-sm py-2 border-b border-border/50">
                      <span className="text-center font-semibold text-foreground">{spec.fmt(car1[spec.key] as never)}</span>
                      <span className="text-center text-muted-foreground text-xs uppercase tracking-wider self-center">{spec.label}</span>
                      <span className="text-center font-semibold text-foreground">{spec.fmt(car2[spec.key] as never)}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CompareCars;
