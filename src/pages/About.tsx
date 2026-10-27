import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";
import pastorImage from "@/assets/pastor-portrait.jpg";
import heroWorship from "@/assets/hero-worship.jpg";

const ABOUT_IMAGE_URL = "https://www.firstloveassembly.org.ng/images/gallery/19.jpg";


const beliefs = [
  "The Bible is the inspired, infallible Word of God",
  "The Trinity — God the Father, Son, and Holy Spirit",
  "Salvation through faith in Jesus Christ",
  "The baptism of the Holy Spirit with evidence of speaking in tongues",
  "Divine healing and deliverance",
  "The second coming of Jesus Christ",
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroWorship} alt="About Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay opacity-90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
            About FirstLove Assembly
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Over 25 years of raising a people established in God to influence society
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimationWrapper direction="left">
              <img src={ABOUT_IMAGE_URL} alt="Church gathering" className="rounded-2xl w-full h-64 md:h-[400px] object-cover card-elevated" />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper direction="right" delay={0.2}>
              <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Our History</p>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">A Legacy of Faith</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                FirstLove Assembly began over 25 years ago, originally known as Revival People's Church. Under the visionary leadership of Pastor Simeon Afolabi, the ministry has grown from humble beginnings in Port Harcourt to a multi-branch church spanning across Nigeria.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The name change to FirstLove Assembly reflects the church's renewed commitment to returning to the foundational love for God and His purposes, raising believers with apostolic values and building people who influence society.
              </p>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 section-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimationWrapper>
              <div className="bg-card rounded-2xl p-10 card-elevated h-full">
                <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Our Vision</p>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Established in God</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To raise a people established in God to influence society.
                </p>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper delay={0.2}>
              <div className="bg-card rounded-2xl p-10 card-elevated h-full">
                <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Our Mission</p>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Apostolic Values</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To raise believers with apostolic values and restore Christian faith practice while building people to influence society and the world.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollAnimationWrapper className="text-center mb-16">
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">What We Believe</p>
            <h2 className="text-3xl font-heading font-bold text-foreground">Core Beliefs</h2>
          </ScrollAnimationWrapper>
          <div className="space-y-4">
            {beliefs.map((b, i) => (
              <ScrollAnimationWrapper key={i} delay={i * 0.08}>
                <div className="flex items-center gap-4 bg-card rounded-xl p-5 card-elevated">
                  <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground font-heading font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-foreground">{b}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 section-muted">
        <div className="container mx-auto px-4 text-center">
          <ScrollAnimationWrapper>
            <p className="text-primary font-heading font-semibold text-sm tracking-widest uppercase mb-3">Leadership</p>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-16">Our Pastor</h2>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper delay={0.2}>
            <div className="max-w-lg mx-auto bg-card rounded-2xl overflow-hidden card-elevated">
              <img src={pastorImage} alt="Pastor Simeon Afolabi" className="w-full h-80 object-cover object-top" />
              <div className="p-8 text-left">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">Pastor Simeon Afolabi</h3>
                <p className="text-primary font-medium mb-4">Founder & Serving Overseer</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pastor Simeon Afolabi is the founder and serving overseer of FirstLove Assembly. With over three decades of dedicated ministry, he has committed his life to raising a generation of believers who are established in God and equipped to influence every sphere of society.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His apostolic mandate has seen the church grow from a single assembly to multiple branches across Nigeria, impacting thousands of lives through the uncompromising teaching of God's Word.
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default About;
