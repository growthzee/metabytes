import { Menu, Search, Zap } from "lucide-react";
import { Marquee } from "./Marquee";

export const Navbar = () => {
  const items = [
    "✸ ROI-Driven Marketing",
    "✸ Growth Hacking",
    "✸ SEO Dominance",
    "✸ High-Converting Ads",
    "✸ Social Strategy",
  ];

  return (
    <>
      <div className="bg-[#0A2A1F] text-[#F8F4E8] py-3 border-b-2 border-[#0A2A1F] overflow-hidden">
        <Marquee className="font-dela uppercase text-sm tracking-widest">
          <div className="flex items-center gap-12 px-6">
            {items.map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {item}
              </span>
            ))}
          </div>
        </Marquee>
      </div>

      <nav className="sticky top-4 z-50 px-4 md:px-8 mt-4">
        <div className="bg-[#F8F4E8]/80 backdrop-blur-md border-2 border-[#0A2A1F] rounded-xl shadow-[4px_4px_0px_0px_#0A2A1F] flex justify-between items-center p-4">
          <a
            href="#"
            className="text-2xl md:text-3xl font-dela tracking-tighter"
          >
            META
            <span
              className="text-[#D2E823]"
              style={{ WebkitTextStroke: "1px #0A2A1F" }}
            >
              BYTES
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            {["SERVICES", "CASE STUDIES", "OUR PROCESS", "PRICING"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-[#D2E823] hover:bg-[#0A2A1F] px-3 py-1 rounded transition-colors uppercase"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <button className="bg-[#0A2A1F] text-[#D2E823] px-6 py-2 rounded-lg font-dela text-sm border-2 border-[#0A2A1F] hover:bg-[#D2E823] hover:text-[#0A2A1F] transition-colors">
            GET A PROPOSAL
          </button>
        </div>
      </nav>
    </>
  );
};
