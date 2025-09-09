import type React from "react";
import type { Metadata } from "next";

// import { GeistMono } from "geist/font/mono"; // Removed because module not found

import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metabytes — AI workflows for modern teams",
  description:
    "Metabytes builds custom AI workflows for modern teams. Automate ops, elevate customer experience, and ship faster.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <body className={`h-full text-slate-900 font-sans `}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
