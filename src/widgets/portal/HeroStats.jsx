const STATS = [
  { val: "6", lbl: "Exams" },
  { val: "390", lbl: "Questions" },
  { val: "90m", lbl: "Per Exam" },
  { val: "70%", lbl: "Pass Mark" },
];

export function HeroStats() {
  return (
    <div className="inline-flex border border-aws-border rounded-xl overflow-hidden">
      {STATS.map(({ val, lbl }, i) => (
        <div
          key={lbl}
          className={`px-7 py-3.5 text-center ${
            i < STATS.length - 1 ? "border-r border-aws-border" : ""
          }`}
        >
          <div className="font-mono text-xl font-semibold text-aws-orange">
            {val}
          </div>
          <div className="text-[11px] text-aws-muted uppercase tracking-wider mt-1">
            {lbl}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;
