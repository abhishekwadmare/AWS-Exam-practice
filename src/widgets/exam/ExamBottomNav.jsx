import PropTypes from "prop-types";

export function ExamBottomNav({ isFirst, isLast, onPrev, onNext }) {
  return (
    <div className="px-8 py-[18px] flex items-center justify-between border-t border-aws-border bg-aws-bg2 w-full max-w-[820px] mx-auto sticky bottom-0">
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="py-2.5 px-[22px] rounded-lg text-sm font-semibold border border-aws-border text-aws-muted transition-colors hover:enabled:border-aws-text hover:enabled:text-aws-text disabled:opacity-30 disabled:cursor-not-allowed"
      >
        ← Prev
      </button>
      <button
        onClick={onNext}
        className={`py-2.5 px-[22px] rounded-lg text-sm font-semibold transition-colors ${
          isLast
            ? "bg-transparent border border-aws-red/35 text-aws-red hover:bg-aws-red/10"
            : "bg-aws-orange text-black hover:bg-[#ffad26]"
        }`}
      >
        {isLast ? "Submit Exam" : "Next →"}
      </button>
    </div>
  );
}

ExamBottomNav.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default ExamBottomNav;
