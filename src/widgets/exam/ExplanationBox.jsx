import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { LightBulbIcon } from "@heroicons/react/24/solid";

export function ExplanationBox({ result, explanation }) {
  const ref = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
    return () => clearTimeout(id);
  }, []);

  const isCorrect = result === "correct";
  const isSkipped = result === "skipped";
  const headerText = isCorrect ? "Correct!" : isSkipped ? "Skipped" : "Incorrect";
  const headerColor = isCorrect ? "text-aws-green" : "text-aws-red";
  const borderColor = isCorrect ? "border-aws-green/35" : "border-aws-red/35";
  const headerBg = isCorrect ? "bg-aws-green/10" : "bg-aws-red/10";

  return (
    <div ref={ref} className={`mt-6 rounded-lg overflow-hidden border ${borderColor} animate-slide-in`}>
      <div className={`flex items-center gap-2.5 px-[18px] py-3 font-semibold text-[13px] ${headerBg} ${headerColor}`}>
        {isCorrect ? "✓" : isSkipped ? "—" : "✗"} {headerText}
      </div>
      <div className="bg-aws-bg3 py-4 px-[18px]">
        <p className="text-[13.5px] text-aws-muted leading-relaxed flex gap-2">
          <LightBulbIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
          {explanation}
        </p>
      </div>
    </div>
  );
}

ExplanationBox.propTypes = {
  result: PropTypes.oneOf(["correct", "incorrect", "skipped"]).isRequired,
  explanation: PropTypes.string.isRequired,
};

export default ExplanationBox;
