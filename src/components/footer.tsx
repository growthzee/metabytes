"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Container height is locked at h-20 (80px) to keep the footer sleek */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4 h-20 relative">
          {/* LOGO CONTAINER: 
              Using absolute positioning so the image doesn't affect the footer's height.
          */}
          <div className="relative flex items-center h-full">
            <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
              <Image
                src="/logo.png"
                alt="Metabytes Logo"
                width={500}
                height={150}
                // MASSIVE SIZE: h-20 on mobile, h-32 on desktop (128px)
                className="h-20 md:h-32 w-auto object-contain transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                priority
              />
            </div>

            {/* INVISIBLE SPACER: 
                This width pushes the copyright text to the right so it doesn't collide with the giant logo.
            */}
            <div className="hidden md:block w-[220px]" />
          </div>

          {/* Copyright Section */}
          <p className="text-sm text-slate-500 font-semibold tracking-wide">
            © 2025 Metabytes. All rights reserved.
          </p>

          {/* Links Section */}
          <div className="flex items-center gap-8 text-slate-600">
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition"
            >
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
