import { useParams, Link } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { EXAMS } from "@/data/examRegistry";
import { useExamEngine, isMulti, computeExamResults } from "@/hooks/useExamEngine";
import { WelcomeCard } from "@/widgets/exam/WelcomeCard";
import { ExamSidebar } from "@/widgets/exam/ExamSidebar";
import { QuestionTopBar } from "@/widgets/exam/QuestionTopBar";
import { OptionList } from "@/widgets/exam/OptionList";
import { ExplanationBox } from "@/widgets/exam/ExplanationBox";
import { ExamBottomNav } from "@/widgets/exam/ExamBottomNav";
import { ScoreRing } from "@/widgets/exam/ScoreRing";
import { ResultsSummaryStats } from "@/widgets/exam/ResultsSummaryStats";
import { DomainBreakdown } from "@/widgets/exam/DomainBreakdown";
import { ReviewFilterBar } from "@/widgets/exam/ReviewFilterBar";
import { ReviewCard } from "@/widgets/exam/ReviewCard";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <p className="font-mono text-aws-red text-base mb-3">Exam not found.</p>
        <Link to="/" className="text-aws-orange no-underline">
          ← Back to Portal
        </Link>
      </div>
    </div>
  );
}

function ExamScreen({ examData, engine }) {
  const { questions, state, selectOption, revealAnswer, toggleFlag, navigate, submit } = engine;
  const question = questions[state.currentQ];
  const multi = isMulti(question);
  const sel = state.answers[state.currentQ] || new Set();
  const revealed = state.revealed[state.currentQ] || false;
  const isLast = state.currentQ === questions.length - 1;
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [state.currentQ]);

  const handleSubmitClick = useCallback(() => {
    const unanswered = questions.filter((_, i) => !state.revealed[i]).length;
    const msg =
      unanswered > 0
        ? `You have ${unanswered} unanswered question(s). Submit anyway?`
        : "Submit your exam?";
    if (window.confirm(msg)) submit();
  }, [questions, state.revealed, submit]);

  const handleNext = useCallback(() => {
    if (isLast) {
      handleSubmitClick();
    } else {
      navigate(1);
    }
  }, [isLast, handleSubmitClick, navigate]);

  return (
    <div className="flex items-stretch min-h-screen">
      <ExamSidebar examData={examData} engine={engine} onSubmitClick={handleSubmitClick} />

      <div ref={scrollRef} className="flex-1 flex flex-col overflow-y-auto">
        <QuestionTopBar
          current={state.currentQ + 1}
          total={questions.length}
          domain={question.domain}
          flagged={state.flagged.has(state.currentQ)}
          onToggleFlag={toggleFlag}
        />

        <div className="flex-1 py-9 px-12 max-w-[820px] w-full mx-auto">
          {multi && (
            <div className="inline-flex items-center gap-1.5 text-xs text-aws-blue bg-aws-blue/10 border border-aws-blue/20 rounded-md py-1.5 px-3 mb-5 font-mono">
              ✎ Multiple answers required — select all that apply
            </div>
          )}
          <div className="text-[17px] font-medium leading-relaxed mb-7">{question.questionText}</div>

          <OptionList
            question={question}
            multi={multi}
            selected={sel}
            revealed={revealed}
            onSelect={selectOption}
          />

          {multi && !revealed && (
            <div className="mt-5">
              <button
                onClick={revealAnswer}
                disabled={sel.size === 0}
                className="py-2.5 px-6 bg-aws-orange text-black font-bold text-sm rounded-lg transition-colors hover:enabled:bg-[#ffad26] disabled:opacity-35 disabled:cursor-not-allowed"
              >
                Check Answer
              </button>
            </div>
          )}

          {revealed && (
            <ExplanationBox result={state.results[state.currentQ]} explanation={question.explanation} />
          )}
        </div>

        <ExamBottomNav
          isFirst={state.currentQ === 0}
          isLast={isLast}
          onPrev={() => navigate(-1)}
          onNext={handleNext}
        />
      </div>
    </div>
  );
}

