"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/mock-data";
import MagneticButton from "./MagneticButton";
export default function Navbar() {
  const path = usePathname(); const [sc, setSc] = useState(false), [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setSc(scrollY > 40); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  useEffect(() => setOpen(false), [path]);
  return (<header className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[5vw] py-4 transition ${sc ? "border-b border-ink/10 bg-white/85 backdrop-blur" : ""}`}>
    <Link href="/" className="font-serif text-2xl">Argument<span className="text-blue">.Ai</span></Link>
    <nav className="hidden items-center gap-7 text-sm md:flex">{nav.map(([h, t]) => <Link key={h} href={h} className={`transition hover:text-blue ${path === h ? "text-blue" : ""}`}>{t}</Link>)}<MagneticButton href="/contact">Request access</MagneticButton></nav>
    <button aria-label="Menu" aria-expanded={open} className="p-3 md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <AnimatePresence>{open && <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute inset-x-0 top-full flex flex-col border-b border-ink/10 bg-white px-[5vw] py-4 md:hidden">
      {[...nav, ["/contact", "Request access"]].map(([h, t]) => <Link key={h} href={h} className="py-3 font-serif text-3xl">{t}</Link>)}</motion.nav>}</AnimatePresence></header>);
}
