"use client";

import React from "react";
import Image from "next/image";
import {
  Layers,
  PenLine,
  BarChart3,
  Workflow,
  Bot,
  Sparkles,
  Compass,
  ShieldCheck,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white dark:bg-neutral-900 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-neutral-300 shadow-sm uppercase tracking-widest">
            <Layers className="h-3.5 w-3.5 text-blue-500" />
            Our Services
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-[900] tracking-tighter text-slate-900 dark:text-white leading-none uppercase">
            AI-powered solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              for your business
            </span>
          </h2>
        </div>

        {/* --- BENTO GRID --- */}
        <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[44rem] xl:grid-rows-2">
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<PenLine className="h-5 w-5 text-blue-500" />}
            title="Creative Automation"
            description="On-brand content generation and product copy at scale."
          />

          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
            icon={<Bot className="h-5 w-5 text-indigo-500" />}
            title="Conversational Assistants"
            description="Deploy copilots that resolve issues and learn over time."
          />

          {/* MIDDLE CARD WITH IMAGE */}
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/9]"
            icon={<BarChart3 className="h-5 w-5 text-emerald-500" />}
            title="Data Strategy Advisory"
            image="/benefit1.jpg"
            description={
              <div className="space-y-2">
                <p>Blueprint your data layer to unlock measurable ROI.</p>
                <div className="flex flex-col gap-1 opacity-70">
                  <div className="flex items-center gap-2 text-xs">
                    <Compass size={12} /> Capability Audits
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <ShieldCheck size={12} /> Compliance
                  </div>
                </div>
              </div>
            }
          />

          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]"
            icon={<Workflow className="h-5 w-5 text-orange-500" />}
            title="Automation Playbooks"
            description="Orchestrate tasks across your existing tech stack."
          />

          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/9/3/13]"
            icon={<Sparkles className="h-5 w-5 text-cyan-500" />}
            title="Intelligent Integrations"
            description="Connect LLMs to your stack with secure API middleware."
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  image?: string;
}

const GridItem = ({ area, icon, title, description, image }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none relative group ${area}`}>
      {/* GLOWING EFFECT FIX: 
          1. Parent must be 'relative'.
          2. The effect must be inside the same relative container as the content.
      */}
      <div className="relative h-full w-full rounded-3xl border border-slate-200 dark:border-neutral-800 p-1">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-white dark:bg-black">
          {image && (
            <div className="relative h-44 w-full overflow-hidden border-b border-slate-100 dark:border-neutral-800">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black to-transparent opacity-40" />
            </div>
          )}

          <div className="flex flex-1 flex-col justify-between p-6">
            <div className="space-y-4">
              <div className="w-fit rounded-lg border border-slate-100 dark:border-neutral-800 p-2 bg-slate-50 dark:bg-neutral-900 shadow-sm">
                {icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white md:text-2xl tracking-tight">
                  {title}
                </h3>
                <div className="mt-2 text-sm text-slate-500 md:text-base dark:text-neutral-400 leading-relaxed">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
