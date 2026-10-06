"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/animations";
import type { Analysis } from "@/lib/mock-data";
import VulnerabilityCard from "./VulnerabilityCard";
import CounterargumentCard from "./CounterargumentCard";
import JudgeQuestions from "./JudgeQuestions";
import AuthorityGap from "./AuthorityGap";
import MagneticButton from "./MagneticButton";
const Sec = ({ t, children }: { t: string; children: React.ReactNode }) => <section className="mt-14"><h3 className="mono mb-4">{t}</h3>{children}</section>;
export default function AnalysisResult({ data, compact }: { data: Analysis; compact?: boolean }) {
  const n = useRef<HTMLSpanElement>(null); const [strong, setStrong] = useState(false);
  useEffect(() => {
    const o = { v: strong ? data.score : 0 };
    const t = gsap.to(o, { v: strong ? 89 : data.score, duration: 1.6, ease: "power3.out", onUpdate: () => { if (n.current) n.current.textContent = String(Math.round(o.v)); } });
    return () => { t.kill(); };
  }, [data, strong]);
  const st: [number, string][] = [[data.stats.critical, "Critical vulnerabilities"], [data.stats.counters, "Counterarguments"], [data.stats.questions, "Judicial questions"], [data.stats.gaps, "Authority gaps"]];
  return (<div className="mt-6">
    <div className="flex flex-wrap items-end gap-8 border-b border-ink/15 pb-10"><div><p className="mono">Argument survival score</p><span ref={n} className="font-serif text-[clamp(7rem,20vw,16rem)] leading-[.8] text-blue">0</span></div>
      <p className="h2">{strong ? "Substantially strengthened." : data.label + "."}</p></div>
    <div className="my-8 grid grid-cols-2 gap-6 md:grid-cols-4">{st.map(([v, l]) => <div key={l}><b className="font-serif text-5xl font-normal">{v}</b><p className="mono">{l}</p></div>)}</div>
    <MagneticButton type="button" onClick={() => setStrong(true)} disabled={strong}>Strengthen argument →</MagneticButton>
    {strong && <div className="mt-8 bg-blue p-8 font-serif text-2xl leading-snug text-white"><p className="mono mb-3 text-white/70">Rebuilt argument</p>{data.rebuilt}</div>}
    <Sec t="Critical weaknesses">{data.vulns.map((v, i) => <VulnerabilityCard key={v.title} v={v} i={i} />)}</Sec>
    {!compact && <><Sec t="Counterarguments">{data.counters.map((c, i) => <CounterargumentCard key={c} c={c} i={i} />)}</Sec>
      <Sec t="Possible judicial questions"><JudgeQuestions qs={data.questions} /></Sec><Sec t="Authority vulnerabilities"><AuthorityGap gaps={data.gaps} /></Sec></>}</div>);
}
