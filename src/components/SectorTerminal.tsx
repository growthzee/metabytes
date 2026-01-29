"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const SECTORS = [
  {
    name: "Corporate",
    id: "01",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    tags: ["Enterprise", "Internal", "SaaS"],
  },
  {
    name: "Startup & Services",
    id: "02",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200",
    tags: ["MVP", "Landing", "Pitch"],
  },
  {
    name: "E-commerce & Retail",
    id: "03",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
    tags: ["D2C", "Headless", "Fashion"],
  },
  {
    name: "Healthcare & Medical",
    id: "04",
    img: "https://images.unsplash.com/photo-1504813184591-01592fd03cfd?q=80&w=1200",
    tags: ["Telehealth", "Portals", "UX"],
  },
  {
    name: "Industrial (B2B Only)",
    id: "05",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
    tags: ["Supply Chain", "B2B", "Logistics"],
  },
  {
    name: "Real Estate",
    id: "06",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    tags: ["Listing", "3D", "Architecture"],
  },
];

export default function SectorTerminal() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="max-w-[1400px] mx-auto border-x border-white/5 flex flex-col lg:flex-row min-h-[700px]">
      {/* Left: Interactive List */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {SECTORS.map((sector, idx) => (
          <div
            key={sector.id}
            onMouseEnter={() => setActiveIdx(idx)}
            className={`group relative p-10 border-b border-white/5 cursor-pointer transition-colors duration-500 ${activeIdx === idx ? "bg-white/[0.03]" : "bg-transparent"}`}
          >
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-6">
                <span className="font-mono text-[10px] text-neutral-600">
                  [{sector.id}]
                </span>
                <h3
                  className={`text-4xl font-medium tracking-tighter transition-all duration-500 ${activeIdx === idx ? "text-white pl-4" : "text-neutral-500"}`}
                >
                  {sector.name}
                </h3>
              </div>
              <Icon
                icon="ph:arrow-right"
                className={`transition-all duration-500 ${activeIdx === idx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              />
            </div>

            {/* Animated Background Bar */}
            <div
              className={`absolute left-0 top-0 h-full w-1 bg-emerald-500 transition-transform duration-500 origin-top ${activeIdx === idx ? "scale-y-100" : "scale-y-0"}`}
            />
          </div>
        ))}
      </div>

      {/* Right: Visual Terminal */}
      <div className="w-full lg:w-1/2 bg-neutral-900/20 relative overflow-hidden flex items-center justify-center p-12 lg:p-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full aspect-square md:aspect-video lg:aspect-square border border-white/10 overflow-hidden group/img"
          >
            <div
              className="absolute inset-0 bg-cover bg-center grayscale opacity-60 group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-1000"
              style={{ backgroundImage: `url(${SECTORS[activeIdx].img})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            {/* CCTV HUD Elements */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-mono text-white/70">
                FEED_ACTIVE
              </span>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-3">
              {SECTORS[activeIdx].tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 border border-emerald-500/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Technical Grid Overlay restricted to visual side */}
        <div className="absolute inset-0 pointer-events-none technical-grid opacity-10" />
      </div>
    </section>
  );
}
