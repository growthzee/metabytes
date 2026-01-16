import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Process } from "@/components/Process"; // New
import { CaseStudies } from "@/components/CaseStudies";
import { Pricing } from "@/components/Pricing"; // New
import { Faq } from "@/components/Faq"; // New
import { Footer } from "@/components/footer";
import { HeroTicker } from "@/components/HeroTicker";

export default function Home() {
  return (
    <main className="bg-[#F8F4E8]">
      <Navbar />
      <Hero />
      <HeroTicker />
      <BentoGrid />
      <Process />
      <CaseStudies />
      {/* <Pricing /> */}
      <Faq />
      <Footer />
    </main>
  );
}
