import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">FirstLove Assembly</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Raising a people established in God to influence society. Over 30 years of impactful ministry across Nigeria.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {["About", "Sermons", "Events", "Ministries", "Give"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors duration-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span>457 Ikwerre Road, Rumuokwuta, Port Harcourt, Rivers State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>+234 803 452 3300</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <span>info@firstloveassembly.org.ng</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Stay Connected</h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary"
              />
              <Button variant="hero" size="sm">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© 2025 FirstLove Assembly. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-primary" /> for the Kingdom
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
