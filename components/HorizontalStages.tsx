"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
import { stages } from "@/lib/mock-data";
export default function HorizontalStages() {
  const sec = useRef<HTMLElement>(null), track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width:768px) and (prefers-reduced-motion:no-preference)", () => {
      gsap.to(track.current, { x: () => -(track.current!.scrollWidth - innerWidth + innerWidth * 0.1), ease: "none", scrollTrigger: { trigger: sec.current, pin: true, scrub: 1, end: () => "+=" + track.current!.scrollWidth, invalidateOnRefresh: true } });
    });
    return () => mm.revert();
  }, []);
  return (<section ref={sec} className="flex min-h-[70vh] items-center overflow-x-auto md:overflow-visible"><div ref={track} className="flex w-max gap-5 px-[5vw]">
    {stages.map(([t, d], i) => <article key={t} data-cursor className="flex min-h-[320px] w-[78vw] flex-col justify-between border border-ink/15 bg-white p-7 transition hover:-translate-y-2 hover:border-blue md:w-[28vw]"><span className="font-serif text-7xl text-blue">0{i + 1}</span><div><h3 className="font-serif text-4xl">{t}</h3><p className="mt-2 text-mute">{d}</p></div></article>)}</div></section>);
}
