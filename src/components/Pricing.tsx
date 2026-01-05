import { Check } from "lucide-react";

export const Pricing = () => {
  const tiers = [
    {
      name: "STARTER",
      price: "$2.5k",
      features: ["Google Ads Mgmt", "Basic SEO", "Monthly Report"],
    },
    {
      name: "GROWTH",
      price: "$5k",
      features: [
        "Full-Funnel Ads",
        "Content Strategy",
        "CRO Audit",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "DOMINANCE",
      price: "$10k+",
      features: [
        "Omni-Channel Scale",
        "Custom App Dev",
        "Dedicated CMO",
        "Revenue Share Opt",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#0A2A1F] text-[#F8F4E8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-dela text-4xl md:text-6xl text-[#D2E823] tracking-tighter uppercase">
            CHOOSE YOUR VELOCITY
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative p-8 rounded-[2rem] border-2 border-[#F8F4E8] flex flex-col ${
                tier.popular
                  ? "bg-[#D2E823] text-[#0A2A1F] scale-105 shadow-[8px_8px_0px_0px_#F8F4E8] z-10"
                  : "bg-transparent shadow-[4px_4px_0px_0px_#F8F4E8]"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F8F4E8] text-[#0A2A1F] px-4 py-1 rounded-full font-bold text-xs">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-dela text-2xl mb-2">{tier.name}</h3>
              <div className="text-4xl font-dela mb-8">
                {tier.price}
                <span className="text-sm font-sans">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 font-bold text-sm"
                  >
                    <Check size={18} strokeWidth={3} /> {feat}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-dela border-2 ${
                  tier.popular
                    ? "bg-[#0A2A1F] text-[#D2E823] border-[#0A2A1F]"
                    : "bg-[#D2E823] text-[#0A2A1F] border-[#F8F4E8]"
                }`}
              >
                SELECT PLAN
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
