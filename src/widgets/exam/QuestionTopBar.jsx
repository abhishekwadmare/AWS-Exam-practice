import PropTypes from "prop-types";
import { FlagIcon } from "@heroicons/react/24/solid";

export function QuestionTopBar({ current, total, domain, flagged, onToggleFlag }) {
  return (
    <div className="bg-aws-bg2 border-b border-aws-border px-8 py-3 flex items-center justify-between sticky top-0 z-10">
      <div className="font-mono text-[13px] text-aws-muted">
        Question <span className="text-aws-text font-semibold">{current}</span> of{" "}
        <span className="text-aws-text font-semibold">{total}</span>
      </div>
      <div className="font-mono text-[11px] px-3 py-1 rounded-full bg-aws-orange/10 border border-aws-orange-dim text-aws-orange">
        {domain}
      </div>
      <button
        onClick={onToggleFlag}
        className={`flex items-center gap-1.5 border rounded-lg text-xs px-3.5 py-1.5 transition-colors ${
          flagged
            ? "border-aws-yellow text-aws-yellow bg-aws-yellow/[.06]"
            : "border-aws-border text-aws-muted hover:border-aws-yellow hover:text-aws-yellow"
        }`}
      >
        <FlagIcon className="w-3.5 h-3.5" /> {flagged ? "Flagged" : "Flag"}
      </button>
    </div>
  );
}

QuestionTopBar.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  domain: PropTypes.string.isRequired,
  flagged: PropTypes.bool.isRequired,
  onToggleFlag: PropTypes.func.isRequired,
};

export default QuestionTopBar;
