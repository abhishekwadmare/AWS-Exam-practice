import { useCallback, useEffect, useReducer } from "react";

const EXAM_SECONDS = 90 * 60;

export function isMulti(question) {
  return question.options.filter((o) => o.correct).length > 1;
}

function correctIndexSet(question) {
  return new Set(
    question.options.map((o, i) => (o.correct ? i : null)).filter((x) => x !== null)
  );
}

function scoreSelection(question, sel) {
  if (!sel || sel.size === 0) return "skipped";
  const correctIdxs = correctIndexSet(question);
  const isCorrect = sel.size === correctIdxs.size && [...sel].every((i) => correctIdxs.has(i));
  return isCorrect ? "correct" : "incorrect";
}

export function initialState() {
  return {
    status: "welcome",
    currentQ: 0,
    answers: {},
    revealed: {},
    results: {},
    flagged: new Set(),
    secondsLeft: EXAM_SECONDS,
  };
}

function submitAll(state, questions) {
  const revealed = { ...state.revealed };
  const results = { ...state.results };
  questions.forEach((_, i) => {
    if (!revealed[i]) {
      revealed[i] = true;
      results[i] = "skipped";
    }
  });
  return { ...state, revealed, results, status: "submitted" };
}

export function makeReducer(questions) {
  return function reducer(state, action) {
    switch (action.type) {
      case "START_EXAM":
        return { ...initialState(), status: "in-progress" };

      case "SELECT_OPTION": {
        if (state.revealed[state.currentQ]) return state;
        const q = questions[state.currentQ];
        const multi = isMulti(q);
        const sel = new Set(state.answers[state.currentQ] || []);

        if (multi) {
          if (sel.has(action.idx)) sel.delete(action.idx);
          else sel.add(action.idx);
          return {
            ...state,
            answers: { ...state.answers, [state.currentQ]: sel },
          };
        }

        const singleSel = new Set([action.idx]);
        const res = scoreSelection(q, singleSel);
        return {
          ...state,
          answers: { ...state.answers, [state.currentQ]: singleSel },
          revealed: { ...state.revealed, [state.currentQ]: true },
          results: { ...state.results, [state.currentQ]: res },
        };
      }

      case "REVEAL_ANSWER": {
        if (state.revealed[state.currentQ]) return state;
        const q = questions[state.currentQ];
        const sel = state.answers[state.currentQ] || new Set();
        const res = scoreSelection(q, sel);
        return {
          ...state,
          revealed: { ...state.revealed, [state.currentQ]: true },
          results: { ...state.results, [state.currentQ]: res },
        };
      }

      case "GOTO": {
        if (action.index < 0 || action.index >= questions.length) return state;
        return { ...state, currentQ: action.index };
      }

      case "NAVIGATE": {
        const next = state.currentQ + action.dir;
        if (next < 0 || next >= questions.length) return state;
        return { ...state, currentQ: next };
      }

      case "TOGGLE_FLAG": {
        if (state.revealed[state.currentQ]) return state;
        const flagged = new Set(state.flagged);
        if (flagged.has(state.currentQ)) flagged.delete(state.currentQ);
        else flagged.add(state.currentQ);
        return { ...state, flagged };
      }

      case "TICK": {
        const secondsLeft = state.secondsLeft - 1;
        if (secondsLeft <= 0) {
          return submitAll({ ...state, secondsLeft: 0 }, questions);
        }
        return { ...state, secondsLeft };
      }

      case "SUBMIT":
        return submitAll(state, questions);

      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };
}

export function computeExamResults(questions, results) {
  let correct = 0;
  let wrong = 0;
  let skipped = 0;
  const domainStats = {};

  questions.forEach((q, i) => {
    if (!domainStats[q.domain]) domainStats[q.domain] = { correct: 0, total: 0 };
    domainStats[q.domain].total++;

    if (results[i] === "correct") {
      correct++;
      domainStats[q.domain].correct++;
    } else if (results[i] === "incorrect") {
      wrong++;
    } else {
      skipped++;
    }
  });

  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 70;

  return { total, correct, wrong, skipped, pct, passed, domainStats };
}

export function useExamEngine(examData) {
  const questions = examData.questions;
  const [state, dispatch] = useReducer(makeReducer(questions), undefined, initialState);

  useEffect(() => {
    if (state.status !== "in-progress") return undefined;
    const interval = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(interval);
  }, [state.status]);

  const startExam = useCallback(() => dispatch({ type: "START_EXAM" }), []);
  const selectOption = useCallback((idx) => dispatch({ type: "SELECT_OPTION", idx }), []);
  const revealAnswer = useCallback(() => dispatch({ type: "REVEAL_ANSWER" }), []);
  const goto = useCallback((index) => dispatch({ type: "GOTO", index }), []);
  const navigate = useCallback((dir) => dispatch({ type: "NAVIGATE", dir }), []);
  const toggleFlag = useCallback(() => dispatch({ type: "TOGGLE_FLAG" }), []);
  const submit = useCallback(() => dispatch({ type: "SUBMIT" }), []);

  return {
    questions,
    state,
    startExam,
    selectOption,
    revealAnswer,
    goto,
    navigate,
    toggleFlag,
    submit,
  };
}
