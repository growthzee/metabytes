import { Rocket, Target, Users } from "lucide-react";

export const WhyUs = () => {
  const features = [
    {
      icon: <Rocket size={48} />,
      title: "RAPID GROWTH",
      desc: "We don't do 'slow and steady'. We build for aggressive, sustainable scale.",
    },
    {
      icon: <Target size={48} />,
      title: "ROI FOCUS",
      desc: "Every dollar you spend with us is tracked against a conversion. Period.",
    },
    {
      icon: <Users size={48} />,
      title: "CREATIVE SQUAD",
      desc: "In-house designers and copywriters who understand the psychology of a click.",
    },
  ];

  return (
    <section className="bg-[#0A2A1F] text-[#F8F4E8] py-20 border-y-2 border-[#0A2A1F]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {features.map((f, i) => (
            <div key={i} className="space-y-4">
              <div className="text-[#D2E823] flex justify-center md:justify-start">
                {f.icon}
              </div>
              <h3 className="font-dela text-2xl text-[#D2E823] uppercase">
                {f.title}
              </h3>
              <p className="opacity-80 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
