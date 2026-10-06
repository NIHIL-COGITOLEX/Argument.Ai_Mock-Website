"use client";
import { useEffect, useRef } from "react";
import { gsap, reduced } from "@/lib/animations";
export default function ImageReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (reduced()) return;
    const c = gsap.context(() => {
      gsap.fromTo(r.current, { clipPath: "inset(14% 14% 14% 14%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "none", scrollTrigger: { trigger: r.current, start: "top 90%", end: "top 35%", scrub: true } });
      gsap.fromTo(".ir", { scale: 1.15 }, { scale: 1, ease: "none", scrollTrigger: { trigger: r.current, scrub: true } });
    }, r);
    return () => c.revert();
  }, []);
  return <div ref={r} className={`overflow-hidden ${className}`}><div className="ir h-full w-full">{children}</div></div>;
}
