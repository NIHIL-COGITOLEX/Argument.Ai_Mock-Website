export default function JudgeQuestions({ qs }: { qs: string[] }) {
  return <ul className="grid gap-4 md:grid-cols-2">{qs.map((q) => <li key={q} className="border border-ink/15 p-6 font-serif text-2xl transition hover:border-blue">“{q}”</li>)}</ul>;
}
