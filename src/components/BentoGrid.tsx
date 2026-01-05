import { Target, MousePointer2, Smartphone, BarChart3 } from "lucide-react";

export const BentoGrid = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
        <h2 className="font-dela text-4xl md:text-5xl tracking-tighter text-[#0A2A1F] uppercase">
          Our Core
          <br />
          Weapons
        </h2>
      </div>

      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        {/* Full Funnel Ads */}
        <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] bg-[#0A2A1F]">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
            alt="Ads"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h3 className="text-5xl font-dela text-[#D2E823] mb-2 tracking-tighter uppercase">
              Paid Media
              <br />
              Mastery
            </h3>
            <p className="text-[#F8F4E8] max-w-sm font-medium">
              Meta, Google, & TikTok ads that don't just get clicks—they build
              empires.
            </p>
          </div>
        </div>

        {/* Small Service 1 */}
        <div className="relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] bg-[#F8F4E8] flex flex-col justify-center items-center p-6 text-center">
          <div className="w-16 h-16 bg-[#D2E823] rounded-full flex items-center justify-center border-2 border-[#0A2A1F] mb-4">
            <Target size={32} />
          </div>
          <h3 className="text-2xl font-dela text-[#0A2A1F]">SEO ARCHERY</h3>
          <p className="text-sm opacity-60 font-semibold mt-1">
            Hit page #1 with pinpoint precision.
          </p>
        </div>

        {/* Small Service 2 */}
        <div className="relative group rounded-2xl border-2 border-[#0A2A1F] overflow-hidden shadow-[4px_4px_0px_0px_#0A2A1F] bg-[#D2E823] flex flex-col justify-center items-center p-6 text-center">
          <div className="w-16 h-16 bg-[#F8F4E8] rounded-full flex items-center justify-center border-2 border-[#0A2A1F] mb-4">
            <BarChart3 size={32} />
          </div>
          <h3 className="text-2xl font-dela text-[#0A2A1F]">DATA ANALYTICS</h3>
          <p className="text-sm opacity-60 font-semibold mt-1">
            Numbers never lie. Neither do we.
          </p>
        </div>
      </div>
    </section>
  );
};
