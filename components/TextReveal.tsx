"use client";
import { useEffect, useRef } from "react";
import { gsap, reduced } from "@/lib/animations";
export default function TextReveal({ text, className = "", as = "div" }: { text: string; className?: string; as?: "h1" | "h2" | "p" | "div" }) {
  const ref = useRef<HTMLElement>(null); const T = as as React.ElementType;
  useEffect(() => {
    if (reduced()) return;
    const c = gsap.context(() => { gsap.from(".w > span", { yPercent: 110, duration: 1, stagger: 0.05, ease: "power4.out", scrollTrigger: { trigger: ref.current, start: "top 88%" } }); }, ref);
    return () => c.revert();
  }, []);
  return <T ref={ref} className={className} aria-label={text}>{text.split(" ").map((w, i) => <span key={i} aria-hidden className="w inline-block overflow-hidden pr-[.25em] align-bottom"><span className="inline-block">{w}</span></span>)}</T>;
}
