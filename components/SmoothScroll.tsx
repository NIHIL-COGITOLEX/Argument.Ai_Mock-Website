"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, reduced } from "@/lib/animations";
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (reduced()) return;
    const l = new Lenis();
    l.on("scroll", ScrollTrigger.update);
    const t = (s: number) => l.raf(s * 1000);
    gsap.ticker.add(t); gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(t); l.destroy(); };
  }, []);
  return <>{children}</>;
}
