# AWS Cloud Practitioner : Practice Exam Portal

A static, self-hosted exam portal for AWS CLF-C02 practice tests. No server required — runs entirely in the browser. Hosted via GitHub Pages.

## Live URL
> `https://abhishekwadmare.github.io/AWS-Exam-practice/`

---

## Repository Structure

```
/
├── index.html          ← Landing page — lists all 6 exams
├── exam.html           ← Single shared exam engine (used by all exams)
├── data/
│   ├── exam1.js        ← Questions for Exam 1
│   ├── exam2.js        ← Questions for Exam 2
│   ├── exam3.js        ← Questions for Exam 3
│   ├── exam4.js        ← Questions for Exam 4
│   ├── exam5.js        ← Questions for Exam 5
│   └── exam6.js        ← Questions for Exam 6
└── README.md
```

## Adding / Editing Questions

Each `data/examN.js` file must export a single `EXAM_DATA` object:

```js
const EXAM_DATA = {
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

- Questions with **one correct option** → rendered as radio buttons  
- Questions with **two or more correct options** → rendered as checkboxes  
- The `domain` field drives the end-of-exam domain breakdown chart

