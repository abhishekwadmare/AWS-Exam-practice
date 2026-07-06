import PropTypes from "prop-types";

export function StatsBar({ counts, domainCount }) {
  const tiles = [
    { val: counts.total, lbl: "Total Questions", color: "text-aws-orange" },
    { val: counts.single, lbl: "Single Answer", color: "text-aws-blue" },
    { val: counts.multiple, lbl: "Multiple Answer", color: "text-aws-yellow" },
    { val: domainCount, lbl: "Domains", color: "text-aws-teal" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-5">
      {tiles.map(({ val, lbl, color }) => (
        <div key={lbl} className="bg-aws-bg2 border border-aws-border rounded-lg py-3.5 px-4 text-center">
          <div className={`font-mono text-xl font-semibold mb-0.5 ${color}`}>{val}</div>
          <div className="text-[11px] uppercase tracking-wide text-aws-muted">{lbl}</div>
        </div>
      ))}
    </div>
  );
}

StatsBar.propTypes = {
  counts: PropTypes.object.isRequired,
  domainCount: PropTypes.number.isRequired,
};

export default StatsBar;
