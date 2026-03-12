import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
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
              Raising a people established in God to influence society. Over 25 years of impactful ministry across Nigeria.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/flarumuokwuta/" },
                { Icon: Instagram, href: "https://www.instagram.com/flarumuokwuta/" },
                { Icon: Youtube, href: "https://www.youtube.com/@flarumuokwuta" },
                { 
                  Icon: () => (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                    </svg>
                  ), 
                  href: "https://x.com/flarumuokwuta" 
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon />
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
          <p>© 2026 FirstLove Assembly. All rights reserved.</p>
          <p className="flex items-center gap-1 group">
            Built with <Heart size={14} className="text-primary fill-primary transition-transform group-hover:scale-125" /> by{" "}
            <a 
              href="https://tmb.it.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-foreground hover:text-primary transition-colors font-medium"
            >
              TMB
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
