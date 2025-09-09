"use client";

import { Button } from "@/components/ui/button";
import { Orbit, Menu, ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-700 shadow-sm ring-1 ring-black/10">
              <Orbit className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-semibold tracking-tight">
              Metabytes
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Solutions
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-slate-600 hover:text-slate-900 transition"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full ring-1 ring-slate-200 hover:ring-slate-300"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button className="hidden md:inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
