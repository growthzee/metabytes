import Image from "next/image";
import {
  BadgeCheck,
  Sparkles,
  CircleDollarSign,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Real‑Time Analytics",
      description:
        "Monitor your AI workflows with comprehensive dashboards, performance metrics, and actionable insights.",
      image: "/benefit1.jpg",
    },
    {
      title: "AI‑Driven Growth",
      description:
        "Scale your business with intelligent automation that learns from your data and optimizes over time.",
      image: "/benefit2.jpg",
    },
    {
      title: "Enterprise Security",
      description:
        "Advanced encryption, role-based access controls, and full audit trails to keep your data secure.",
      image: "/benefit3.png",
    },
  ];

  const featurePills = [
    { icon: Sparkles, text: "Personalized Experiences" },
    { icon: CircleDollarSign, text: "Cost Effective" },
    { icon: ShieldCheck, text: "Compliant & Secure" },
    { icon: Zap, text: "Lightning Fast" },
  ];

  return (
    <section className="md:py-24 bg-slate-50 pt-16 pb-16">
      <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
            <BadgeCheck className="h-3.5 w-3.5" />
            BENEFITS
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Why Choose Metabytes
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Unlock the power of AI with seamless integrations, personalized
            experiences, and enterprise-grade security.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="rounded-3xl ring-1 ring-slate-200 bg-white p-6 sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)]"
            >
              <div className="relative rounded-2xl bg-slate-50 ring-1 ring-black/5 h-40 overflow-hidden">
                <Image
                  src={benefit.image || "/placeholder.svg"}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-900">
                {benefit.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-3">
            {featurePills.map((pill, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs text-slate-700 ring-1 ring-slate-200 shadow-sm"
              >
                <pill.icon className="h-3.5 w-3.5" />
                {pill.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
