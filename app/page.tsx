import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ArgumentVisualizer from "@/components/ArgumentVisualizer";
import AttackCategories from "@/components/AttackCategories";
import FightBothSides from "@/components/FightBothSides";
import LiveDemo from "@/components/LiveDemo";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
export default function Home() {
  return (<>
    <Hero /><Marquee />
    <section className="px-[5vw] pt-32"><p className="mono">The problem</p><TextReveal as="h2" className="h2 mt-4 max-w-4xl" text="Most legal reasoning is tested too late." />
      <p className="mt-6 max-w-lg text-lg">Lawyers test arguments after they have become attached to them. Argument.Ai reverses the process and attacks the reasoning before the courtroom does.</p></section>
    <ArgumentVisualizer /><AttackCategories /><FightBothSides /><LiveDemo />
    <section className="px-[5vw] py-40 text-center"><TextReveal as="h2" className="h2 mx-auto max-w-3xl" text="Your opponent is already preparing." />
      <div className="mt-10"><MagneticButton href="/argument-lab">Stress test an argument →</MagneticButton></div></section>
  </>);
}
