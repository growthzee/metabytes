"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import BackgroundManager from "@/components/BackgroundManager";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  MapPin,
  UserCheck,
  Warehouse,
  Target,
  TrendingUp,
} from "lucide-react";
import { Footer } from "@/components/footer";

const REAL_ESTATE_CONTENT = {
  title: "Real Estate & Infrastructure",
  description:
    "In real estate, buying decisions are driven by trust, clarity, and perception. We help brands build digital visibility and position projects as high-value investments through strategic storytelling.",
  subcategories: [
    { id: "all", name: "Project Index" },
    {
      id: "builders",
      name: "Builders & Developers",
      icon: <Building2 size={20} />,
      details:
        "Brand positioning, construction milestones, and delivery assurance content.",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      ],
    },
    {
      id: "projects",
      name: "Real Estate Projects",
      icon: <MapPin size={20} />,
      details:
        "Project walkthroughs, location advantages, and lifestyle-centric communication.",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800",
      ],
    },
    {
      id: "consultants",
      name: "Property Consultants",
      icon: <UserCheck size={20} />,
      details:
        "Personal branding, market education, and local dominance through visibility.",
      images: [
        "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800",
        "https://images.unsplash.com/photo-1582408921715-18e7806367c1?w=800",
      ],
    },
    {
      id: "commercial",
      name: "Commercial & Industrial",
      icon: <Warehouse size={20} />,
      details:
        "Warehouse and office showcases with ROI-driven business value propositions.",
      images: [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      ],
    },
  ],
};

export default function RealEstatePortfolio() {
  const [filter, setFilter] = useState("all");

  const displayImages =
    filter === "all"
      ? REAL_ESTATE_CONTENT.subcategories
          .filter((s) => s.id !== "all")
          .flatMap((s) => s.images)
      : REAL_ESTATE_CONTENT.subcategories.find((s) => s.id === filter)
          ?.images || [];

  return (
    <main className="relative min-h-screen font-space bg-[#F8F4E8]">
      <BackgroundManager />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24">
        {/* 1. Structural Header */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#0A2A1F] border-2 border-[#0A2A1F] rounded-lg shadow-[4px_4px_0px_0px_#D2E823]">
            <Building2 size={16} className="text-[#D2E823]" />
            <span className="text-[10px] font-dela text-[#D2E823] uppercase tracking-widest">
              Project_ID: 05
            </span>
          </div>
          <h1 className="font-dela text-6xl md:text-8xl text-[#0A2A1F] uppercase leading-[0.85] tracking-tighter mb-8">
            Real Estate <br />{" "}
            <span className="text-white text-outline-green">Aesthetics.</span>
          </h1>
          <p className="max-w-2xl text-xl font-bold text-[#0A2A1F] opacity-80 leading-relaxed">
            {REAL_ESTATE_CONTENT.description}
          </p>
        </header>

        {/* 2. Tactical Filter Toggle */}
        <div className="flex flex-wrap gap-4 mb-16">
          {REAL_ESTATE_CONTENT.subcategories.map((sub) => (
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

        {/* 3. Asset Viewport Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <AnimatePresence mode="popLayout">
            {displayImages.map((img, index) => (
              <motion.div
                key={img}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] border-2 border-[#0A2A1F] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#0A2A1F] bg-[#0A2A1F]"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  alt="Real Estate Project"
                />

                {/* HUD Overlay Labels */}
                <div className="absolute top-4 left-4">
                  <div className="bg-[#D2E823] border border-[#0A2A1F] px-2 py-0.5 font-mono text-[8px] uppercase tracking-tighter">
                    SCAN_RE_P{index + 1}
                  </div>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-[#D2E823] border-2 border-[#0A2A1F] px-3 py-1 font-dela text-[10px] uppercase shadow-[2px_2px_0px_0px_#0A2A1F]">
                    High_Value_Asset
                  </div>
                </div>
                <div className="absolute inset-0 border-[10px] border-white/0 group-hover:border-white/5 transition-all pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. Strategic Implementation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-10">
            <h2 className="font-dela text-4xl text-[#0A2A1F] uppercase tracking-tighter">
              Development Protocols
            </h2>
            {REAL_ESTATE_CONTENT.subcategories.slice(1).map((sub) => (
              <div
                key={sub.id}
                className="p-8 bg-white border-2 border-[#0A2A1F] rounded-2xl shadow-[6px_6px_0px_0px_#0A2A1F] hover:shadow-none transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#0A2A1F] text-[#D2E823] p-3 rounded-xl">
                    {sub.icon}
                  </div>
                  <h3 className="font-dela text-2xl text-[#0A2A1F] uppercase leading-none">
                    {sub.name}
                  </h3>
                </div>
                <p className="font-bold text-[#0A2A1F]/70 mb-6 leading-relaxed">
                  {sub.details}
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Lead Funnels",
                    "Visual Story",
                    "Buyer Trust",
                    "Market Authority",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-3 py-1 bg-[#D2E823]/10 border border-[#0A2A1F]/10 rounded-full"
                    >
                      <Target size={12} className="text-[#0A2A1F]" />
                      <span className="text-[10px] font-bold uppercase text-[#0A2A1F]">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-[#0A2A1F] border-2 border-[#0A2A1F] p-10 rounded-3xl shadow-[12px_12px_0px_0px_#D2E823] text-[#F8F4E8]">
              <h2 className="font-dela text-4xl text-[#D2E823] mb-8 uppercase leading-none">
                The Conversion Engine
              </h2>
              <div className="space-y-8">
                {[
                  "Deep buyer psychology understanding",
                  "Premium visual storytelling approach",
                  "Lead-oriented brand trust focus",
                  "Omni-channel platform execution",
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

              <button className="mt-12 w-full py-5 bg-[#D2E823] text-[#0A2A1F] font-dela text-lg rounded-xl border-2 border-[#0A2A1F] hover:bg-[#F8F4E8] transition-all transform hover:-translate-y-2">
                INITIATE PROJECT FLOW
              </button>

              <div className="mt-8 flex items-center justify-between opacity-30">
                <TrendingUp size={24} />
                <p className="font-mono text-[9px] uppercase tracking-[0.2em]">
                  Data-Driven Real Estate Marketing
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
