import PropTypes from "prop-types";
import { Timer } from "@/widgets/exam/Timer";
import { ProgressBlock } from "@/widgets/exam/ProgressBlock";
import { QuestionNavGrid } from "@/widgets/exam/QuestionNavGrid";
import { NavLegend } from "@/widgets/exam/NavLegend";

export function ExamSidebar({ examData, engine, onSubmitClick }) {
  const { questions, state, goto } = engine;
  const answeredCount = Object.values(state.revealed).filter(Boolean).length;

  return (
    <aside className="hidden md:flex w-64 min-w-[256px] bg-aws-bg2 border-r border-aws-border flex-col p-4 gap-4 sticky top-0 h-screen overflow-y-auto">
      <div className="font-mono text-[11px] text-aws-orange uppercase tracking-wide pb-3.5 border-b border-aws-border whitespace-nowrap overflow-hidden text-ellipsis">
        {examData.title}
      </div>

      <Timer secondsLeft={state.secondsLeft} />
      <ProgressBlock answeredCount={answeredCount} total={questions.length} />
      <QuestionNavGrid
        total={questions.length}
        currentQ={state.currentQ}
        results={state.results}
        flagged={state.flagged}
        onGoto={goto}
      />
      <NavLegend />

      <button
        onClick={onSubmitClick}
        className="mt-auto py-2.5 bg-transparent border border-aws-red/35 rounded-lg text-aws-red text-[13px] font-semibold transition-colors hover:bg-aws-red/10"
      >
        ⏎ Submit Exam
      </button>
    </aside>
  );
}

ExamSidebar.propTypes = {
  examData: PropTypes.object.isRequired,
  engine: PropTypes.object.isRequired,
  onSubmitClick: PropTypes.func.isRequired,
};

export default ExamSidebar;
