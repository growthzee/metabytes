import { Search, PenTool, Zap, BarChart } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      id: "01",
      title: "DEEP AUDIT",
      desc: "We get what your business is about and what you want to achieve.",
      icon: <Search size={24} />,
    },
    {
      id: "02",
      title: "THE BLUEPRINT",
      desc: "We come up with a well-defined plan for your marketing activities.",
      icon: <PenTool size={24} />,
    },
    {
      id: "03",
      title: "EXECUTION",
      desc: "We conduct and enhance the campaigns to get outstanding results.",
      icon: <Zap size={24} />,
    },
    {
      id: "04",
      title: "AGGRESSIVE SCALE",
      desc: "We amplify the successful strategies for rapid ​‍​‌‍​‍‌growth.",
      icon: <BarChart size={24} />,
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="font-dela text-4xl md:text-6xl tracking-tighter uppercase">
          The Playbook
        </h2>
        <p className="font-bold opacity-60 uppercase tracking-widest mt-2">
          How we turn bytes into revenue
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative bg-white border-2 border-[#0A2A1F] p-8 rounded-2xl shadow-[4px_4px_0px_0px_#0A2A1F] group hover:shadow-[8px_8px_0px_0px_#D2E823] transition-all"
          >
            <div className="absolute -top-4 -right-4 bg-[#D2E823] border-2 border-[#0A2A1F] font-dela text-xl px-3 py-1 rounded-lg">
              {step.id}
            </div>
            <div className="mb-6 text-[#0A2A1F]">{step.icon}</div>
            <h3 className="font-dela text-2xl mb-4 uppercase">{step.title}</h3>
            <p className="text-sm leading-relaxed opacity-70 font-medium">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
