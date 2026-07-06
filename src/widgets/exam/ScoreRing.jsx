import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";

const RADIUS = 58;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScoreRing({ pct, passed }) {
  const [ready, setReady] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const offset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;
  const color = passed ? "#22c55e" : "#ef4444";

  return (
    <div className="flex justify-center mb-6">
      <div className="relative w-[140px] h-[140px]">
        <svg width="140" height="140" viewBox="0 0 140 140" className="-rotate-90">
          <circle cx="70" cy="70" r={RADIUS} fill="none" stroke="#232b3e" strokeWidth="12" />
          <circle
            cx="70"
            cy="70"
            r={RADIUS}
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={ready ? offset : CIRCUMFERENCE}
            style={{ transition: ready ? "stroke-dashoffset 1.3s ease" : "none" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-[28px] font-bold font-mono" style={{ color }}>
            {pct}%
          </div>
          <div className="text-[11px] text-aws-muted mt-0.5">Score</div>
        </div>
      </div>
    </div>
  );
}

ScoreRing.propTypes = {
  pct: PropTypes.number.isRequired,
  passed: PropTypes.bool.isRequired,
};

export default ScoreRing;
