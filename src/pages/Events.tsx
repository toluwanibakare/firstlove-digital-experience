import { useState, useEffect } from "react";
import { Calendar, MapPin, Clock, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const BANNER_IMAGE_URL = "https://scontent.flos2-1.fna.fbcdn.net/v/t39.30808-6/639832226_1424232186410194_1844922625544653163_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_ohc=qmK6ypP6l3YQ7kNvwHUd2Qk&_nc_oc=Adl7lirjlRh9ZESiJNWl5-veY1RjYAxwLzLi7bA9g0GM-Hw3pFJiINT90RGUScfVPLM&_nc_zt=23&_nc_ht=scontent.flos2-1.fna&_nc_gid=5y9GZsOtjliLt4lvxjJj_g&_nc_ss=8&oh=00_AfzhsqC01W742ZoB4D2gBrX9g4vOj79M1HgfYK_lUx-FRg&oe=69B918AA";

const events = [
  { 
    title: "Morning Aerobics", 
    date: "Saturday, 14th March 2026", 
    targetDate: "2026-03-14T07:00:00", 
    time: "7:00 AM", 
    location: "Church Premises (Ikwerre Road)", 
    desc: "The Men’s Fellowship of FirstLove Assembly Rumuokwuta warmly invites everyone — men and women — to join us for a refreshing Morning Aerobics Session. Exercise strengthens the body, refreshes the mind, and builds fellowship.",
    image: "https://scontent.flos3-1.fna.fbcdn.net/v/t39.30808-6/649941067_1440439401456139_5935728156196885287_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=LX71WTiJQQUQ7kNvwGghIUL&_nc_oc=AdmYQdLGrwydlgtkOZwJu-wCaq-hmqqk3REavlqtLqpQhwAzSpSpw0awzkQnGGPBHyA&_nc_zt=23&_nc_ht=scontent.flos3-1.fna&_nc_gid=7kxj7ZpDMcQ2Y2sak9xQjw&_nc_ss=8&oh=00_Afwbi-Szh1XvSSwR7QIU_j5sJWz5zdLdVjbJntJIW69H2A&oe=69B91A70"
  },
  { 
    title: "Midweek Service", 
    date: "Every Wednesday", 
    targetDate: "", 
    time: "6:00 PM", 
    location: "Main Auditorium, Ikwerre Road", 
    desc: "Recharge your faith midweek with Bible study and prayer.",
    image: "https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-6/651192583_1439429791557100_6147572413689043047_n.jpg?stp=c0.117.1246.1246a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=Wyj9BsREYPcQ7kNvwEXOncA&_nc_oc=AdnQ0Y9R2H5AWXeyAh1PQidAesUGEuvXSib5OzsUoPkZXn4QHvwab_GMClW1RM_IXZU&_nc_zt=23&_nc_ht=scontent.flos3-2.fna&_nc_gid=7kxj7ZpDMcQ2Y2sak9xQjw&_nc_ss=8&oh=00_AfxmfHDO6ltI-1l9gQPPH7626v_w2MiEniQQ9v5u9NfsIg&oe=69B92C6B"
  },
  { 
    title: "Sunday Worship Service", 
    date: "Every Sunday", 
    targetDate: "", 
    time: "8:00 AM & 10:30 AM", 
    location: "Main Auditorium, Port Harcourt", 
    desc: "Join us for powerful worship, the Word, and fellowship every Sunday.",
    image: "https://scontent.flos3-1.fna.fbcdn.net/v/t39.30808-6/633649869_1415150657318347_3954834390277084289_n.jpg?stp=c0.87.1335.1335a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ZYM_ZpYAj-4Q7kNvwFiJPnN&_nc_oc=AdnULKtToaiecCV8RREH1s0462f6-Gotvvr-k9YPXQBKVqlz5xOnOUM6KJDI3KWcSbo&_nc_zt=23&_nc_ht=scontent.flos3-1.fna&_nc_gid=SBNk8y3I1lAwBElyYpsD-g&_nc_ss=8&oh=00_AfyOUq4Z-tXlWHOkzVryGguS6hN8_pNXKyP_Hs-5-Yk7bQ&oe=69B8F792"
  },
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
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <div>
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={BANNER_IMAGE_URL} alt="Events Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay opacity-90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">News & Events</h1>
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
                <div className="bg-card rounded-2xl overflow-hidden card-elevated h-full flex flex-col group">
                  {e.image && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative h-64 overflow-hidden bg-muted/30 cursor-pointer">
                          <img src={e.image} alt={e.title} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ZoomIn className="text-white w-8 h-8" />
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                        <img src={e.image} alt={e.title} className="w-full h-auto object-contain max-h-[90vh]" />
                      </DialogContent>
                    </Dialog>
                  )}
                  <div className="p-8 flex-1 flex flex-col">
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
