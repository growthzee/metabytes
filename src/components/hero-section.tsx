"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Star } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
// Import your PointerHighlight component
import { PointerHighlight } from "@/components/ui/pointer-highlight";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "“Metabytes transformed our workflow!”",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "“The best AI platform on the market.”",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "“Clean, fast, and intuitive.”",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "“Highly recommended for scaling.”",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "“I don't talk about it, I just use it.”",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=3540&q=80",
  },
];

const PARTNERS = [
  "VERGE",
  "BLOOMBERG",
  "QUARTZ",
  "FAST COMPANY",
  "FORBES",
  "TECHCRUNCH",
  "WIRED",
];

export function Hero() {
  const containerRef = useRef(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const floorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from(".reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Animated 3D Floor
      gsap.to(floorRef.current, {
        backgroundPosition: "0px 80px",
        duration: 2,
        repeat: -1,
        ease: "none",
      });

      // Infinite Marquee
      if (marqueeRef.current) {
        const marqueeWidth = marqueeRef.current.scrollWidth / 2;
        gsap.to(marqueeRef.current, {
          x: `-${marqueeWidth}px`,
          duration: 25,
          ease: "none",
          repeat: -1,
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-center pt-24 pb-12"
    >
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.15)_0%,transparent_50%)]" />
        <div
          ref={floorRef}
          className="absolute bottom-0 w-full h-[70%] opacity-[0.12]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "80px",
            transform: "perspective(1000px) rotateX(75deg) scale(2.5)",
            transformOrigin: "center bottom",
            maskImage: "linear-gradient(to top, black 20%, transparent 80%)",
          }}
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mb-16">
        <div className="reveal">
          <h1 className="text-5xl md:text-8xl font-[900] tracking-tight text-slate-900 leading-[1.1] uppercase">
            UNLOCK YOUR <br />
            {/* Integrated PointerHighlight here */}
            <PointerHighlight>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 px-2">
                DIGITAL POTENTIAL
              </span>
            </PointerHighlight>
          </h1>
        </div>

        <p className="reveal mt-6 text-slate-600 text-lg md:text-xl font-medium">
          AI-powered solutions for a smarter future.
        </p>

        {/* Action Row */}
        <div className="reveal mt-12 flex flex-col md:flex-row items-center gap-8 relative">
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="h-14 px-10 rounded-full bg-[#1a2e44] hover:bg-black text-white font-bold text-sm shadow-lg transition-transform hover:scale-105">
              START FREE TRIAL <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="h-14 px-10 rounded-full border-cyan-400 text-[#1a2e44] font-bold text-sm bg-white/50 backdrop-blur-sm hover:bg-cyan-50 transition-transform hover:scale-105"
            >
              WATCH DEMO <PlayCircle className="ml-2 h-5 w-5 text-cyan-400" />
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="reveal mt-20 flex flex-col items-center">
          <div className="flex flex-row items-center justify-center mb-6 w-full">
            <AnimatedTooltip items={people} />
          </div>
          <div className="flex items-center gap-1 text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="currentColor" />
            ))}
          </div>
          <p className="text-[12px] font-extrabold tracking-[0.25em] text-slate-500 uppercase">
            Trusted by 10,000+ Innovators Globally
          </p>
        </div>
      </div>

      {/* --- MARQUEE --- */}
      <div className="reveal relative z-20 w-full overflow-hidden border-y border-slate-100 bg-white/40 backdrop-blur-md py-6 mt-auto">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap min-w-max items-center"
        >
          {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
            <span
              key={idx}
              className="mx-16 text-3xl font-black italic tracking-tighter text-slate-200/80 uppercase"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
