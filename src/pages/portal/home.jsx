import { Link } from "react-router-dom";
import { CloudIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import { HeroStats } from "@/widgets/portal/HeroStats";
import { ExamCard } from "@/widgets/portal/ExamCard";
import { InfoBar } from "@/widgets/portal/InfoBar";
import { EXAM_META } from "@/data/examMeta";
import { EXAMS } from "@/data/examRegistry";

export function Home() {
  return (
    <div>
      <div className="text-center py-14 px-4 border-b border-aws-border -mx-4">
        <div className="inline-flex items-center gap-2 bg-aws-orange/10 border border-aws-orange-dim rounded-full px-4 py-1 font-mono text-[11px] text-aws-orange uppercase tracking-wider mb-6">
          <CloudIcon className="w-3.5 h-3.5" /> CLF-C02 Certification Prep
        </div>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          AWS Cloud Practitioner
          <br />
          <span className="text-aws-orange">Practice Exam Portal</span>
        </h1>
        <p className="text-aws-muted max-w-lg mx-auto mb-9 leading-relaxed">
          Six full-length practice exams with timed sessions, instant feedback, and
          domain-wise performance analysis.
        </p>
        <HeroStats />
        <div className="mt-7">
          <Link
            to="/questions"
            className="inline-flex items-center gap-2 bg-aws-orange/10 border border-aws-orange-dim text-aws-orange no-underline px-5 py-2.5 rounded-lg text-[13px] font-semibold transition-colors hover:bg-aws-orange/20"
          >
            <ClipboardDocumentListIcon className="w-4 h-4" />
            Browse Question Bank — all 390 questions
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-14 px-4">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-aws-muted mb-6">
          Choose Your Exam
          <span className="flex-1 h-px bg-aws-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXAM_META.map(({ examNumber, title, description }) => {
            const data = EXAMS[examNumber];
            const domainCount = new Set(data.questions.map((q) => q.domain)).size;
            return (
              <ExamCard
                key={examNumber}
                examNumber={examNumber}
                title={title}
                description={description}
                questionCount={data.questions.length}
                domainCount={domainCount}
              />
            );
          })}
        </div>

        <InfoBar />
      </div>
    </div>
  );
}

export default Home;
