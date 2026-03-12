import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Users, BookOpen, Calendar, MapPin, ZoomIn } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
const HERO_IMAGE_URL = "https://scontent.flos2-2.fna.fbcdn.net/v/t39.30808-6/645416823_1430743589092387_2095965613133377130_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_ohc=U0cOIMTkXUwQ7kNvwEvXOgj&_nc_oc=AdnbMd7shVm4k718hurFAW5FeFstDBxfA-Q8R9In6IJ3b020Xx2FhyxFmCObjPxnkdo&_nc_zt=23&_nc_ht=scontent.flos2-2.fna&_nc_gid=_ErWCEzTfpHA2-GKTSXXnA&_nc_ss=8&oh=00_AfwyHGypBVKewGs8J_74e7c6gA4awZjlhXar4YoySBSr0w&oe=69B92321";
import pastorImage from "@/assets/pastor-portrait.jpg";

const ABOUT_IMAGE_URL = "https://www.firstloveassembly.org.ng/images/gallery/19.jpg";

const ministries = [
  { title: "Men Ministry", desc: "Empowering men to lead with integrity and purpose in their families, workplaces, and communities.", icon: Users },
  { title: "Women Ministry", desc: "Building godly women who impact generations through faith, love, and service.", icon: Users },
  { title: "Youth Ministry", desc: "Raising a generation of young people passionately pursuing God and transforming society.", icon: Users },
  { title: "Children Ministry", desc: "Nurturing the next generation in the knowledge and love of Christ from an early age.", icon: BookOpen },
];

const sermons = [
  { title: "Walking in Divine Purpose", speaker: "Pastor Simeon Afolabi", date: "March 2, 2025" },
  { title: "The Power of First Love", speaker: "Pastor Simeon Afolabi", date: "Feb 23, 2025" },
  { title: "Established in God", speaker: "Pastor Simeon Afolabi", date: "Feb 16, 2025" },
];

const events = [
  { title: "Morning Aerobics", date: "Saturday, 14th March 2026", location: "Church Premises (Ikwerre Road)", time: "7:00 AM", image: "https://scontent.flos3-1.fna.fbcdn.net/v/t39.30808-6/649941067_1440439401456139_5935728156196885287_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=LX71WTiJQQUQ7kNvwGghIUL&_nc_oc=AdmYQdLGrwydlgtkOZwJu-wCaq-hmqqk3REavlqtLqpQhwAzSpSpw0awzkQnGGPBHyA&_nc_zt=23&_nc_ht=scontent.flos3-1.fna&_nc_gid=7kxj7ZpDMcQ2Y2sak9xQjw&_nc_ss=8&oh=00_Afwbi-Szh1XvSSwR7QIU_j5sJWz5zdLdVjbJntJIW69H2A&oe=69B91A70" },
  { title: "Midweek Service", date: "Every Wednesday", location: "Main Auditorium", time: "6:00 PM", image: "https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-6/651192583_1439429791557100_6147572413689043047_n.jpg?stp=c0.117.1246.1246a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=Wyj9BsREYPcQ7kNvwEXOncA&_nc_oc=AdnQ0Y9R2H5AWXeyAh1PQidAesUGEuvXSib5OzsUoPkZXn4QHvwab_GMClW1RM_IXZU&_nc_zt=23&_nc_ht=scontent.flos3-2.fna&_nc_gid=7kxj7ZpDMcQ2Y2sak9xQjw&_nc_ss=8&oh=00_AfxmfHDO6ltI-1l9gQPPH7626v_w2MiEniQQ9v5u9NfsIg&oe=69B92C6B" },
  { title: "Sunday Worship Service", date: "Every Sunday", location: "Main Auditorium", time: "8:00 AM & 10:30 AM", image: "https://scontent.flos3-1.fna.fbcdn.net/v/t39.30808-6/633649869_1415150657318347_3954834390277084289_n.jpg?stp=c0.87.1335.1335a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=ZYM_ZpYAj-4Q7kNvwFiJPnN&_nc_oc=AdnULKtToaiecCV8RREH1s0462f6-Gotvvr-k9YPXQBKVqlz5xOnOUM6KJDI3KWcSbo&_nc_zt=23&_nc_ht=scontent.flos3-1.fna&_nc_gid=SBNk8y3I1lAwBElyYpsD-g&_nc_ss=8&oh=00_AfyOUq4Z-tXlWHOkzVryGguS6hN8_pNXKyP_Hs-5-Yk7bQ&oe=69B8F792" },
];

