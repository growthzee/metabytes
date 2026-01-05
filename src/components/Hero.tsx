"use client";
import { motion } from "framer-motion";
import { Zap, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <header className="px-4 md:px-8 pt-12 pb-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-8 z-10">
          <div className="inline-flex items-center gap-2 border-2 border-[#0A2A1F] px-4 py-2 rounded-full bg-[#D2E823] shadow-[2px_2px_0px_0px_#0A2A1F] -rotate-2">
            <Zap size={16} fill="currentColor" />
            <span className="font-bold text-xs uppercase tracking-wider">
              The 10x Growth Engine
            </span>
          </div>

          <h1 className="font-dela text-6xl md:text-8xl leading-[0.9] tracking-tighter text-[#0A2A1F]">
            SCALE YOUR <br />
            <span className="relative">
              REVENUE
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
            TO BYTES.
          </h1>

          <p className="font-medium text-lg md:text-xl max-w-lg leading-relaxed opacity-90">
            Stop wasting money on "pretty" ads that don't convert. We build
            data-backed marketing machines that turn bytes into bank.
          </p>

          <div className="flex flex-wrap gap-4 w-full">
            <button className="flex-1 md:flex-none bg-[#0A2A1F] text-[#D2E823] border-2 border-[#0A2A1F] px-8 py-4 rounded-xl font-dela text-lg shadow-[4px_4px_0px_0px_#0A2A1F] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              WORK WITH US
            </button>
            <button className="flex-1 md:flex-none bg-[#F8F4E8] text-[#0A2A1F] border-2 border-[#0A2A1F] px-8 py-4 rounded-xl font-dela text-lg shadow-[4px_4px_0px_0px_#0A2A1F] hover:bg-[#D2E823] transition-all">
              SEE CASE STUDIES
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="absolute top-0 right-0 w-full h-full bg-[#D2E823] rounded-[2rem] border-2 border-[#0A2A1F] rotate-6" />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 z-20 bg-[#F8F4E8] border-2 border-[#0A2A1F] p-4 rounded-xl shadow-[4px_4px_0px_0px_#0A2A1F]"
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg border border-[#0A2A1F]">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="font-dela text-sm">+240% ROI</div>
                <div className="text-xs font-mono">Average Client Growth</div>
              </div>
            </div>
          </motion.div>
          <div className="relative bg-[#0A2A1F] rounded-[2rem] border-2 border-[#0A2A1F] overflow-hidden z-10 aspect-[4/5] shadow-[8px_8px_0px_0px_#0A2A1F]">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
              className="w-full h-full object-cover"
              alt="Team Working"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
