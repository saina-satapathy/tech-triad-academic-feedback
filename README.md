# Tech Triad — Academic Feedback and Course Improvement Management System

A responsive course feedback website developed by **Tech Triad** for a B.Tech project at Lovely Professional University (LPU).

## About the project

The website gives students a structured way to share feedback about their courses. Students can select a semester, rate a course, choose a feedback topic, write a comment, and optionally attach a small evidence file. A faculty demonstration view shows the feedback inbox, course catalogue manager, review action, and course improvement updates.

## Features

- Student overview with the courses for the selected semester.
- Semester 1 course list supplied by the project team.
- Semester selector grouped by year: Semesters 1–2, 3–4, 5–6, and 7–8.
- Feedback form with course rating, topic, written comment, anonymous option, and optional attachment.
- For Semesters 2–8, fields to enter the course code and course name from the student's timetable.
- Faculty demonstration view to review feedback, add course entries, and publish improvement updates.
- Responsive layout for desktop and mobile screens.

## Technology

- HTML for page structure
- CSS for styling and responsive layout
- JavaScript for navigation, semester and course selection, form handling, and browser storage

## Project files

- `index.html` — website pages and form structure
- `styles.css` — visual styles and responsive layout
- `app.js` — application behaviour and demonstration data
- `README.md` — project information and setup instructions

## Run locally in VS Code

1. Open the project’s `outputs` folder in VS Code (**File → Open Folder**).
2. Open `index.html`.
3. If needed, install the **Live Server** extension by Ritwick Dey.
4. Click **Go Live** in the VS Code status bar to open the website in your browser.

No package installation or build step is required.

## Demo notes and limitations

This is a front-end project demonstration. Student profiles, feedback, attachments, and courses are saved in the current browser using `localStorage`; they are not shared with other devices or students. The faculty view is a demonstration control, not a secure login. The sample ratings, feedback entries, and improvement updates are examples and are not real LPU results.

Only the seven Semester 1 courses below were supplied to the project team. Students can enter a course code and name for Semesters 2–8 when submitting feedback. Confirm course details against the official timetable before presenting them as official course listings.

- CSE 105 — Creative Engineering Workshop
- CSE 111 — Orientation to Computing
- CSE 326 — Internet Programming
- C INT 108 — Python Programming
- INT 335 — Design Thinking
- MEC 136 — Engineering Drawing with AutoCAD
- MTH 165 — Mathematics for Engineers

## Project team

- Saina Satapathy
- Shivani Kumari
- Sayantika Das
