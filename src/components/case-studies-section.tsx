"use client";

import React from "react";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import {
  Clock,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Shield,
  CheckCircle,
  FolderCog,
  Truck,
  BarChart,
  Stethoscope,
  Tags,
} from "lucide-react";

export function CaseStudiesSection() {
  // We pass a priority flag to the first two cards so they load instantly
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="pl-4 mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 uppercase tracking-widest mb-6">
            <FolderCog className="h-3.5 w-3.5" />
            Portfolio Expansion
          </span>
          <h2 className="text-4xl md:text-7xl font-[900] tracking-tighter text-slate-900 dark:text-white leading-none uppercase">
            Global Impact <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Across Industries
            </span>
          </h2>
        </div>

        <Carousel items={cards} />
      </div>
    </section>
  );
}

interface CaseStudyDetailProps {
  image: string;
  description: string;
  metrics: Array<{
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
  }>;
}

const CaseStudyDetail = ({
  image,
  description,
  metrics,
}: CaseStudyDetailProps) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mb-10 leading-relaxed">
        {description}
      </p>

      <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-10 shadow-2xl">
        <Image
          src={image}
          alt="Impact visualization"
          fill
          className="object-cover"
          quality={100}
          // THIS IS THE FIX: Tells Next.js to provide a high-res image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map(
          (
            m: {
              icon: React.ComponentType<{ className?: string }>;
              label: string;
              value: string;
            },
            i: number
          ) => (
            <div
              key={i}
              className="flex flex-col p-8 rounded-[2rem] bg-white dark:bg-neutral-900 shadow-sm border border-neutral-100 dark:border-neutral-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <m.icon className="h-5 w-5 text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                  {m.label}
                </span>
              </div>
              <span className="text-4xl font-black text-neutral-900 dark:text-white tracking-tighter">
                {m.value}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const data = [
  {
    category: "Logistics",
    title: "Supply Chain Optimization AI.",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=100&w=2000&auto=format&fit=crop",
    content: (
      <CaseStudyDetail
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=100&w=2000&auto=format&fit=crop"
        description="Reduced fuel consumption and delivery delays by implementing real-time route adjustments based on predictive traffic modeling."
        metrics={[
          { icon: Truck, label: "Efficiency Boost", value: "+42%" },
          { icon: DollarSign, label: "Operational Savings", value: "$2.4M" },
        ]}
      />
    ),
  },
  {
    category: "Fintech",
    title: "Predictive Risk Modeling.",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=100&w=2000&auto=format&fit=crop",
    content: (
      <CaseStudyDetail
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=100&w=2000&auto=format&fit=crop"
        description="Leveraged neural networks to analyze non-traditional data points, providing more accurate credit scoring for underserved markets."
        metrics={[
          { icon: BarChart, label: "Default Reduction", value: "31%" },
          { icon: TrendingUp, label: "Portfolio Growth", value: "x3.5" },
        ]}
      />
    ),
  },
  {
    category: "Healthcare",
    title: "Patient Intake Automation.",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=100&w=2000&auto=format&fit=crop",
    content: (
      <CaseStudyDetail
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=100&w=2000&auto=format&fit=crop"
        description="Automated the processing of unstructured medical records, allowing clinicians to focus more on direct patient care."
        metrics={[
          { icon: Stethoscope, label: "Care Efficiency", value: "+55%" },
          { icon: Clock, label: "Wait Time", value: "-40min" },
        ]}
      />
    ),
  },
  {
    category: "Fashion Retail",
    title: "AI Inventory Prediction.",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=100&w=2000&auto=format&fit=crop",
    content: (
      <CaseStudyDetail
        image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=100&w=2000&auto=format&fit=crop"
        description="Used trend analysis and social sentiment to predict seasonal demand, drastically reducing deadstock and overproduction."
        metrics={[
          { icon: Tags, label: "Waste Reduction", value: "68%" },
          { icon: ShoppingCart, label: "Sell-through Rate", value: "92%" },
        ]}
      />
    ),
  },
  {
    category: "E-Commerce",
    title: "Smart Recommendations Engine.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=100&w=2000&auto=format&fit=crop",
    content: (
      <CaseStudyDetail
        image="https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=100&w=2000&auto=format&fit=crop"
        description="High-performance recommendation system using real-time user behavior to deliver personalized items."
        metrics={[
          { icon: DollarSign, label: "Order Value", value: "+34%" },
          { icon: ShoppingCart, label: "Conversion", value: "+22%" },
        ]}
      />
    ),
  },
];
