"use client";
import { Target, BarChart3, ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const BentoGrid = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
        <div>
          <h2 className="font-dela text-4xl md:text-5xl tracking-tighter text-[#0A2A1F] uppercase">
            Our Core
            <br />
            Weapons
          </h2>
          <p className="font-medium opacity-60 mt-2">
            Data-backed strategies to crush your competition.
          </p>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-2 font-bold hover:text-[#D2E823] hover:bg-[#0A2A1F] px-4 py-2 rounded-lg border-2 border-transparent hover:border-[#0A2A1F] transition-all"
        >
          View All Services <ArrowRight size={20} />
        </a>
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        {/* Large Card: Paid Media - Hover: Image scales and overlay lightens */}
        <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#0A2A1F] cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000"
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
            alt="Paid Media Mastery"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h3 className="text-5xl font-dela text-[#D2E823] mb-2 tracking-tighter uppercase">
              Paid Media
              <br />
              Mastery
            </h3>
            <div className="flex justify-between items-end">
              <p className="text-[#F8F4E8] max-w-xs font-medium">
                Meta, Google, and TikTok ads engineered for maximum conversion
                and aggressive scale.
              </p>
              <button className="bg-[#F8F4E8] text-[#0A2A1F] rounded-full p-4 group-hover:bg-[#D2E823] border-2 border-transparent group-hover:border-[#0A2A1F] transition-colors">
                <ArrowUpRight size={28} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Small Card 1: SEO - Hover: Icon scales up */}
        <div className="relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#F8F4E8] flex flex-col justify-center items-center p-6 text-center cursor-pointer">
          <div className="absolute inset-0 bg-[radial-gradient(#D2E823_2px,transparent_2px)] [background-size:16px_16px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#D2E823] rounded-full flex items-center justify-center border-2 border-[#0A2A1F] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[2px_2px_0px_0px_#0A2A1F]">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-dela text-[#0A2A1F] uppercase tracking-tight">
              SEO Archery
            </h3>
            <p className="text-sm opacity-60 font-bold mt-1 uppercase tracking-tighter">
              Organic Dominance
            </p>
          </div>
        </div>

        {/* Small Card 2: Analytics - Hover: Icon scales up + Hot Tag pulse */}
        <div className="relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#D2E823] flex flex-col justify-center items-center p-6 text-center cursor-pointer">
          <div className="absolute top-4 right-4">
            <span className="bg-[#0A2A1F] text-[#D2E823] text-[10px] font-black px-2 py-1 rounded animate-pulse">
              ROI FOCUSED
            </span>
          </div>
          <div className="w-16 h-16 bg-[#F8F4E8] rounded-full flex items-center justify-center border-2 border-[#0A2A1F] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[2px_2px_0px_0px_#0A2A1F]">
            <BarChart3 size={32} />
          </div>
          <h3 className="text-2xl font-dela text-[#0A2A1F] uppercase tracking-tight">
            Data Analytics
          </h3>
          <p className="text-sm opacity-60 font-bold mt-1 uppercase tracking-tighter">
            Numbers Never Lie
          </p>
        </div>
      </div>
    </section>
  );
};
