"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import BackgroundManager from "@/components/BackgroundManager";
import {
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Activity,
} from "lucide-react";
import { Footer } from "@/components/footer";

const HEALTHCARE_CONTENT = {
  title: "Healthcare & Medical",
  description:
    "In the healthcare industry, trust, credibility, and clarity matter more than anything. We help brands build ethical and compliant social media strategies.",
  subcategories: [
    { id: "all", name: "Full Archive" },
    {
      id: "hospitals",
      name: "Hospitals",
      details:
        "Doctor profiles, department highlights, and patient awareness campaigns.",
      images: [
        "https://images.unsplash.com/photo-1519494023292-1cdd231c0a25?w=800",
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
      ],
    },
    {
      id: "dental",
      name: "Dental Care",
      details:
        "Reducing fear through procedure education and before-after testimonials.",
      images: [
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800",
      ],
    },
    {
      id: "physio",
      name: "Physiotherapy",
      details:
        "Recovery journeys, mobility educational content, and exercise awareness.",
      images: [
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
        "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=800",
      ],
    },
    {
      id: "diagnostic",
      name: "Diagnostic Labs",
      details:
        "Highlighting hygiene standards, accuracy, and home collection convenience.",
      images: [
        "https://images.unsplash.com/photo-1579152276503-31581d965576?w=800",
        "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800",
      ],
    },
    {
      id: "wellness",
      name: "Wellness & Ayurvedic",
      details:
        "Treatment philosophy explanation and brand positioning rooted in preventive care.",
      images: [
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
        "https://images.unsplash.com/photo-1612810806563-4cb8275bc16f?w=800",
      ],
    },
  ],
};

export default function HealthcarePortfolio() {
  const [filter, setFilter] = useState("all");

  const displayImages =
    filter === "all"
      ? HEALTHCARE_CONTENT.subcategories
          .filter((s) => s.id !== "all")
          .flatMap((s) => s.images)
      : HEALTHCARE_CONTENT.subcategories.find((s) => s.id === filter)?.images ||
        [];

  return (
    <main className="relative min-h-screen font-space bg-[#F8F4E8]">
      <BackgroundManager />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24">
        {/* 1. Header Section */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#0A2A1F] border-2 border-[#0A2A1F] rounded-lg shadow-[4px_4px_0px_0px_#D2E823]">
            <HeartPulse size={16} className="text-[#D2E823]" />
            <span className="text-[10px] font-dela text-[#D2E823] uppercase tracking-widest text-shadow-none">
              Sector Dossier: 02
            </span>
          </div>
          <h1 className="font-dela text-6xl md:text-8xl text-[#0A2A1F] uppercase leading-[0.85] tracking-tighter mb-8">
            Medical <br />{" "}
            <span className="text-white text-outline-green">Marketing.</span>
          </h1>
          <p className="max-w-2xl text-xl font-bold text-[#0A2A1F] opacity-80 leading-relaxed">
            {HEALTHCARE_CONTENT.description}
          </p>
        </header>

        {/* 2. Tactical Filter Toggle */}
        <div className="flex flex-wrap gap-4 mb-16">
          {HEALTHCARE_CONTENT.subcategories.map((sub) => (
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

        {/* 3. Live Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <AnimatePresence mode="popLayout">
            {displayImages.map((img, index) => (
              <motion.div
                key={img}
                layout
                initial={{ opacity: 0, scale: 0.9, filter: "grayscale(100%)" }}
                animate={{ opacity: 1, scale: 1, filter: "grayscale(0%)" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] border-2 border-[#0A2A1F] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#0A2A1F] bg-white"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Medical Portfolio"
                />
                <div className="absolute inset-0 bg-[#0A2A1F]/10 group-hover:bg-transparent transition-colors" />

                {/* HUD Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="bg-[#D2E823] border-2 border-[#0A2A1F] px-3 py-1 font-dela text-[9px] uppercase shadow-[2px_2px_0px_0px_#0A2A1F]">
                    Medical_Scan_v{index + 1}
                  </div>
                  <Activity
                    size={18}
                    className="text-[#D2E823] drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. Strategy & Analysis Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-10">
            <h2 className="font-dela text-4xl text-[#0A2A1F] uppercase tracking-tighter">
              Strategic Protocols
            </h2>
            {HEALTHCARE_CONTENT.subcategories.slice(1).map((sub) => (
              <div
                key={sub.id}
                className="p-8 bg-white border-2 border-[#0A2A1F] rounded-2xl shadow-[6px_6px_0px_0px_#0A2A1F] hover:shadow-none transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope size={24} className="text-[#0A2A1F]" />
                  <h3 className="font-dela text-2xl text-[#0A2A1F] uppercase">
                    {sub.name}
                  </h3>
                </div>
                <p className="font-bold text-[#0A2A1F]/70 mb-6 leading-relaxed">
                  {sub.details}
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Patient Trust",
                    "Educational UI",
                    "Appointment Driven",
                    "Local Reach",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#F8F4E8] border border-[#0A2A1F]/20 rounded font-bold text-[9px] uppercase text-[#0A2A1F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-[#0A2A1F] border-2 border-[#0A2A1F] p-10 rounded-2xl shadow-[10px_10px_0px_0px_#D2E823] text-[#F8F4E8]">
              <h2 className="font-dela text-4xl text-[#D2E823] mb-8 uppercase leading-none">
                Why Choose CotoAds?
              </h2>
              <div className="space-y-8">
                {[
                  "Ethical healthcare marketing approach",
                  "Patient-first content strategies",
                  "Platform-specific execution (Insta/YT)",
                  "Long-term brand credibility focus",
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

              <button className="mt-12 w-full py-5 bg-[#D2E823] text-[#0A2A1F] font-dela text-lg rounded-xl border-2 border-[#0A2A1F] hover:bg-[#F8F4E8] transition-all transform hover:-translate-y-1 active:translate-y-0">
                INITIATE CLINICAL GROWTH
              </button>

              <div className="mt-6 flex justify-center">
                <p className="font-mono text-[9px] text-white/40 uppercase tracking-[0.3em]">
                  HIPAA Compliant Strategies
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
