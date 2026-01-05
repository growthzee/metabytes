import { Star } from "lucide-react";

export const Testimonials = () => {
  const reviews = [
    {
      name: "Jason D.",
      text: '"Finally a way to try Creed without selling my kidney. The packaging is sick and shipping was faster than Amazon."',
      initial: "JD",
    },
    {
      name: "Sarah C.",
      text: '"I was skeptical about decants but Arovell is the real deal. The atomizers are high quality and don\'t leak. 10/10."',
      initial: "SC",
      highlighted: true,
    },
    {
      name: "Mike K.",
      text: '"Got the discovery set for my boyfriend. He loved 3 out of 5 so we bought the larger decants. Super fun experience."',
      initial: "MK",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F4E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#0A2A1F] text-[#D2E823] font-bold text-xs uppercase px-3 py-1 rounded-full mb-4">
            Real Talk
          </div>
          <h2 className="font-dela text-4xl md:text-5xl tracking-tighter text-[#0A2A1F]">
            STREET CRED
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`${
                r.highlighted
                  ? "bg-[#0A2A1F] text-[#F8F4E8] md:-rotate-2"
                  : "bg-white text-[#0A2A1F]"
              } p-8 rounded-2xl border-2 border-[#0A2A1F] shadow-[4px_4px_0px_0px_#0A2A1F] hover:translate-y-[-4px] transition-all duration-300`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={r.highlighted ? "#D2E823" : "#D2E823"}
                    stroke={r.highlighted ? "#D2E823" : "#0A2A1F"}
                  />
                ))}
              </div>
              <p className="font-medium text-lg leading-relaxed mb-6">
                {r.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-dela text-sm ${
                    r.highlighted
                      ? "bg-[#D2E823] text-[#0A2A1F]"
                      : "bg-[#0A2A1F] text-[#F8F4E8]"
                  }`}
                >
                  {r.initial}
                </div>
                <div>
                  <div className="font-bold text-sm">{r.name}</div>
                  <div className="text-xs opacity-50 font-bold uppercase">
                    Verified Buyer
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
