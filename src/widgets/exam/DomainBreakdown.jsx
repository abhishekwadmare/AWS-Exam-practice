import PropTypes from "prop-types";
import { getDomainColor } from "@/data/domainColors";

export function DomainBreakdown({ domainStats }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-aws-muted mb-3.5 pb-2.5 border-b border-aws-border">
        Performance by Domain
      </div>
      {Object.entries(domainStats).map(([name, stat]) => {
        const dpct = Math.round((stat.correct / stat.total) * 100);
        const color = getDomainColor(name);
        return (
          <div key={name} className="bg-aws-bg2 border border-aws-border rounded-lg py-[18px] px-5 mb-2.5">
            <div className="flex items-center justify-between mb-2.5">
              <div className="font-semibold text-sm">{name}</div>
              <div className="font-mono text-[13px] text-aws-muted">
                {stat.correct} / {stat.total} · {dpct}%
              </div>
            </div>
            <div className="h-1.5 bg-aws-border rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${dpct}%`, background: color }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

DomainBreakdown.propTypes = {
  domainStats: PropTypes.object.isRequired,
};

export default DomainBreakdown;
