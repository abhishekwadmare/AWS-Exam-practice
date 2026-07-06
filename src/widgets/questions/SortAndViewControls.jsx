import PropTypes from "prop-types";
import { Bars3Icon, Squares2X2Icon } from "@heroicons/react/24/outline";

export function SortAndViewControls({ sort, setSort, view, setView, resultCount }) {
  return (
    <div className="flex items-center justify-between flex-wrap gap-2.5 mb-3.5">
      <div className="text-[13px] text-aws-muted">
        Showing <span className="text-aws-text font-semibold">{resultCount}</span> question
        {resultCount !== 1 ? "s" : ""}
      </div>
      <div className="flex items-center gap-2.5 flex-wrap">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-aws-bg3 border border-aws-border rounded-md text-aws-text text-xs py-1.5 px-3 outline-none cursor-pointer"
        >
          <option value="default">Sort: Default order</option>
          <option value="exam">Sort: By Exam</option>
          <option value="domain">Sort: By Domain</option>
          <option value="type">Sort: By Type</option>
        </select>
        <div className="flex gap-1">
          <button
            onClick={() => setView("list")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 border rounded-md text-xs transition-colors ${
              view === "list"
                ? "bg-aws-bg3 border-aws-border2 text-aws-text"
                : "border-aws-border text-aws-muted"
            }`}
          >
            <Bars3Icon className="w-3.5 h-3.5" /> List
          </button>
          <button
            onClick={() => setView("grid")}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 border rounded-md text-xs transition-colors ${
              view === "grid"
                ? "bg-aws-bg3 border-aws-border2 text-aws-text"
                : "border-aws-border text-aws-muted"
            }`}
          >
            <Squares2X2Icon className="w-3.5 h-3.5" /> Grid
          </button>
        </div>
      </div>
    </div>
  );
}

SortAndViewControls.propTypes = {
  sort: PropTypes.string.isRequired,
  setSort: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
  resultCount: PropTypes.number.isRequired,
};

export default SortAndViewControls;
