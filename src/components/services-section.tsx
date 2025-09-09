import {
  Layers,
  PenLine,
  BarChart3,
  Workflow,
  Bot,
  Sparkles,
  Send,
  Headphones,
  BookOpenCheck,
  Compass,
  ShieldCheck,
  Activity,
  Github,
  Figma,
  Slack,
  NotebookText,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="md:py-24 bg-slate-50 pt-16 pb-16 items-center justify-center">
      <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
            <Layers className="h-3.5 w-3.5" />
            OUR SERVICES
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            AI-powered solutions for your business
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            From strategy to implementation, we deliver custom AI workflows that
            integrate seamlessly with your existing tools and processes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Creative Automation */}
          <div className="lg:col-span-8">
            <div className="sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_12px_24px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-neutral-900/90 text-white grid place-items-center shadow">
                    <PenLine className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                      Creative Automation
                    </h3>
                    <p className="text-sm text-neutral-600">
                      On-brand content generation, summaries, and product copy
                      at scale.
                    </p>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition">
                  <Sparkles className="h-4 w-4" />
                  Generate
                </button>
              </div>

              <div className="mt-6">
                <div className="rounded-2xl ring-1 ring-black/5 bg-neutral-50">
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-black/5">
                    <div className="h-4 w-4 rounded-full bg-neutral-300"></div>
                    <div className="h-4 w-24 rounded bg-neutral-200"></div>
                  </div>
                  <div className="p-3">
                    <div className="rounded-xl bg-white ring-1 ring-black/5 shadow-sm">
                      <div className="flex items-center justify-between px-3 py-2">
                        <div className="text-xs text-neutral-600">Actions</div>
                        <svg
                          className="h-4 w-4 text-neutral-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                      <div className="border-t border-black/5">
                        <div className="px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 cursor-pointer">
                          Rewrite for clarity
                        </div>
                        <div className="px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 cursor-pointer">
                          Fix typos
                        </div>
                        <div className="px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 cursor-pointer">
                          Expand with detail
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Data Strategy Advisory */}
          <div className="lg:col-span-4">
            <div className="relative sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_12px_24px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6 h-full">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="h-14 w-14 rounded-full bg-neutral-900/90 text-white grid place-items-center shadow-lg">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                    Data Strategy Advisory
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Blueprint your data layer, model lifecycle, and governance
                    to unlock measurable ROI.
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl bg-neutral-50 p-4 ring-1 ring-black/5">
                <div className="flex items-center gap-3 text-xs text-neutral-600">
                  <Compass className="h-4 w-4" />
                  Roadmaps, capability audits, and model selection guidance
                </div>
                <div className="mt-2 flex items-center gap-3 text-xs text-neutral-600">
                  <ShieldCheck className="h-4 w-4" />
                  Risk, privacy, and compliance alignment
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Automation Playbooks */}
          <div className="lg:col-span-4">
            <div className="sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_12px_24px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6">
              <div className="flex gap-3 items-center">
                <div className="h-10 w-10 grid place-items-center text-white bg-neutral-900/90 rounded-full shadow justify-center">
                  <Workflow className="w-[20px] h-[20px]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                    Automation Playbooks
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Orchestrate tasks, approvals, and alerts across the tools
                    you already use.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="grid grid-cols-4 gap-3">
                  <div className="rounded-2xl bg-neutral-50 ring-1 ring-black/5 aspect-square grid place-items-center shadow-sm">
                    <Github className="h-6 w-6 text-neutral-800" />
                  </div>
                  <div className="rounded-2xl bg-neutral-50 ring-1 ring-black/5 aspect-square grid place-items-center shadow-sm">
                    <Figma className="h-6 w-6 text-neutral-800" />
                  </div>
                  <div className="rounded-2xl bg-neutral-50 ring-1 ring-black/5 aspect-square grid place-items-center shadow-sm">
                    <Slack className="h-6 w-6 text-neutral-800" />
                  </div>
                  <div className="rounded-2xl bg-neutral-50 ring-1 ring-black/5 aspect-square grid place-items-center shadow-sm">
                    <NotebookText className="h-6 w-6 text-neutral-800" />
                  </div>
                </div>
                <div className="mt-4 rounded-2xl bg-neutral-50 p-4 ring-1 ring-black/5">
                  <div className="flex items-center gap-2 text-xs text-neutral-600">
                    <Activity className="h-4 w-4" />
                    Trigger-based routing with human-in-the-loop checkpoints
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Conversational Assistants */}
          <div className="lg:col-span-8">
            <div className="sm:p-7 shadow-[0_2px_0_rgba(0,0,0,0.03),0_12px_24px_-12px_rgba(0,0,0,0.25)] ring-1 ring-black/5 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6 h-full">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-neutral-900/90 text-white grid place-items-center shadow">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                    Conversational Assistants
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Deploy domain-trained copilots that resolve issues, route
                    tasks, and learn over time.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="rounded-2xl bg-neutral-50 ring-1 ring-black/5 p-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Ask the assistant anything…"
                      className="w-full rounded-full border-0 bg-white px-5 py-3 pr-24 text-sm text-neutral-800 shadow-sm ring-1 ring-black/5 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/70"
                    />
                    <button className="absolute right-1 top-1.5 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition">
                      <Send className="h-4 w-4" />
                      Send
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4" />
                  Customer support deflection
                </div>
                <div className="flex items-center gap-2">
                  <BookOpenCheck className="h-4 w-4" />
                  Knowledge-grounded answers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
