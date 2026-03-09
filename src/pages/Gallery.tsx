import { useState } from "react";
import { X } from "lucide-react";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";

const galleryItems = [
  { category: "Worship", alt: "Worship moment" },
  { category: "Services", alt: "Sunday service" },
  { category: "Events", alt: "Church event" },
  { category: "Conference", alt: "Annual conference" },
  { category: "Worship", alt: "Praise session" },
  { category: "Services", alt: "Midweek service" },
  { category: "Events", alt: "Youth event" },
  { category: "Conference", alt: "Guest minister" },
  { category: "Worship", alt: "Choir ministration" },
];

const categories = ["All", "Worship", "Services", "Events", "Conference"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter(g => g.category === filter);
  const colors = ["from-primary to-secondary", "from-secondary to-primary", "from-primary/80 to-secondary/80"];

  return (
    <div>
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Gallery</h1>
          <p className="text-primary-foreground/70 text-lg">Moments captured from our services, events, and gatherings</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 justify-center mb-12 flex-wrap">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === c ? "gradient-bg text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <ScrollAnimationWrapper key={`${item.alt}-${i}`} delay={i * 0.05}>
                <div
                  className={`rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid bg-gradient-to-br ${colors[i % 3]}`}
                  style={{ height: `${200 + (i % 3) * 80}px` }}
                  onClick={() => setLightbox(i)}
                >
                  <div className="w-full h-full flex items-center justify-center text-primary-foreground/60 font-heading text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.alt}
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-8" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          <div className={`w-full max-w-3xl h-[60vh] rounded-2xl bg-gradient-to-br ${colors[lightbox % 3]} flex items-center justify-center`}>
            <p className="text-primary-foreground font-heading text-xl">{filtered[lightbox]?.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
