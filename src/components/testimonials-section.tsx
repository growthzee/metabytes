import Image from "next/image";
import { Heart } from "lucide-react";

export function TestimonialsSection() {
  const metrics = [
    { value: "150+", label: "AI Workflows Deployed" },
    { value: "98%", label: "Client Success Rate" },
    { value: "24hr", label: "Average Deployment Time" },
  ];

  return (
    <section className="md:py-24 bg-white pt-16 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
            <Heart className="h-3.5 w-3.5" />
            TESTIMONIALS
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Trusted by Forward-Thinking Teams
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            See how leading companies use AstraMind to automate workflows and
            accelerate growth.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main testimonial */}
          <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 sm:p-8 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)]">
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700">
              Metabyte&apos;s{" "}
              <span className="text-slate-900 font-medium">
                modular AI approach
              </span>{" "}
              transformed our support operations. We deployed their
              <span className="text-slate-900 font-medium">
                {" "}
                conversational assistant
              </span>{" "}
              in just days and immediately saw
              <span className="text-slate-900 font-medium">
                {" "}
                75% faster response times
              </span>{" "}
              — all while maintaining the personal touch our customers expect.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Image
                src="/member1.jpg"
                alt="Marcus Chen"
                width={40}
                height={40}
                className="rounded-full ring-1 ring-slate-200 object-cover"
              />
              <div>
                <p className="text-sm font-medium text-slate-900">
                  Marcus Chen
                </p>
                <p className="text-xs text-slate-500">
                  VP of Operations at TechFlow
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)]">
            <Image
              src="/member.jpg"
              alt="Team member with dashboard"
              width={600}
              height={400}
              className="h-full w-full aspect-[16/10] object-cover"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 shadow-[0_2px_0_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="mt-3 text-sm text-slate-700">
              Their automation playbooks connected our entire workflow — from
              Slack notifications to GitHub deployments. What used to take hours
              now happens automatically with full transparency.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Image
                src="/member2.jpg"
                alt="David Rodriguez"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full ring-1 ring-slate-200 object-cover"
              />
              <div>
                <p className="text-sm font-medium text-slate-900">
                  David Rodriguez
                </p>
                <p className="text-xs text-slate-500">
                  Engineering Lead at DataSync
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 shadow-[0_2px_0_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="mt-3 text-sm text-slate-700">
              We integrated their creative automation tools with our existing
              CMS and saw immediate results. Product descriptions that used to
              take our team days are now generated in minutes with perfect brand
              voice.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Image
                src="/member3.jpg"
                alt="Sarah Kim"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full ring-1 ring-slate-200 object-cover"
              />
              <div>
                <p className="text-sm font-medium text-slate-900">Sarah Kim</p>
                <p className="text-xs text-slate-500">
                  Content Director at BrandFlow
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6 shadow-[0_2px_0_rgba(0,0,0,0.03),0_16px_32px_-20px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="mt-3 text-sm text-slate-700">
              The data strategy advisory session alone was worth it. They helped
              us architect a scalable AI foundation that grows with our business
              while maintaining enterprise-grade security and control.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <Image
                src="/member4.jpg"
                alt="James Mitchell"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full ring-1 ring-slate-200 object-cover"
              />
              <div>
                <p className="text-sm font-medium text-slate-900">
                  James Mitchell
                </p>
                <p className="text-xs text-slate-500">CTO at ScaleAI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-10 flex flex-col sm:flex-row sm:divide-x sm:divide-slate-200 rounded-2xl bg-white/0">
          <div className="flex-1 py-5 text-center">
            <p className="text-2xl font-semibold tracking-tight text-slate-900">
              150+
            </p>
            <p className="mt-1 text-xs text-slate-500">AI Workflows Deployed</p>
          </div>
          <div className="flex-1 py-5 text-center">
            <p className="text-2xl font-semibold tracking-tight text-slate-900">
              98%
            </p>
            <p className="mt-1 text-xs text-slate-500">Client Success Rate</p>
          </div>
          <div className="flex-1 py-5 text-center">
            <p className="text-2xl font-semibold tracking-tight text-slate-900">
              24hr
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Average Deployment Time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
