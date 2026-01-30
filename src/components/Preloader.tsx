/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulated loading progress
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500); // Small delay for exit
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8F4E8] font-space px-6"
        >
          {/* Main Visual: Pulsing Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-12 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-dela text-[#0A2A1F] uppercase tracking-tighter">
              COTO{" "}
              <span className="text-[#D2E823] text-outline-green">ADS</span>
            </h1>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="w-2 h-2 bg-[#0A2A1F] rounded-full animate-ping" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0A2A1F]/40">
                Initializing Protocol
              </span>
            </div>
          </motion.div>

          {/* Tactical Progress Bar */}
          <div className="w-full max-w-md">
            <div className="flex justify-between items-end mb-2 font-dela text-[10px] text-[#0A2A1F]">
              <span>STRATEGY_SYNC</span>
              <span className="text-xl">{progress}%</span>
            </div>

            <div className="h-4 w-full bg-white border-2 border-[#0A2A1F] rounded-full overflow-hidden p-0.5 shadow-[4px_4px_0px_0px_#0A2A1F]">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-[#D2E823] rounded-full border-r-2 border-[#0A2A1F]"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 opacity-40">
              <div className="text-[8px] font-mono leading-tight">
                // AUTH_TOKEN: 0x82...F21 <br />
                // ASSET_LOAD: SUCCESS
              </div>
              <div className="text-[8px] font-mono leading-tight text-right uppercase">
                Location: Global Hub <br />
                Status: Operational
              </div>
            </div>
          </div>

          {/* Background Scanning Line */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
            <motion.div
              animate={{ y: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#0A2A1F] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
