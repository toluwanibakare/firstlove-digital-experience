import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, Music, Play } from "lucide-react";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";

const hosts = [
  { name: "Pastor Simeon Afolabi", role: "Host, Founder & Serving Overseer" },
  { name: "Pastor Mrs. Ruth Afolabi", role: "Co-Host" },
];

const guestMinisters = [
  "Bishop Norman Jonah",
  "Rev. Joseph Akinyele",
  "Pastor Chris Ugoh",
];

const musicMinisters = [
  "Preye Odede",
  "Victory Hope",
  "GodsWill Frank",
  "Akunna Alioha",
  "Mimi Joy",
  "New Spring Choir",
  "Voice of Pilgrims",
];

const Convention = () => {
  return (
    <div>
      {/* Banner */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-bg" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollAnimationWrapper>
            <p className="text-primary-foreground/70 font-heading text-sm tracking-[0.3em] uppercase mb-4">
              28th Anniversary
            </p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
              National Convention 2026
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-heading mb-6">
              Making the Invisible God Visible
            </p>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Wednesday, October 28 – Sunday, November 1, 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Plan Your Visit</Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/livestream" className="flex items-center gap-2">
                  <Play size={18} /> Watch Live
                </Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollAnimationWrapper>
              <div className="bg-card rounded-2xl p-8 card-elevated h-full">
                <Calendar size={28} className="text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Dates</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wednesday, October 28 to Sunday, November 1, 2026. Five days of gathering around God's Word, worship, fellowship and celebration.
                </p>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={0.1}>
              <div className="bg-card rounded-2xl p-8 card-elevated h-full">
                <MapPin size={28} className="text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Venue</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  FirstLove Assembly, 457 Ikwerre Road, Rumuokwuta, Port Harcourt, Rivers State, Nigeria.
                </p>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={0.2}>
              <div className="bg-card rounded-2xl p-8 card-elevated h-full">
                <Clock size={28} className="text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg mb-2">Session Times</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Morning sessions 9:00 AM, evening sessions 5:00 PM, and the anniversary service on Sunday at 7:30 AM. Sessions also stream on Facebook and YouTube.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* About the convention */}
      <section className="py-16 md:py-24 section-muted">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper>
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">One FirstLove Family</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              28 Years of God's Faithfulness
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We gather as one FirstLove family to celebrate 28 years of God's faithfulness and experience His presence in a greater dimension. Come and see. Your one invitation could be the reason someone encounters Jesus.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Ministers */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollAnimationWrapper>
              <div className="flex items-center gap-3 mb-8">
                <Users size={24} className="text-primary" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Ministers</h2>
              </div>
              <div className="space-y-4">
                {hosts.map((h) => (
                  <div key={h.name} className="bg-card rounded-2xl p-6 card-elevated">
                    <h3 className="font-heading font-bold text-foreground">{h.name}</h3>
                    <p className="text-primary text-sm font-medium">{h.role}</p>
                  </div>
                ))}
                {guestMinisters.map((m) => (
                  <div key={m} className="bg-card rounded-2xl p-6 card-elevated">
                    <h3 className="font-heading font-bold text-foreground">{m}</h3>
                    <p className="text-muted-foreground text-sm">Guest Minister</p>
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <Music size={24} className="text-primary" />
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">Music Ministers</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {musicMinisters.map((m) => (
                  <div key={m} className="bg-card rounded-2xl p-6 card-elevated text-center">
                    <h3 className="font-heading font-bold text-foreground">{m}</h3>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mt-8">
                Expect powerful worship, life-changing messages, prayer and divine encounters across morning and evening sessions, closing with the anniversary service on Sunday.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 section-muted">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Don't Watch the Moment. Be Part of It.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Share the flyer, invite someone personally, and pray for the convention. Some moments are better experienced than explained.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/events">See All Events</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.facebook.com/flarumuokwuta/" target="_blank" rel="noopener noreferrer">
                  Follow on Facebook
                </a>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Convention;
