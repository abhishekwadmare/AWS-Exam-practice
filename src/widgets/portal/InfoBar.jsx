import { ClockIcon, LightBulbIcon, ChartBarIcon, FlagIcon } from "@heroicons/react/24/solid";

const ITEMS = [
  {
    Icon: ClockIcon,
    title: "90-Minute Timer",
    text: "Timer starts when you begin. A warning shows at 10 minutes remaining.",
  },
  {
    Icon: LightBulbIcon,
    title: "Instant Explanations",
    text: "After each answer, the correct option and a full explanation are revealed immediately.",
  },
  {
    Icon: ChartBarIcon,
    title: "Domain Breakdown",
    text: "End-of-exam results show your score per domain so you know where to focus.",
  },
  {
    Icon: FlagIcon,
    title: "Flag & Review",
    text: "Flag any question during the exam to revisit it before submitting.",
  },
];

export function InfoBar() {
  return (
    <div className="bg-aws-bg2 border border-aws-border rounded-xl p-6 mt-12 flex flex-wrap gap-8">
      {ITEMS.map(({ Icon, title, text }) => (
        <div key={title} className="flex items-start gap-3 flex-1 min-w-[200px]">
          <div className="w-9 h-9 min-w-[36px] bg-aws-orange/10 border border-aws-orange-dim rounded-lg flex items-center justify-center">
            <Icon className="w-4 h-4 text-aws-orange" />
          </div>
          <div>
            <strong className="text-[13px] block mb-0.5">{title}</strong>
            <span className="text-xs text-aws-muted leading-relaxed">{text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoBar;
