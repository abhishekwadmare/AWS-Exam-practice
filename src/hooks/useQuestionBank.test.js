import { describe, it, expect } from "vitest";
import { flattenExams, filterAndSortQuestions } from "@/hooks/useQuestionBank";

const EXAMS = [
  {
    examNumber: 1,
    title: "Exam One",
    questions: [
      {
        questionNumber: 1,
        questionText: "What is S3?",
        options: [
          { text: "A storage service", correct: true },
          { text: "A compute service", correct: false },
        ],
        explanation: "S3 is object storage.",
        domain: "Technology",
      },
      {
        questionNumber: 2,
        questionText: "Which are compute services?",
        options: [
          { text: "EC2", correct: true },
          { text: "Lambda", correct: true },
          { text: "S3", correct: false },
        ],
        explanation: "EC2 and Lambda run compute workloads.",
        domain: "Cloud Concepts",
      },
    ],
  },
  {
    examNumber: 2,
    title: "Exam Two",
    questions: [
      {
        questionNumber: 1,
        questionText: "What is IAM used for?",
        options: [
          { text: "Access control", correct: true },
          { text: "Billing", correct: false },
        ],
        explanation: "IAM manages access and permissions.",
        domain: "Security and Compliance",
      },
    ],
  },
];

describe("flattenExams", () => {
  const all = flattenExams(EXAMS);

  it("flattens every question across exams with examNumber/examTitle attached", () => {
    expect(all).toHaveLength(3);
    expect(all[0].examNumber).toBe(1);
    expect(all[0].examTitle).toBe("Exam One");
    expect(all[2].examNumber).toBe(2);
  });

  it("derives qType from how many options are marked correct", () => {
    expect(all[0].qType).toBe("single");
    expect(all[1].qType).toBe("multiple");
  });

  it("builds a stable uid from exam number and question number", () => {
    expect(all[0].uid).toBe("e1-q1");
    expect(all[2].uid).toBe("e2-q1");
  });
});

describe("filterAndSortQuestions", () => {
  const all = flattenExams(EXAMS);
  const noFilters = { exam: "all", domain: "all", type: "all" };

  it("returns everything when no filters or search are applied", () => {
    const result = filterAndSortQuestions(all, { search: "", filters: noFilters, sort: "default" });
    expect(result).toHaveLength(3);
  });

  it("filters by exam number", () => {
    const result = filterAndSortQuestions(all, {
      search: "",
      filters: { ...noFilters, exam: "2" },
      sort: "default",
    });
    expect(result).toHaveLength(1);
    expect(result[0].examNumber).toBe(2);
  });

  it("filters by domain", () => {
    const result = filterAndSortQuestions(all, {
      search: "",
      filters: { ...noFilters, domain: "Cloud Concepts" },
      sort: "default",
    });
    expect(result).toHaveLength(1);
    expect(result[0].questionText).toBe("Which are compute services?");
  });

  it("filters by question type", () => {
    const multi = filterAndSortQuestions(all, {
      search: "",
      filters: { ...noFilters, type: "multiple" },
      sort: "default",
    });
    expect(multi).toHaveLength(1);
    expect(multi[0].qType).toBe("multiple");
  });

  it("combines multiple filters as an intersection", () => {
    const result = filterAndSortQuestions(all, {
      search: "",
      filters: { exam: "1", domain: "Technology", type: "single" },
      sort: "default",
    });
    expect(result).toHaveLength(1);
    expect(result[0].uid).toBe("e1-q1");
  });

  it("searches question text, option text, and explanation case-insensitively", () => {
    const byQuestionText = filterAndSortQuestions(all, { search: "iam", filters: noFilters, sort: "default" });
    expect(byQuestionText).toHaveLength(1);

    const byOptionText = filterAndSortQuestions(all, { search: "lambda", filters: noFilters, sort: "default" });
    expect(byOptionText).toHaveLength(1);
    expect(byOptionText[0].uid).toBe("e1-q2");

    const byExplanation = filterAndSortQuestions(all, {
      search: "object storage",
      filters: noFilters,
      sort: "default",
    });
    expect(byExplanation).toHaveLength(1);
    expect(byExplanation[0].uid).toBe("e1-q1");
  });

  it("sorts by domain alphabetically when requested", () => {
    const result = filterAndSortQuestions(all, { search: "", filters: noFilters, sort: "domain" });
    expect(result.map((q) => q.domain)).toEqual([
      "Cloud Concepts",
      "Security and Compliance",
      "Technology",
    ]);
  });

  it("sorts by type when requested (multiple before single, alphabetically)", () => {
    const result = filterAndSortQuestions(all, { search: "", filters: noFilters, sort: "type" });
    expect(result.map((q) => q.qType)).toEqual(["multiple", "single", "single"]);
  });
});
