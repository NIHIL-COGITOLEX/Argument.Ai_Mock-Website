"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap, reduced } from "@/lib/animations";
import MagneticButton from "./MagneticButton";
const Scene = dynamic(() => import("./3d/ArgumentScene"), { ssr: false });
export default function Hero() {
  const r = useRef<HTMLElement>(null);
  useEffect(() => {
    if (reduced()) return;
    const c = gsap.context(() => {
      gsap.from(".ln > span", { yPercent: 110, duration: 1.2, stagger: 0.12, ease: "power4.out", delay: 0.2 });
      gsap.from(".fade", { opacity: 0, y: 20, delay: 0.9, stagger: 0.1, duration: 0.8 });
      const st = { trigger: r.current, start: "top top", end: "bottom top", scrub: true };
      gsap.to(".par1", { yPercent: -20, ease: "none", scrollTrigger: st }); gsap.to(".par2", { yPercent: -60, ease: "none", scrollTrigger: st });
    }, r);
    return () => c.revert();
  }, []);
  return (<section ref={r} className="relative flex min-h-screen items-center px-[5vw] pt-28">
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-70"><Scene /></div>
    <div className="relative z-10"><p className="fade mono mb-8 flex items-center gap-2"><i className="h-2 w-2 animate-pulse rounded-full bg-blue" />Reasoning engine active</p>
      <h1 className="display par1">{["Break your", "argument", "before they do."].map((l, i) => <span key={l} className="ln block overflow-hidden pb-[.08em]"><span className={`block ${i === 1 ? "italic text-blue" : ""}`}>{l}</span></span>)}</h1>
      <div className="par2"><p className="fade mt-8 max-w-md text-lg">Argument.Ai stress-tests legal reasoning against the arguments you are most likely to face.</p>
        <div className="fade mt-8 flex flex-wrap items-center gap-4"><MagneticButton href="/argument-lab">Stress test an argument →</MagneticButton><MagneticButton href="/how-it-works">See how it works →</MagneticButton></div></div></div></section>);
}
