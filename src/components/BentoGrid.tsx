"use client";
import {
  Target,
  BarChart3,
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
            Our
            <br />
            Services
          </h2>
          <p className="font-medium opacity-60 mt-2">
            Cotoads provides a comprehensive package of digital marketing
            services that are specifically targeted at driving growth of brands
            in the digital space, increasing brand conversion and brand
            ​‍​‌‍​‍‌scaling.
          </p>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-2 font-bold hover:text-[#D2E823] hover:bg-[#0A2A1F] px-4 py-2 rounded-lg border-2 border-transparent hover:border-[#0A2A1F] transition-all uppercase text-sm"
        >
          View All Services <ArrowRight size={20} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {/* 1. Small Card: SOCIAL MEDIA (Now First) */}
        <div className="relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#D2E823] flex flex-col justify-center items-center p-6 text-center cursor-pointer">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#F8F4E8] rounded-full flex items-center justify-center border-2 border-[#0A2A1F] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[2px_2px_0px_0px_#0A2A1F]">
              <Share2 size={32} className="text-[#0A2A1F]" />
            </div>
            <h3 className="text-2xl font-dela text-[#0A2A1F] uppercase tracking-tight">
              Social Growth
            </h3>
            <p className="text-sm opacity-60 font-bold mt-1 uppercase tracking-tighter">
              Viral Strategies
            </p>
          </div>
        </div>

        {/* 2. Large Card: PERFORMANCE MARKETING (Renamed) */}
        <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#0A2A1F] cursor-pointer text-[#F8F4E8]">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
            alt="Performance Marketing"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="mb-4 bg-[#D2E823] text-[#0A2A1F] w-fit px-3 py-1 rounded font-bold text-xs uppercase tracking-widest animate-pulse">
              Scale Mode
            </div>
            <h3 className="text-5xl font-dela text-[#D2E823] mb-4 tracking-tighter uppercase leading-none">
              Performance
              <br />
              Marketing
            </h3>
            <div className="flex justify-between items-end">
              <p className="max-w-xs font-medium opacity-90 leading-relaxed">
                Aggressive Meta & Google ad strategies focused on one thing:
                profitable customer acquisition at scale.
              </p>
              <button className="bg-[#F8F4E8] text-[#0A2A1F] rounded-full p-4 group-hover:bg-[#D2E823] border-2 border-transparent group-hover:border-[#0A2A1F] transition-colors">
                <ArrowUpRight size={28} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Small Card: SEO ARCHERY */}
        <div className="relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#F8F4E8] flex flex-col justify-center items-center p-6 text-center cursor-pointer">
          <div className="absolute inset-0 bg-[radial-gradient(#D2E823_2px,transparent_2px)] [background-size:16px_16px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#D2E823] rounded-full flex items-center justify-center border-2 border-[#0A2A1F] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[2px_2px_0px_0px_#0A2A1F]">
              <Target size={32} className="text-[#0A2A1F]" />
            </div>
            <h3 className="text-2xl font-dela text-[#0A2A1F] uppercase tracking-tight">
              SEO Archery
            </h3>
            <p className="text-sm opacity-60 font-bold mt-1 uppercase tracking-tighter">
              Search Domination
            </p>
          </div>
        </div>

        {/* 4. Wide Card: WEB & SHOPIFY */}
        <div className="md:col-span-2 relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#F8F4E8] cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
            <ShoppingBag size={200} strokeWidth={1} />
          </div>
          <div className="relative h-full flex flex-col md:flex-row items-center justify-between p-8 gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#0A2A1F] text-[#D2E823] px-3 py-1 rounded font-bold text-xs uppercase w-fit mx-auto md:mx-0">
                Development
              </div>
              <h3 className="text-4xl font-dela text-[#0A2A1F] uppercase leading-none">
                Web & Shopify
              </h3>
              <p className="text-[#0A2A1F] font-medium opacity-70 max-w-sm">
                Custom store builds and high-speed web experiences that turn
                traffic into transactions.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-white border-2 border-[#0A2A1F] rounded-xl flex items-center justify-center group-hover:-rotate-6 transition-transform">
                <Globe size={32} className="text-[#0A2A1F]" />
              </div>
              <div className="w-16 h-16 bg-[#D2E823] border-2 border-[#0A2A1F] rounded-xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <ShoppingBag size={32} className="text-[#0A2A1F]" />
              </div>
            </div>
          </div>
        </div>

        {/* 5. Small Card: E-COMMERCE (Renamed from Analytics) */}
        <div className="relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 bg-[#0A2A1F] flex flex-col justify-center items-center p-6 text-center cursor-pointer">
          <div className="absolute top-4 right-4">
            <span className="bg-[#D2E823] text-[#0A2A1F] text-[10px] font-black px-2 py-1 rounded">
              ROI+
            </span>
          </div>
          <div className="w-16 h-16 bg-[#F8F4E8] rounded-full flex items-center justify-center border-2 border-[#0A2A1F] mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[2px_2px_0px_0px_#D2E823]">
            <Zap size={32} className="text-[#0A2A1F]" />
          </div>
          <h3 className="text-2xl font-dela text-[#F8F4E8] uppercase tracking-tight">
            E-Commerce
          </h3>
          <p className="text-sm text-[#F8F4E8] opacity-60 font-bold mt-1 uppercase tracking-tighter">
            Full Funnel
          </p>
        </div>
      </div>
    </section>
  );
};
