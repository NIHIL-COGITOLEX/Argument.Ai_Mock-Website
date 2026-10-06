import Link from "next/link";
import { nav } from "@/lib/mock-data";
export default function Footer() {
  return (<footer className="border-t border-ink/15 px-[5vw] pb-10 pt-20"><p className="display">Argument<span className="text-blue">.Ai</span></p>
    <div className="mt-12 flex flex-wrap justify-between gap-8"><p className="mono max-w-md">Fictional product concept. AI analysis is a research and reasoning aid and does not replace professional legal judgment.</p>
      <div className="flex flex-wrap gap-6 text-sm">{nav.map(([h, t]) => <Link key={h} href={h} className="hover:text-blue">{t}</Link>)}</div></div></footer>);
}
