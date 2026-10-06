"use client";
import { useEffect, useState } from "react";
import AnalysisResult from "@/components/AnalysisResult";
import { analysis } from "@/lib/mock-data";
import { load } from "@/lib/analysis";
export default function Page() {
  const [data, setData] = useState(analysis);
  useEffect(() => { setData(load()); }, []);
  return (<section className="px-[5vw] pb-32 pt-40"><p className="mono">Analysis · Contract Law · India</p><AnalysisResult data={data} /></section>);
}
