import PropTypes from "prop-types";

function stateClasses(i, currentQ, results, flagged) {
  if (i === currentQ) return "border-aws-orange bg-aws-orange/10 text-aws-orange";
  if (results[i] === "correct") return "border-aws-green/35 bg-aws-green/10 text-aws-green";
  if (results[i] === "incorrect") return "border-aws-red/35 bg-aws-red/10 text-aws-red";
  if (results[i] === "skipped") return "border-aws-yellow/30 bg-aws-yellow/[.06] text-aws-yellow";
  if (flagged.has(i)) return "border-aws-yellow/40 bg-aws-yellow/[.08] text-aws-yellow";
  return "border-aws-border bg-aws-bg3 text-aws-muted";
}

export function QuestionNavGrid({ total, currentQ, results, flagged, onGoto }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wide text-aws-muted mb-2">Navigator</div>
      <div className="grid grid-cols-5 gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => onGoto(i)}
            className={`aspect-square border rounded-md font-mono text-[11px] flex items-center justify-center transition-colors hover:border-aws-orange hover:text-aws-orange ${stateClasses(
              i,
              currentQ,
              results,
              flagged
            )}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

QuestionNavGrid.propTypes = {
  total: PropTypes.number.isRequired,
  currentQ: PropTypes.number.isRequired,
  results: PropTypes.object.isRequired,
  flagged: PropTypes.instanceOf(Set).isRequired,
  onGoto: PropTypes.func.isRequired,
};

export default QuestionNavGrid;
