"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Target, Zap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const INDUSTRIES = [
  {
    id: "01",
    name: "Education Sector",
    slug: "education",
    img: "https://images.unsplash.com/photo-1523050335102-c3251d42822a?w=1200",
    subs: ["Schools", "Colleges", "Coaching", "EdTech"],
  },
  {
    id: "02",
    name: "Healthcare & Medical",
    slug: "healthcare",
    img: "https://images.unsplash.com/photo-1519494023292-1cdd231c0a25?w=1200",
    subs: ["Hospitals", "Dental Clinics", "Pathology", "Wellness"],
  },
  {
    id: "03",
    name: "Fitness & Wellness",
    slug: "fitness",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200",
    subs: ["Gyms", "Yoga Studios", "Trainers", "Nutrition"],
  },
  {
    id: "04",
    name: "Industrial (B2B)",
    slug: "industrial",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200",
    subs: ["Factories", "OEM Suppliers", "Chemicals", "Machinery"],
  },
  {
    id: "05",
    name: "Real Estate",
    slug: "real-estate",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
    subs: ["Builders", "Consultants", "Commercial", "Projects"],
  },
  {
    id: "06",
    name: "E-commerce & Retail",
    slug: "ecommerce",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
    subs: ["D2C Brands", "Shopify Stores", "Local Retail", "Startups"],
  },
  {
    id: "07",
    name: "Food & Hospitality",
    slug: "hospitality",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    subs: ["Restaurants", "Cloud Kitchens", "Hotels", "F&B Brands"],
  },
  {
    id: "08",
    name: "Lifestyle & Creative",
    slug: "lifestyle",
    img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200",
    subs: ["Tattoo Studios", "Salons", "Fashion", "Influencers"],
  },
  {
    id: "09",
    name: "Corporate & Startup",
    slug: "corporate",
    img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200",
    subs: ["Tech Startups", "IT Firms", "Consultants", "Agencies"],
  },
];

export default function IndustryTerminal() {
  const [active, setActive] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8 font-space">
      {/* Left Pane: Industry List */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {INDUSTRIES.map((ind, idx) => (
          <Link
            key={ind.id}
            href={`/portfolio/${ind.slug}`}
            onMouseEnter={() => setActive(idx)}
            className={`group relative flex items-center justify-between p-6 border-2 border-[#0A2A1F] rounded-xl transition-all duration-300 text-left ${
              active === idx
                ? "bg-[#D2E823] translate-x-1 translate-y-1 shadow-none"
                : "bg-white shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="font-dela text-sm opacity-30">[{ind.id}]</span>
              <h3 className="font-dela text-xl md:text-2xl text-[#0A2A1F] uppercase tracking-tighter">
                {ind.name}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`text-[10px] font-bold uppercase transition-opacity ${active === idx ? "opacity-100" : "opacity-0"}`}
              >
                View Archive
              </span>
              <ChevronRight
                className={`transition-transform ${active === idx ? "rotate-90" : ""}`}
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Right Pane: Visual Dossier */}
      <div className="w-full lg:w-1/2 sticky top-24 h-fit">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="bg-[#0A2A1F] border-2 border-[#0A2A1F] rounded-2xl shadow-[8px_8px_0px_0px_#D2E823] overflow-hidden"
          >
            {/* Visual Header */}
            <div className="relative aspect-video border-b-2 border-[#0A2A1F]">
              <img
                src={INDUSTRIES[active].img}
                className="w-full h-full object-cover grayscale opacity-50 transition-all group-hover:grayscale-0"
                alt={INDUSTRIES[active].name}
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-2 h-2 bg-[#D2E823] rounded-full animate-pulse shadow-[0_0_10px_#D2E823]" />
                <span className="text-[10px] font-bold text-[#F8F4E8] uppercase tracking-widest">
                  Active_Sector_Scan
                </span>
              </div>

              {/* Direct Link Overlay Button */}
              <Link
                href={`/portfolio/${INDUSTRIES[active].slug}`}
                className="absolute bottom-4 right-4 bg-[#F8F4E8] text-[#0A2A1F] px-4 py-2 rounded-lg font-dela text-[10px] border-2 border-[#0A2A1F] flex items-center gap-2 hover:bg-[#D2E823] transition-colors"
              >
                EXPLORE DOSSIER <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Subcategories Breakdown */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Target size={20} className="text-[#D2E823]" />
                  <span className="font-dela text-sm text-[#D2E823] uppercase">
                    Operational Sub-Sectors
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#F8F4E8]/40">
                  DATA_SET_{INDUSTRIES[active].id}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {INDUSTRIES[active].subs.map((sub, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[#F8F4E8]/10 p-3 rounded-lg border border-white/5 hover:border-[#D2E823] transition-colors"
                  >
                    <Zap size={14} className="text-[#D2E823] fill-[#D2E823]" />
                    <span className="text-xs font-bold text-[#F8F4E8] uppercase tracking-tight">
                      {sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
