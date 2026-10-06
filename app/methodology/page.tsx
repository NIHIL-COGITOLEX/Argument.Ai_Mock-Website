"use client";
import { useState } from "react";
import { method } from "@/lib/mock-data";
import ImageReveal from "@/components/ImageReveal";
export default function Page() {
  const [i, setI] = useState(0);
  return (<section className="px-[5vw] pb-32 pt-40"><p className="mono">Methodology</p><h1 className="display mt-4">An adversarial reasoning framework.</h1>
    <div className="mt-16 grid gap-10 md:grid-cols-2"><div>{method.map(([n], k) => <button key={n} onMouseEnter={() => setI(k)} onFocus={() => setI(k)} onClick={() => setI(k)} className={`flex min-h-14 w-full items-baseline gap-4 border-b border-ink/15 py-2 text-left font-serif text-4xl transition-all hover:pl-3 ${i === k ? "text-blue" : ""}`}><span className="mono">0{k + 1}</span>{n}</button>)}</div>
      <ImageReveal className="h-[360px] bg-blue text-white md:sticky md:top-28"><div className="grain flex h-full flex-col justify-end p-8"><p className="mono text-white/70">Step 0{i + 1}</p><h2 className="font-serif text-6xl">{method[i][0]}</h2><p className="mt-3 max-w-sm">{method[i][1]}</p></div></ImageReveal></div>
    <p className="mt-16 max-w-xl text-mute">Argument.Ai provides AI-assisted legal reasoning and adversarial analysis. Outputs may be incomplete or wrong and must be verified against primary sources.</p></section>);
}
