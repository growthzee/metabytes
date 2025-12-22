"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  RotateCw,
  Move,
  Plus,
  MousePointer2,
  Box,
  Scaling,
  Layers,
  Star,
  PlayCircle,
} from "lucide-react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure the initial paint is fast before loading heavy Spline logic
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-white overflow-hidden py-24 min-h-screen flex items-center">
      {/* --- OPTIMIZED BACKGROUND --- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 50% 50% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 z-10 w-full max-w-[90rem] mx-auto relative items-center px-6 lg:px-12">
        {/* --- LEFT CONTENT (Stateless for performance) --- */}
        <div className="lg:col-span-7 flex flex-col gap-8 will-change-transform">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 w-fit"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-mono text-slate-800 font-bold">
              v2.0 is now live — Experience the future
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] font-[900] tracking-tighter text-black uppercase"
          >
            UNLOCK YOUR <br />
            <PointerHighlight>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 pr-2 pb-1">
                DIGITAL POTENTIAL
              </span>
            </PointerHighlight>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-medium max-w-xl leading-relaxed text-neutral-500"
          >
            AI-powered solutions for a smarter future. Metabytes is the
            cognitive engine for modern enterprises seeking autonomous
            orchestration.
          </motion.p>

          <div className="flex flex-wrap gap-4 items-center">
            {/* Optimized Beam Button */}
            <button className="group relative flex items-center justify-center overflow-hidden rounded-full py-5 px-12 text-sm font-bold tracking-widest transition-all hover:scale-[1.02] active:scale-95">
              <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
                {/* CSS animation is smoother than GSAP for simple spins */}
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#2563eb_360deg)] animate-[spin_3s_linear_infinite]" />
                <div className="absolute inset-[1px] rounded-full bg-white" />
              </div>
              <div className="absolute inset-[2px] -z-10 rounded-full bg-zinc-50" />
              <span className="relative z-10 flex items-center gap-2 text-slate-900 group-hover:text-blue-700">
                START FREE TRIAL <ArrowRight size={16} />
              </span>
            </button>

            <button className="h-16 px-10 rounded-full border border-slate-200 text-slate-900 font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">
              WATCH DEMO <PlayCircle size={20} className="text-blue-600" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-black/5 px-4 py-3 rounded-full border border-black/5 w-fit">
              <div className="flex items-center gap-1 text-yellow-500 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-bold text-neutral-600 uppercase tracking-tighter">
                Used by 10,000+ Innovators Globally
              </span>
            </div>
          </div>
        </div>

        {/* --- RIGHT 3D VIEWPORT (Lazy Loaded) --- */}
        <div className="lg:col-span-5 h-[500px] md:h-[620px] relative perspective-[1200px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-full w-full rounded-[2.5rem] border border-black/5 bg-neutral-50 shadow-2xl overflow-hidden flex flex-col will-change-transform transform-gpu hover:rotate-0 transition-transform duration-500 rotate-x-[5deg] rotate-y-[-5deg]"
          >
            <div className="h-10 border-b border-black/5 bg-black/5 flex items-center px-4 justify-between shrink-0">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="font-mono text-[9px] text-neutral-400 font-bold uppercase tracking-widest">
                metabytes_core.ai
              </div>
              <div className="w-10" />
            </div>

            <div className="flex-1 relative bg-white overflow-hidden">
              {isLoaded ? (
                <iframe
                  src="https://my.spline.design/genkubgreetingrobot-ojzcjWInavuKpZSt2luvgvjl/"
                  className="absolute inset-0 w-full h-full border-none"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
                </div>
              )}
            </div>
          </motion.div>

          {/* Floating UI Elements (Reduced backdrop-blur for speed) */}
          <div className="absolute top-12 -left-8 flex flex-col gap-2 p-2 rounded-2xl bg-white/90 border border-black/5 shadow-xl">
            <button className="p-2.5 rounded-xl bg-blue-600 text-white shadow-lg">
              <MousePointer2 size={16} />
            </button>
            <button className="p-2.5 rounded-xl hover:bg-black/5 text-neutral-400">
              <Box size={16} />
            </button>
            <button className="p-2.5 rounded-xl hover:bg-black/5 text-neutral-400">
              <Scaling size={16} />
            </button>
          </div>

          <div className="absolute -bottom-6 -right-6 w-52 rounded-[2rem] p-6 bg-white border border-black/5 shadow-2xl">
            <div className="flex justify-between items-center mb-4 text-neutral-400 uppercase font-black text-[10px] tracking-widest">
              <span>Neural Ops</span>
              <Layers size={12} />
            </div>
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold">
                  <span>Latency</span>
                  <span>24ms</span>
                </div>
                <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                  <div className="h-full w-[15%] bg-blue-500" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold">
                  <span>Efficiency</span>
                  <span>98.2%</span>
                </div>
                <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 w-[98%] h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
