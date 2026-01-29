"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const INDUSTRIES = [
  {
    id: "EDU-01",
    name: "Education Sector",
    img: "https://images.unsplash.com/photo-1523050335102-c3251d42822a?q=80&w=1200",
    subs: [
      "Play Schools",
      "Colleges & Universities",
      "Coaching Institutes",
      "EdTech Platforms",
    ],
  },
  {
    id: "MED-02",
    name: "Healthcare & Medical",
    img: "https://images.unsplash.com/photo-1519494023292-1cdd231c0a25?q=80&w=1200",
    subs: [
      "Multi-Speciality Clinics",
      "Dental Care",
      "Physiotherapy",
      "Wellness Clinics",
    ],
  },
  {
    id: "FIT-03",
    name: "Fitness & Wellness",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200",
    subs: [
      "Gyms & Fitness Centers",
      "Yoga & Zumba Studios",
      "Personal Trainers",
      "Wellness Brands",
    ],
  },
  {
    id: "IND-04",
    name: "Industrial (B2B)",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
    subs: [
      "Manufacturing Units",
      "OEM Suppliers",
      "Chemical Brands",
      "Machinery Equipment",
    ],
  },
  {
    id: "REI-05",
    name: "Real Estate & Infra",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    subs: [
      "Builders & Developers",
      "Real Estate Projects",
      "Property Consultants",
      "Commercial Properties",
    ],
  },
  {
    id: "ECO-06",
    name: "E-commerce & Retail",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
    subs: ["D2C Brands", "Shopify Stores", "Local Retail", "Product Startups"],
  },
  {
    id: "FOD-07",
    name: "Food & Hospitality",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
    subs: [
      "Restaurants & Cafes",
      "Cloud Kitchens",
      "Hotels & Resorts",
      "F&B Brands",
    ],
  },
  {
    id: "LFS-08",
    name: "Lifestyle & Creative",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200",
    subs: [
      "Tattoo Studios",
      "Salons & Spas",
      "Fashion Boutiques",
      "Personal Brands",
    ],
  },
  {
    id: "COR-09",
    name: "Corporate & Startup",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200",
    subs: [
      "Tech Companies",
      "Software Firms",
      "Consultants & Agencies",
      "Professional Services",
    ],
  },
];

export default function IndustryDossier() {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-[1400px] mx-auto border-x border-white/5 flex flex-col lg:flex-row min-h-[850px]">
      {/* Left Pane: Archive Index */}
      <div className="w-full lg:w-[45%] flex flex-col border-r border-white/5">
        {INDUSTRIES.map((ind, idx) => (
          <div
            key={ind.id}
            onMouseEnter={() => setActive(idx)}
            className={`group relative p-8 border-b border-white/5 cursor-pointer transition-all duration-500 ${active === idx ? "bg-white/[0.04]" : "hover:bg-white/[0.01]"}`}
          >
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-6">
                <span
                  className={`font-mono text-[10px] transition-colors ${active === idx ? "text-emerald-500" : "text-neutral-600"}`}
                >
                  [{ind.id}]
                </span>
                <h3
                  className={`text-3xl font-medium tracking-tighter transition-all duration-500 ${active === idx ? "text-white translate-x-2" : "text-neutral-500"}`}
                >
                  {ind.name}
                </h3>
              </div>
              <Icon
                icon="ph:arrow-right"
                className={`text-emerald-500 transition-all ${active === idx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
              />
            </div>

            <div
              className={`absolute left-0 top-0 h-full w-1 bg-emerald-500 transition-transform origin-top ${active === idx ? "scale-y-100" : "scale-y-0"}`}
            />
          </div>
        ))}
      </div>

      {/* Right Pane: Visual Data Terminal */}
      <div className="w-full lg:w-[55%] bg-neutral-900/10 relative p-12 lg:p-20 overflow-hidden flex flex-col justify-center sticky top-0 h-screen lg:h-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -40, filter: "blur(20px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            {/* Sector Visual Frame */}
            <div className="relative aspect-video border border-white/10 overflow-hidden mb-12 shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center grayscale opacity-60 transition-all duration-1000 scale-100 group-hover:scale-110"
                style={{ backgroundImage: `url(${INDUSTRIES[active].img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Surveillance Overlay Elements */}
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-mono text-white/70 tracking-widest uppercase">
                  Archive_Feed_0{active + 1}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 text-[9px] font-mono text-white/30 tracking-tighter">
                ISO_800 // 24FPS // DB_SYNC
              </div>
            </div>

            {/* Sub-sector Breakdown */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">
                  Sub_Sector_Protocols
                </div>
                <div className="h-px flex-1 bg-emerald-500/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                {INDUSTRIES[active].subs.map((sub, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i}
                    className="flex items-center gap-3 group/sub"
                  >
                    <div className="w-1 h-1 bg-emerald-500/40 rounded-full group-hover/sub:bg-emerald-500 transition-colors" />
                    <span className="text-sm text-neutral-400 group-hover/sub:text-white transition-colors">
                      {sub}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Fixed Technical Grid in Terminal */}
        <div className="absolute inset-0 pointer-events-none technical-grid opacity-10" />
      </div>
    </section>
  );
}
