export const Footer = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="bg-[#D2E823] rounded-[2rem] border-2 border-[#0A2A1F] p-8 md:p-16 text-center relative overflow-hidden shadow-[8px_8px_0px_0px_#0A2A1F]">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-dela text-4xl md:text-6xl text-[#0A2A1F] mb-6 tracking-tighter uppercase">
              Ready to dominate?
            </h2>
            <p className="text-[#0A2A1F] text-lg font-medium mb-8">
              Get a free digital audit of your current marketing funnel.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="work-email@company.com"
                className="flex-1 bg-[#F8F4E8] border-2 border-[#0A2A1F] rounded-xl px-6 py-4 font-bold outline-none"
              />
              <button className="bg-[#0A2A1F] text-[#D2E823] font-dela text-xl px-8 py-4 rounded-xl border-2 border-[#0A2A1F] hover:translate-x-1 hover:translate-y-1 transition-transform">
                GO 10X
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A2A1F] text-[#F8F4E8] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-3xl font-dela mb-2">
              COTO<span className="text-[#D2E823]">ADS</span>
            </div>
            <p className="opacity-60 text-sm">
              Where data meets creative destruction.
            </p>
          </div>
          <div className="flex gap-10 font-bold text-sm uppercase">
            <a href="#" className="hover:text-[#D2E823]">
              Case Studies
            </a>
            <a href="#" className="hover:text-[#D2E823]">
              Careers
            </a>
            <a href="#" className="hover:text-[#D2E823]">
              Contact
            </a>
          </div>
          <div className="text-xs opacity-40 font-mono">
            © 2026 METABYTES AGENCY. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </>
  );
};
