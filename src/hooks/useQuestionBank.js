import { useMemo, useState } from "react";
import { EXAM_LIST } from "@/data/examRegistry";

const ALL_QUESTIONS = EXAM_LIST.flatMap((exam) =>
  exam.questions.map((q) => ({
    ...q,
    examNumber: exam.examNumber,
    examTitle: exam.title,
    qType: q.options.filter((o) => o.correct).length > 1 ? "multiple" : "single",
    uid: `e${exam.examNumber}-q${q.questionNumber}`,
  }))
);

const DOMAINS = ["Cloud Concepts", "Security and Compliance", "Technology", "Billing and Pricing"];

export function useQuestionBank() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ exam: "all", domain: "all", type: "all" });
  const [sort, setSort] = useState("default");
  const [view, setView] = useState("list");

  const counts = useMemo(() => {
    const byExam = {};
    for (let i = 1; i <= EXAM_LIST.length; i++) {
      byExam[i] = ALL_QUESTIONS.filter((q) => q.examNumber === i).length;
    }
    const byDomain = {};
    for (const d of DOMAINS) {
      byDomain[d] = ALL_QUESTIONS.filter((q) => q.domain === d).length;
    }
    const single = ALL_QUESTIONS.filter((q) => q.qType === "single").length;
    const multiple = ALL_QUESTIONS.filter((q) => q.qType === "multiple").length;
    return { total: ALL_QUESTIONS.length, single, multiple, byExam, byDomain };
  }, []);

  const filteredList = useMemo(() => {
    const q = search.toLowerCase().trim();
    let list = ALL_QUESTIONS.filter((item) => {
      if (filters.exam !== "all" && String(item.examNumber) !== filters.exam) return false;
      if (filters.domain !== "all" && item.domain !== filters.domain) return false;
      if (filters.type !== "all" && item.qType !== filters.type) return false;
      if (q) {
        const haystack = (
          item.questionText +
          " " +
          item.options.map((o) => o.text).join(" ") +
          " " +
          item.explanation
        ).toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    list = [...list];
    if (sort === "exam") {
      list.sort((a, b) => a.examNumber - b.examNumber || a.questionNumber - b.questionNumber);
    } else if (sort === "domain") {
      list.sort((a, b) => a.domain.localeCompare(b.domain) || a.examNumber - b.examNumber);
    } else if (sort === "type") {
      list.sort((a, b) => a.qType.localeCompare(b.qType) || a.examNumber - b.examNumber);
    }
    return list;
  }, [search, filters, sort]);

  function pick(type, value) {
    setFilters((prev) => ({ ...prev, [type]: value }));
  }

  function clearAll() {
    setSearch("");
    setFilters({ exam: "all", domain: "all", type: "all" });
  }

  return {
    search,
    setSearch,
    filters,
    pick,
    clearAll,
    sort,
    setSort,
    view,
    setView,
    counts,
    domains: DOMAINS,
    examCount: EXAM_LIST.length,
    filteredList,
  };
}
