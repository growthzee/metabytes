import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Brain,
  GitMerge,
  LockKeyhole,
  MoreHorizontal,
} from "lucide-react";

export function ApproachSection() {
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

  return (
    <section className="md:py-24 bg-white pt-16 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
            <Zap className="h-3.5 w-3.5" />
            OUR APPROACH
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Ship smarter with modular AI
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Plug-and-play blocks that connect to your stack. Start small, prove
            value, and expand fast.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main approach card */}
          <div className="lg:col-span-7">
            <div className="sm:p-6 ring-1 ring-slate-200 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)] bg-white rounded-3xl pt-5 pr-5 pb-5 pl-5">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-b from-slate-900 to-slate-700 text-white grid place-items-center ring-1 ring-black/10 shadow-sm">
                    <Brain className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="text-[15px] md:text-base font-semibold tracking-tight text-slate-900">
                      Assistants that work
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Deploy domain-trained copilots for support, sales, and
                      docs with guardrails built in.
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-lg hover:bg-slate-50 text-slate-500 ring-1 ring-transparent hover:ring-slate-200"
                >
                  <MoreHorizontal className="h-4.5 w-4.5" />
                </Button>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
                <span className="text-xs text-slate-500 font-medium">
                  CONVERSATIONAL AI
                </span>
              </div>
              <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100">
                <Image
                  src="/approach1.png"
                  alt="AI assistant interface"
                  width={800}
                  height={608}
                  className="h-[608px] w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white p-5 sm:p-6 ring-1 ring-slate-200 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-b from-slate-900 to-slate-700 text-white grid place-items-center ring-1 ring-black/10 shadow-sm">
                      <feature.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h3 className="text-[15px] md:text-base font-semibold tracking-tight text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-lg hover:bg-slate-50 text-slate-500 ring-1 ring-transparent hover:ring-slate-200"
                  >
                    <MoreHorizontal className="h-4.5 w-4.5" />
                  </Button>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">
                  <span className="text-xs text-slate-500 font-medium">
                    {feature.tag}
                  </span>
                </div>
                <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={400}
                    height={192}
                    className="h-48 w-full object-cover"
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
