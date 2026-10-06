import ArgumentForm from "@/components/ArgumentForm";
import TextReveal from "@/components/TextReveal";
export default function Page() {
  return (<section className="px-[5vw] pb-32 pt-40"><p className="mono">Argument Lab</p>
    <TextReveal as="h1" className="h2 mb-12 mt-4 max-w-3xl" text="Build the argument. Then let it be attacked." /><ArgumentForm mode="lab" /></section>);
}
