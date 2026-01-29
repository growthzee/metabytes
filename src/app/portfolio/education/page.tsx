"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import BackgroundManager from "@/components/BackgroundManager";
import { CheckCircle2, ArrowRight, Info, GraduationCap } from "lucide-react";
import { Footer } from "@/components/footer";

const EDUCATION_CONTENT = {
  title: "Education Sector",
  description:
    "Educational institutions today need more than just good infrastructure—they need visibility, trust, and consistent digital presence.",
  subcategories: [
    {
      id: "all",
      name: "All Units",
    },
    {
      id: "schools",
      name: "Schools",
      details:
        "Brand credibility, admissions-focused content, and campus life engagement.",
      images: [
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
      ],
    },
    {
      id: "colleges",
      name: "Colleges & Universities",
      details:
        "Academic excellence, campus culture, and alumni success stories.",
      images: [
        "https://images.unsplash.com/photo-1523050335102-c3251d42822a?w=800",
        "https://images.unsplash.com/photo-1541339907198-e08756edd811?w=800",
      ],
    },
    {
      id: "coaching",
      name: "Coaching Institutes",
      details:
        "Results-driven positioning, faculty authority, and student success stories.",
      images: [
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
      ],
    },
    {
      id: "skills",
      name: "Skill & Training",
      details:
        "Career transformation, certifications, and employability highlights.",
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      ],
    },
    {
      id: "edtech",
      name: "EdTech & Online",
      details: "User acquisition, explainer content, and funnel-based sales.",
      images: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800",
        "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=800",
      ],
    },
  ],
};

export default function EducationPortfolio() {
  const [filter, setFilter] = useState("all");

  // Filter Logic: Get images based on selection
  const displayImages =
    filter === "all"
      ? EDUCATION_CONTENT.subcategories
          .filter((s) => s.id !== "all")
          .flatMap((s) => s.images)
      : EDUCATION_CONTENT.subcategories.find((s) => s.id === filter)?.images ||
        [];

  return (
    <main className="relative min-h-screen font-space bg-[#F8F4E8]">
      <BackgroundManager />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24">
        {/* 1. Header Section */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#0A2A1F] border-2 border-[#0A2A1F] rounded-lg shadow-[4px_4px_0px_0px_#D2E823]">
            <GraduationCap size={16} className="text-[#D2E823]" />
            <span className="text-[10px] font-dela text-[#D2E823] uppercase">
              Sector Analysis: 01
            </span>
          </div>
          <h1 className="font-dela text-6xl md:text-8xl text-[#0A2A1F] uppercase leading-[0.85] tracking-tighter mb-8">
            Education <br />{" "}
            <span className="text-[#D2E823] text-outline-green">
              Marketing.
            </span>
          </h1>
          <p className="max-w-2xl text-xl font-bold text-[#0A2A1F] opacity-80 leading-relaxed">
            {EDUCATION_CONTENT.description}
          </p>
        </header>

        {/* 2. Filter Terminal */}
        <div className="flex flex-wrap gap-4 mb-12">
          {EDUCATION_CONTENT.subcategories.map((sub) => (
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

        {/* 3. Dynamic Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <AnimatePresence mode="popLayout">
            {displayImages.map((img, index) => (
              <motion.div
                key={img}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-square border-2 border-[#0A2A1F] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#0A2A1F]"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Portfolio"
                />
                <div className="absolute inset-0 bg-[#0A2A1F]/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-[#D2E823] border-2 border-[#0A2A1F] px-3 py-1 font-dela text-[10px] uppercase">
                    Asset_v{index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. Detailed Strategy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="space-y-8">
            <h2 className="font-dela text-4xl text-[#0A2A1F] uppercase">
              Targeted Approaches
            </h2>
            {EDUCATION_CONTENT.subcategories.slice(1).map((sub) => (
              <div
                key={sub.id}
                className="p-8 bg-white border-2 border-[#0A2A1F] rounded-2xl shadow-[4px_4px_0px_0px_#0A2A1F]"
              >
                <h3 className="font-dela text-xl text-[#0A2A1F] mb-4 uppercase">
                  {sub.name}
                </h3>
                <p className="font-bold text-[#0A2A1F]/70 mb-4">
                  {sub.details}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {["Lead Gen", "Campus Life", "Admissions", "Reputation"].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-tight"
                      >
                        <ArrowRight
                          size={14}
                          className="text-[#D2E823] bg-[#0A2A1F] rounded-full p-0.5"
                        />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 h-fit space-y-8">
            <div className="bg-[#D2E823] border-2 border-[#0A2A1F] p-10 rounded-2xl shadow-[8px_8px_0px_0px_#0A2A1F]">
              <h2 className="font-dela text-3xl text-[#0A2A1F] mb-6 uppercase">
                Why CotoAds for Education?
              </h2>
              <div className="space-y-6">
                {[
                  "Deep ecosystem understanding",
                  "Platform-specific content (Insta/FB)",
                  "Focus on trust & authority",
                  "Data-driven enrollment goals",
                ].map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <div className="bg-[#0A2A1F] p-1 rounded-md mt-1">
                      <CheckCircle2 size={16} className="text-[#D2E823]" />
                    </div>
                    <span className="font-bold text-[#0A2A1F] uppercase tracking-tight leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <button className="mt-10 w-full py-4 bg-[#0A2A1F] text-[#D2E823] font-dela rounded-xl border-2 border-[#0A2A1F] hover:bg-[#F8F4E8] hover:text-[#0A2A1F] transition-all">
                INITIATE STRATEGY
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
