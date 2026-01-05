"use client";
import { Zap } from "lucide-react";
import { Marquee } from "./Marquee";

export const HeroTicker = () => {
  return (
    <div className="relative z-20 -mt-4 mb-20">
      <div className="border-y-2 border-[#0A2A1F] bg-[#D2E823] py-6 overflow-hidden rotate-1 scale-105 transform origin-left shadow-[0px_10px_0px_0px_#0A2A1F]">
        <Marquee className="text-4xl md:text-5xl font-dela text-[#0A2A1F] items-center">
          <div className="flex gap-12 items-center px-4">
            <span>REVENUE OVER VANITY</span>
            <Zap size={40} className="fill-[#0A2A1F] text-[#0A2A1F]" />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #0A2A1F" }}
            >
              DATA OVER GUESSWORK
            </span>
            <Zap size={40} strokeWidth={1} />
            <span>SCALE OVER STAGNATION</span>
            <Zap size={40} className="fill-[#0A2A1F] text-[#0A2A1F]" />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #0A2A1F" }}
            >
              ROI OVER AESTHETICS
            </span>
            <Zap size={40} strokeWidth={1} />
          </div>
        </Marquee>
      </div>
    </div>
  );
};
