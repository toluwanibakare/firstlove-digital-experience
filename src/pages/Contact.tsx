import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";

const Contact = () => {
  return (
    <div>
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 text-lg">We'd love to hear from you</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollAnimationWrapper direction="left">
              <div className="bg-card rounded-2xl p-8 card-elevated">
                <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Send a Message</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                  <Button type="submit" size="lg" className="w-full">Send Message</Button>
                </form>
              </div>
            </ScrollAnimationWrapper>

            {/* Contact Info */}
            <ScrollAnimationWrapper direction="right" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Get in Touch</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                        <MapPin size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">Address</h4>
                        <p className="text-muted-foreground text-sm">457 Ikwerre Road, Rumuokwuta, Port Harcourt, Rivers State, Nigeria</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">Phone</h4>
                        <p className="text-muted-foreground text-sm">+234 803 452 3300</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">Email</h4>
                        <p className="text-muted-foreground text-sm">info@firstloveassembly.org.ng</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                        <Clock size={18} className="text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">Service Times</h4>
                        <p className="text-muted-foreground text-sm">Sunday: 8:00 AM & 10:30 AM</p>
                        <p className="text-muted-foreground text-sm">Wednesday: 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden card-elevated h-[250px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6!2d6.9834!3d4.8472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTAnNTAuMCJOIDfCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Church Location"
                  />
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
