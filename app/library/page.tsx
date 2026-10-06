"use client";
import { useState } from "react";
import { library } from "@/lib/mock-data";
export default function Page() {
  const [j, setJ] = useState(""), [s, setS] = useState("");
  const rows = library.filter((r) => (!j || r.j === j) && (!s || r.st === s));
  const sel = "border border-ink/20 bg-white p-3";
  return (<section className="px-[5vw] pb-32 pt-40"><p className="mono">Library</p><h1 className="display mt-4">Every argument you have broken.</h1>
    <div className="my-10 flex flex-wrap gap-3"><select aria-label="Jurisdiction" className={sel} onChange={(e) => setJ(e.target.value)}><option value="">All jurisdictions</option>{["India", "Singapore", "England & Wales"].map((x) => <option key={x}>{x}</option>)}</select>
      <select aria-label="Status" className={sel} onChange={(e) => setS(e.target.value)}><option value="">All statuses</option>{["Open", "Strengthened", "Archived"].map((x) => <option key={x}>{x}</option>)}</select></div>
    <div className="overflow-x-auto"><table className="w-full min-w-[640px] text-left"><thead className="mono"><tr>{["Argument", "Jurisdiction", "Area", "Score", "Status", "Date"].map((h) => <th key={h} className="py-3 font-normal">{h}</th>)}</tr></thead>
      <tbody>{rows.map((r) => <tr key={r.t} className="border-t border-ink/15 transition hover:bg-blue/5"><td className="py-5 font-serif text-2xl">{r.t}</td><td>{r.j}</td><td>{r.a}</td><td className="text-blue">{r.s}</td><td>{r.st}</td><td>{r.d}</td></tr>)}</tbody></table></div></section>);
}
