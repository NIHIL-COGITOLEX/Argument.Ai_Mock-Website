import TextReveal from "@/components/TextReveal";
import HorizontalStages from "@/components/HorizontalStages";
import MagneticButton from "@/components/MagneticButton";
export default function Page() {
  return (<>
    <section className="px-[5vw] pb-20 pt-40"><p className="mono">How it works</p><TextReveal as="h1" className="display mt-4" text="Eight stages. No flattery." />
      <p className="mt-8 max-w-lg text-lg">Every argument moves through the same adversarial pipeline. The system is built to disagree with you, then show you how to answer.</p></section>
    <HorizontalStages />
    <section className="px-[5vw] py-32"><MagneticButton href="/argument-lab">Run a stress test →</MagneticButton></section>
  </>);
}
