import { Heart, CreditCard, Building2, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";

const givingTypes = [
  { title: "Tithes", desc: "Honor God with the first fruits of your increase. Your tithes sustain the ministry and enable us to reach more lives.", icon: Heart },
  { title: "Offerings", desc: "Give generously as an expression of worship and gratitude to God for His faithfulness.", icon: BookOpen },
  { title: "Partnership Giving", desc: "Partner with us financially to support missions, outreach, and church planting across Nigeria and beyond.", icon: Building2 },
];

const Give = () => {
  return (
    <div>
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Give</h1>
          <p className="text-primary-foreground/70 text-lg">Your generosity makes a difference</p>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <ScrollAnimationWrapper>
            <blockquote className="text-xl italic text-foreground leading-relaxed mb-4">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            </blockquote>
            <p className="text-primary font-heading font-semibold">— 2 Corinthians 9:7</p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Giving Types */}
      <section className="py-16 section-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {givingTypes.map((g, i) => (
              <ScrollAnimationWrapper key={g.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 card-elevated text-center h-full">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6">
                    <g.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{g.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{g.desc}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8">How to Give</h2>
            <div className="space-y-4">
              <div className="bg-card rounded-2xl p-6 card-elevated flex items-center gap-4">
                <CreditCard size={24} className="text-primary shrink-0" />
                <div className="text-left">
                  <h4 className="font-heading font-semibold text-foreground">Card Payment</h4>
                  <p className="text-muted-foreground text-sm">Pay securely online with your debit or credit card</p>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 card-elevated flex items-center gap-4">
                <Building2 size={24} className="text-primary shrink-0" />
                <div className="text-left">
                  <h4 className="font-heading font-semibold text-foreground">Bank Transfer</h4>
                  <p className="text-muted-foreground text-sm">Transfer directly to the church account</p>
                </div>
              </div>
            </div>
            <Button size="xl" className="mt-10">Give Now</Button>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Give;
