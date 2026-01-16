"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Faq = () => {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "Which services should I start with first?",
      a: "It is basically based on the goals of your business. Some brands initiate SEO for organic long-term growth, and some other brands start with ads or social media for getting quick results.",
    },
    {
      q: "Do you provide regular reports and updates?",
      a: "Yes. We provide regular reports on performance so that you can easily understand how your campaigns are progressing.",
    },
    {
      q: "Will you manage everything or do we need to handle something?",
      a: "We do the major part of the work. At most times, we need from you only basic information about the business and approvals.",
    },
    {
      q: "Is digital marketing suitable for all industries?",
      a: "Absolutely. Digital marketing can be a great tool for almost every industry such as e-commerce, services, startups, and local ​‍​‌‍​‍‌businesses.",
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
