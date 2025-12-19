"use client";
import React from "react";
import WorldMap from "@/components/ui/world-map";
import { motion } from "framer-motion"; // Note: ensure you use "framer-motion"
import { Globe } from "lucide-react";

export function GlobalPartners() {
  return (
    <section className="py-24 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6">
            <Globe className="w-4 h-4" />
            Global Infrastructure
          </div>

          <h2 className="text-4xl md:text-6xl font-[900] tracking-tighter text-slate-900 leading-none uppercase mb-6">
            Connecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              {"Digital World".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>

          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
            Metabytes powers AI-driven growth for partners across 6 continents.
            Our distributed network ensures low-latency intelligence, anywhere
            on Earth.
          </p>
        </div>

        {/* --- WORLD MAP COMPONENT --- */}
        <div className="relative rounded-[3rem] border border-slate-100 bg-slate-50/50 p-4 md:p-10">
          <WorldMap
            dots={[
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska
                end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>

        {/* --- PARTNER STATS --- */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Active Regions", value: "140+" },
            { label: "Global Partners", value: "500+" },
            { label: "Uptime SLA", value: "99.9%" },
            { label: "Daily Syncs", value: "1.2M" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-3xl font-black text-slate-900">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
