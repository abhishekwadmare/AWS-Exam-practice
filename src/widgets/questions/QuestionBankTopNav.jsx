import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export function QuestionBankTopNav({ total }) {
  return (
    <nav className="flex items-center justify-between gap-4 -mx-4 px-4 py-3 mb-4 border-b border-aws-border">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-aws-muted text-[13px] no-underline hover:text-aws-orange transition-colors"
        >
          <ArrowLeftIcon className="w-3.5 h-3.5" /> Portal Home
        </Link>
        <span className="w-px h-4 bg-aws-border" />
        <span className="text-aws-text text-sm font-medium">Question Bank</span>
      </div>
      <span className="font-mono text-[11px] text-aws-muted border border-aws-border rounded-full px-3 py-1">
        {total} Questions
      </span>
    </nav>
  );
}

QuestionBankTopNav.propTypes = {
  total: PropTypes.number.isRequired,
};

export default QuestionBankTopNav;
