const W = ["Logic", "Facts", "Authority", "Statute", "Procedure", "Evidence", "Jurisdiction", "Policy"];
export default function Marquee() {
  const row = [...W, ...W].map((w, i) => <span key={i} className="mx-6">{w} <span className="text-blue">✕</span></span>);
  return (<div className="overflow-hidden border-y border-ink/15 py-5 font-serif text-5xl italic"><div className="flex w-max whitespace-nowrap" style={{ animation: "mq 30s linear infinite" }}><div>{row}</div><div aria-hidden>{row}</div></div></div>);
}
