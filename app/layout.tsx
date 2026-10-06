import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "../styles/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const serif = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-instrument" });
const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = { title: "Argument.Ai — Break your argument before they do.", description: "AI-assisted adversarial analysis for legal reasoning." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${serif.variable} ${sans.variable}`}><body>
    <SmoothScroll><Cursor /><Navbar /><main>{children}</main><Footer /></SmoothScroll>
  </body></html>);
}
