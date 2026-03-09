import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Search, BookOpen, Download, Share2 } from "lucide-react";
import ScrollAnimationWrapper from "@/components/home/ScrollAnimationWrapper";

const allSermons = [
  { id: 1, title: "Walking in Divine Purpose", speaker: "Pastor Simeon Afolabi", date: "March 2, 2025", topic: "Purpose", series: "Kingdom Living" },
  { id: 2, title: "The Power of First Love", speaker: "Pastor Simeon Afolabi", date: "Feb 23, 2025", topic: "Love", series: "Back to Basics" },
  { id: 3, title: "Established in God", speaker: "Pastor Simeon Afolabi", date: "Feb 16, 2025", topic: "Faith", series: "Foundations" },
  { id: 4, title: "Raising Godly Families", speaker: "Pastor Simeon Afolabi", date: "Feb 9, 2025", topic: "Family", series: "Kingdom Living" },
  { id: 5, title: "The Apostolic Mandate", speaker: "Pastor Simeon Afolabi", date: "Feb 2, 2025", topic: "Ministry", series: "Foundations" },
  { id: 6, title: "Overcoming by Faith", speaker: "Pastor Simeon Afolabi", date: "Jan 26, 2025", topic: "Faith", series: "Victory Series" },
];

const Sermons = () => {
  const [search, setSearch] = useState("");
  const [topicFilter, setTopicFilter] = useState("");

  const topics = [...new Set(allSermons.map(s => s.topic))];
  const filtered = allSermons.filter(s =>
    s.title.toLowerCase().includes(search.toLowerCase()) &&
    (!topicFilter || s.topic === topicFilter)
  );

  return (
    <div>
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-95" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">Sermons</h1>
          <p className="text-primary-foreground/70 text-lg">Be inspired and transformed by the Word of God</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search sermons..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setTopicFilter("")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!topicFilter ? "gradient-bg text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
              >
                All
              </button>
              {topics.map(t => (
                <button
                  key={t}
                  onClick={() => setTopicFilter(t)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${topicFilter === t ? "gradient-bg text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Sermon Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s, i) => (
              <ScrollAnimationWrapper key={s.id} delay={i * 0.08}>
                <div className="bg-card rounded-2xl overflow-hidden card-elevated group">
                  <div className="relative h-44 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                      <Play size={28} className="text-primary-foreground ml-1" />
                    </div>
                    <span className="absolute top-4 right-4 bg-primary-foreground/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-primary-foreground font-medium">
                      {s.series}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{s.speaker}</p>
                    <p className="text-muted-foreground/60 text-xs mb-4">{s.date}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <BookOpen size={14} /> Notes
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Download size={14} /> Audio
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 size={14} />
                      </Button>
                    </div>
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

export default Sermons;
