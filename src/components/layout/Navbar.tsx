import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

type NavItem = {
  label: string;
  to: string;
  external?: boolean;
  children?: { label: string; to: string }[];
};

const navLinks: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About Us", to: "/about" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  { label: "Sermons", to: "/sermons" },
  { label: "Ministries", to: "/ministries" },
  { label: "Upcoming Events", to: "/events" },
  { label: "Testimonies", to: "/testimonies" },
  { label: "Branches", to: "/branches" },
  { label: "Devotional", to: "https://breadandwine.com", external: true },
  { label: "Give", to: "/give" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const renderLink = (link: NavItem, isMobile = false) => {
    if (link.external) {
      return (
        <a
          key={link.to}
          href={link.to}
          target="_blank"
          rel="noopener noreferrer"
          className={isMobile
            ? "px-4 py-3 rounded-lg text-sm font-medium transition-colors text-foreground hover:bg-muted"
            : `px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"}`
          }
        >
          {link.label}
          {!isMobile && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 gradient-bg rounded-full transition-all duration-300 group-hover:w-3/4" />}
        </a>
      );
    }

    if (link.children && !isMobile) {
      const isActive = link.children.some(c => location.pathname === c.to);
      return (
        <div key={link.label} className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
            className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-1 ${
              isActive
                ? scrolled ? "text-primary" : "text-primary-foreground"
                : scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
            }`}
          >
            {link.label}
            <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
          </button>
          {openDropdown === link.label && (
            <div className="absolute top-full left-0 mt-2 glass rounded-xl p-2 min-w-[160px] shadow-lg animate-scale-in">
              {link.children.map(child => (
                <Link
                  key={child.to}
                  to={child.to}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === child.to ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                  }`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (link.children && isMobile) {
      return (
        <div key={link.label}>
          <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{link.label}</p>
          {link.children.map(child => (
            <Link
              key={child.to}
              to={child.to}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors block ${
                location.pathname === child.to ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
              }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      );
    }

    return (
      <Link
        key={link.to}
        to={link.to}
        className={isMobile
          ? `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.to ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"}`
          : `px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative group ${
              location.pathname === link.to
                ? scrolled ? "text-primary" : "text-primary-foreground"
                : scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
            }`
        }
      >
        {link.label}
        {!isMobile && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 gradient-bg rounded-full transition-all duration-300 group-hover:w-3/4" />}
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="FirstLove Assembly" className="h-10 w-10" />
          <span className={`font-heading font-bold text-lg tracking-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            FirstLove Assembly
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => renderLink(link))}
        </div>

        <div className="hidden lg:block">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Plan Your Visit</Link>
          </Button>
        </div>

        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-xl p-4 animate-scale-in">
          <div className="flex flex-col gap-1">
            {navLinks.map(link => renderLink(link, true))}
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
