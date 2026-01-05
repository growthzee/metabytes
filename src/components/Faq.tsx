"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast will I see results?",
      a: "Most clients see a positive shift in leads within 14 days. Scale usually kicks in during month two after our pixel optimization.",
    },
    {
      q: "Do you offer month-to-month contracts?",
      a: "Yes. We believe in our results. If we don't deliver, you shouldn't be forced to stay.",
    },
    {
      q: "What industries do you specialize in?",
      a: "SaaS, High-Ticket E-commerce, and Professional Services (Real Estate/Legal).",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 max-w-3xl mx-auto">
      <h2 className="font-dela text-4xl mb-12 text-center uppercase">
        Objections?
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-2 border-[#0A2A1F] rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F]"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center p-6 bg-white hover:bg-[#D2E823] transition-colors"
            >
              <span className="font-dela text-left uppercase">{faq.q}</span>
              {open === i ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            {open === i && (
              <div className="p-6 bg-[#F8F4E8] border-t-2 border-[#0A2A1F] font-medium leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
