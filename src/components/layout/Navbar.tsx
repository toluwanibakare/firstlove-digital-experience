import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Sermons", to: "/sermons" },
  { label: "Ministries", to: "/ministries" },
  { label: "Events", to: "/events" },
  { label: "Testimonies", to: "/testimonies" },
  { label: "Branches", to: "/branches" },
  { label: "Gallery", to: "/gallery" },
  { label: "Give", to: "/give" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="FirstLove Assembly" className="h-10 w-10" />
          <span className={`font-heading font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            FirstLove Assembly
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group ${
                location.pathname === link.to
                  ? scrolled ? "text-primary" : "text-primary-foreground"
                  : scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 gradient-bg rounded-full transition-all duration-300 group-hover:w-3/4" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Plan Your Visit</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-xl p-4 animate-scale-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="hero" size="lg" className="mt-3" asChild>
              <Link to="/contact">Plan Your Visit</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
