"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null), ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const x = gsap.quickTo(ring.current, "x", { duration: 0.35 }), y = gsap.quickTo(ring.current, "y", { duration: 0.35 });
    const m = (e: MouseEvent) => {
      gsap.set(dot.current, { x: e.clientX, y: e.clientY }); x(e.clientX); y(e.clientY);
      const hot = !!(e.target as Element).closest("a,button,input,textarea,select,[data-cursor]");
      gsap.to(ring.current, { scale: hot ? 1.8 : 1, backgroundColor: hot ? "rgba(27,61,255,.15)" : "rgba(27,61,255,0)", duration: 0.25 });
    };
    addEventListener("mousemove", m); return () => removeEventListener("mousemove", m);
  }, []);
  const base = "pointer-events-none fixed left-0 top-0 z-[999] hidden [@media(pointer:fine)]:block";
  return (<><div ref={ring} className={`${base} -ml-5 -mt-5 h-10 w-10 rounded-full border border-blue`} /><div ref={dot} className={`${base} -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-blue`} /></>);
}