function ResultsScreen({ examData, engine }) {
  const { questions, state, startExam } = engine;
  const [filter, setFilter] = useState("all");
  const results = computeExamResults(questions, state.results);

  const counts = { all: questions.length, correct: 0, incorrect: 0, skipped: 0 };
  questions.forEach((_, i) => {
    if (state.results[i]) counts[state.results[i]]++;
  });

  const visibleIndices = questions
    .map((_, i) => i)
    .filter((i) => filter === "all" || state.results[i] === filter);

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(255,153,0,0.05)_0%,transparent_60%),#0b0e14]">
      <div className="max-w-[780px] w-full">
        <div className="text-center mb-9">
          <ScoreRing pct={results.pct} passed={results.passed} />
          <div className="text-2xl font-bold mb-1.5">
            {results.passed ? "🎉 Excellent work!" : "Keep Practising!"}
          </div>
          <div className="text-aws-muted text-sm">
            You answered {results.correct} of {results.total} questions correctly.
          </div>
          <div
            className={`inline-block py-1.5 px-5 rounded-full text-[13px] font-semibold mt-3.5 border ${
              results.passed
                ? "bg-aws-green/10 border-aws-green/35 text-aws-green"
                : "bg-aws-red/10 border-aws-red/35 text-aws-red"
            }`}
          >
            {results.passed ? "✓ PASSED" : "✗ NOT PASSED"}
          </div>
        </div>

        <ResultsSummaryStats
          total={results.total}
          correct={results.correct}
          wrong={results.wrong}
          skipped={results.skipped}
        />

        <DomainBreakdown domainStats={results.domainStats} />

        <div className="mt-8">
          <div className="text-xs font-semibold uppercase tracking-wide text-aws-muted mb-3.5 pb-2.5 border-b border-aws-border">
            Full Question Review
          </div>

          <div className="flex gap-4 flex-wrap mb-3.5 py-2.5 px-3.5 bg-aws-bg3 border border-aws-border rounded-lg text-[11px] text-aws-muted">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-[3px] bg-aws-green/10 border border-aws-green/35 inline-block" />
              Correct answer you selected
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-[3px] bg-aws-red/10 border border-aws-red/35 inline-block" />
              Wrong answer you selected
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-[3px] bg-aws-yellow/[.08] border border-aws-yellow/30 inline-block" />
              Correct answer you missed
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-[3px] bg-aws-bg3 border border-aws-border inline-block" />
              Neutral (not selected, not correct)
            </div>
          </div>

          <ReviewFilterBar filter={filter} setFilter={setFilter} counts={counts} />

          <div className="flex flex-col gap-2.5">
            {visibleIndices.map((i) => (
              <ReviewCard
                key={i}
                index={i}
                question={questions[i]}
                result={state.results[i] || "skipped"}
                selected={state.answers[i] || new Set()}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-3.5 justify-center mt-10 flex-wrap">
          <Link
            to="/"
            className="py-3.5 px-7 bg-transparent border border-aws-border text-aws-text text-sm font-semibold rounded-lg no-underline inline-flex items-center gap-1.5 transition-colors hover:border-aws-orange hover:text-aws-orange"
          >
            ← All Exams
          </Link>
          <button
            onClick={startExam}
            className="py-3.5 px-9 bg-aws-orange text-black font-bold text-[15px] rounded-lg transition-colors hover:bg-[#ffad26]"
          >
            ↺ Retake This Exam
          </button>
        </div>
      </div>
    </div>
  );
}

export function ExamTake() {
  const { examId } = useParams();
  const examData = EXAMS[Number(examId)];

  if (!examData) return <NotFound />;

  return <ExamTakeInner examData={examData} />;
}

function ExamTakeInner({ examData }) {
  const engine = useExamEngine(examData);

  if (engine.state.status === "welcome") {
    return <WelcomeCard examData={examData} onBegin={engine.startExam} />;
  }
  if (engine.state.status === "submitted") {
    return <ResultsScreen examData={examData} engine={engine} />;
  }
  return <ExamScreen examData={examData} engine={engine} />;
}

export default ExamTake;
