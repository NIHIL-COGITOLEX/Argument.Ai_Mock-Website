"use client";
import { useEffect, useRef } from "react";
import { gsap, reduced } from "@/lib/animations";
import { stagesWords as S } from "@/lib/mock-data";
export default function ArgumentVisualizer() {
  const r = useRef<HTMLElement>(null);
  useEffect(() => {
    if (reduced()) return;
    const c = gsap.context(() => {
      const w = gsap.utils.toArray<HTMLElement>(".vw"), rows = gsap.utils.toArray<HTMLElement>(".vr"), n = S.length;
      gsap.set(w.slice(1), { yPercent: 100, opacity: 0 }); gsap.set(rows.slice(1), { opacity: 0.15, x: 30 });
      const tl = gsap.timeline({ scrollTrigger: { trigger: r.current, start: "top top", end: `+=${n * 70}%`, pin: true, scrub: 0.6 } });
      for (let i = 1; i < n; i++) tl.to(w[i - 1], { yPercent: -100, opacity: 0 }, i).to(w[i], { yPercent: 0, opacity: 1 }, i).to(rows[i], { opacity: 1, x: 0 }, i);
      tl.to(".bar", { scaleX: 1, ease: "none", duration: n }, 0);
    }, r);
    return () => c.revert();
  }, []);
  return (<section ref={r} className="relative flex h-screen flex-col justify-center px-[5vw]"><div className="bar absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-blue" />
    <div className="grid items-center gap-10 md:grid-cols-2"><div className="relative h-[28vw] min-h-40 overflow-hidden">{S.map((s) => <div key={s.w} className="vw absolute inset-0 font-serif text-[clamp(3rem,9vw,8rem)] leading-[.9] text-blue">{s.w}</div>)}</div>
      <div className="space-y-4 border border-ink/15 bg-white/80 p-6 backdrop-blur">{S.map((s, i) => <div key={s.w} className="vr font-serif text-xl md:text-2xl"><span className="mono mr-3">0{i + 1}</span>{s.t}</div>)}</div></div></section>);
}
