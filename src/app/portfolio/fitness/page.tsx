"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import BackgroundManager from "@/components/BackgroundManager";
import {
  CheckCircle2,
  ArrowRight,
  Dumbbell,
  Zap,
  Flame,
  Trophy,
} from "lucide-react";
import { Footer } from "@/components/footer";

const FITNESS_CONTENT = {
  title: "Fitness & Wellness",
  description:
    "The fitness and wellness industry thrives on motivation, visibility, and results. We help brands build an active digital presence that inspires action and converts followers into loyal members.",
  subcategories: [
    { id: "all", name: "Full Archive" },
    {
      id: "gyms",
      name: "Gyms & Centers",
      details:
        "Membership-driven campaigns, transformation progress, and facility highlights.",
      images: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800",
      ],
    },
    {
      id: "yoga",
      name: "Yoga & Zumba",
      details:
        "Calm yet engaging content focusing on health, flexibility, and community building.",
      images: [
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
        "https://images.unsplash.com/photo-1518611012118-296072bb58c4?w=800",
      ],
    },
    {
      id: "trainers",
      name: "Personal Trainers",
      details:
        "Personal branding, results-based testimonials, and lead gen for coaching.",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800",
      ],
    },
    {
      id: "nutrition",
      name: "Nutrition Brands",
      details:
        "Product education, lifestyle storytelling, and conversion-focused product sales.",
      images: [
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800",
      ],
    },
  ],
};

export default function FitnessPortfolio() {
  const [filter, setFilter] = useState("all");

  const displayImages =
    filter === "all"
      ? FITNESS_CONTENT.subcategories
          .filter((s) => s.id !== "all")
          .flatMap((s) => s.images)
      : FITNESS_CONTENT.subcategories.find((s) => s.id === filter)?.images ||
        [];

  return (
    <main className="relative min-h-screen font-space bg-[#F8F4E8]">
      <BackgroundManager />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24">
        {/* 1. Neubrutalist Header */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#0A2A1F] border-2 border-[#0A2A1F] rounded-lg shadow-[4px_4px_0px_0px_#D2E823]">
            <Dumbbell size={16} className="text-[#D2E823]" />
            <span className="text-[10px] font-dela text-[#D2E823] uppercase tracking-widest">
              Sector Dossier: 03
            </span>
          </div>
          <h1 className="font-dela text-6xl md:text-8xl text-[#0A2A1F] uppercase leading-[0.85] tracking-tighter mb-8">
            Fitness <br />{" "}
            <span className="text-white text-outline-green">Impact.</span>
          </h1>
          <p className="max-w-2xl text-xl font-bold text-[#0A2A1F] opacity-80 leading-relaxed">
            {FITNESS_CONTENT.description}
          </p>
        </header>

        {/* 2. Tactical Filter Toggle */}
        <div className="flex flex-wrap gap-4 mb-16">
          {FITNESS_CONTENT.subcategories.map((sub) => (
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

        {/* 3. Performance Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <AnimatePresence mode="popLayout">
            {displayImages.map((img, index) => (
              <motion.div
                key={img}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "grayscale(100%) brightness(0.8)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "grayscale(0%) brightness(1)",
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square border-2 border-[#0A2A1F] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#0A2A1F] bg-white"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Fitness Portfolio"
                />
                <div className="absolute inset-0 bg-[#D2E823]/10 group-hover:bg-transparent transition-colors" />

                {/* HUD Overlay Label */}
                <div className="absolute top-4 right-4">
                  <div className="bg-[#0A2A1F] text-[#D2E823] px-2 py-1 font-mono text-[8px] uppercase tracking-tighter">
                    Performance_Log_{index + 1}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#D2E823] border-2 border-[#0A2A1F] px-3 py-1 font-dela text-[10px] uppercase shadow-[2px_2px_0px_0px_#0A2A1F]">
                    High_Intensity
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. Strategy & Psychology Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-10">
            <h2 className="font-dela text-4xl text-[#0A2A1F] uppercase tracking-tighter">
              Operational Framework
            </h2>
            {FITNESS_CONTENT.subcategories.slice(1).map((sub) => (
              <div
                key={sub.id}
                className="p-8 bg-white border-2 border-[#0A2A1F] rounded-2xl shadow-[6px_6px_0px_0px_#0A2A1F] hover:shadow-none transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#D2E823] border-2 border-[#0A2A1F] p-2 rounded-lg">
                    <Flame size={20} className="text-[#0A2A1F]" />
                  </div>
                  <h3 className="font-dela text-2xl text-[#0A2A1F] uppercase">
                    {sub.name}
                  </h3>
                </div>
                <p className="font-bold text-[#0A2A1F]/70 mb-6 leading-relaxed">
                  {sub.details}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Motivation UI",
                    "Community Reach",
                    "Transformation",
                    "ROI Tracking",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 text-[10px] font-dela uppercase text-[#0A2A1F]"
                    >
                      <Trophy size={14} className="text-[#D2E823]" />
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-[#0A2A1F] border-2 border-[#0A2A1F] p-10 rounded-3xl shadow-[10px_10px_0px_0px_#D2E823] text-[#F8F4E8]">
              <h2 className="font-dela text-4xl text-[#D2E823] mb-8 uppercase leading-none">
                The Fitness Advantage
              </h2>
              <div className="space-y-8">
                {[
                  "Deep fitness audience psychology",
                  "Reels & short-form video optimization",
                  "Growth & retention focused campaigns",
                  "Performance marketing balance",
                ].map((item) => (
                  <div key={item} className="flex gap-4 items-start group">
                    <div className="bg-[#D2E823] p-1 rounded-md mt-1 group-hover:rotate-12 transition-transform">
                      <Zap
                        size={16}
                        className="text-[#0A2A1F] fill-[#0A2A1F]"
                      />
                    </div>
                    <span className="font-bold text-[#F8F4E8] uppercase tracking-tight text-sm leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-12 w-full py-5 bg-[#D2E823] text-[#0A2A1F] font-dela text-lg rounded-xl border-2 border-[#0A2A1F] hover:bg-[#F8F4E8] transition-all transform hover:-translate-y-1">
                ACTIVATE CAMPAIGN
              </button>

              <div className="mt-6 flex justify-center opacity-40">
                <p className="font-mono text-[9px] uppercase tracking-[0.4em]">
                  High-Velocity Growth Protocol
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
