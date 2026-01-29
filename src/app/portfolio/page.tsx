import BackgroundManager from "@/components/BackgroundManager";
import { Navbar } from "@/components/Navbar";

import IndustryTerminal from "@/components/IndustryTerminal";
import { Footer } from "@/components/footer";

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen">
      <BackgroundManager />
      <div className="relative z-10">
        <Navbar />

        {/* Neubrutalist Header */}
        <header className="max-w-7xl mx-auto px-4 pt-32 pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#0A2A1F] border-2 border-[#0A2A1F] rounded-lg shadow-[4px_4px_0px_0px_#D2E823]">
            <span className="text-[10px] font-dela text-[#D2E823] uppercase">
              Operational Specializations
            </span>
          </div>
          <h1 className="font-dela text-6xl md:text-8xl text-[#0A2A1F] uppercase leading-[0.85] tracking-tighter">
            The Sector <br />
            <span className="text-outline-green">Archive.</span>
          </h1>
        </header>

        <IndustryTerminal />
        <Footer />
      </div>
    </main>
  );
}
