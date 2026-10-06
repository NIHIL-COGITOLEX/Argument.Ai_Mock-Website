"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { attacks } from "@/lib/mock-data";
export default function AttackCategories() {
  const [i, setI] = useState(0);
  return (<section className="px-[5vw] py-32"><p className="mono">The attack</p><h2 className="h2 mt-4">Your argument has an opponent.</h2>
    <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr]"><div>{attacks.map(([k], n) => <button key={k} onMouseEnter={() => setI(n)} onFocus={() => setI(n)} onClick={() => setI(n)} className={`flex min-h-14 w-full items-center justify-between border-b border-ink/15 text-left font-serif text-4xl transition-all hover:pl-4 ${i === n ? "pl-4 text-blue" : ""}`}>{k}<span className="mono">0{n + 1}</span></button>)}</div>
      <div className="self-start border border-ink/15 p-8 md:sticky md:top-28"><p className="mono mb-4">Example attack · {attacks[i][0]}</p>
        <AnimatePresence mode="wait"><motion.p key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.25 }} className="font-serif text-3xl leading-tight md:text-4xl">“{attacks[i][1]}”</motion.p></AnimatePresence></div></div></section>);
}
