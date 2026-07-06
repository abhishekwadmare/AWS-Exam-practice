import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CloudIcon, PlayIcon } from "@heroicons/react/24/solid";

export function WelcomeCard({ examData, onBegin }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(255,153,0,0.07)_0%,transparent_70%),#0b0e14] px-4">
      <div className="max-w-[560px] w-[94%] bg-aws-bg2 border border-aws-border rounded-2xl p-11 text-center shadow-[0_0_60px_rgba(0,0,0,0.4)]">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-aws-muted no-underline mb-5 hover:text-aws-text"
        >
          ← Back to Portal
        </Link>
        <div className="inline-flex items-center gap-2 bg-aws-orange/10 border border-aws-orange-dim rounded-full px-4 py-1 font-mono text-[11px] text-aws-orange uppercase tracking-wider mb-6">
          <CloudIcon className="w-3.5 h-3.5" /> EXAM {String(examData.examNumber).padStart(2, "0")}
        </div>
        <h1 className="text-2xl font-bold mb-2">
          {examData.title}
          <br />
          <span className="text-aws-orange">AWS Cloud Practitioner</span>
        </h1>
        <p className="text-aws-muted text-sm leading-relaxed mb-8">{examData.description}</p>
        <div className="grid grid-cols-3 gap-3 mb-9">
          <div className="bg-aws-bg3 border border-aws-border rounded-lg p-3.5">
            <div className="text-[10px] uppercase tracking-wide text-aws-muted mb-1.5">
              Questions
            </div>
            <div className="text-xl font-bold font-mono text-aws-orange">
              {examData.questions.length}
            </div>
          </div>
          <div className="bg-aws-bg3 border border-aws-border rounded-lg p-3.5">
            <div className="text-[10px] uppercase tracking-wide text-aws-muted mb-1.5">
              Duration
            </div>
            <div className="text-xl font-bold font-mono text-aws-orange">90m</div>
          </div>
          <div className="bg-aws-bg3 border border-aws-border rounded-lg p-3.5">
            <div className="text-[10px] uppercase tracking-wide text-aws-muted mb-1.5">
              Pass Mark
            </div>
            <div className="text-xl font-bold font-mono text-aws-orange">70%</div>
          </div>
        </div>
        <button
          onClick={onBegin}
          className="w-full py-3.5 bg-aws-orange text-black font-bold text-[15px] rounded-lg transition-colors hover:bg-[#ffad26] flex items-center justify-center gap-2"
        >
          <PlayIcon className="w-4 h-4" /> Begin Exam
        </button>
      </div>
    </div>
  );
}

WelcomeCard.propTypes = {
  examData: PropTypes.object.isRequired,
  onBegin: PropTypes.func.isRequired,
};

export default WelcomeCard;
