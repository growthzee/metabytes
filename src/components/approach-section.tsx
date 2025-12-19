"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Zap,
  Brain,
  GitMerge,
  LockKeyhole,
  MoreHorizontal,
} from "lucide-react";

const features = [
  {
    icon: GitMerge,
    title: "Your data, connected",
    description:
      "Bring your warehouse, CRM, and docs. No data silos, no vendor lock-in.",
    tag: "INTEGRATIONS",
    image: "/approach2.jpg",
  },
  {
    icon: LockKeyhole,
    title: "Enterprise-grade control",
    description:
      "Role-based access, PII redaction, and full observability out of the box.",
    tag: "SECURITY",
    image: "/approach3.png",
  },
];

export function ApproachSection() {
  return (
    <section className="bg-white pb-24">
      {/* --- WHITE LAMP HEADER --- */}
      <LampContainer className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold tracking-widest text-blue-600 uppercase mb-8">
            <Zap className="h-3.5 w-3.5" />
            Our Approach
          </span>
          <h2 className="mt-4 bg-gradient-to-br from-slate-900 to-slate-600 py-4 bg-clip-text text-center text-4xl font-[900] tracking-tighter text-transparent md:text-7xl uppercase leading-none">
            Ship smarter with <br /> modular AI
          </h2>
          <p className="mt-6 text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Plug-and-play blocks that connect to your stack. <br />
            Start small, prove value, and expand fast.
          </p>
        </motion.div>
      </LampContainer>

      {/* --- CONTENT GRID --- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-40 relative z-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Card */}
          <div className="lg:col-span-7">
            <div className="p-6 border border-slate-200 bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white grid place-items-center shadow-lg">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-900 uppercase">
                      Assistants that work
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                      Deploy domain-trained copilots for support, sales, and
                      docs with guardrails built in.
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-400 hover:bg-slate-50"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-6 overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50">
                <Image
                  src="/approach1.png"
                  alt="AI assistant interface"
                  width={800}
                  height={608}
                  className="h-[400px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="lg:col-span-5 space-y-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 border border-slate-200 bg-white rounded-[2.5rem] shadow-lg group transition-all hover:border-blue-400"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-900 text-white grid place-items-center group-hover:scale-110 transition-transform">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 uppercase">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed italic">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={400}
                    height={192}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- MODIFIED LAMP CONTAINER FOR WHITE BACKGROUND ---

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden bg-white w-full z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 0.3, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-blue-400 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          {/* Masking logic changed from slate-950 to white */}
          <div className="absolute w-[100%] left-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-white bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 0.3, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-blue-400 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-white bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Adjusted blurs for white background */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>

        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-blue-300 opacity-30 blur-2xl"
        ></motion.div>

        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-blue-400 opacity-50"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white "></div>
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
