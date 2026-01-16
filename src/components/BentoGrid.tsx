"use client";
import {
  Target,
  ArrowUpRight,
  ArrowRight,
  Share2,
  ShoppingBag,
  Globe,
  Zap,
} from "lucide-react";

export const BentoGrid = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto font-space">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
        <div>
          <h2 className="font-dela text-4xl md:text-5xl tracking-tighter text-[#0A2A1F] uppercase leading-tight">
            Our Core
            <br />
            Weapons
          </h2>
          <p className="font-medium opacity-60 mt-2 max-w-lg">
            Strategically built packages designed to turn digital bytes into
            measurable business growth.
          </p>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-2 font-bold hover:text-[#D2E823] hover:bg-[#0A2A1F] px-4 py-2 rounded-lg border-2 border-transparent hover:border-[#0A2A1F] transition-all uppercase text-sm"
        >
          View All Services <ArrowRight size={20} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
        {/* 1. SOCIAL MEDIA MARKETING - Small Card */}
        <div className="relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#D2E823] flex flex-col justify-center items-center p-8 text-center cursor-pointer">
          <div className="w-16 h-16 bg-[#F8F4E8] rounded-full flex items-center justify-center border-2 border-[#0A2A1F] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[2px_2px_0px_0px_#0A2A1F]">
            <Share2 size={32} className="text-[#0A2A1F]" />
          </div>
          <h3 className="text-2xl font-dela text-[#0A2A1F] uppercase tracking-tight mb-2">
            Social Media
            <br />
            Marketing
          </h3>
          <p className="text-xs font-bold text-[#0A2A1F]/70 leading-relaxed uppercase tracking-tighter">
            Development of creative content, reels, posts as well as
            implementation of growth-focused social strategies.
          </p>
        </div>

        {/* 2. PERFORMANCE MARKETING - Large Card */}
        <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#0A2A1F] cursor-pointer text-[#F8F4E8]">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
            alt="Performance Marketing"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <h3 className="text-5xl font-dela text-[#D2E823] mb-4 tracking-tighter uppercase leading-none">
              Performance
              <br />
              Marketing
            </h3>
            <div className="flex justify-between items-end gap-6">
              <p className="max-w-sm font-bold text-sm uppercase opacity-90 leading-relaxed tracking-tight">
                Meta & Google Ads for driving the leads, sales, and getting high
                ROI.
              </p>
              <button className="bg-[#F8F4E8] text-[#0A2A1F] rounded-full p-4 group-hover:bg-[#D2E823] border-2 border-transparent group-hover:border-[#0A2A1F] transition-colors shrink-0">
                <ArrowUpRight size={28} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* 3. SEO - Small Card */}
        <div className="relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#F8F4E8] flex flex-col justify-center items-center p-8 text-center cursor-pointer">
          <div className="absolute inset-0 bg-[radial-gradient(#D2E823_2px,transparent_2px)] [background-size:16px_16px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#D2E823] rounded-full flex items-center justify-center border-2 border-[#0A2A1F] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[2px_2px_0px_0px_#0A2A1F]">
              <Target size={32} className="text-[#0A2A1F]" />
            </div>
            <h3 className="text-2xl font-dela text-[#0A2A1F] uppercase tracking-tight mb-2">
              SEO Archery
            </h3>
            <p className="text-xs font-bold text-[#0A2A1F]/70 leading-relaxed uppercase tracking-tighter">
              How to make a website rank higher in search results, draw more
              organic traffic, and maintain visibility.
            </p>
          </div>
        </div>

        {/* 4. WEB & SHOPIFY - Wide Card */}
        <div className="md:col-span-2 relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#F8F4E8] cursor-pointer p-8">
          <div className="h-full flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h3 className="text-4xl font-dela text-[#0A2A1F] uppercase leading-none">
                Web & Shopify
                <br />
                Development
              </h3>
              <p className="text-[#0A2A1F] font-bold text-xs uppercase opacity-70 max-w-md tracking-tight">
                Our work includes building fast, responsive websites as well as
                Shopify stores which are conversion-oriented and serve business
                growth.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-white border-2 border-[#0A2A1F] rounded-xl flex items-center justify-center group-hover:-rotate-6 transition-transform shadow-[2px_2px_0px_0px_#0A2A1F]">
                <Globe size={32} className="text-[#0A2A1F]" />
              </div>
              <div className="w-16 h-16 bg-[#D2E823] border-2 border-[#0A2A1F] rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-[2px_2px_0px_0px_#0A2A1F]">
                <ShoppingBag size={32} className="text-[#0A2A1F]" />
              </div>
            </div>
          </div>
        </div>

        {/* 5. E-COMMERCE MARKETING - Small Card */}
        <div className="relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#0A2A1F] flex flex-col justify-center items-center p-8 text-center cursor-pointer">
          <div className="w-16 h-16 bg-[#F8F4E8] rounded-full flex items-center justify-center border-2 border-[#0A2A1F] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[2px_2px_0px_0px_#D2E823]">
            <Zap size={32} className="text-[#0A2A1F]" />
          </div>
          <h3 className="text-2xl font-dela text-[#F8F4E8] uppercase tracking-tight mb-2">
            E-Commerce
            <br />
            Marketing
          </h3>
          <p className="text-xs font-bold text-[#F8F4E8]/60 leading-relaxed uppercase tracking-tighter">
            Comprehensive e-commerce growth strategies covering the whole funnel
            from traffic to conversions.
          </p>
        </div>
      </div>
    </section>
  );
};
