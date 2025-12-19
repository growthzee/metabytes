"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import {
  Bot,
  PenLine,
  BarChart3,
  Workflow,
  Sparkles,
  Calendar,
  FolderOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function FeaturesSection() {
  const features = [
    {
      title: "AI‑Powered Assistants",
      description:
        "Deploy domain-trained copilots that resolve issues, route tasks, and learn from your data.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
      icon: <Bot className="h-4 w-4 text-blue-500" />,
    },
    {
      title: "Creative Automation",
      description:
        "Generate on-brand content and summaries at scale while maintaining your unique voice.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
      icon: <PenLine className="h-4 w-4 text-purple-500" />,
    },
    {
      title: "Data Strategy Advisory",
      description:
        "Blueprint your data layer and governance frameworks to unlock measurable ROI.",
      skeleton: <SkeletonThree />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
      icon: <BarChart3 className="h-4 w-4 text-emerald-500" />,
    },
    {
      title: "Automation Playbooks",
      description:
        "Orchestrate tasks and approvals across tools with trigger-based routing and human-in-the-loop checkpoints.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
      icon: <Workflow className="h-4 w-4 text-orange-500" />,
    },
  ];

  return (
    <section className="relative z-20 py-10 lg:py-40 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5 text-blue-500" />
            Capabilities
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-[900] tracking-tighter text-slate-900 dark:text-white uppercase leading-none">
            All features <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              in one powerful tool
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Discover intelligent features engineered to simplify complex
            workflows and drive exponential business growth.
          </p>
        </div>

        <div className="relative border rounded-3xl overflow-hidden bg-slate-50/50 dark:bg-neutral-900/50 dark:border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <div className="flex items-center gap-2 mb-2">
                  {feature.icon}
                  <FeatureTitle>{feature.title}</FeatureTitle>
                </div>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="h-12 px-8 rounded-full bg-slate-900 text-white font-bold shadow-xl hover:bg-black transition-all flex items-center gap-2">
            <span>Book a Demo</span>
            <Calendar className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="h-12 px-8 rounded-full border-slate-200 text-slate-900 font-bold bg-white hover:bg-slate-50 transition-all flex items-center gap-2"
          >
            <span>View Case Studies</span>
            <FolderOpen className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-left tracking-tight text-black dark:text-white text-xl font-bold">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-300 text-left max-w-sm my-2">
      {children}
    </p>
  );
};

/* --- SKELETON COMPONENTS (Content Integrated) --- */

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-xl border border-neutral-100 dark:border-neutral-800">
        <img
          src="/features1.jpg"
          alt="AI Copilot Interface"
          className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
        />
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-40 bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  const column1 = [
    {
      title: "Ad Copy",
      desc: "Summer Sale 20% Off",
      color: "bg-blue-500/10 border-blue-200",
    },
    {
      title: "SEO Blog",
      desc: "Top 10 AI Trends",
      color: "bg-purple-500/10 border-purple-200",
    },
    {
      title: "Email",
      desc: "Welcome to Metabytes",
      color: "bg-emerald-500/10 border-emerald-200",
    },
    {
      title: "Tweet",
      desc: "The future is here.",
      color: "bg-sky-500/10 border-sky-200",
    },
  ];

  return (
    <div className="relative flex p-4 gap-4 h-full overflow-hidden justify-center items-center">
      {/* Moving Ticker Columns */}
      <div className="flex flex-row gap-3 w-full max-w-sm justify-center">
        {[0, 1].map((colIndex) => (
          <motion.div
            key={colIndex}
            animate={{
              y: colIndex % 2 === 0 ? [0, -200] : [-200, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-col gap-3 w-1/2"
          >
            {[...column1, ...column1].map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "p-3 rounded-xl border text-[10px] font-bold shadow-sm flex flex-col gap-1 bg-white dark:bg-neutral-800",
                  item.color
                )}
              >
                <span className="text-slate-900 dark:text-white uppercase tracking-tighter">
                  {item.title}
                </span>
                <span className="text-slate-500 dark:text-neutral-400 font-normal line-clamp-1 italic">
                  {item.desc}
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Glassmorphism Overlays for Depth */}
      <div className="absolute top-0 z-40 inset-x-0 h-20 bg-gradient-to-b from-slate-50/50 dark:from-neutral-900 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 z-40 inset-x-0 h-20 bg-gradient-to-t from-slate-50/50 dark:from-neutral-900 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
export const SkeletonThree = () => {
  return (
    <div className="relative flex gap-10 h-full group/image p-4">
      <div className="w-full mx-auto bg-slate-100 dark:bg-neutral-800 rounded-xl overflow-hidden relative">
        <IconBrandYoutubeFilled className="h-12 w-12 absolute z-10 inset-0 text-red-500 m-auto group-hover/image:scale-125 transition-transform" />
        <img
          src="https://assets.aceternity.com/fireship.jpg"
          className="h-full w-full object-cover blur-none group-hover/image:blur-sm transition-all duration-300"
        />
      </div>
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 flex flex-col items-center relative bg-transparent mt-10 overflow-hidden">
      <Globe className="absolute -right-20 -bottom-60" />
    </div>
  );
};

/* --- GLOBE COMPONENT --- */

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
