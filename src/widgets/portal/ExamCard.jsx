import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { DOMAIN_TAGS } from "@/data/examMeta";

export function ExamCard({ examNumber, title, description, questionCount, domainCount }) {
  return (
    <Link
      to={`/exam/${examNumber}`}
      className="group relative flex flex-col gap-3.5 bg-aws-bg2 border border-aws-border rounded-xl p-7 no-underline text-aws-text transition-all hover:-translate-y-0.5 hover:border-aws-orange-dim hover:shadow-2xl hover:shadow-black/30"
    >
      <span className="absolute top-0 left-0 right-0 h-0.5 bg-aws-orange scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100" />
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] text-aws-orange bg-aws-orange/10 border border-aws-orange-dim rounded-md px-2.5 py-0.5 tracking-wide">
          EXAM {String(examNumber).padStart(2, "0")}
        </span>
        <span className="w-7 h-7 border border-aws-border rounded-md flex items-center justify-center text-aws-muted transition-all group-hover:border-aws-orange group-hover:text-aws-orange group-hover:bg-aws-orange/10">
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </span>
      </div>
      <div className="text-base font-semibold leading-tight">{title}</div>
      <div className="text-[13px] text-aws-muted leading-relaxed">{description}</div>
      <div className="flex gap-4 pt-3.5 border-t border-aws-border">
        <div className="flex flex-col gap-0.5">
          <div className="font-mono text-[15px] font-semibold">{questionCount}</div>
          <div className="text-[10px] text-aws-muted uppercase tracking-wider">Questions</div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="font-mono text-[15px] font-semibold">90m</div>
          <div className="text-[10px] text-aws-muted uppercase tracking-wider">Duration</div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="font-mono text-[15px] font-semibold">{domainCount}</div>
          <div className="text-[10px] text-aws-muted uppercase tracking-wider">Domains</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {DOMAIN_TAGS.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2.5 py-0.5 rounded-full border border-aws-border text-aws-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

ExamCard.propTypes = {
  examNumber: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  questionCount: PropTypes.number.isRequired,
  domainCount: PropTypes.number.isRequired,
};

export default ExamCard;
