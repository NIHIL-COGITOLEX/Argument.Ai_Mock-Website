import { tiers } from "@/lib/mock-data";
import MagneticButton from "@/components/MagneticButton";
export default function Page() {
  return (<section className="px-[5vw] pb-32 pt-40"><p className="mono">Pricing</p><h1 className="display mt-4">Priced like a good brief.</h1>
    <div className="mt-16">{tiers.map((t) => <div key={t.n} className="grid items-center gap-4 border-b border-ink/15 py-10 transition-all hover:bg-blue/5 hover:pl-5 md:grid-cols-[1fr_auto_auto]"><div><p className="mono">{t.n}</p><ul className="mt-2 flex flex-wrap gap-x-6 text-mute">{t.f.map((f) => <li key={f}>{f}</li>)}</ul></div>
      <p className="font-serif text-6xl">{t.p}<span className="mono"> {t.u}</span></p><MagneticButton href="/contact">Request access →</MagneticButton></div>)}</div></section>);
}
