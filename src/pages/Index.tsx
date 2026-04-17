import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureVideoSection from "@/components/FeatureVideoSection";
import FeaturedCars from "@/components/FeaturedCars";
import TrendingCars from "@/components/TrendingCars";
import PromotionsSection from "@/components/PromotionsSection";
import RecentlyViewed from "@/components/RecentlyViewed";
import Footer from "@/components/Footer";
import { useRecentlyViewed } from "@/hooks/useRecentlyViewed";

const Index = () => {
  const { viewedIds } = useRecentlyViewed();

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <HeroSection />
      <FeatureVideoSection />
      <FeaturedCars />
      <TrendingCars />
      <PromotionsSection />
      <RecentlyViewed viewedIds={viewedIds} />
      <Footer />
    </motion.div>
  );
};

export default Index;
