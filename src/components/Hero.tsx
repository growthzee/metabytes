"use client";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Star } from "lucide-react";

export const Hero = () => {
  return (
    <header className="px-4 md:px-8 pt-12 pb-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-8 z-10">
          <div className="inline-flex items-center gap-2 border-2 border-[#0A2A1F] px-4 py-2 rounded-full bg-[#D2E823] shadow-[2px_2px_0px_0px_#0A2A1F] rotate-[-2deg]">
            <Zap size={16} fill="currentColor" />
            <span className="font-bold text-xs uppercase tracking-wider">
              The 10x Growth Engine
            </span>
          </div>

          <h1 className="font-dela text-6xl md:text-8xl leading-[0.9] tracking-tighter text-[#0A2A1F] uppercase">
            Grow​‍​‌‍​‍‌ wiser <br />
            <span className="relative">
              Expand
              <svg
                className="absolute -bottom-4 left-0 w-full"
                viewBox="0 0 200 20"
                fill="none"
              >
                <path
                  d="M2 15Q100 2 198 12"
                  stroke="#D2E823"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            quickly
          </h1>

          <p className="font-medium text-lg md:text-xl max-w-lg leading-relaxed opacity-90 text-[#0A2A1F]">
            Cotoads help businesses grow their online presence through
            high-impact digital marketing. We transform the digital footprint
            into actual growth through SEO, social media, performance marketing,
            and e-commerce.
          </p>

          <div className="flex flex-wrap gap-4 w-full">
            <button className="flex-1 md:flex-none bg-[#0A2A1F] text-[#D2E823] border-2 border-[#0A2A1F] px-8 py-4 rounded-xl font-dela text-lg shadow-[4px_4px_0px_0px_#0A2A1F] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              WORK WITH US
            </button>
            <button className="flex-1 md:flex-none bg-[#F8F4E8] text-[#0A2A1F] border-2 border-[#0A2A1F] px-8 py-4 rounded-xl font-dela text-lg shadow-[4px_4px_0px_0px_#0A2A1F] hover:bg-[#D2E823] transition-all">
              SEE CASE STUDIES
            </button>
          </div>

          {/* ADDED: Trusted Social Proof Section */}
          <div className="flex items-center gap-4 text-sm font-semibold mt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-[#F8F4E8] bg-gray-300 overflow-hidden shadow-sm"
                >
                  <img
                    src={`https://i.pravatar.cc/100?u=agency${i}`}
                    alt="client"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-[#0A2A1F] text-[#0A2A1F]" />
                <p>
                  Rated{" "}
                  <span className="bg-[#D2E823] px-1 text-[#0A2A1F]">
                    4.9/5
                  </span>{" "}
                  by 200+ Growth Partners
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-tighter opacity-60">
                Verified Results by Clutch.co
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="lg:col-span-5 relative mt-10 lg:mt-0">
          <div className="absolute top-0 right-0 w-full h-full bg-[#D2E823] rounded-[2rem] border-2 border-[#0A2A1F] rotate-6 z-0" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 z-20 bg-[#F8F4E8] border-2 border-[#0A2A1F] p-4 rounded-xl shadow-[4px_4px_0px_0px_#0A2A1F]"
          >
            <div className="flex items-center gap-3 text-[#0A2A1F]">
              <div className="bg-blue-100 p-2 rounded-lg border border-[#0A2A1F]">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="font-dela text-sm">+240% ROI</div>
                <div className="text-xs font-mono uppercase">
                  Avg Client Lift
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative bg-[#0A2A1F] rounded-[2rem] border-2 border-[#0A2A1F] overflow-hidden z-10 aspect-[4/5] shadow-[8px_8px_0px_0px_#0A2A1F] group">
            <div className="grid grid-cols-2 h-full w-full">
              <img
                src="https://images.pexels.com/photos/7580801/pexels-photo-7580801.jpeg?w=400"
                className="w-full h-full object-cover border-r-2 border-b-2 border-[#0A2A1F] opacity-90 group-hover:opacity-100 transition-opacity"
                alt="Agency Life"
              />
              <img
                src="https://images.pexels.com/photos/7580637/pexels-photo-7580637.jpeg?w=400"
                className="w-full h-full object-cover border-b-2 border-[#0A2A1F] opacity-80 group-hover:opacity-100 transition-opacity"
                alt="Strategy"
              />
              <img
                src="https://images.pexels.com/photos/8837770/pexels-photo-8837770.jpeg?w=400"
                className="w-full h-full object-cover border-r-2 border-[#0A2A1F] opacity-80 group-hover:opacity-100 transition-opacity"
                alt="Data"
              />
              <img
                src="https://images.pexels.com/photos/5054208/pexels-photo-5054208.jpeg?w=400"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                alt="Creative"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-[#0A2A1F]/90 border-t-2 border-[#0A2A1F] backdrop-blur-sm">
              <span className="bg-[#D2E823] text-[#0A2A1F] text-xs font-bold px-2 py-1 rounded-md mb-2 inline-block">
                PERFORMANCE DRIVEN
              </span>
              <h3 className="text-[#F8F4E8] font-dela text-2xl uppercase">
                The Growth Archive
              </h3>
              <p className="text-[#F8F4E8]/80 font-mono text-xs uppercase">
                Data + Creative Destruction
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
