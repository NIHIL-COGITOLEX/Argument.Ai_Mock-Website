"use client";
import Link from "next/link";
import { useRef } from "react";
import { gsap } from "@/lib/animations";
type P = { children: React.ReactNode; href?: string; onClick?: () => void; disabled?: boolean; type?: "button" | "submit" };
export default function MagneticButton({ children, href, onClick, disabled, type = "submit" }: P) {
  const r = useRef<HTMLSpanElement>(null);
  const move = (e: React.MouseEvent) => { const b = r.current!.getBoundingClientRect(); gsap.to(r.current, { x: (e.clientX - b.left - b.width / 2) * 0.3, y: (e.clientY - b.top - b.height / 2) * 0.3, duration: 0.4 }); };
  const leave = () => gsap.to(r.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,.4)" });
  const cls = "inline-flex min-h-12 items-center border border-blue bg-blue px-7 text-sm uppercase tracking-wider text-white transition hover:bg-white hover:text-blue disabled:opacity-40";
  return (<span ref={r} onMouseMove={move} onMouseLeave={leave} className="inline-block">
    {href ? <Link href={href} className={cls}>{children}</Link> : <button type={type} onClick={onClick} disabled={disabled} className={cls}>{children}</button>}</span>);
}
