"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marcus Chen",
    role: "VP of Operations at TechFlow",
    content:
      "Metabytes' modular AI approach transformed our support. We saw 75% faster response times in just days.",
    image: "/member1.jpg",
  },
  {
    name: "David Rodriguez",
    role: "Engineering Lead at DataSync",
    content:
      "Their automation playbooks connected our entire workflow. What used to take hours now happens automatically.",
    image: "/member2.jpg",
  },
  {
    name: "Sarah Kim",
    role: "Content Director at BrandFlow",
    content:
      "Integrated their creative automation tools with our CMS and saw immediate results. Product descriptions in minutes.",
    image: "/member3.jpg",
  },
  {
    name: "James Mitchell",
    role: "CTO at ScaleAI",
    content:
      "The data strategy advisory helped us architect a scalable AI foundation while maintaining enterprise-grade security.",
    image: "/member4.jpg",
  },
  // Duplicating for seamless loop
  {
    name: "Marcus Chen",
    role: "VP of Operations at TechFlow",
    content:
      "Metabytes' modular AI approach transformed our support. We saw 75% faster response times in just days.",
    image: "/member1.jpg",
  },
  {
    name: "David Rodriguez",
    role: "Engineering Lead at DataSync",
    content:
      "Their automation playbooks connected our entire workflow. What used to take hours now happens automatically.",
    image: "/member2.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm uppercase tracking-widest">
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-[900] tracking-tighter text-slate-900 leading-none uppercase">
            Trusted by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Forward-Thinking Teams
            </span>
          </h2>
        </div>

        {/* --- ANIMATED VERTICAL MARQUEE --- */}
        <div className="relative h-[600px] w-full overflow-hidden">
          {/* Faders to hide the edges */}
          <div className="absolute top-0 z-10 h-32 w-full bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t from-white to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {/* Column 1 */}
            <TestimonialColumn items={testimonials} duration={25} />
            {/* Column 2 - Hidden on mobile, delayed on desktop */}
            <TestimonialColumn
              items={testimonials}
              duration={35}
              className="hidden md:flex"
            />
            {/* Column 3 - Hidden on mobile, faster on desktop */}
            <TestimonialColumn
              items={testimonials}
              duration={20}
              className="hidden md:flex"
            />
          </div>
        </div>

        {/* --- METRICS FOOTER --- */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-100 rounded-[2.5rem] bg-slate-50/50 overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <MetricItem value="150+" label="AI Workflows Deployed" />
          <MetricItem value="98%" label="Client Success Rate" />
          <MetricItem value="24hr" label="Average Deployment Time" />
        </div>
      </div>
    </section>
  );
}

const TestimonialColumn = ({
  items,
  duration,
  className,
}: {
  items: Testimonial[];
  duration: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-50%" }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className={cn("flex flex-col gap-6", className)}
    >
      {[...items, ...items].map((item, idx) => (
        <div
          key={idx}
          className="p-8 rounded-[2rem] border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium mb-6 italic">
            &ldquo;{item.content}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                {item.name}
              </p>
              <p className="text-[10px] text-slate-400 font-bold uppercase">
                {item.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const MetricItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center p-8 text-center">
    <p className="text-4xl font-black text-slate-900 tracking-tighter">
      {value}
    </p>
    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">
      {label}
    </p>
  </div>
);
