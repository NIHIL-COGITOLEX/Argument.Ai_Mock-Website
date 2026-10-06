export default function AuthorityGap({ gaps }: { gaps: { t: string; d: string }[] }) {
  return <div>{gaps.map((g) => <div key={g.t} className="border-l-2 border-blue py-2 pl-5 [&:not(:last-child)]:mb-6"><p className="font-serif text-2xl">{g.t}</p><p className="text-mute">{g.d}</p></div>)}</div>;
}
