import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";

const testimonies = [
  { title: "God Healed My Marriage", name: "James & Ada K.", date: "Feb 2025", text: "After years of struggle, the teachings and counseling at FirstLove Assembly brought restoration to our marriage. We are forever grateful." },
  { title: "From Addiction to Freedom", name: "Michael D.", date: "Jan 2025", text: "I was bound by addiction for years. Through the prayers and support of the church, God set me completely free. I am a new person." },
  { title: "Divine Healing", name: "Grace M.", date: "Dec 2024", text: "I received my healing during a worship service. The doctors confirmed that the condition was completely gone. God is truly alive in this assembly!" },
  { title: "Career Breakthrough", name: "Blessing O.", date: "Nov 2024", text: "God completely turned my life around through the ministry of FirstLove Assembly. I found purpose and direction in my career." },
  { title: "Financial Restoration", name: "Emmanuel T.", date: "Oct 2024", text: "After being faithful in my tithes and applying the Word, God opened doors of financial restoration I never imagined." },
  { title: "Salvation of My Family", name: "Sarah N.", date: "Sep 2024", text: "I prayed for years for my family. Through the church's prayer network, my entire household came to Christ." },
];

const Testimonies = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Testimonies</h1>
          <p className="text-primary-foreground/70 text-lg">See what God has been doing in the lives of our members</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Button onClick={() => setShowForm(!showForm)} size="lg">
              {showForm ? "View Testimonies" : "Share Your Testimony"}
            </Button>
          </div>

          {showForm ? (
            <ScrollAnimationWrapper>
              <div className="max-w-lg mx-auto bg-card rounded-2xl p-8 card-elevated">
                <h3 className="font-heading font-bold text-xl text-foreground mb-6">Share Your Testimony</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <input type="text" placeholder="Testimony Title" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  <textarea placeholder="Your testimony..." rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                  <Button type="submit" size="lg" className="w-full">Submit Testimony</Button>
                  <p className="text-muted-foreground text-xs text-center">Testimonies are reviewed before publishing.</p>
                </form>
              </div>
            </ScrollAnimationWrapper>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonies.map((t, i) => (
                <ScrollAnimationWrapper key={t.title} delay={i * 0.08}>
                  <div className="bg-card rounded-2xl p-8 card-elevated h-full">
                    <div className="text-4xl text-primary/20 font-heading mb-2">"</div>
                    <h3 className="font-heading font-bold text-foreground mb-3">{t.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.text}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-heading font-semibold text-sm">— {t.name}</span>
                      <span className="text-muted-foreground/60 text-xs">{t.date}</span>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Testimonies;
