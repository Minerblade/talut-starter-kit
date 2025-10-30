import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/prayer-times", label: "Prayer Times" },
    { path: "/programs", label: "Programs" },
    { path: "/announcements", label: "Announcements" },
    { path: "/visit", label: "Visit Us" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 border-b border-border/30 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
 <Link to="/" className="flex items-center space-x-2 group">
  <div className="px-4 py-2 rounded-full bg-primary flex items-center justify-center 
                  shadow-[0_0_20px_rgba(0,229,168,0.3)] 
                  group-hover:shadow-[0_0_25px_rgba(0,229,168,0.5)] 
                  transition-shadow">
    <span className="text-primary-foreground text-lg font-bold tracking-wide">
      Masjid Talut
    </span>
  </div>
</Link>



          

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "outline" : "ghost"}
                  className="font-medium"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/donate">
              <Button className="ml-2">Donate</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border/50">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant={location.pathname === link.path ? "outline" : "ghost"}
                  className="w-full justify-start"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/donate" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full">Donate</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
