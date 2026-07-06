import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon, LightBulbIcon, CheckIcon } from "@heroicons/react/24/solid";
import { getDomainColor } from "@/data/domainColors";

export function QuestionCard({ question, gridView }) {
  const [open, setOpen] = useState(false);
  const domainColor = getDomainColor(question.domain);

  return (
    <div
      className="bg-aws-bg2 border border-aws-border rounded-lg overflow-hidden transition-colors hover:border-aws-border2"
      style={{ borderLeft: `3px solid ${domainColor}80` }}
    >
      <div
        className="flex items-start gap-3.5 p-4 cursor-pointer select-none hover:bg-white/[.015]"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="font-mono text-[11px] text-aws-muted bg-aws-bg3 border border-aws-border rounded-md px-2 py-0.5 flex-shrink-0 whitespace-nowrap">
          E{question.examNumber} · Q{question.questionNumber}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-2 flex-wrap">
            <span
              className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border"
              style={{
                color: domainColor,
                borderColor: `${domainColor}4d`,
                background: `${domainColor}0f`,
              }}
            >
              {question.domain}
            </span>
            {question.qType === "multiple" ? (
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border text-aws-yellow border-aws-yellow/30 bg-aws-yellow/10">
                MULTI-SELECT
              </span>
            ) : (
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border text-aws-blue border-aws-blue/30 bg-aws-blue/10">
                SINGLE
              </span>
            )}
          </div>
          <div
            className={`text-sm font-medium leading-relaxed ${
              gridView && !open ? "line-clamp-3" : ""
            }`}
          >
            {question.questionText}
          </div>
        </div>
        <ChevronDownIcon
          className={`w-3.5 h-3.5 text-aws-muted flex-shrink-0 mt-0.5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && (
        <div className="px-4 pb-4">
          <div className="flex flex-col gap-1.5 mb-3.5">
            {question.options.map((opt, idx) => {
              const letter = String.fromCharCode(65 + idx);
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 py-2.5 px-3 rounded-lg border text-[13px] leading-relaxed ${
                    opt.correct
                      ? "border-aws-green/30 bg-aws-green/10"
                      : "border-aws-border bg-aws-bg3"
                  }`}
                >
                  <span className="text-[13px] flex-shrink-0 w-[18px] text-center mt-px">
                    {opt.correct ? (
                      <CheckIcon className="w-3.5 h-3.5 text-aws-green" />
                    ) : (
                      <span className="text-aws-muted">{letter}</span>
                    )}
                  </span>
                  <span className={opt.correct ? "text-aws-green font-medium" : "text-aws-muted"}>
                    {opt.text}
                  </span>
                  {opt.correct && (
                    <span className="text-[10px] font-mono text-aws-green bg-aws-green/10 border border-aws-green/25 rounded px-1.5 py-0.5 whitespace-nowrap self-start mt-0.5 flex-shrink-0 ml-auto">
                      Correct
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="bg-aws-bg border border-aws-border rounded-lg py-3.5 px-4">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-aws-muted font-mono mb-1.5">
              <LightBulbIcon className="w-3 h-3" /> Explanation
            </div>
            <div className="text-[13px] text-aws-muted leading-relaxed">
              {question.explanation}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
  gridView: PropTypes.bool,
};

export default QuestionCard;
