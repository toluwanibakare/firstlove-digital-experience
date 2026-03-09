import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";

const events = [
  { title: "Sunday Worship Service", date: "Every Sunday", time: "8:00 AM & 10:30 AM", location: "Main Auditorium, Port Harcourt", desc: "Join us for powerful worship, the Word, and fellowship every Sunday." },
  { title: "Midweek Service", date: "Every Wednesday", time: "6:00 PM", location: "Main Auditorium", desc: "Recharge your faith midweek with Bible study and prayer." },
  { title: "Annual Conference 2025", date: "April 14–18, 2025", time: "9:00 AM daily", location: "Port Harcourt, Rivers State", desc: "Our flagship annual gathering with powerful ministrations and teachings." },
  { title: "Prayer & Fasting Week", date: "May 5–11, 2025", time: "6:00 AM daily", location: "All Branches", desc: "A dedicated week of seeking God's face through prayer and fasting." },
  { title: "Youth Alive Summit", date: "June 21, 2025", time: "10:00 AM", location: "Port Harcourt", desc: "A powerful youth gathering for worship, teaching, and empowerment." },
  { title: "Women's Conference", date: "August 9, 2025", time: "9:00 AM", location: "Port Harcourt", desc: "An annual gathering celebrating and empowering women in Christ." },
];

const Events = () => {
  return (
    <div>
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Events</h1>
          <p className="text-primary-foreground/70 text-lg">Stay connected with what's happening at FirstLove Assembly</p>
        </div>
      </section>

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
