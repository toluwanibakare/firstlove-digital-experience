import { useState, useEffect } from "react";
import { Youtube, ExternalLink, MessageCircle, Share2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";

const BANNER_IMAGE_URL = "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=2070";

const Livestream = () => {
  const [isLive, setIsLive] = useState(false);

  // Mock checking if live
  useEffect(() => {
    const timer = setTimeout(() => setIsLive(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={BANNER_IMAGE_URL} alt="Livestream Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay opacity-90" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollAnimationWrapper>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-500 mb-6 animate-pulse border border-red-500/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wider uppercase">Live Now</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">FirstLove LIVE</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Join our global family online every Wednesday and Sunday. Experience the presence of God from wherever you are.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Main Livestream Section */}
      <section className="py-20 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimationWrapper>
              <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video relative group">
                {!isLive ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 border border-primary/30">
                        <Play className="text-primary fill-primary w-8 h-8 ml-1" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-white mb-2">Connecting to Stream...</h3>
                      <p className="text-white/60">The service will begin shortly</p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/live_stream?channel=UC8xLhL50O_nU7R6P_O0-n_A" // Replace with actual channel ID or live link
                    title="FirstLove Assembly Live Stream"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </ScrollAnimationWrapper>

            {/* Interaction Bar */}
            <ScrollAnimationWrapper delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-6 glass p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-background bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      +200
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Watching Live</p>
                    <p className="text-xs text-muted-foreground">Join others in the faith</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="outline" className="gap-2">
                    <Share2 size={18} />
                    Share
                  </Button>
                  <Button className="gap-2">
                    <Youtube size={18} />
                    Open YouTube
                  </Button>
                </div>
              </div>
            </ScrollAnimationWrapper>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <ScrollAnimationWrapper delay={0.3}>
                <div className="glass p-8 rounded-3xl border border-white/10 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 text-primary">
                    <MessageCircle />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Prayer Requests</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our prayer team is online and ready to pray with you. Share your needs and let us stand in faith together for your miracle.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold group">
                    Send Request <ExternalLink size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.4}>
                <div className="glass p-8 rounded-3xl border border-white/10 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20 text-orange-500">
                    <Share2 />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Service Times</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-muted-foreground">Wednesday Midweek</span>
                      <span className="font-bold">6:00 PM (GMT+1)</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <span className="text-muted-foreground">Sunday 1st Service</span>
                      <span className="font-bold">8:00 AM (GMT+1)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Sunday 2nd Service</span>
                      <span className="font-bold">10:30 AM (GMT+1)</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Connection CTA */}
      <section className="py-24 section-muted overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="glass rounded-3xl p-12 text-center border border-white/10 relative overflow-hidden group">
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
             
            <ScrollAnimationWrapper>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">First Time Visiting Online?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
                We would love to get to know you! Fill out our online contact card so we can welcome you properly to the family.
              </p>
              <Button variant="hero" size="lg">I'm New Here</Button>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Livestream;
