# Tech Triad — Academic Feedback and Course Improvement Management System

This is a responsive academic feedback and course improvement website made with HTML, CSS, and JavaScript for a three-member project team named **Tech Triad** at Lovely Professional University (LPU). It includes a student workspace for rating courses and sharing comments, plus a faculty demo view for reviewing responses and publishing improvement updates.

Team members shown in the site: Saina Satapathy, Shivani Kumari, and Sayantika Das.

## First-semester courses included

- CSE 105 — Creative Engineering Workshop
- CSE 111 — Orientation to Computing
- CSE 326 — Internet Programming
- C INT 108 — Python Programming
- INT 335 — Design Thinking
- MEC 136 — Engineering Drawing with AutoCAD
- MTH 165 — Mathematics for Engineers

Course descriptions are concise project summaries. Faculty names are not shown because they were not supplied. Course star ratings and improvement posts are clearly sample demo content; replace those values with verified information before presenting them as real results.

## Semester 1–8 support

Students can choose a semester grouped under its year in their profile; the year field updates automatically for Semesters 1–2, 3–4, 5–6, or 7–8. Semester 1 feedback uses the seven listed courses. For Semesters 2–8, students enter the course code and subject name from their timetable. The first feedback submission saves that course under the selected semester for later feedback and faculty review. The Faculty dashboard includes a course catalogue manager for adding each semester's official course codes, titles, and optional summaries. Only the Semester 1 course list above was provided to the project team, so enter verified course details for Semesters 2–8 before presenting those semesters as populated.

## Open the website in VS Code

1. Download or copy the complete `outputs` folder to your computer.
2. Open that folder in VS Code using **File → Open Folder**.
3. In VS Code, install the **Live Server** extension by Ritwick Dey if it is not already installed.
4. Open `index.html`, then click **Go Live** in the bottom-right corner.
5. The website opens in your browser. Use **Faculty view** in the top bar to demonstrate the course team workspace.

No package installation or build step is needed.

## What you can demonstrate

- Navigate the student overview, course list, feedback form, and improvement updates.
- Submit a course rating and categorized written feedback.
- Choose anonymous feedback or include the profile name for faculty.
- Optionally attach one PDF, image, or Word document up to 500 KB; it is stored locally in the browser for the demo.
- Add a student name, registration number, B.Tech specialization/branch, and semester on the Student profile page. Year is calculated from the selected semester. Profile details remain in this browser only.
- Choose a semester under its year group in the profile. The year field updates automatically for Semester 1–2, 3–4, 5–6, or 7–8.\n- Give feedback on the seven listed Semester 1 courses. For Semesters 2–8, type the course code and subject name from your timetable; the first submission saves that course under the selected semester.
- Use Faculty dashboard → Course catalogue manager to add verified courses for other semesters.
- Switch to the faculty view, review feedback, mark it as reviewed, and publish a course improvement.
- Filter improvements by course and see the feedback and changes reflected in the dashboards.
- Resize the browser to see the responsive mobile layout.

Student feedback, profile details, attachments, and changes are saved in the current browser using `localStorage`. They stay on that device and browser profile; this front-end class project does not use a server, account login, or shared database. The faculty inbox opens with clearly marked sample feedback so the demo is populated; sample course ratings and improvement posts are also labeled. These examples are not real LPU results. The **Faculty view** switch is a demo navigation control, not a secure login.

## Project files

- `index.html` contains the pages and form structure.
- `styles.css` contains the visual design and responsive layouts.
- `app.js` contains the sample course data, navigation, feedback handling, and improvement management.

## Before submission

Your team still needs to supply information the website cannot know:

- Confirm the approved project title and team name.
- Replace “Member 1”, “Member 2”, and “Member 3” on the overview with the three teammates' names.
- Confirm the course codes and titles against your timetable/UMS, especially the displayed code format “C INT 108”.
- Keep sample data labeled as examples, or replace it with verified, approved project data before presenting it as real.
- Add each member's name and registration number to the course's submission template.
- Enter the verified course list for Semesters 2–8 if those semesters are part of the presentation.
- Create a GitHub repository, upload these project files, and copy its accessible URL.
- Deploy the site, for example with GitHub Pages, and copy the live URL.
- Record a team presentation with every member participating; include the project problem, features, live walkthrough, technologies, outcomes, and each member's contribution.
- Add the repository, deployed site, and video URLs to the submission template, check every link, and upload the required `.xlsx` or `.docx` file to UMS.

The supplied guidelines mention a separate Excel template but it was not included with the attached project guidelines. Use the template from your course/UMS when your team receives it.

## Be ready to explain your work

For your viva, practice explaining how the form validates a response, how the JavaScript stores it in the browser, how course filters work, and how the page changes layout on smaller screens. Make sure each teammate can describe their own contribution and the complete application.
