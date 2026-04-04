import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import logo from "@/assets/alivio-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Fleet", path: "/cars" },
  { label: "About", path: "#" },
  { label: "Contact", path: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Alivio" className="h-12 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/wishlist" className="text-foreground/70 hover:text-primary transition-colors">
            <Heart className="w-5 h-5" />
          </Link>
          <Link
            to="/cars"
            className="gold-gradient text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all gold-glow-hover"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-foreground/70 hover:text-primary transition-colors text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/cars"
                onClick={() => setOpen(false)}
                className="gold-gradient text-primary-foreground px-6 py-3 rounded-lg text-center font-semibold"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
