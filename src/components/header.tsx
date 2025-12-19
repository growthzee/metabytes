"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navbar container remains a standard, clean h-16 (64px) */}
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="relative z-10 flex items-center transition-all hover:scale-110 active:scale-95"
            >
              {/* ABSOLUTE LOGO CONTAINER:
                - This allows the image to 'float' over the navbar borders.
                - h-20 on mobile, h-32 on desktop for maximum visibility.
              */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 scale-110 md:scale-125">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={500} // High resolution buffer
                  height={200}
                  className="h-20 md:h-32 w-auto object-contain max-w-[200px] md:max-w-[320px]"
                  priority
                />
              </div>

              {/* DYNAMIC SPACER:
                - Pushes the navigation links to the right so they don't overlap the large logo.
              */}
              <div className="w-[200px] md:w-[320px] h-1 pointer-events-none" />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-bold">
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

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full ring-1 ring-slate-200"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Button className="hidden md:inline-flex items-center gap-2 rounded-full bg-slate-900 text-white text-sm font-bold px-6 py-2.5 shadow-xl hover:bg-black transition-all">
              <span>Get Started</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
