import { useState, useEffect } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";

const events = [
  { title: "Annual Conference 2025", date: "April 14–18, 2025", targetDate: "2025-04-14T09:00:00", time: "9:00 AM daily", location: "Port Harcourt, Rivers State", desc: "Our flagship annual gathering with powerful ministrations and teachings." },
  { title: "Prayer & Fasting Week", date: "May 5–11, 2025", targetDate: "2025-05-05T06:00:00", time: "6:00 AM daily", location: "All Branches", desc: "A dedicated week of seeking God's face through prayer and fasting." },
  { title: "Youth Alive Summit", date: "June 21, 2025", targetDate: "2025-06-21T10:00:00", time: "10:00 AM", location: "Port Harcourt", desc: "A powerful youth gathering for worship, teaching, and empowerment." },
  { title: "Women's Conference", date: "August 9, 2025", targetDate: "2025-08-09T09:00:00", time: "9:00 AM", location: "Port Harcourt", desc: "An annual gathering celebrating and empowering women in Christ." },
  { title: "Sunday Worship Service", date: "Every Sunday", targetDate: "", time: "8:00 AM & 10:30 AM", location: "Main Auditorium, Port Harcourt", desc: "Join us for powerful worship, the Word, and fellowship every Sunday." },
  { title: "Midweek Service", date: "Every Wednesday", targetDate: "", time: "6:00 PM", location: "Main Auditorium", desc: "Recharge your faith midweek with Bible study and prayer." },
];

const getNextEvent = () => {
  const now = new Date().getTime();
  const upcoming = events
    .filter(e => e.targetDate && new Date(e.targetDate).getTime() > now)
    .sort((a, b) => new Date(a.targetDate).getTime() - new Date(b.targetDate).getTime());
  return upcoming[0] || null;
};

const useCountdown = (targetDate: string) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!targetDate) return;
    const tick = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
};

const Events = () => {
  const nextEvent = getNextEvent();
  const countdown = useCountdown(nextEvent?.targetDate || "");

  return (
    <div>
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Upcoming Events</h1>
          <p className="text-primary-foreground/70 text-lg">Stay connected with what's happening at FirstLove Assembly</p>
        </div>
      </section>

      {/* Countdown Section */}
      {nextEvent && (
        <section className="py-20 section-muted">
          <div className="container mx-auto px-4 text-center">
            <ScrollAnimationWrapper>
              <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Coming Up Next</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">{nextEvent.title}</h2>
              <p className="text-muted-foreground mb-10">{nextEvent.date} • {nextEvent.location}</p>
              <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
                {[
                  { value: countdown.days, label: "Days" },
                  { value: countdown.hours, label: "Hours" },
                  { value: countdown.minutes, label: "Minutes" },
                  { value: countdown.seconds, label: "Seconds" },
                ].map((unit) => (
                  <div key={unit.label} className="bg-card rounded-2xl card-elevated p-6 md:p-8 min-w-[90px] md:min-w-[120px]">
                    <span className="text-4xl md:text-6xl font-heading font-bold gradient-text">{String(unit.value).padStart(2, "0")}</span>
                    <p className="text-muted-foreground text-sm mt-2 font-medium">{unit.label}</p>
                  </div>
                ))}
              </div>
              <Button variant="hero" size="lg" className="mt-10">Register Now</Button>
            </ScrollAnimationWrapper>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((e, i) => (
              <ScrollAnimationWrapper key={e.title} delay={i * 0.08}>
                <div className="bg-card rounded-2xl p-8 card-elevated h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-primary font-heading font-semibold text-sm">{e.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{e.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{e.desc}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock size={14} /> {e.time}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin size={14} /> {e.location}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Register</Button>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
