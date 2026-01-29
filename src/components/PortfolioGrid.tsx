"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    title: "Corporate",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
    sub: ["Enterprise Portals", "Internal Tools", "Investor Relations"],
    id: "01",
  },
  {
    title: "Startup & Services",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000",
    sub: ["SaaS Landing Pages", "MVP Development", "Pitch Deck Sites"],
    id: "02",
  },
  {
    title: "E-commerce & Retail",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000",
    sub: ["Headless Commerce", "Fashion Retail", "Direct-to-Consumer"],
    id: "03",
  },
  {
    title: "Healthcare & Medical",
    image:
      "https://images.unsplash.com/photo-1504813184591-01592fd03cfd?q=80&w=1000",
    sub: ["Patient Portals", "Telehealth UI", "Medical Equipment"],
    id: "04",
  },
  {
    title: "Industrial & Manufacturing",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
    sub: ["B2B Catalogs", "Supply Chain Dashboards", "Logistics UI"],
    id: "05",
  },
  {
    title: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000",
    sub: ["Property Listings", "Architecture Showcases", "Virtual Tours"],
    id: "06",
  },
];

export default function PortfolioGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative bg-neutral-900/10 border border-white/10 aspect-[4/5] overflow-hidden cursor-pointer"
            >
              {/* Background Visual with design-agency-45 styling */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Technical Labels */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">
                  Sector_{cat.id}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <h3 className="text-3xl font-medium text-white mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                  {cat.title}
                </h3>

                <div className="h-px w-full bg-white/10 mb-6 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                {/* Sub-categories List with staggered animation */}
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {cat.sub.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-1 border border-white/10 text-[9px] font-mono text-neutral-400 uppercase bg-black/40 backdrop-blur-sm"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Surveillance Overlay Line */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
