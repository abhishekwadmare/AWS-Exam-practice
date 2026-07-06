import PropTypes from "prop-types";

export function ResultsSummaryStats({ total, correct, wrong, skipped }) {
  const tiles = [
    { val: total, lbl: "Total", color: "text-aws-orange" },
    { val: correct, lbl: "Correct", color: "text-aws-green" },
    { val: wrong, lbl: "Incorrect", color: "text-aws-red" },
    { val: skipped, lbl: "Skipped", color: "text-aws-yellow" },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {tiles.map(({ val, lbl, color }) => (
        <div key={lbl} className="bg-aws-bg2 border border-aws-border rounded-lg py-[18px] px-4 text-center">
          <div className={`text-2xl font-bold font-mono mb-1 ${color}`}>{val}</div>
          <div className="text-xs text-aws-muted">{lbl}</div>
        </div>
      ))}
    </div>
  );
}

ResultsSummaryStats.propTypes = {
  total: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  wrong: PropTypes.number.isRequired,
  skipped: PropTypes.number.isRequired,
};

export default ResultsSummaryStats;
