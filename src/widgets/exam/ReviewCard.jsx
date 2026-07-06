import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import { isMulti } from "@/hooks/useExamEngine";

const BORDER_BY_RESULT = {
  correct: "border-l-aws-green",
  incorrect: "border-l-aws-red",
  skipped: "border-l-aws-yellow",
};

const PILL_BY_RESULT = {
  correct: { label: "✓ Correct", cls: "bg-aws-green/10 border-aws-green/35 text-aws-green" },
  incorrect: { label: "✗ Incorrect", cls: "bg-aws-red/10 border-aws-red/35 text-aws-red" },
  skipped: { label: "— Skipped", cls: "bg-aws-yellow/[.08] border-aws-yellow/30 text-aws-yellow" },
};

export function ReviewCard({ index, question, result, selected }) {
  const [open, setOpen] = useState(false);
  const pill = PILL_BY_RESULT[result];
  const multi = isMulti(question);

  return (
    <div
      className={`bg-aws-bg2 border border-aws-border rounded-lg overflow-hidden transition-colors border-l-[3px] ${BORDER_BY_RESULT[result]}`}
    >
      <div
        className="flex items-start gap-3.5 py-4 px-[18px] cursor-pointer select-none hover:bg-white/[.02]"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="font-mono text-xs text-aws-muted min-w-[28px] pt-px flex-shrink-0">{index + 1}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 mb-2 flex-wrap">
            <span className="text-[10px] font-mono text-aws-muted bg-aws-bg3 border border-aws-border rounded-full px-2.5 py-0.5 tracking-wide">
              {question.domain}
            </span>
            {multi && (
              <span className="text-[10px] font-mono text-aws-blue">MULTI-SELECT</span>
            )}
            <span className={`inline-flex items-center gap-1 text-[11px] py-0.5 px-2.5 rounded-full font-semibold border ${pill.cls}`}>
              {pill.label}
            </span>
          </div>
          <div className="text-sm font-medium leading-relaxed text-aws-text">{question.questionText}</div>
        </div>
        <ChevronDownIcon
          className={`w-3.5 h-3.5 text-aws-muted flex-shrink-0 mt-1 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {open && (
        <div className="pb-[18px] pl-[60px] pr-[18px]">
          <div className="flex flex-col gap-2 mb-4">
            {question.options.map((opt, idx) => {
              const isCorrect = opt.correct;
              const isSelected = selected.has(idx);
              let cls = "border-aws-border bg-aws-bg3";
              let icon = "·";
              let tag = null;
              if (isCorrect && isSelected) {
                cls = "border-aws-green/35 bg-aws-green/10 text-aws-green";
                icon = "✓";
                tag = "Your answer · Correct";
              } else if (!isCorrect && isSelected) {
                cls = "border-aws-red/35 bg-aws-red/10 text-aws-red";
                icon = "✗";
                tag = "Your answer · Wrong";
              } else if (isCorrect && !isSelected) {
                cls = "border-aws-yellow/30 bg-aws-yellow/[.04] text-aws-yellow";
                icon = "○";
                tag = "Correct answer";
              }
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-3 py-2.5 px-3.5 rounded-lg border-[1.5px] text-[13px] leading-relaxed ${cls}`}
                >
                  <span className="flex-shrink-0 mt-px w-[18px] text-center">{icon}</span>
                  <span className="flex-1">{opt.text}</span>
                  {tag && (
                    <span className="text-[10px] font-mono rounded px-2 py-0.5 flex-shrink-0 self-start mt-0.5 bg-black/10">
                      {tag}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="bg-aws-bg border border-aws-border rounded-lg py-3.5 px-4">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-aws-muted font-mono mb-2">
              <LightBulbIcon className="w-3 h-3" /> Explanation
            </div>
            <div className="text-[13px] text-aws-muted leading-relaxed">{question.explanation}</div>
          </div>
        </div>
      )}
    </div>
  );
}

ReviewCard.propTypes = {
  index: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  result: PropTypes.oneOf(["correct", "incorrect", "skipped"]).isRequired,
  selected: PropTypes.instanceOf(Set).isRequired,
};

export default ReviewCard;
