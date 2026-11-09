# Tech Triad — Academic Feedback and Course Improvement Management System

**Team:** Tech Triad  
**Institution:** Lovely Professional University (LPU)  
**Programme:** B.Tech  
**Technology:** HTML, CSS, and JavaScript  
**Team members:** Saina Satapathy, Shivani Kumari, and Sayantika Das

## Project overview

Students need a clear way to share course feedback, and course teams need a way to review it and tell students what was improved. This project demonstrates that feedback loop in a responsive website.

Students can select their semester, rate a course, choose a feedback topic, write a comment, and optionally attach a small evidence file. A faculty demo view shows feedback, lets the course team mark it reviewed, and publish improvement updates.

## Courses and semesters

The seven courses supplied for Semester 1 are:

- CSE 105 — Creative Engineering Workshop
- CSE 111 — Orientation to Computing
- CSE 326 — Internet Programming
- C INT 108 — Python Programming
- INT 335 — Design Thinking
- MEC 136 — Engineering Drawing with AutoCAD
- MTH 165 — Mathematics for Engineers

The profile groups Semesters 1–2 under First year, 3–4 under Second year, 5–6 under Third year, and 7–8 under Fourth year. Semester 1 has the seven supplied courses. For Semesters 2–8, students can enter the course code and name shown in their timetable; the course is saved in this browser for later feedback. Faculty demo users can also add courses through the course catalogue manager. Confirm all course details against the official timetable before presenting them as official LPU course data.

## Open the website in VS Code

1. Open VS Code.
2. Choose **File → Open Folder**.
3. Open this project's `outputs` folder.
4. Open `index.html` in the Explorer.
5. If needed, install the **Live Server** extension by Ritwick Dey.
6. Click **Go Live** in the bottom-right corner. The website opens in your browser.

No package installation or build command is needed.

## What to demonstrate

1. Open **Student profile** and show the year-grouped semester choices. The year updates when the semester changes.
2. Open the overview and show the seven Semester 1 courses.
3. Open **Give feedback**, select a Semester 1 course, and show the topic, star rating, comment, anonymous option, and optional attachment.
4. Select a semester from 2 to 8 and show the course code and course name fields.
5. Open **My courses** to show the semester catalogue and its separate counts.
6. Switch to **Faculty view**. Show the feedback inbox, course catalogue manager, reviewed state, and improvement publishing form.
7. Resize the browser to show the mobile layout.

Use clearly marked sample entries for a walkthrough. Do not describe sample ratings, sample comments, or sample improvement posts as real student results.

## Be ready to explain your work

A simple practice explanation:

> “Our project is an academic feedback and course improvement website. Students choose a semester and course, give a rating, and write feedback. The faculty demo view lets a course team review feedback and publish an improvement update. We used HTML for the page structure, CSS for the design and responsive layout, and JavaScript for navigation, form handling, semester filtering, and saving demo data in the browser.”

Key parts of the code:

- `index.html` contains the page sections and form fields.
- `styles.css` controls colours, spacing, cards, and responsive layouts.
- `app.js` handles navigation, course lists, form validation, feedback, and local browser storage.
- `localStorage` saves this demo's profile, feedback, and course data in the current browser.

Possible viva questions to practise:

- **What problem does it address?** It gives students a structured place to share course feedback and gives course teams a way to show follow-up actions.
- **What happens when feedback is submitted?** JavaScript checks required fields, then saves the response in the browser's local storage.
- **How does the semester choice affect courses?** Semester 1 shows the seven supplied courses. Semesters 2–8 let the student enter their course code and name.
- **How does the page work on a phone?** CSS media queries rearrange the layout for narrower screens.
- **Is this a shared live feedback system?** No. This is a front-end project demo. Data stays in the browser used to enter it; there is no server, shared database, or secure faculty login.

Each team member should be able to explain the whole project and describe their own actual contribution during the viva and video. Agree on truthful contribution descriptions together before recording.

## Project files

- `index.html` — website structure and forms.
- `styles.css` — visual design and responsive rules.
- `app.js` — application behaviour and demo data.
- `README.md` — setup, walkthrough, and presentation notes.

## Before submission

The provided project guidelines require a complete source repository, an accessible GitHub link, an online deployment link where applicable, a video presentation with all team members participating, and one Excel or Word Project Submission File uploaded to UMS. The submission file must include the project title, team name, course code, registration numbers of all members, GitHub link, deployed link, and video link.

### Current project status

- [x] Website source files prepared and uploaded to the GitHub repository.
- [x] README includes setup steps, demo walkthrough, and viva practice notes.
- [ ] Make the repository accessible to the evaluator. It is currently private; changing it to public will expose its files to everyone.
- [ ] Publish the website. GitHub Pages websites are public; publishing needs the repository's Pages settings.
- [ ] Record the team video. All three members must participate; this requires the real team.
- [ ] Fill the course-provided Excel/Word submission template and upload that single required file to UMS.

### Details still needed from the team

These cannot be safely guessed, so copy them from UMS or the official course materials:

- Exact assessment course code.
- Registration number for Saina Satapathy.
- Registration number for Shivani Kumari.
- Registration number for Sayantika Das.
- The separate submission spreadsheet/template mentioned by the guidelines.
- The video presentation link after the team records and uploads its video.
- Verified course lists for Semesters 2–8, if you want those displayed as official catalogue entries.

Before the deadline, open the GitHub link, deployed site, and video link from a different browser or signed-out session to ensure the evaluator can access them. Upload only the submission file on UMS unless your instructor asks for other files.
