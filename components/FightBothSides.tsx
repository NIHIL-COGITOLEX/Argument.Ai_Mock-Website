"use client";
import { useEffect, useRef, useState } from "react";
import { gsap, reduced } from "@/lib/animations";
import { fight } from "@/lib/mock-data";
export default function FightBothSides() {
  const r = useRef<HTMLElement>(null); const [v, setV] = useState("");
  useEffect(() => {
    if (reduced()) return;
    const c = gsap.context(() => {
      const st = { trigger: r.current, start: "top 70%", end: "center center", scrub: 1 };
      gsap.from(".fl", { x: -120, opacity: 0, stagger: 0.1, ease: "none", scrollTrigger: st }); gsap.from(".fr", { x: 120, opacity: 0, stagger: 0.1, ease: "none", scrollTrigger: st });
      gsap.from(".vsl", { scaleY: 0, ease: "none", scrollTrigger: st });
    }, r);
    return () => c.revert();
  }, []);
  return (<section ref={r} className="px-[5vw] py-32"><p className="mono">Fight both sides</p><h2 className="h2 mt-4 max-w-3xl">Which side survives the stronger attack?</h2><p className="mono mt-4">Illustrative example · not legal advice</p>
    <div className="relative mt-14 grid gap-8 md:grid-cols-2 md:gap-16"><div className="vsl absolute inset-y-0 left-1/2 hidden w-px origin-top bg-blue md:block" />
      <div><p className="mono mb-4 text-blue">Your best argument</p>{fight.map(([a], i) => <p key={i} className="fl border-b border-ink/15 py-5 font-serif text-2xl">{a}</p>)}</div>
      <div><p className="mono mb-4">Opposition’s best argument</p>{fight.map(([, b], i) => <p key={i} className="fr border-b border-ink/15 py-5 font-serif text-2xl">{b}</p>)}</div></div>
    <div className="mt-10 flex flex-wrap gap-3">{["Your side", "Opposition"].map((s) => <button key={s} onClick={() => setV(s)} className="min-h-12 border border-ink px-6 text-sm uppercase tracking-wider transition hover:bg-ink hover:text-white">{s} survives →</button>)}</div>
    <p className="mt-6 min-h-16 max-w-xl font-serif text-2xl text-blue" aria-live="polite">{v === "Your side" ? "Your side holds on rows 1–2 but is exposed on definition and wilful default." : v ? "The opposition lands where your clause lacks a definition. Expect the bench to press you there." : ""}</p></section>);
}
