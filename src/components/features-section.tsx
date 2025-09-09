import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Bot,
  PenLine,
  BarChart3,
  Workflow,
  Calendar,
  FolderOpen,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "AI‑Powered Assistants",
      description:
        "Deploy domain-trained copilots that resolve issues, route tasks, and learn from your data to deliver personalized experiences.",
      hasImage: true,
      image: "/features1.jpg",
    },
    {
      icon: PenLine,
      title: "Creative Automation",
      description:
        "Generate on-brand content, product descriptions, and summaries at scale with AI that maintains your unique voice and style.",
      hasImage: false,
    },
    {
      icon: BarChart3,
      title: "Data Strategy Advisory",
      description:
        "Blueprint your data layer, model lifecycle, and governance frameworks to unlock measurable ROI and scalable growth.",
      hasImage: false,
    },
    {
      icon: Workflow,
      title: "Automation Playbooks",
      description:
        "Orchestrate tasks, approvals, and alerts across your existing tools with trigger-based routing and human-in-the-loop checkpoints.",
      hasImage: true,
      image: "/features2.png",
    },
  ];

  return (
    <section className="md:py-24 bg-white pt-16 pb-16">
      <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            FEATURES
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            All features in 1 tool
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Discover features that simplify workflows and grow your business.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-3xl ring-1 ring-slate-200 bg-white p-5 sm:p-6 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.35)]"
            >
              {feature.hasImage ? (
                <div className="grid sm:grid-cols-2 gap-4 items-center">
                  <div className="overflow-hidden rounded-2xl ring-1 ring-black/5 bg-slate-100 h-40 sm:h-44 md:h-48">
                    <Image
                      src={feature.image! || "/placeholder.svg"}
                      alt={feature.title}
                      width={400}
                      height={192}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-grid place-items-center h-8 w-8 rounded-xl bg-slate-900 text-white ring-1 ring-black/10 shadow-md">
                        <feature.icon className="h-4.5 w-4.5" />
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <span className="inline-grid place-items-center h-8 w-8 rounded-xl bg-slate-900 text-white ring-1 ring-black/10 shadow-md">
                    <feature.icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20">
            <span>Book a Demo</span>
            <Calendar className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 ring-1 ring-slate-200 text-sm font-semibold px-4 py-2.5 shadow-sm hover:bg-slate-50"
          >
            <span>View Case Studies</span>
            <FolderOpen className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
