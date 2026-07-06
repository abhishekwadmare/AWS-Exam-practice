import PropTypes from "prop-types";

export function ProgressBlock({ answeredCount, total }) {
  const pct = (answeredCount / total) * 100;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-xs text-aws-muted">
        <span>Answered</span>
        <span>
          {answeredCount} / {total}
        </span>
      </div>
      <div className="h-1 bg-aws-border rounded-full overflow-hidden">
        <div
          className="h-full bg-aws-orange rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

ProgressBlock.propTypes = {
  answeredCount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ProgressBlock;
