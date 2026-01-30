"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import BackgroundManager from "@/components/BackgroundManager";
import {
  CheckCircle2,
  ArrowRight,
  Factory,
  Settings,
  HardHat,
  Construction,
  FlaskConical,
  Cpu,
} from "lucide-react";
import { Footer } from "@/components/footer";

const INDUSTRIAL_CONTENT = {
  title: "Industrial & Manufacturing",
  description:
    "In the industrial sector, social media is about credibility and scale. We help B2B brands communicate expertise and reliability to decision-makers and global partners.",
  subcategories: [
    { id: "all", name: "Full Inventory" },
    {
      id: "manufacturing",
      name: "Manufacturing Units",
      icon: <Factory size={20} />,
      details:
        "Showcasing production strength, quality control, and operational compliance.",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
        "https://images.unsplash.com/photo-1565034946487-067915995742?w=800",
      ],
    },
    {
      id: "factories",
      name: "Industrial Factories",
      icon: <Settings size={20} />,
      details:
        "Factory walkthroughs, process storytelling, and safety-first corporate branding.",
      images: [
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800",
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800",
      ],
    },
    {
      id: "oem",
      name: "OEM & B2B Suppliers",
      icon: <Cpu size={20} />,
      details:
        "Positioning vendors as strategic partners through application-based content.",
      images: [
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
        "https://images.unsplash.com/photo-1535813548-6601f6945ef6?w=800",
      ],
    },
    {
      id: "construction",
      name: "Construction Materials",
      icon: <Construction size={20} />,
      details:
        "Communicating durability and performance through site usage and testing visuals.",
      images: [
        "https://images.unsplash.com/photo-1541888941259-792739460a3b?w=800",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
      ],
    },
    {
      id: "chemicals",
      name: "Chemicals & Products",
      icon: <FlaskConical size={20} />,
      details:
        "Focusing on safety standards, technical clarity, and quality compliance.",
      images: [
        "https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?w=800",
        "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800",
      ],
    },
  ],
};

export default function IndustrialPortfolio() {
  const [filter, setFilter] = useState("all");

  const displayImages =
    filter === "all"
      ? INDUSTRIAL_CONTENT.subcategories
          .filter((s) => s.id !== "all")
          .flatMap((s) => s.images)
      : INDUSTRIAL_CONTENT.subcategories.find((s) => s.id === filter)?.images ||
        [];

  return (
    <main className="relative min-h-screen font-space bg-[#F8F4E8]">
      <BackgroundManager />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24">
        {/* 1. Technical Header */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#0A2A1F] border-2 border-[#0A2A1F] rounded-lg shadow-[4px_4px_0px_0px_#D2E823]">
            <HardHat size={16} className="text-[#D2E823]" />
            <span className="text-[10px] font-dela text-[#D2E823] uppercase tracking-widest">
              B2B Protocol: 04
            </span>
          </div>
          <h1 className="font-dela text-6xl md:text-8xl text-[#0A2A1F] uppercase leading-[0.85] tracking-tighter mb-8">
            Industrial <br />{" "}
            <span className="text-white text-outline-green">Authority.</span>
          </h1>
          <p className="max-w-2xl text-xl font-bold text-[#0A2A1F] opacity-80 leading-relaxed">
            {INDUSTRIAL_CONTENT.description}
          </p>
        </header>

        {/* 2. Blueprint Filter Toggle */}
        <div className="flex flex-wrap gap-4 mb-16">
          {INDUSTRIAL_CONTENT.subcategories.map((sub) => (
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

        {/* 3. Blueprint Gallery Grid */}
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
                className="group relative aspect-video border-2 border-[#0A2A1F] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#0A2A1F] bg-[#0A2A1F]"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  alt="Industrial Asset"
                />

                {/* Technical HUD Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="bg-[#D2E823] text-[#0A2A1F] px-2 py-0.5 text-[8px] font-mono border border-[#0A2A1F]">
                      SPEC_ID // ARCH_v{index + 1}
                    </div>
                    <div className="w-2 h-2 bg-[#D2E823] rounded-full animate-pulse" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-[10px] font-dela text-[#D2E823] uppercase">
                      Operational Reliability Verified
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. Core Capabilities & Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-10">
            <h2 className="font-dela text-4xl text-[#0A2A1F] uppercase tracking-tighter">
              Manufacturing Protocols
            </h2>
            {INDUSTRIAL_CONTENT.subcategories.slice(1).map((sub) => (
              <div
                key={sub.id}
                className="p-8 bg-white border-2 border-[#0A2A1F] rounded-2xl shadow-[6px_6px_0px_0px_#0A2A1F] hover:shadow-none transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#0A2A1F] text-[#D2E823] p-2 rounded-lg">
                    {sub.icon}
                  </div>
                  <h3 className="font-dela text-2xl text-[#0A2A1F] uppercase">
                    {sub.name}
                  </h3>
                </div>
                <p className="font-bold text-[#0A2A1F]/70 mb-6 leading-relaxed">
                  {sub.details}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Scale Branding",
                    "Procurement Focus",
                    "SLA Verification",
                    "B2B Visibility",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#D2E823]/20 border border-[#0A2A1F]/20 rounded font-bold text-[9px] uppercase text-[#0A2A1F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-[#0A2A1F] border-2 border-[#0A2A1F] p-10 rounded-3xl shadow-[10px_10px_0px_0px_#D2E823] text-[#F8F4E8]">
              <h2 className="font-dela text-4xl text-[#D2E823] mb-8 uppercase leading-none">
                The Industrial Logic
              </h2>
              <div className="space-y-8">
                {[
                  "Deep understanding of B2B buyer behavior",
                  "Professional, non-promotional approach",
                  "LinkedIn & YouTube strategy alignment",
                  "Focus on long-term brand equity",
                ].map((item) => (
                  <div key={item} className="flex gap-4 items-start group">
                    <div className="bg-[#D2E823] p-1 rounded-md mt-1 group-hover:scale-110 transition-all">
                      <CheckCircle2 size={16} className="text-[#0A2A1F]" />
                    </div>
                    <span className="font-bold text-[#F8F4E8] uppercase tracking-tight text-sm leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <button className="mt-12 w-full py-5 bg-[#D2E823] text-[#0A2A1F] font-dela text-lg rounded-xl border-2 border-[#0A2A1F] hover:bg-[#F8F4E8] transition-all transform hover:-translate-y-1">
                DEPLOY STRATEGIC PLAN
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
