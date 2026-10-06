import { analysis, type Analysis } from "./mock-data";
export const STAGES = ["Reading argument","Identifying assumptions","Testing authorities","Generating counters","Simulating opposition","Drafting judicial questions","Ranking vulnerabilities"];
// Swap this body for a real API call; the UI only depends on the signature.
export async function runAnalysis(_input: { argument: string }, onStage: (i: number) => void): Promise<Analysis> {
  for (let i = 0; i < STAGES.length; i++) { onStage(i); await new Promise((r) => setTimeout(r, 650)); }
  return analysis;
}
export const save = (a: Analysis) => sessionStorage.setItem("argument:last", JSON.stringify(a));
export const load = (): Analysis => { try { return JSON.parse(sessionStorage.getItem("argument:last") || ""); } catch { return analysis; } };
