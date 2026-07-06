const ITEMS = [
  { label: "Correct", bg: "rgba(34,197,94,.2)", border: "#22c55e59" },
  { label: "Incorrect", bg: "rgba(239,68,68,.2)", border: "#ef444459" },
  { label: "Current", bg: "rgba(255,153,0,.15)", border: "#b36d00" },
  { label: "Flagged", bg: "rgba(250,204,21,.1)", border: "#facc1559" },
];

export function NavLegend() {
  return (
    <div className="flex flex-col gap-1.5">
      {ITEMS.map(({ label, bg, border }) => (
        <div key={label} className="flex items-center gap-2 text-[11px] text-aws-muted">
          <div
            className="w-2.5 h-2.5 rounded-[3px] flex-shrink-0"
            style={{ background: bg, border: `1px solid ${border}` }}
          />
          {label}
        </div>
      ))}
    </div>
  );
}

export default NavLegend;
