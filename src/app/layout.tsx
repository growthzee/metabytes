import { Dela_Gothic_One, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Preloader } from "@/components/Preloader";

const delaGothic = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dela",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${delaGothic.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-space bg-[#F8F4E8] text-[#0A2A1F] antialiased selection:bg-[#D2E823] selection:text-[#0A2A1F]">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
