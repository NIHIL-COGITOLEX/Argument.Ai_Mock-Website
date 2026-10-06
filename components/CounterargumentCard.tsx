export default function CounterargumentCard({ c, i }: { c: string; i: number }) {
  return <p className="group border-b border-ink/15 py-5 font-serif text-2xl transition-all hover:pl-4 hover:text-blue"><span className="mono mr-3">C{i + 1}</span>{c}</p>;
}
