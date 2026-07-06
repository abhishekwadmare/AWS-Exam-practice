import PropTypes from "prop-types";
import { OptionRow } from "@/widgets/exam/OptionRow";

export function OptionList({ question, multi, selected, revealed, onSelect }) {
  return (
    <div className="flex flex-col gap-2.5">
      {question.options.map((opt, idx) => (
        <OptionRow
          key={idx}
          option={opt}
          idx={idx}
          multi={multi}
          selected={selected.has(idx)}
          revealed={revealed}
          isCorrect={opt.correct}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

OptionList.propTypes = {
  question: PropTypes.object.isRequired,
  multi: PropTypes.bool.isRequired,
  selected: PropTypes.instanceOf(Set).isRequired,
  revealed: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default OptionList;
