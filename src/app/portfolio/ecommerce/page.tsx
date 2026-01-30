"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";

import BackgroundManager from "@/components/BackgroundManager";
import {
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
  Zap,
  Store,
  Rocket,
  BarChart3,
  CreditCard,
} from "lucide-react";
import { Footer } from "@/components/footer";

const ECOM_CONTENT = {
  title: "E-commerce & Retail",
  description:
    "In the e-commerce space, attention is currency and trust drives conversions. We help brands convert social media audiences into paying customers through data-driven strategies.",
  subcategories: [
    { id: "all", name: "Full Catalog" },
    {
      id: "d2c",
      name: "D2C Brands",
      icon: <ShoppingBag size={20} />,
      details:
        "Brand storytelling, high-engagement lifestyle content, and influencer-driven growth.",
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      ],
    },
    {
      id: "shopify",
      name: "Shopify & Marketplace",
      icon: <Zap size={20} />,
      details:
        "Visibility consistency, Reels for reach, and funnel-based audience targeting.",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      ],
    },
    {
      id: "local",
      name: "Local Retail",
      icon: <Store size={20} />,
      details:
        "Store branding, product showcases, and footfall-driven local campaigns.",
      images: [
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
      ],
    },
    {
      id: "startups",
      name: "Product Startups",
      icon: <Rocket size={20} />,
      details:
        "Launch momentum, problem-solution storytelling, and performance-driven growth.",
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800",
      ],
    },
  ],
};

export default function EcommercePortfolio() {
  const [filter, setFilter] = useState("all");

  const displayImages =
    filter === "all"
      ? ECOM_CONTENT.subcategories
          .filter((s) => s.id !== "all")
          .flatMap((s) => s.images)
      : ECOM_CONTENT.subcategories.find((s) => s.id === filter)?.images || [];

  return (
    <main className="relative min-h-screen font-space bg-[#F8F4E8]">
      <BackgroundManager />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24">
        {/* 1. Retail Header */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#0A2A1F] border-2 border-[#0A2A1F] rounded-lg shadow-[4px_4px_0px_0px_#D2E823]">
            <ShoppingBag size={16} className="text-[#D2E823]" />
            <span className="text-[10px] font-dela text-[#D2E823] uppercase tracking-widest">
              Inventory_ID: 06
            </span>
          </div>
          <h1 className="font-dela text-6xl md:text-8xl text-[#0A2A1F] uppercase leading-[0.85] tracking-tighter mb-8">
            Retail <br />{" "}
            <span className="text-white text-outline-green">Velocity.</span>
          </h1>
          <p className="max-w-2xl text-xl font-bold text-[#0A2A1F] opacity-80 leading-relaxed">
            {ECOM_CONTENT.description}
          </p>
        </header>

        {/* 2. Tactical Filter Toggle */}
        <div className="flex flex-wrap gap-4 mb-16">
          {ECOM_CONTENT.subcategories.map((sub) => (
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

        {/* 3. Conversion Gallery Grid */}
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
                className="group relative aspect-square border-2 border-[#0A2A1F] rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#0A2A1F] bg-white"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="E-commerce Asset"
                />

                {/* Sale HUD Overlays */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="bg-[#0A2A1F] text-[#D2E823] px-2 py-0.5 font-mono text-[8px] uppercase tracking-tighter border border-[#0A2A1F]">
                      LIVE_FEED // CAM_RT_{index + 1}
                    </div>
                    <div className="bg-[#D2E823] border border-[#0A2A1F] p-1 rounded-full animate-pulse shadow-[0_0_8px_#D2E823]">
                      <BarChart3 size={12} className="text-[#0A2A1F]" />
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white border-2 border-[#0A2A1F] px-3 py-1 font-dela text-[9px] uppercase shadow-[2px_2px_0px_0px_#0A2A1F]">
                      Add_To_Cart
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 4. Strategy & Funnel Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-10">
            <h2 className="font-dela text-4xl text-[#0A2A1F] uppercase tracking-tighter">
              Growth Protocols
            </h2>
            {ECOM_CONTENT.subcategories.slice(1).map((sub) => (
              <div
                key={sub.id}
                className="p-8 bg-white border-2 border-[#0A2A1F] rounded-2xl shadow-[6px_6px_0px_0px_#0A2A1F] hover:shadow-none transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#D2E823] border-2 border-[#0A2A1F] p-2 rounded-lg">
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
                    "Retargeting",
                    "Conversion UI",
                    "Scale Ops",
                    "UGC Strategy",
                  ].map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-3 py-1 bg-[#0A2A1F]/5 border border-[#0A2A1F]/10 rounded-full"
                    >
                      <CreditCard size={12} className="text-[#0A2A1F]" />
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
                The E-com Weapon
              </h2>
              <div className="space-y-8">
                {[
                  "Deep buyer behavior & funnel mapping",
                  "Creative + Performance marketing balance",
                  "Platform-specific visual execution",
                  "Focus on measurable ROI & brand value",
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
                INITIATE SALES FLOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
