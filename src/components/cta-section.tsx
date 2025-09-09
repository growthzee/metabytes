import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, BookOpen } from "lucide-react";

export function CTASection() {
  return (
    <section className="md:py-24 bg-slate-50 pt-16 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950">
          <Image
            src="/cta.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="relative p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                Build your first AI workflow in a day
              </h3>
              <p className="mt-3 text-slate-300">
                We&apos;ll help you integrate, measure impact, and scale
                responsibly.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-950 text-sm font-semibold px-4 py-2.5 shadow-lg hover:shadow-xl">
                  <span>Book a demo</span>
                  <Calendar className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="inline-flex items-center gap-2 rounded-xl bg-transparent text-white ring-1 ring-white/20 text-sm font-semibold px-4 py-2.5 hover:bg-white/10"
                >
                  <span>Explore docs</span>
                  <BookOpen className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
