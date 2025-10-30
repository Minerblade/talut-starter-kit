import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xl">☪</span>
              </div>
              <span className="font-heading font-bold text-xl">Masjid Talut</span>
            </div>
            <p className="text-sm opacity-90">
              A house of Allah for Rifle and the Western Slope. Pray, learn, and serve.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/prayer-times" className="block opacity-90 hover:opacity-100 transition-opacity">
                Prayer Times
              </Link>
              <Link to="/programs" className="block opacity-90 hover:opacity-100 transition-opacity">
                Programs
              </Link>
              <Link to="/donate" className="block opacity-90 hover:opacity-100 transition-opacity">
                Donate
              </Link>
              <Link to="/contact" className="block opacity-90 hover:opacity-100 transition-opacity">
                Volunteer
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  111 E 3rd St UNIT 101<br />
                  Rifle, CO 81650
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <span className="opacity-90">(646) 899-8980</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="flex-shrink-0" />
                <span className="opacity-90">(505) 999-0786</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm opacity-90">
            <p>© {new Date().getFullYear()} Masjid Talut. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/contact" className="hover:opacity-100 transition-opacity">
                Privacy
              </Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">
                Terms
              </Link>
              <Link to="/contact" className="hover:opacity-100 transition-opacity">
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
