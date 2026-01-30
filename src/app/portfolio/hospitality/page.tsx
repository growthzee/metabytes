"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import BackgroundManager from "@/components/BackgroundManager";
import {
  CheckCircle2,
  ArrowRight,
  Utensils,
  Coffee,
  Soup,
  Bed,
  Star,
  MapPin,
  Instagram,
} from "lucide-react";
import { Footer } from "@/components/footer";

const HOSPITALITY_CONTENT = {
  title: "Food & Hospitality",
  description:
    "In this industry, people eat with their eyes first and book with trust. We help brands convert social media attention into reservations, orders, and repeat visits.",
  subcategories: [
    { id: "all", name: "Full Menu" },
    {
      id: "restaurants",
      name: "Restaurants & Cafes",
      icon: <Utensils size={20} />,
      details:
        "Appetite-driven content, menu presentation, and discovery-focused short-form video.",
      images: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
        "https://images.unsplash.com/photo-1550966844-4927132954e5?w=800",
      ],
    },
    {
      id: "cloud",
      name: "Cloud Kitchens",
      icon: <Soup size={20} />,
      details:
        "Delivery platform visibility, high-conversion ad creatives, and repeat-order campaigns.",
      images: [
        "https://images.unsplash.com/photo-1526367790999-015070c13b7e?w=800",
        "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=800",
      ],
    },
    {
      id: "brands",
      name: "F&B Brands",
      icon: <Coffee size={20} />,
      details:
        "Product education, lifestyle storytelling, and influencer-driven awareness launches.",
      images: [
        "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800",
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
      ],
    },
    {
      id: "hotels",
      name: "Hotels & Resorts",
      icon: <Bed size={20} />,
      details:
        "Aspirational experience storytelling, amenity showcases, and seasonal booking campaigns.",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
      ],
    },
  ],
};

export default function HospitalityPortfolio() {
  const [filter, setFilter] = useState("all");

  const displayImages =
    filter === "all"
      ? HOSPITALITY_CONTENT.subcategories
          .filter((s) => s.id !== "all")
          .flatMap((s) => s.images)
      : HOSPITALITY_CONTENT.subcategories.find((s) => s.id === filter)
          ?.images || [];

  return (
    <main className="relative min-h-screen font-space bg-[#F8F4E8]">
      <BackgroundManager />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24">
        {/* 1. Appetite-Driven Header */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#0A2A1F] border-2 border-[#0A2A1F] rounded-lg shadow-[4px_4px_0px_0px_#D2E823]">
            <Utensils size={16} className="text-[#D2E823]" />
            <span className="text-[10px] font-dela text-[#D2E823] uppercase tracking-widest">
              Sector_Archive: 07
            </span>
          </div>
          <h1 className="font-dela text-6xl md:text-8xl text-[#0A2A1F] uppercase leading-[0.85] tracking-tighter mb-8">
            Hospitality <br />{" "}
            <span className="text-white text-outline-green">Experience.</span>
          </h1>
          <p className="max-w-2xl text-xl font-bold text-[#0A2A1F] opacity-80 leading-relaxed">
            {HOSPITALITY_CONTENT.description}
          </p>
        </header>

        {/* 2. Tactical Menu Toggle */}
        <div className="flex flex-wrap gap-4 mb-16">
          {HOSPITALITY_CONTENT.subcategories.map((sub) => (
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

        {/* 3. Appetite Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <AnimatePresence mode="popLayout">
            {displayImages.map((img, index) => (
              <motion.div
                key={img}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square border-2 border-[#0A2A1F] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#0A2A1F] bg-[#0A2A1F]"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  alt="Hospitality Portfolio"
                />

                {/* Visual HUD Overlays */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="bg-[#D2E823] text-[#0A2A1F] px-2 py-0.5 font-mono text-[8px] uppercase tracking-tighter border border-[#0A2A1F]">
                      VISUAL_SCAN // HOS_ID_{index + 1}
                    </div>
                    <div className="bg-[#0A2A1F]/80 backdrop-blur-md p-1.5 rounded-full">
                      <Instagram size={14} className="text-[#D2E823]" />
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-[#D2E823] border-2 border-[#0A2A1F] px-3 py-1 font-dela text-[9px] uppercase shadow-[2px_2px_0px_0px_#0A2A1F]">
                      Book_Now
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. Strategic Service Protocols */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-10">
            <h2 className="font-dela text-4xl text-[#0A2A1F] uppercase tracking-tighter">
              Service Frameworks
            </h2>
            {HOSPITALITY_CONTENT.subcategories.slice(1).map((sub) => (
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
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Appetite Focus",
                    "Local Reach",
                    "Booking Funnel",
                    "Visual Luxury",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-3 py-1 bg-[#F8F4E8] border border-[#0A2A1F]/10 rounded font-bold text-[9px] uppercase text-[#0A2A1F]"
                    >
                      <Star
                        size={10}
                        className="fill-[#D2E823] text-[#D2E823]"
                      />
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
                The Hospitality Edge
              </h2>
              <div className="space-y-8">
                {[
                  "Elite visual storytelling & execution",
                  "Local + Performance marketing mastery",
                  "High-engagement Reel optimization",
                  "Data-driven loyalty & booking focus",
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
                RESERVE STRATEGY SESSION
              </button>

              <div className="mt-8 flex items-center justify-center opacity-30 gap-4">
                <MapPin size={20} />
                <p className="font-mono text-[9px] uppercase tracking-[0.3em]">
                  Hyper-Local Strategic Targeting
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
