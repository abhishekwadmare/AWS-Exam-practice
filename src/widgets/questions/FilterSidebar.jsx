import PropTypes from "prop-types";
import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { getDomainColor } from "@/data/domainColors";

function Chip({ active, onClick, label, count, dotColor, activeColor }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between px-3 py-2 rounded-lg border text-xs text-left w-full transition-colors"
      style={
        active
          ? {
              borderColor: activeColor ? `${activeColor}66` : "#2e3a52",
              color: activeColor || "#e2e8f4",
              background: activeColor ? `${activeColor}11` : "#181d2a",
            }
          : { borderColor: "#232b3e", color: "#6b7a99" }
      }
    >
      <span className="flex items-center gap-2">
        {dotColor && (
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: dotColor }}
          />
        )}
        <span>{label}</span>
      </span>
      <span
        className="font-mono text-[11px] rounded-full px-2 py-0.5 border"
        style={{ background: "#1e2435", borderColor: "#232b3e", color: active ? "inherit" : "#6b7a99" }}
      >
        {count ?? "—"}
      </span>
    </button>
  );
}

Chip.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.node.isRequired,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dotColor: PropTypes.string,
  activeColor: PropTypes.string,
};

export function FilterSidebar({ bank }) {
  const { search, setSearch, filters, pick, clearAll, counts, domains, examCount } = bank;

  return (
    <aside className="hidden lg:flex w-60 min-w-[240px] bg-aws-bg2 border-r border-aws-border p-4 flex-col gap-5 sticky top-4 h-[calc(100vh-2rem)] overflow-y-auto">
      <div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-aws-muted mb-2.5">
          Search
        </div>
        <div className="relative">
          <MagnifyingGlassIcon className="w-3.5 h-3.5 text-aws-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions…"
            className="w-full bg-aws-bg3 border border-aws-border rounded-lg text-aws-text text-[13px] py-2 pl-8 pr-3 outline-none focus:border-aws-orange"
          />
        </div>
      </div>

      <div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-aws-muted mb-2.5">
          Exam Set
        </div>
        <div className="flex flex-col gap-1.5">
          <Chip
            active={filters.exam === "all"}
            onClick={() => pick("exam", "all")}
            label="All Exams"
            count={counts.total}
            activeColor="#ff9900"
          />
          {Array.from({ length: examCount }, (_, i) => i + 1).map((n) => (
            <Chip
              key={n}
              active={filters.exam === String(n)}
              onClick={() => pick("exam", String(n))}
              label={`Exam ${n}`}
              count={counts.byExam[n]}
              activeColor="#ff9900"
            />
          ))}
        </div>
      </div>

      <div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-aws-muted mb-2.5">
          Domain
        </div>
        <div className="flex flex-col gap-1.5">
          <Chip
            active={filters.domain === "all"}
            onClick={() => pick("domain", "all")}
            label="All Domains"
            count={counts.total}
            dotColor="#ff9900"
            activeColor="#ff9900"
          />
          {domains.map((d) => (
            <Chip
              key={d}
              active={filters.domain === d}
              onClick={() => pick("domain", d)}
              label={d === "Security and Compliance" ? "Security & Compliance" : d === "Billing and Pricing" ? "Billing & Pricing" : d}
              count={counts.byDomain[d]}
              dotColor={getDomainColor(d)}
              activeColor={getDomainColor(d)}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-aws-muted mb-2.5">
          Question Type
        </div>
        <div className="flex flex-col gap-1.5">
          <Chip
            active={filters.type === "all"}
            onClick={() => pick("type", "all")}
            label="All Types"
            count={counts.total}
            activeColor="#ff9900"
          />
          <Chip
            active={filters.type === "single"}
            onClick={() => pick("type", "single")}
            label="⊙ Single Answer"
            count={counts.single}
            activeColor="#60a5fa"
          />
          <Chip
            active={filters.type === "multiple"}
            onClick={() => pick("type", "multiple")}
            label="☑ Multiple Answer"
            count={counts.multiple}
            activeColor="#facc15"
          />
        </div>
      </div>

      <button
        onClick={clearAll}
        className="w-full flex items-center justify-center gap-1.5 py-2 border border-aws-border rounded-lg text-xs text-aws-muted transition-colors hover:text-aws-orange hover:border-aws-orange-dim"
      >
        <ArrowPathIcon className="w-3.5 h-3.5" /> Clear All Filters
      </button>
    </aside>
  );
}

FilterSidebar.propTypes = {
  bank: PropTypes.object.isRequired,
};

export default FilterSidebar;
