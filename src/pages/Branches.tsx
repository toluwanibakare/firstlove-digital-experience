import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";

const branches = [
  { name: "Port Harcourt (HQ)", address: "457 Ikwerre Road, Rumuokwuta, Port Harcourt", phone: "+234 803 452 3300", times: "Sunday: 8:00 AM & 10:30 AM | Wednesday: 6:00 PM" },
  { name: "Lagos", address: "Lagos, Nigeria", phone: "+234 803 452 3300", times: "Sunday: 9:00 AM | Wednesday: 6:00 PM" },
  { name: "Owerri, Imo State", address: "Owerri, Imo State, Nigeria", phone: "+234 803 452 3300", times: "Sunday: 9:00 AM | Wednesday: 6:00 PM" },
  { name: "Enugu", address: "Enugu, Nigeria", phone: "+234 803 452 3300", times: "Sunday: 9:00 AM | Wednesday: 6:00 PM" },
  { name: "Bayelsa", address: "Bayelsa State, Nigeria", phone: "+234 803 452 3300", times: "Sunday: 9:00 AM" },
  { name: "Bonny Island", address: "Bonny Island, Rivers State, Nigeria", phone: "+234 803 452 3300", times: "Sunday: 9:00 AM" },
  { name: "Abuja FCT", address: "Abuja, Nigeria", phone: "+234 803 452 3300", times: "Sunday: 9:00 AM | Wednesday: 6:00 PM" },
];

const houseFellowships = [
  { location: "Rumuosi", leader: "Bro. Daniel", phone: "+234 800 000 0001", time: "Fridays 6:00 PM" },
  { location: "Rumuigbo", leader: "Sis. Ngozi", phone: "+234 800 000 0002", time: "Thursdays 6:00 PM" },
  { location: "Rumuokwuta", leader: "Bro. Emmanuel", phone: "+234 800 000 0003", time: "Fridays 6:00 PM" },
  { location: "Eagle Island", leader: "Sis. Joy", phone: "+234 800 000 0004", time: "Wednesdays 6:30 PM" },
  { location: "Ada George", leader: "Bro. Peter", phone: "+234 800 000 0005", time: "Thursdays 6:00 PM" },
  { location: "Rumuola", leader: "Sis. Grace", phone: "+234 800 000 0006", time: "Fridays 6:00 PM" },
];

const Branches = () => {
  return (
    <div>
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Our Branches</h1>
          <p className="text-primary-foreground/70 text-lg">Find a FirstLove Assembly family near you</p>
        </div>
      </section>

      {/* Map embed */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden card-elevated h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6!2d6.9834!3d4.8472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTAnNTAuMCJOIDfCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="FirstLove Assembly Location"
            />
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground">Church Branches</h2>
          </ScrollAnimationWrapper>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((b, i) => (
              <ScrollAnimationWrapper key={b.name} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-6 card-elevated h-full">
                  <h3 className="font-heading font-bold text-foreground mb-3">{b.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-start gap-2"><MapPin size={14} className="mt-1 shrink-0 text-primary" />{b.address}</div>
                    <div className="flex items-center gap-2"><Phone size={14} className="shrink-0 text-primary" />{b.phone}</div>
                    <div className="flex items-start gap-2"><Clock size={14} className="mt-1 shrink-0 text-primary" />{b.times}</div>
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Navigation size={14} /> Get Directions
                  </Button>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* House Fellowships */}
      <section className="py-24 section-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper className="text-center mb-12">
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">House Fellowship</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Find a Fellowship Near You</h2>
          </ScrollAnimationWrapper>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {houseFellowships.map((h, i) => (
              <ScrollAnimationWrapper key={h.location} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-6 card-elevated">
                  <h3 className="font-heading font-bold text-foreground mb-3">{h.location}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><span className="text-foreground font-medium">Leader:</span> {h.leader}</p>
                    <div className="flex items-center gap-2"><Phone size={14} className="text-primary" />{h.phone}</div>
                    <div className="flex items-center gap-2"><Clock size={14} className="text-primary" />{h.time}</div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;
