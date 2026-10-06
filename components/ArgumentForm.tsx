"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { STAGES, runAnalysis, save } from "@/lib/analysis";
import type { Analysis } from "@/lib/mock-data";
import MagneticButton from "./MagneticButton";
import AnalysisResult from "./AnalysisResult";
const Sel = ({ l, o }: { l: string; o: string[] }) => <label className="mono block">{l}<select className="mt-1 w-full border border-ink/20 bg-white p-3 text-base normal-case tracking-normal text-ink">{o.map((x) => <option key={x}>{x}</option>)}</select></label>;
export default function ArgumentForm({ mode = "lab" }: { mode?: "lab" | "demo" }) {
  const router = useRouter();
  const [arg, setArg] = useState("The defendant should not be liable because the contract expressly excluded consequential damages.");
  const [step, setStep] = useState(-1), [res, setRes] = useState<Analysis | null>(null);
  const busy = step >= 0 && step < STAGES.length;
  async function go() {
    setRes(null); const a = await runAnalysis({ argument: arg }, setStep); setStep(STAGES.length);
    if (mode === "lab") { save(a); router.push("/analysis"); } else setRes(a);
  }
  return (<div>
    {mode === "lab" && <div className="mb-6 grid gap-4 md:grid-cols-4"><Sel l="Jurisdiction" o={["India", "Singapore", "England & Wales"]} /><Sel l="Area of law" o={["Contract Law", "Tort", "Arbitration"]} /><Sel l="Argument type" o={["Liability", "Remedies", "Jurisdiction"]} /><Sel l="Acting for" o={["Defendant", "Claimant"]} /></div>}
    <label className="mono block" htmlFor="arg">Argument</label>
    <textarea id="arg" value={arg} onChange={(e) => setArg(e.target.value)} rows={mode === "lab" ? 8 : 4} className="mt-2 w-full border border-ink/20 bg-white p-4 font-serif text-2xl leading-snug focus:border-blue" />
    <div className="my-6"><MagneticButton type="button" onClick={go} disabled={busy}>{busy ? "Attacking…" : "Run stress test →"}</MagneticButton></div>
    {step >= 0 && !res && <ol className="max-w-md">{STAGES.map((s, i) => <li key={s} className={`flex gap-3 border-b border-ink/10 py-3 transition ${i === step ? "text-blue" : i < step ? "opacity-60" : "opacity-20"}`}><span className="mono">0{i + 1}</span>{s}</li>)}</ol>}
    {res && <AnalysisResult data={res} compact />}</div>);
}
