import { Button } from "@/components/ui/button";

export function FloatingCTA() {
  return (
    <Button className="fixed bottom-4 right-4 inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 shadow-xl shadow-slate-900/20 hover:shadow-slate-900/30">
      <span className="inline-flex items-center justify-center h-6 w-6 rounded-md bg-white/10 ring-1 ring-white/20">
        ⌘
      </span>
      <span>Get Metabytes</span>
    </Button>
  );
}
