import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Heart, Music } from "lucide-react";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";

const ministries = [
  { title: "Men Ministry", desc: "Empowering men to lead with integrity and purpose in their families, workplaces, and communities.", icon: Users, activities: ["Monthly men's breakfast", "Bible study groups", "Leadership training", "Community outreach"] },
  { title: "Women Ministry", desc: "Building godly women who impact generations through faith, love, and service.", icon: Heart, activities: ["Women's fellowship", "Prayer meetings", "Skills acquisition", "Marriage seminars"] },
  { title: "Youth Ministry", desc: "Raising a generation of young people passionately pursuing God and transforming society.", icon: Music, activities: ["Youth worship nights", "Career mentorship", "Sports & recreation", "Community service"] },
  { title: "Children Ministry", desc: "Nurturing the next generation in the knowledge and love of Christ from an early age.", icon: BookOpen, activities: ["Sunday school", "Vacation Bible school", "Children's choir", "Creative arts"] },
];

const Ministries = () => {
  return (
    <div>
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Ministries</h1>
          <p className="text-primary-foreground/70 text-lg">Discover where you belong and how you can serve</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {ministries.map((m, i) => (
              <ScrollAnimationWrapper key={m.title} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                      <m.icon size={28} className="text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-foreground mb-4">{m.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{m.desc}</p>
                    <h4 className="font-heading font-semibold text-sm text-foreground mb-3">Activities</h4>
                    <ul className="space-y-2 mb-8">
                      {m.activities.map(a => (
                        <li key={a} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link to="/contact">Join This Ministry</Link>
                    </Button>
                  </div>
                  <div className={`h-64 rounded-2xl gradient-bg opacity-20 ${i % 2 === 1 ? "lg:order-1" : ""}`} />
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;
