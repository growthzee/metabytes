"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  FolderCog,
  ArrowRight,
  Clock,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Shield,
  CheckCircle,
} from "lucide-react";

interface CaseStudyContentProps {
  title: string;
  description: string;
  image: string;
  metrics: Array<{ icon: any; label: string; value: string }>;
}

function CaseStudyContent({
  title,
  description,
  image,
  metrics,
}: CaseStudyContentProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <p className="text-xs font-medium text-slate-500">CASE STUDY</p>
        <h3 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white px-5 py-4 ring-1 ring-slate-200 shadow-md"
            >
              <div className="flex items-center gap-2">
                <metric.icon className="h-4.5 w-4.5 text-slate-700" />
                <span className="text-xs font-medium text-slate-600">
                  {metric.label}
                </span>
              </div>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudiesSection() {
  const [activeProject, setActiveProject] = useState("2");

  const tabs = [
    { id: "1", label: "Support AI" },
    { id: "2", label: "E-Commerce AI" },
    { id: "3", label: "Fraud Detection" },
  ];

  return (
    <section className="md:py-24 bg-slate-50 pt-16 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
            <FolderCog className="h-3.5 w-3.5" />
            CASE STUDIES
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Real Impact, Proven Results
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            See how teams are using AI workflows to automate operations, enhance
            customer experience, and drive measurable growth.
          </p>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeProject === tab.id ? "default" : "outline"}
                onClick={() => setActiveProject(tab.id)}
                className={`rounded-xl px-4 py-3 text-xs font-medium uppercase tracking-wide ${
                  activeProject === tab.id
                    ? "bg-slate-900 text-white ring-1 ring-slate-900 shadow-lg"
                    : "bg-white text-slate-700 ring-1 ring-slate-200 shadow-sm hover:ring-slate-300"
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-white ring-1 ring-slate-200 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)] p-4 sm:p-6 lg:p-8">
            {activeProject === "1" && (
              <CaseStudyContent
                title="AI Support Copilot"
                description="Deployed a knowledge-grounded assistant that automatically drafts replies, intelligently routes tickets, and summarizes conversation threads across multiple channels."
                image="/casstudy1.png"
                metrics={[
                  { icon: Clock, label: "Response Time", value: "75% Faster" },
                  {
                    icon: TrendingUp,
                    label: "Customer Satisfaction",
                    value: "+28%",
                  },
                ]}
              />
            )}
            {activeProject === "2" && (
              <CaseStudyContent
                title="Smart Product Recommendations"
                description="Integrated AI-driven recommendation engine that uses real-time user behavior and purchase history to deliver personalized product suggestions, boosting conversion rates."
                image="/casstudy1.png"
                metrics={[
                  {
                    icon: DollarSign,
                    label: "Average Order Value",
                    value: "+34%",
                  },
                  {
                    icon: ShoppingCart,
                    label: "Conversion Rate",
                    value: "+22%",
                  },
                ]}
              />
            )}
            {activeProject === "3" && (
              <CaseStudyContent
                title="Real-Time Fraud Detection"
                description="Built a comprehensive fraud prevention system that analyzes transaction patterns, device fingerprints, and user behavior to identify and prevent fraudulent activities in real-time."
                image="/casstudy1.png"
                metrics={[
                  {
                    icon: Shield,
                    label: "Fraud Prevention",
                    value: "89% Reduction",
                  },
                  {
                    icon: CheckCircle,
                    label: "Detection Accuracy",
                    value: "97.8%",
                  },
                ]}
              />
            )}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 ring-1 ring-slate-200 text-sm font-semibold px-4 py-2.5 shadow-sm hover:bg-slate-50"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
