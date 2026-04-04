import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { cars } from "@/data/cars";

const types = ["All", "Sedan", "SUV", "Sports", "Convertible", "Supercar"];
const fuels = ["All", "Petrol", "Diesel", "Hybrid", "Electric"];
const transmissions = ["All", "Automatic", "Manual"];

const CarsListing = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [fuelFilter, setFuelFilter] = useState("All");
  const [transFilter, setTransFilter] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return cars.filter((c) => {
      if (typeFilter !== "All" && c.type !== typeFilter) return false;
      if (fuelFilter !== "All" && c.fuel !== fuelFilter) return false;
      if (transFilter !== "All" && c.transmission !== transFilter) return false;
      return true;
    });
  }, [typeFilter, fuelFilter, transFilter]);

  const FilterChips = ({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) => (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            value === opt
              ? "gold-gradient text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-8"
          >
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-bold">
                Our <span className="gold-text">Fleet</span>
              </h1>
              <p className="text-muted-foreground mt-2">{filtered.length} vehicles available</p>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-muted px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
          </motion.div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-card rounded-2xl p-6 border border-border mb-8 space-y-4"
            >
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Type</p>
                <FilterChips options={types} value={typeFilter} onChange={setTypeFilter} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Fuel</p>
                <FilterChips options={fuels} value={fuelFilter} onChange={setFuelFilter} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Transmission</p>
                <FilterChips options={transmissions} value={transFilter} onChange={setTransFilter} />
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((car, i) => (
              <CarCard key={car.id} car={car} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-xl">No cars match your filters.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarsListing;
