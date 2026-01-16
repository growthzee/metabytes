"use client";

import { useState } from "react";
import { Menu, X, Zap, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Marquee } from "./Marquee";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const tickerItems = [
    "✸ ROI-Driven Marketing",
    "✸ Growth Hacking",
    "✸ SEO Dominance",
    "✸ High-Converting Ads",
    "✸ Social Strategy",
  ];

  const navLinks = ["SERVICES", "CASE STUDIES", "OUR PROCESS", "PRICING"];

  return (
    <>
      {/* Top Ticker - Stays visible on all devices */}
      <div className="bg-[#0A2A1F] text-[#F8F4E8] py-3 border-b-2 border-[#0A2A1F] overflow-hidden">
        <Marquee className="font-dela uppercase text-sm tracking-widest">
          <div className="flex items-center gap-12 px-6">
            {tickerItems.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {item}
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      <nav className="sticky top-4 z-50 px-4 md:px-8 mt-4">
        <div className="bg-[#F8F4E8]/80 backdrop-blur-md border-2 border-[#0A2A1F] rounded-xl shadow-[4px_4px_0px_0px_#0A2A1F] flex justify-between items-center p-4">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl md:text-3xl font-dela tracking-tighter"
          >
            COTO
            <span className="text-[#D2E823] text-outline">ADS</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#D2E823] hover:bg-[#0A2A1F] px-3 py-1 rounded transition-colors uppercase font-space"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#0A2A1F] text-[#D2E823] px-6 py-2 rounded-lg font-dela text-sm border-2 border-[#0A2A1F] hover:bg-[#D2E823] hover:text-[#0A2A1F] transition-colors">
              GET A PROPOSAL
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 bg-[#D2E823] border-2 border-[#0A2A1F] rounded-lg shadow-[2px_2px_0px_0px_#0A2A1F] active:shadow-none active:translate-x-[1px] active:translate-y-[1px] transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 md:hidden z-40"
            >
              <div className="bg-[#F8F4E8] border-2 border-[#0A2A1F] rounded-2xl shadow-[8px_8px_0px_0px_#0A2A1F] p-6 flex flex-col gap-4">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setIsOpen(false)}
                    className="flex justify-between items-center text-xl font-dela p-4 border-2 border-transparent hover:border-[#0A2A1F] hover:bg-[#D2E823] rounded-xl transition-all uppercase"
                  >
                    {item}
                    <ChevronRight size={20} />
                  </a>
                ))}

                <hr className="border-[#0A2A1F] my-2" />

                <button className="w-full bg-[#0A2A1F] text-[#D2E823] py-4 rounded-xl font-dela text-lg border-2 border-[#0A2A1F] hover:bg-[#D2E823] hover:text-[#0A2A1F] transition-colors">
                  GET A PROPOSAL
                </button>

                <div className="flex justify-center gap-6 mt-2">
                  <div className="flex items-center gap-2 font-space text-xs font-bold uppercase opacity-60">
                    <Zap size={14} className="fill-current" />
                    Results Focused
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Backdrop for Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#0A2A1F]/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};
