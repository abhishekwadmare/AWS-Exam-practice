import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useQuestionBank } from "@/hooks/useQuestionBank";
import { FilterSidebar } from "@/widgets/questions/FilterSidebar";
import { StatsBar } from "@/widgets/questions/StatsBar";
import { SortAndViewControls } from "@/widgets/questions/SortAndViewControls";
import { QuestionCard } from "@/widgets/questions/QuestionCard";

export function QuestionBank() {
  const bank = useQuestionBank();
  const { filteredList, sort, setSort, view, setView, counts, domains } = bank;
  const gridView = view === "grid";

  return (
    <div className="flex -mx-4 -mb-4">
      <FilterSidebar bank={bank} />

      <main className="flex-1 min-w-0 p-7">
        <StatsBar counts={counts} domainCount={domains.length} />
        <SortAndViewControls
          sort={sort}
          setSort={setSort}
          view={view}
          setView={setView}
          resultCount={filteredList.length}
        />

        {filteredList.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-5 text-aws-muted gap-3 text-center">
            <MagnifyingGlassIcon className="w-10 h-10" />
            <div className="text-base font-semibold text-aws-text">No questions found</div>
            <div className="text-[13px]">Try adjusting your filters or search term</div>
          </div>
        ) : (
          <div className={gridView ? "grid grid-cols-1 md:grid-cols-2 gap-2.5" : "flex flex-col gap-2.5"}>
            {filteredList.map((q) => (
              <QuestionCard key={q.uid} question={q} gridView={gridView} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default QuestionBank;
