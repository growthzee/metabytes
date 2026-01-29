"use client";
import React from "react";

export default function BackgroundManager() {
  return (
    <div className="fixed inset-0 -z-30 w-full h-full bg-[#F8F4E8] pointer-events-none">
      {/* Neubrutalist Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A2A1F_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

      {/* Structural Vertical Lines */}
      <div className="fixed inset-0 max-w-7xl mx-auto border-x-2 border-[#0A2A1F]/10">
        <div className="absolute left-1/4 h-full w-px bg-[#0A2A1F]/5" />
        <div className="absolute left-2/4 h-full w-px bg-[#0A2A1F]/5" />
        <div className="absolute left-3/4 h-full w-px bg-[#0A2A1F]/5" />
      </div>
    </div>
  );
}
