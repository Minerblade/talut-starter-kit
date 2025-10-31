import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/30 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,229,168,0.3)]">
              {/* Hero section */}
<div className="text-center mt-8">
  <h1 className="font-heading font-bold text-5xl md:text-6xl tracking-tight mb-3">
    <span className="relative inline-block">
      <span className="absolute inset-0 blur-lg bg-primary/40 rounded-lg"></span>
      <span className="relative z-10 text-primary drop-shadow-[0_0_15px_rgba(0,229,168,0.85)]">
        Masjid Talut
      </span>
    </span>
  </h1>

  <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
    A house of Allah for Rifle and the Western Slope. Pray, learn, and serve.
  </p>
</div>


          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/prayer-times" className="block text-muted-foreground hover:text-primary transition-colors">
                Prayer Times
              </Link>
              <Link to="/programs" className="block text-muted-foreground hover:text-primary transition-colors">
                Programs
              </Link>
              <Link to="/donate" className="block text-muted-foreground hover:text-primary transition-colors">
                Donate
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Volunteer
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  111 E 3rd St UNIT 101<br />
                  Rifle, CO 81650
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">(646) 899-8980</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">(505) 999-0786</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Masjid Talut. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/contact" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
