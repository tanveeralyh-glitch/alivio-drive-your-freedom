import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/alivio-logo.png";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <img src={logo} alt="Alivio" className="h-16 w-auto mb-4" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Premium luxury car rental. Experience the finest automobiles with unmatched service.
          </p>
        </div>

        <div>
          <h4 className="text-primary font-display text-lg mb-4">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Fleet", "About", "Contact"].map((item) => (
              <Link key={item} to={item === "Home" ? "/" : item === "Fleet" ? "/cars" : "#"} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-primary font-display text-lg mb-4">Car Types</h4>
          <div className="flex flex-col gap-3">
            {["Sedans", "SUVs", "Sports Cars", "Supercars", "Convertibles"].map((item) => (
              <span key={item} className="text-muted-foreground text-sm">{item}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-primary font-display text-lg mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +92 300 1234567</div>
            <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@alivio.com</div>
            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Lahore, Pakistan</div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} Alivio Luxury Car Rental. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
