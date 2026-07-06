import PropTypes from "prop-types";

export function Timer({ secondsLeft }) {
  const m = Math.floor(secondsLeft / 60);
  const s = secondsLeft % 60;
  const display = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

  const danger = secondsLeft <= 120;
  const warning = !danger && secondsLeft <= 600;

  return (
    <div className="bg-aws-bg3 border border-aws-border rounded-lg p-3.5 text-center">
      <div className="text-[10px] uppercase tracking-wider text-aws-muted mb-1.5">
        Time Remaining
      </div>
      <div
        className={`font-mono text-[28px] font-semibold tracking-wide transition-colors ${
          danger
            ? "text-aws-red animate-timer-pulse"
            : warning
            ? "text-aws-yellow"
            : "text-aws-orange"
        }`}
      >
        {display}
      </div>
    </div>
  );
}

Timer.propTypes = {
  secondsLeft: PropTypes.number.isRequired,
};

export default Timer;
