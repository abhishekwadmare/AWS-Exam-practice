import { describe, it, expect } from "vitest";
import { makeReducer, initialState } from "@/hooks/useExamEngine";

const QUESTIONS = [
  {
    questionNumber: 1,
    questionText: "Single Q",
    options: [
      { text: "A", correct: false },
      { text: "B", correct: true },
    ],
    explanation: "B is correct",
    domain: "Technology",
  },
  {
    questionNumber: 2,
    questionText: "Multi Q",
    options: [
      { text: "A", correct: true },
      { text: "B", correct: true },
      { text: "C", correct: false },
    ],
    explanation: "A and B are correct",
    domain: "Cloud Concepts",
  },
  {
    questionNumber: 3,
    questionText: "Single Q 2",
    options: [
      { text: "A", correct: true },
      { text: "B", correct: false },
    ],
    explanation: "A is correct",
    domain: "Billing and Pricing",
  },
];

function started() {
  const reducer = makeReducer(QUESTIONS);
  const state = reducer(initialState(), { type: "START_EXAM" });
  return { reducer, state };
}

describe("useExamEngine reducer", () => {
  it("START_EXAM resets to in-progress at question 0 with a full timer", () => {
    const { state } = started();
    expect(state.status).toBe("in-progress");
    expect(state.currentQ).toBe(0);
    expect(state.secondsLeft).toBe(90 * 60);
    expect(state.flagged.size).toBe(0);
  });

  it("single-select auto-reveals immediately with correct result", () => {
    const { reducer, state } = started();
    const next = reducer(state, { type: "SELECT_OPTION", idx: 1 });
    expect(next.revealed[0]).toBe(true);
    expect(next.results[0]).toBe("correct");
  });

  it("single-select auto-reveals immediately with incorrect result", () => {
    const { reducer, state } = started();
    const next = reducer(state, { type: "SELECT_OPTION", idx: 0 });
    expect(next.revealed[0]).toBe(true);
    expect(next.results[0]).toBe("incorrect");
  });

  it("multi-select toggles selection without revealing", () => {
    const { reducer, state } = started();
    const q2 = reducer(state, { type: "GOTO", index: 1 });
    const selected = reducer(q2, { type: "SELECT_OPTION", idx: 0 });
    expect(selected.revealed[1]).toBeUndefined();
    expect([...selected.answers[1]]).toEqual([0]);

    // toggling the same option again deselects it
    const deselected = reducer(selected, { type: "SELECT_OPTION", idx: 0 });
    expect(deselected.answers[1].size).toBe(0);
  });

  it("multi-select REVEAL_ANSWER requires an exact set match to be correct", () => {
    const { reducer, state } = started();
    let s = reducer(state, { type: "GOTO", index: 1 });
    s = reducer(s, { type: "SELECT_OPTION", idx: 0 });
    s = reducer(s, { type: "SELECT_OPTION", idx: 1 }); // now {0,1} = exact correct set
    const revealed = reducer(s, { type: "REVEAL_ANSWER" });
    expect(revealed.results[1]).toBe("correct");
  });

  it("multi-select REVEAL_ANSWER marks a partial-correct selection as incorrect", () => {
    const { reducer, state } = started();
    let s = reducer(state, { type: "GOTO", index: 1 });
    s = reducer(s, { type: "SELECT_OPTION", idx: 0 }); // only {0}, missing {1}
    const revealed = reducer(s, { type: "REVEAL_ANSWER" });
    expect(revealed.results[1]).toBe("incorrect");
  });

  it("REVEAL_ANSWER with nothing selected scores as skipped", () => {
    const { reducer, state } = started();
    const s = reducer(state, { type: "GOTO", index: 1 });
    const revealed = reducer(s, { type: "REVEAL_ANSWER" });
    expect(revealed.results[1]).toBe("skipped");
  });

  it("SELECT_OPTION and REVEAL_ANSWER are no-ops once a question is revealed", () => {
    const { reducer, state } = started();
    const revealed = reducer(state, { type: "SELECT_OPTION", idx: 1 }); // correct, revealed
    const again = reducer(revealed, { type: "SELECT_OPTION", idx: 0 });
    expect(again.results[0]).toBe("correct"); // unchanged, not overwritten to incorrect
  });

  it("TOGGLE_FLAG toggles the current question and is blocked once revealed", () => {
    const { reducer, state } = started();
    const flagged = reducer(state, { type: "TOGGLE_FLAG" });
    expect(flagged.flagged.has(0)).toBe(true);
    const unflagged = reducer(flagged, { type: "TOGGLE_FLAG" });
    expect(unflagged.flagged.has(0)).toBe(false);

    const revealed = reducer(state, { type: "SELECT_OPTION", idx: 1 });
    const attemptFlag = reducer(revealed, { type: "TOGGLE_FLAG" });
    expect(attemptFlag.flagged.has(0)).toBe(false);
  });

  it("NAVIGATE moves within bounds and is a no-op past either end", () => {
    const { reducer, state } = started();
    const next = reducer(state, { type: "NAVIGATE", dir: 1 });
    expect(next.currentQ).toBe(1);

    const pastEnd = reducer({ ...state, currentQ: 2 }, { type: "NAVIGATE", dir: 1 });
    expect(pastEnd.currentQ).toBe(2);

    const beforeStart = reducer(state, { type: "NAVIGATE", dir: -1 });
    expect(beforeStart.currentQ).toBe(0);
  });

  it("GOTO jumps directly and ignores out-of-range indices", () => {
    const { reducer, state } = started();
    const jumped = reducer(state, { type: "GOTO", index: 2 });
    expect(jumped.currentQ).toBe(2);

    const invalid = reducer(state, { type: "GOTO", index: 99 });
    expect(invalid.currentQ).toBe(0);
  });

  it("TICK decrements the timer and auto-submits (marking unrevealed as skipped) at zero", () => {
    const { reducer, state } = started();
    const almostDone = { ...state, secondsLeft: 1 };
    const ticked = reducer(almostDone, { type: "TICK" });
    expect(ticked.status).toBe("submitted");
    expect(ticked.results[0]).toBe("skipped");
    expect(ticked.results[1]).toBe("skipped");
    expect(ticked.results[2]).toBe("skipped");
  });

  it("SUBMIT marks unrevealed questions as skipped but preserves already-revealed results", () => {
    const { reducer, state } = started();
    const answered = reducer(state, { type: "SELECT_OPTION", idx: 1 }); // Q0 correct
    const submitted = reducer(answered, { type: "SUBMIT" });
    expect(submitted.status).toBe("submitted");
    expect(submitted.results[0]).toBe("correct");
    expect(submitted.results[1]).toBe("skipped");
    expect(submitted.results[2]).toBe("skipped");
  });
});
