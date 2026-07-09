# CLAUDE.md

Guidance for Claude Code (or any future agent) working in this repository.

## What this is

AWS CLF-C02 (Cloud Practitioner) practice exam portal. React + Vite + Tailwind CSS +
`@material-tailwind/react`, hosted on GitHub Pages. See [README.md](README.md) for dev commands,
repo structure, and the question-data format.

## Design provenance — read this before touching layout/UI

The app was migrated from a hand-built static HTML site (three plain pages: portal home, question
bank, exam-taking) to this React app, scaffolded from the `material-tailwind-dashboard-react`
template. The migration preserved the original's colors (`aws-*` classes in
`tailwind.config.cjs`), fonts (Sora + IBM Plex Mono), and page copy faithfully — but the template
scaffold initially left behind admin-dashboard chrome (a persistent left sidenav + top navbar) that
never existed in the original design. That chrome was removed (see git history around the "Remove
generic dashboard chrome" commit) to restore the original chrome-free, full-width layout.

**Implication for future work**: this app's pages (`Home`, `QuestionBank`) are intentionally
standalone — no shared dashboard shell wraps them. Don't reintroduce a persistent sidebar/navbar
template artifact when adding pages or "fixing" navigation; if a page needs a back-link or title,
give it its own lightweight header (see `src/widgets/questions/QuestionBankTopNav.jsx` for the
pattern), not a global nav shell. The exam-taking layout (`src/layouts/exam.jsx`) is deliberately
bare (`<Outlet/>` only) — keep it that way; it's meant to be distraction-free during a timed exam.

## Architecture at a glance

- `src/App.jsx` — top-level routes: `/exam/:examId` → `ExamLayout` (distraction-free), everything
  else → `Dashboard` layout.
- `src/layouts/dashboard.jsx` — renders `src/routes.jsx`'s flat `{ path, element }` list directly,
  no shared chrome.
- `src/routes.jsx` — just path → page element. Don't add nav-menu-only fields (icons, labels) back
  here unless a real nav menu is reintroduced — keep it minimal.
- `src/pages/` — one file per route (`portal/home.jsx`, `questions/bank.jsx`, `exam/take.jsx`).
- `src/widgets/` — page-scoped presentational components, grouped by page (`portal/`, `questions/`,
  `exam/`). `FilterSidebar` and `ExamSidebar` here are page-specific (filters, exam question nav) —
  unrelated to the removed global dashboard sidenav.
- `src/hooks/useExamEngine.js` / `useQuestionBank.js` — the actual state machines (timer, scoring,
  filtering). These have Vitest coverage (`*.test.js` alongside each hook) — extend tests here when
  changing behavior, not just the components.
- `src/data/exams/examN.js` + `examRegistry.js` + `examMeta.js` — question content. Format is
  documented in the README.

## Working in this repo

- `npm run dev` / `npm test` (vitest) / `npm run build && npm run preview` — see README for full
  details.
- Deploy is automatic on push to `main` via `.github/workflows/deploy.yml`. The `postbuild` script
  copies `dist/index.html` → `dist/404.html` as the GitHub Pages SPA-fallback (BrowserRouter needs
  this since GH Pages has no server-side rewrite support) — don't remove it.
- No component test/E2E harness exists yet — verification is unit tests (hooks) + manual
  `npm run dev` / `npm run preview` checks.
