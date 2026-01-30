"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import BackgroundManager from "@/components/BackgroundManager";
import {
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Cpu,
  Lightbulb,
  ShieldCheck,
  Target,
  Linkedin,
} from "lucide-react";
import { Footer } from "@/components/footer";

const CORPORATE_CONTENT = {
  title: "Corporate, Startup & Services",
  description:
    "Professional brands require clarity, authority, and consistency. We help B2B and service-based businesses use social media to build credibility and generate meaningful opportunities.",
  subcategories: [
    { id: "all", name: "Corporate Index" },
    {
      id: "startups",
      name: "Startups & Tech",
      icon: <Cpu size={20} />,
      details:
        "Brand positioning, founder branding, and investor-ready digital perception.",
      images: [
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      ],
    },
    {
      id: "software",
      name: "IT & Software Firms",
      icon: <ShieldCheck size={20} />,
      details:
        "Service explanation, problem-solving narratives, and B2B decision-maker communication.",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      ],
    },
    {
      id: "consultants",
      name: "Consultants & Agencies",
      icon: <Lightbulb size={20} />,
      details:
        "Personal branding, insight-driven education, and lead-oriented social campaigns.",
      images: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      ],
    },
    {
      id: "professional",
      name: "Professional Services",
      icon: <Briefcase size={20} />,
      details:
        "Authority building, reputation management, and long-term expertise positioning.",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800",
      ],
    },
  ],
};

export default function CorporatePortfolio() {
  const [filter, setFilter] = useState("all");

  const displayImages =
    filter === "all"
      ? CORPORATE_CONTENT.subcategories
          .filter((s) => s.id !== "all")
          .flatMap((s) => s.images)
      : CORPORATE_CONTENT.subcategories.find((s) => s.id === filter)?.images ||
        [];

  return (
    <main className="relative min-h-screen font-space bg-[#F8F4E8]">
      <BackgroundManager />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24">
        {/* 1. Authority Header */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#0A2A1F] border-2 border-[#0A2A1F] rounded-lg shadow-[4px_4px_0px_0px_#D2E823]">
            <Briefcase size={16} className="text-[#D2E823]" />
            <span className="text-[10px] font-dela text-[#D2E823] uppercase tracking-widest">
              Protocol_ID: 09
            </span>
          </div>
          <h1 className="font-dela text-6xl md:text-8xl text-[#0A2A1F] uppercase leading-[0.85] tracking-tighter mb-8">
            Strategic <br />{" "}
            <span className="text-white text-outline-green">Authority.</span>
          </h1>
          <p className="max-w-2xl text-xl font-bold text-[#0A2A1F] opacity-80 leading-relaxed">
            {CORPORATE_CONTENT.description}
          </p>
        </header>

        {/* 2. Index Filter Toggle */}
        <div className="flex flex-wrap gap-4 mb-16">
          {CORPORATE_CONTENT.subcategories.map((sub) => (
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

        {/* 3. Strategic Viewport Grid */}
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
                className="group relative aspect-[4/3] border-2 border-[#0A2A1F] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#0A2A1F] bg-[#0A2A1F]"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  alt="Corporate Asset"
                />

                {/* HUD Overlay Labels */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="bg-[#D2E823] text-[#0A2A1F] px-2 py-0.5 font-mono text-[8px] uppercase tracking-tighter border border-[#0A2A1F]">
                      SYSTEM_SYNC // B2B_NODE_{index + 1}
                    </div>
                    <Linkedin size={16} className="text-[#D2E823]" />
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-[#D2E823] border-2 border-[#0A2A1F] px-3 py-1 font-dela text-[10px] uppercase shadow-[2px_2px_0px_0px_#0A2A1F] w-fit">
                      Case_Study_v{index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. Core Framework & B2B Logic */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-10">
            <h2 className="font-dela text-4xl text-[#0A2A1F] uppercase tracking-tighter">
              B2B Core Weapons
            </h2>
            {CORPORATE_CONTENT.subcategories.slice(1).map((sub) => (
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
                <div className="flex flex-wrap gap-2">
                  {[
                    "Expertise Clarity",
                    "B2B Lead Flow",
                    "Brand Authority",
                    "Strategic Trust",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-3 py-1 bg-[#F8F4E8] border border-[#0A2A1F]/10 rounded font-bold text-[9px] uppercase text-[#0A2A1F]"
                    >
                      <Target size={12} className="text-[#0A2A1F]" />
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
                The Corporate Logic
              </h2>
              <div className="space-y-8">
                {[
                  "Deep B2B & service-based marketing insight",
                  "Professional tone aligned with standards",
                  "LinkedIn, Instagram & Google alignment",
                  "Focus on credibility & long-term value",
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
                DEPLOY CORPORATE STRATEGY
              </button>

              <div className="mt-8 flex justify-center opacity-30">
                <p className="font-mono text-[9px] uppercase tracking-[0.4em]">
                  Enterprise Growth Protocols Active
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
