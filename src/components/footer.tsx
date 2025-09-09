import { Orbit } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-slate-700 shadow-sm ring-1 ring-black/10">
              <Orbit className="h-4 w-4 text-white" />
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Metabytes
            </span>
          </div>
          <p className="text-xs text-slate-500">
            © 2025 Metabytes. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#" className="text-sm hover:text-slate-900 transition">
              Privacy
            </a>
            <a href="#" className="text-sm hover:text-slate-900 transition">
              Terms
            </a>
            <a href="#" className="text-sm hover:text-slate-900 transition">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
