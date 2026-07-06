import PropTypes from "prop-types";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

export function OptionRow({ option, idx, multi, selected, revealed, isCorrect, onSelect }) {
  let borderBg = "border-aws-border bg-aws-bg2";
  if (revealed) {
    if (isCorrect && selected) borderBg = "border-aws-green/35 bg-aws-green/10";
    else if (isCorrect && !selected) borderBg = "border-aws-yellow/30 bg-aws-yellow/[.04]";
    else if (!isCorrect && selected) borderBg = "border-aws-red/35 bg-aws-red/10";
  } else if (selected) {
    borderBg = "border-aws-orange bg-aws-orange/10";
  }

  const markerShape = multi ? "rounded-[5px]" : "rounded-full";
  let markerBorder = "border-aws-border2";
  if (revealed) {
    if (isCorrect) markerBorder = "border-aws-green";
    else if (selected) markerBorder = "border-aws-red";
    if (isCorrect && !selected) markerBorder = "border-aws-yellow";
  } else if (selected) {
    markerBorder = "border-aws-orange";
  }

  return (
    <div
      role={multi ? "checkbox" : "radio"}
      aria-checked={selected}
      onClick={() => !revealed && onSelect(idx)}
      className={`flex items-start gap-3.5 py-4 px-[18px] border-[1.5px] rounded-lg leading-normal select-none ${borderBg} ${
        revealed ? "cursor-default pointer-events-none" : "cursor-pointer hover:border-aws-orange hover:bg-aws-orange/10"
      }`}
    >
      <div
        className={`w-5 h-5 min-w-[20px] border-2 ${markerBorder} ${markerShape} flex items-center justify-center mt-0.5 flex-shrink-0`}
      >
        {revealed ? (
          <>
            {isCorrect && selected && <CheckIcon className="w-3 h-3 text-aws-green" />}
            {!isCorrect && selected && <XMarkIcon className="w-3 h-3 text-aws-red" />}
            {isCorrect && !selected && <span className="w-2.5 h-2.5 rounded-full border border-aws-yellow" />}
          </>
        ) : (
          selected && (
            <div
              className={`bg-aws-orange ${multi ? "w-2.5 h-2.5 rounded-sm" : "w-2.5 h-2.5 rounded-full"}`}
            />
          )
        )}
      </div>
      <span>{option.text}</span>
    </div>
  );
}

OptionRow.propTypes = {
  option: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
  multi: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  revealed: PropTypes.bool.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default OptionRow;
