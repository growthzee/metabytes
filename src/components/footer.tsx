import { Phone, Instagram, Twitter, Linkedin } from "lucide-react";

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
                className="flex-1 bg-[#F8F4E8] border-2 border-[#0A2A1F] rounded-xl px-6 py-4 font-bold outline-none focus:shadow-[4px_4px_0px_0px_#0A2A1F] transition-all"
              />
              <button className="bg-[#0A2A1F] text-[#D2E823] font-dela text-xl px-8 py-4 rounded-xl border-2 border-[#0A2A1F] hover:translate-x-1 hover:translate-y-1 transition-transform">
                GO 10X
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A2A1F] text-[#F8F4E8] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <div className="text-3xl font-dela mb-2">
                META<span className="text-[#D2E823]">BYTES</span>
              </div>
              <p className="opacity-60 text-sm max-w-[250px]">
                Where data meets creative destruction. Scalable growth for bold
                brands.
              </p>
            </div>

            {/* Added Mobile Number Section */}
            <a
              href="tel:+918109879919"
              className="flex items-center gap-3 bg-[#D2E823] text-[#0A2A1F] px-4 py-2 rounded-lg border-2 border-[#0A2A1F] w-fit font-bold shadow-[3px_3px_0px_0px_#F8F4E8] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <Phone size={18} fill="currentColor" />
              <span>+91 81098 79919</span>
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <div className="flex gap-8 font-bold text-sm uppercase">
              <a href="#" className="hover:text-[#D2E823] transition-colors">
                Case Studies
              </a>
              <a href="#" className="hover:text-[#D2E823] transition-colors">
                Careers
              </a>
              <a href="#" className="hover:text-[#D2E823] transition-colors">
                Contact
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cotoads/"
                className="p-2 border-2 border-[#F8F4E8] rounded-lg hover:bg-[#D2E823] hover:text-[#0A2A1F] hover:border-[#0A2A1F] transition-all"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="p-2 border-2 border-[#F8F4E8] rounded-lg hover:bg-[#D2E823] hover:text-[#0A2A1F] hover:border-[#0A2A1F] transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div className="text-xs opacity-40 font-mono">
              © 2026 COTOADS. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
