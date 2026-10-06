"use client";
import { useState } from "react";
import MagneticButton from "@/components/MagneticButton";
export default function Page() {
  const [ok, setOk] = useState(false);
  const f = "mt-1 w-full border border-ink/20 p-3";
  return (<section className="px-[5vw] pb-32 pt-40"><p className="mono">Request access</p><h1 className="h2 mt-4 max-w-3xl">Private beta for litigators and researchers.</h1>
    <form className="mt-12 max-w-lg space-y-4" onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
      <label className="mono block">Name<input required className={f} /></label><label className="mono block">Work email<input required type="email" className={f} /></label>
      <label className="mono block">Practice<select className={f}>{["Litigation", "Academic", "In-house", "Student"].map((x) => <option key={x}>{x}</option>)}</select></label>
      <MagneticButton>Request access →</MagneticButton>{ok && <p role="status" className="text-blue">Request received. We will be in touch.</p>}</form></section>);
}
