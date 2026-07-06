# AWS Cloud Practitioner : Practice Exam Portal

A static, self-hosted exam portal for AWS CLF-C02 practice tests. No server required — runs entirely in the browser. Hosted via GitHub Pages.

## Live URL
> `https://abhishekwadmare.github.io/AWS-Exam-practice/`

---

> **Note:** This app is mid-migration from a static HTML/JS site to a React + Vite app (based on the material-tailwind-dashboard-react template). The old static version is preserved under `legacy-static/` until the migration is complete. This section will be updated fully at cutover.

## Repository Structure

```
/
├── src/
│   └── data/
│       ├── exams/
│       │   ├── exam1.js        ← Questions for Exam 1
│       │   ├── exam2.js        ← Questions for Exam 2
│       │   ├── exam3.js        ← Questions for Exam 3
│       │   ├── exam4.js        ← Questions for Exam 4
│       │   ├── exam5.js        ← Questions for Exam 5
│       │   └── exam6.js        ← Questions for Exam 6
│       └── examRegistry.js      ← Maps exam number -> exam data module
├── legacy-static/                ← Previous static-HTML version, kept until migration is complete
└── README.md
```

## Adding / Editing Questions

Each `src/data/exams/examN.js` file must export a single `EXAM_DATA` object:

```js
export const EXAM_DATA = {
  examNumber: 1,
  title: "Practice Exam 1",
  description: "Core AWS services and cloud concepts",
  questions: [
    {
      "questionNumber": 1,
      "questionText": "Which service is ...?",
      "options": [
        { "text": "Option A", "correct": false },
        { "text": "Option B", "correct": true }
      ],
      "explanation": "Option B is correct because ...",
      "domain": "Technology"
    }
  ]
};
```

New exams also need an entry added to `src/data/examRegistry.js`.

- Questions with **one correct option** → rendered as radio buttons  
- Questions with **two or more correct options** → rendered as checkboxes  
- The `domain` field drives the end-of-exam domain breakdown chart

