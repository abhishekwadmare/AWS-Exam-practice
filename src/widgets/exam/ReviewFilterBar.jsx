import PropTypes from "prop-types";

export function ReviewFilterBar({ filter, setFilter, counts }) {
  const filters = [
    { key: "all", label: `All (${counts.all})`, activeClass: "border-aws-orange-dim text-aws-orange" },
    {
      key: "incorrect",
      label: `✗ Incorrect (${counts.incorrect})`,
      activeClass: "border-aws-red/35 text-aws-red bg-aws-red/10",
    },
    {
      key: "skipped",
      label: `— Skipped (${counts.skipped})`,
      activeClass: "border-aws-yellow/30 text-aws-yellow bg-aws-yellow/[.06]",
    },
    {
      key: "correct",
      label: `✓ Correct (${counts.correct})`,
      activeClass: "border-aws-green/35 text-aws-green bg-aws-green/10",
    },
  ];

  return (
    <div className="flex gap-2 mb-4 flex-wrap">
      {filters.map(({ key, label, activeClass }) => (
        <button
          key={key}
          onClick={() => setFilter(key)}
          className={`py-1.5 px-4 rounded-full text-xs font-semibold border transition-colors ${
            filter === key ? activeClass : "border-aws-border text-aws-muted hover:border-aws-text hover:text-aws-text"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

ReviewFilterBar.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  counts: PropTypes.object.isRequired,
};

export default ReviewFilterBar;