const testimonies = [
  { quote: "God completely turned my life around through the ministry of FirstLove Assembly. I found purpose and direction.", name: "Blessing O." },
  { quote: "The teachings here have transformed my marriage and family. We are forever grateful for this church.", name: "James & Ada K." },
  { quote: "I received my healing during a worship service. God is truly alive in this assembly!", name: "Grace M." },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE_URL} alt="Worship at FirstLove Assembly" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary-foreground/70 font-heading text-sm tracking-[0.3em] uppercase mb-6">
              Welcome to
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight text-balance">
              FirstLove Assembly
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Raising a people established in God to influence society
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Plan Your Visit</Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/sermons" className="flex items-center gap-2">
                  <Play size={18} /> Watch Sermons
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-primary-foreground/60" size={28} />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 section-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimationWrapper direction="left">
              <div className="rounded-2xl overflow-hidden card-elevated">
                <img src={ABOUT_IMAGE_URL} alt="Church gathering" className="w-full h-[400px] object-cover" />
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper direction="right" delay={0.2}>
              <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Over 25 Years of Impactful Ministry
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                FirstLove Assembly, formerly known as Revival People's Church, has been a beacon of faith and transformation for over two decades. Under the visionary leadership of Pastor Simeon Afolabi, the ministry has grown from its roots in Port Harcourt to multiple branches across Nigeria.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is to raise believers with apostolic values, restore Christian faith practice, and build people to influence society and the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Meet Our Pastor</Link>
                </Button>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper>
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-16">
              Meet Our Pastor
            </h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={0.2}>
            <div className="max-w-md mx-auto bg-card rounded-2xl overflow-hidden card-elevated">
              <img src={pastorImage} alt="Pastor Simeon Afolabi" className="w-full h-80 object-cover object-top" />
              <div className="p-8">
                <h3 className="font-heading font-bold text-xl text-foreground mb-1">Pastor Simeon Afolabi</h3>
                <p className="text-primary font-medium text-sm mb-4">Founder & Serving Overseer</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  A visionary leader with over 25 years of ministry experience, Pastor Simeon Afolabi founded FirstLove Assembly with a burning passion to raise a people established in God to influence society.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/about">Read Full Profile</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-24 section-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper className="text-center mb-16">
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Our Ministries</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Get Involved
            </h2>
          </ScrollAnimationWrapper>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ministries.map((m, i) => (
              <ScrollAnimationWrapper key={m.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 card-elevated text-center h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-6">
                    <m.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{m.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">{m.desc}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/ministries">Join Ministry</Link>
                  </Button>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper className="text-center mb-16">
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Latest Sermons</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Be Inspired by the Word
            </h2>
          </ScrollAnimationWrapper>
          <div className="grid md:grid-cols-3 gap-6">
            {sermons.map((s, i) => (
              <ScrollAnimationWrapper key={s.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl overflow-hidden card-elevated group cursor-pointer">
                  <div className="relative h-48 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <Play size={28} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.speaker}</p>
                    <p className="text-muted-foreground/60 text-xs mt-1">{s.date}</p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" asChild>
              <Link to="/sermons">View All Sermons</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonies */}
      <section className="py-24 section-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper className="text-center mb-16">
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Testimonies</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              What God Has Done
            </h2>
          </ScrollAnimationWrapper>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonies.map((t, i) => (
              <ScrollAnimationWrapper key={t.name} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 card-elevated">
                  <div className="text-4xl text-primary/20 font-heading mb-4">"</div>
                  <p className="text-foreground italic leading-relaxed mb-6">{t.quote}</p>
                  <p className="text-primary font-heading font-semibold text-sm">— {t.name}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
          <div className="text-center mt-10 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/testimonies">Read More</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/testimonies">Share Your Testimony</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <ScrollAnimationWrapper className="text-center mb-16">
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Upcoming Events</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Join Us
            </h2>
          </ScrollAnimationWrapper>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((e, i) => (
              <ScrollAnimationWrapper key={e.title} delay={i * 0.1}>
                <div className="bg-card rounded-2xl overflow-hidden card-elevated border border-border flex flex-col h-full group">
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
                      <Calendar size={18} className="text-primary" />
                      <span className="text-primary font-heading font-semibold text-sm">{e.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-foreground mb-2">{e.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <MapPin size={14} />
                      <span>{e.location}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6">{e.time}</p>
                    <div className="mt-auto">
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/events">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Branch Locator Preview */}
      <section className="py-24 section-muted">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper>
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Our Branches</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Find a Branch Near You
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              With branches across Rivers State, Lagos, Imo, Enugu, Bayelsa, Bonny Island, and Abuja, there's a FirstLove Assembly family waiting for you.
            </p>
            <Button size="lg" asChild>
              <Link to="/branches" className="flex items-center gap-2">
                <MapPin size={18} /> Find Nearest Branch
              </Link>
            </Button>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE_URL} alt="Worship" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 text-balance">
              Join Us This Sunday
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-10">
              Experience the love of God in a community of believers passionate about making a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Plan Your Visit</Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/sermons">Watch Live</Link>
              </Button>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Index;
