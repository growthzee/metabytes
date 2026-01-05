"use client";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, TrendingUp } from "lucide-react";

const cases = [
  {
    client: "Lumino E-com",
    metric: "+450% Revenue",
    service: "Paid Social & Scaling",
    desc: "Scaled a boutique skincare brand from $10k to $150k monthly spend at a 4.2x ROAS.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    tag: "E-COMMERCE",
  },
  {
    client: "Vault Fintech",
    metric: "-60% CPA",
    service: "Search Engine Domination",
    desc: "Overtook legacy competitors for high-intent keywords, driving 12k new signups in 90 days.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    tag: "SAAS",
  },
  {
    client: "Apex Realty",
    metric: "$2.4M Pipeline",
    service: "Lead Gen Machine",
    desc: "Automated a lead qualification funnel that delivered 45 pre-vetted buyers per week.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
    tag: "REAL ESTATE",
  },
  {
    client: "CloudScale AI",
    metric: "10k+ Leads",
    service: "Content Strategy",
    desc: "Built a content engine that established topical authority and eliminated reliance on ads.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    tag: "B2B TECH",
  },
];

export const CaseStudies = () => {
  // 1. Create a reference for the scrollable div
  const scrollRef = useRef<HTMLDivElement>(null);

  // 2. Function to handle the scroll movement
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;

      // Calculate how much to move (one full card width + gap)
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 border-b-2 border-[#0A2A1F] bg-[#F8F4E8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="font-dela text-4xl md:text-5xl tracking-tighter uppercase">
            Proven Results
          </h2>
          <p className="font-medium opacity-70 mt-2">
            We don't promise growth. We deliver it.
          </p>
        </div>

        {/* 3. Attach the scroll function to onClick events */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 border-2 border-[#0A2A1F] rounded-xl flex items-center justify-center hover:bg-[#D2E823] transition-all shadow-[2px_2px_0px_0px_#0A2A1F] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 border-2 border-[#0A2A1F] rounded-xl flex items-center justify-center hover:bg-[#D2E823] transition-all shadow-[2px_2px_0px_0px_#0A2A1F] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* 4. Attach the ref to the container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-4 md:px-8 pb-12 no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {cases.map((c, i) => (
          <div
            key={i}
            className="min-w-[300px] md:min-w-[400px] snap-center group"
          >
            <div className="relative bg-white border-2 border-[#0A2A1F] rounded-2xl aspect-[4/3] mb-6 overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] group-hover:shadow-[8px_8px_0px_0px_#D2E823] transition-all duration-300">
              <div className="absolute top-4 left-4 z-10 bg-[#0A2A1F] text-[#D2E823] px-3 py-1 text-[10px] font-bold rounded uppercase tracking-widest">
                {c.tag}
              </div>
              <img
                src={c.img}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                alt={c.client}
              />
              <div className="absolute inset-0 bg-[#0A2A1F]/20 group-hover:bg-transparent transition-colors" />
              <button className="absolute bottom-4 right-4 bg-[#D2E823] text-[#0A2A1F] p-4 rounded-xl border-2 border-[#0A2A1F] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                <ExternalLink size={24} />
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp size={20} className="text-green-600" />
                <span
                  className="font-dela text-2xl text-[#D2E823]"
                  style={{ WebkitTextStroke: "1px #0A2A1F" }}
                >
                  {c.metric}
                </span>
              </div>
              <h3 className="font-dela text-xl leading-none">{c.client}</h3>
              <p className="text-sm font-bold uppercase text-[#0A2A1F]/60 tracking-tight">
                {c.service}
              </p>
              <p className="text-sm leading-relaxed opacity-80 max-w-[350px]">
                {c.desc}
              </p>
            </div>
          </div>
        ))}

        <div className="min-w-[300px] md:min-w-[400px] snap-center flex flex-col justify-center items-center border-2 border-[#0A2A1F] border-dashed rounded-2xl aspect-[4/3] bg-[#D2E823]/10 hover:bg-[#D2E823] transition-colors cursor-pointer group">
          <div className="w-20 h-20 bg-[#F8F4E8] rounded-full flex items-center justify-center border-2 border-[#0A2A1F] mb-4 group-hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_#0A2A1F]">
            <ArrowRight size={32} />
          </div>
          <h3 className="font-dela text-2xl uppercase text-center px-4">
            View All
            <br />
            Case Studies
          </h3>
        </div>
      </div>
    </section>
  );
};
