"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import BackgroundManager from "@/components/BackgroundManager";
import {
  CheckCircle2,
  ArrowRight,
  Palette,
  Scissors,
  Shirt,
  User,
  Camera,
  Sparkles,
} from "lucide-react";
import { Footer } from "@/components/footer";

const LIFESTYLE_CONTENT = {
  title: "Lifestyle & Creative",
  description:
    "Lifestyle and creative brands grow on identity, aesthetics, and emotional connection. We help creative businesses build strong presences that attract the right audience.",
  subcategories: [
    { id: "all", name: "Full Archive" },
    {
      id: "tattoo",
      name: "Tattoo Studios",
      icon: <Palette size={20} />,
      details:
        "Artist-focused content, studio hygiene highlights, and client journey storytelling.",
      images: [
        "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800",
        "https://images.unsplash.com/photo-1590245224376-78e906c641cc?w=800",
      ],
    },
    {
      id: "salons",
      name: "Salons & Spas",
      icon: <Scissors size={20} />,
      details:
        "Before-after transformations, Reels for discovery, and local visibility engagement.",
      images: [
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800",
      ],
    },
    {
      id: "fashion",
      name: "Fashion & Boutiques",
      icon: <Shirt size={20} />,
      details:
        "Collection launches, lookbook content, and niche premium brand positioning.",
      images: [
        "https://images.unsplash.com/photo-1490481651871-ab68624d5517?w=800",
        "https://images.unsplash.com/photo-1445205170230-053b830c6050?w=800",
      ],
    },
    {
      id: "personal",
      name: "Personal Brands",
      icon: <User size={20} />,
      details:
        "Monetizable content planning, audience growth, and long-term credibility.",
      images: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
      ],
    },
  ],
};

export default function LifestylePortfolio() {
  const [filter, setFilter] = useState("all");

  const displayImages =
    filter === "all"
      ? LIFESTYLE_CONTENT.subcategories
          .filter((s) => s.id !== "all")
          .flatMap((s) => s.images)
      : LIFESTYLE_CONTENT.subcategories.find((s) => s.id === filter)?.images ||
        [];

  return (
    <main className="relative min-h-screen font-space bg-[#F8F4E8]">
      <BackgroundManager />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24">
        {/* 1. Creative Header */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#0A2A1F] border-2 border-[#0A2A1F] rounded-lg shadow-[4px_4px_0px_0px_#D2E823]">
            <Camera size={16} className="text-[#D2E823]" />
            <span className="text-[10px] font-dela text-[#D2E823] uppercase tracking-widest">
              Sector_Archive: 08
            </span>
          </div>
          <h1 className="font-dela text-6xl md:text-8xl text-[#0A2A1F] uppercase leading-[0.85] tracking-tighter mb-8">
            Creative <br />{" "}
            <span className="text-white text-outline-green">Identity.</span>
          </h1>
          <p className="max-w-2xl text-xl font-bold text-[#0A2A1F] opacity-80 leading-relaxed">
            {LIFESTYLE_CONTENT.description}
          </p>
        </header>

        {/* 2. Tactical Filter Toggle */}
        <div className="flex flex-wrap gap-4 mb-16">
          {LIFESTYLE_CONTENT.subcategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setFilter(sub.id)}
              className={`px-6 py-3 font-dela text-sm border-2 border-[#0A2A1F] rounded-xl transition-all ${
                filter === sub.id
                  ? "bg-[#D2E823] translate-x-1 translate-y-1 shadow-none"
                  : "bg-white shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              }`}
            >
              {sub.name.toUpperCase()}
            </button>
          ))}
        </div>

        {/* 3. Aesthetic Viewport Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <AnimatePresence mode="popLayout">
            {displayImages.map((img, index) => (
              <motion.div
                key={img}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[3/4] border-2 border-[#0A2A1F] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#0A2A1F] bg-white"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  alt="Creative Portfolio"
                />

                {/* Visual HUD Overlays */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="bg-[#0A2A1F] text-[#D2E823] px-2 py-0.5 font-mono text-[8px] uppercase tracking-tighter border border-[#0A2A1F]">
                      VISUAL_DNA // CR_ID_{index + 1}
                    </div>
                    <Sparkles
                      size={16}
                      className="text-[#D2E823] drop-shadow-[0_0_8px_rgba(210,232,35,0.8)]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="bg-white/90 backdrop-blur-sm border-2 border-[#0A2A1F] px-3 py-1 font-dela text-[9px] uppercase shadow-[2px_2px_0px_0px_#0A2A1F] w-fit opacity-0 group-hover:opacity-100 transition-opacity">
                      View_Project
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. Strategic Aesthetic Protocols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-10">
            <h2 className="font-dela text-4xl text-[#0A2A1F] uppercase tracking-tighter">
              Identity Frameworks
            </h2>
            {LIFESTYLE_CONTENT.subcategories.slice(1).map((sub) => (
              <div
                key={sub.id}
                className="p-8 bg-white border-2 border-[#0A2A1F] rounded-2xl shadow-[6px_6px_0px_0px_#0A2A1F] hover:shadow-none transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#D2E823] border-2 border-[#0A2A1F] p-3 rounded-xl shadow-[2px_2px_0px_0px_#0A2A1F]">
                    {sub.icon}
                  </div>
                  <h3 className="font-dela text-2xl text-[#0A2A1F] uppercase leading-none">
                    {sub.name}
                  </h3>
                </div>
                <p className="font-bold text-[#0A2A1F]/70 mb-6 leading-relaxed">
                  {sub.details}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Aesthetic Focus",
                    "Reels Discovery",
                    "Brand Narrative",
                    "Niche Growth",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-3 py-1 bg-[#0A2A1F] rounded font-bold text-[9px] uppercase text-[#D2E823]"
                    >
                      <ArrowRight size={10} strokeWidth={3} />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-[#0A2A1F] border-2 border-[#0A2A1F] p-10 rounded-3xl shadow-[12px_12px_0px_0px_#D2E823] text-[#F8F4E8]">
              <h2 className="font-dela text-4xl text-[#D2E823] mb-8 uppercase leading-none">
                The Creative Logic
              </h2>
              <div className="space-y-8">
                {[
                  "Elite creative direction & focus",
                  "High-engagement Instagram strategies",
                  "Storytelling with a performance mindset",
                  "Measurable long-term brand value",
                ].map((item) => (
                  <div key={item} className="flex gap-4 items-start group">
                    <div className="bg-[#D2E823] p-1 rounded-md mt-1 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={16} className="text-[#0A2A1F]" />
                    </div>
                    <span className="font-bold text-[#F8F4E8] uppercase tracking-tight text-sm leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-12 w-full py-5 bg-[#D2E823] text-[#0A2A1F] font-dela text-lg rounded-xl border-2 border-[#0A2A1F] hover:bg-[#F8F4E8] transition-all transform hover:-translate-y-2 active:translate-y-0">
                INITIATE BRAND GROWTH
              </button>

              <div className="mt-8 flex items-center justify-center opacity-30 gap-4">
                <Palette size={20} />
                <p className="font-mono text-[9px] uppercase tracking-[0.3em]">
                  Identity-First Strategic Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
