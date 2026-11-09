const BASE_COURSES = [
  { id: 'cse105', name: 'Creative Engineering Workshop', code: 'CSE 105', icon: '⚙', color: '#eeeaff', ink: '#7568d5', faculty: 'Course faculty', rating: 4.6, responses: 38, focus: 'Hands-on engineering practice, prototyping, teamwork, and creative problem solving.' },
  { id: 'cse111', name: 'Orientation to Computing', code: 'CSE 111', icon: '⌘', color: '#e8f7f0', ink: '#46a77f', faculty: 'Course faculty', rating: 4.5, responses: 34, focus: 'Computing fundamentals, digital systems, and the role of technology in everyday life.' },
  { id: 'cse326', name: 'Internet Programming', code: 'CSE 326', icon: '◎', color: '#e8f5ff', ink: '#5796cd', faculty: 'Course faculty', rating: 4.4, responses: 31, focus: 'Web technologies, HTML, CSS, JavaScript, and interactive website development.' },
  { id: 'cint108', name: 'Python Programming', code: 'C INT 108', icon: '🐍', color: '#fff4df', ink: '#c58b39', faculty: 'Course faculty', rating: 4.7, responses: 29, focus: 'Python syntax, problem solving, data types, control flow, functions, and practical programs.' },
  { id: 'int335', name: 'Design Thinking', code: 'INT 335', icon: '✦', color: '#fff0e8', ink: '#df9561', faculty: 'Course faculty', rating: 4.5, responses: 27, focus: 'Human centered problem discovery, idea generation, prototyping, and testing.' },
  { id: 'mec136', name: 'Engineering Drawing with AutoCAD', code: 'MEC 136', icon: '▧', color: '#fcecf3', ink: '#c56f98', faculty: 'Course faculty', rating: 4.3, responses: 25, focus: 'Engineering graphics, technical drawing conventions, and 2D drafting with AutoCAD.' },
  { id: 'mth165', name: 'Mathematics for Engineers', code: 'MTH 165', icon: '∑', color: '#edf1ff', ink: '#6277c8', faculty: 'Course faculty', rating: 4.6, responses: 36, focus: 'Mathematical methods and core concepts used to solve engineering problems.' }
];

const SEED_IMPROVEMENTS = [
  { id: 'seed-1', demo: true, courseId: 'cse326', title: 'More guided website examples', detail: 'Example demo update: a step-by-step practice page covers HTML structure, CSS layout, and JavaScript interactions.', date: 'Nov 4, 2026', status: 'Completed' },
  { id: 'seed-2', demo: true, courseId: 'cint108', title: 'Python practice set expanded', detail: 'Example demo update: beginner exercises cover conditions, loops, and functions, with worked solutions for practice.', date: 'Oct 29, 2026', status: 'Completed' },
  { id: 'seed-3', demo: true, courseId: 'mec136', title: 'AutoCAD doubt-clearing session planned', detail: 'Example demo update: a weekly support session can help students practise drawing commands and resolve common drafting questions.', date: 'Oct 24, 2026', status: 'In progress' },
  { id: 'seed-4', demo: true, courseId: 'cse105', title: 'Workshop planning checklist shared', detail: 'Example demo update: a preparation checklist helps teams bring materials, divide roles, and plan hands-on workshop time.', date: 'Oct 18, 2026', status: 'Completed' }
];
const SAMPLE_FEEDBACK = [
  { id: 'sample-1', demo: true, courseId: 'cse326', category: 'Course materials', rating: 5, comment: 'The step-by-step examples make it easier to understand how the HTML and CSS fit together. More practice tasks would be helpful.', anonymous: true, createdAt: Date.now() - 86400000 * 2, reviewed: false },
  { id: 'sample-2', demo: true, courseId: 'cint108', category: 'Pace & workload', rating: 4, comment: 'The Python topics are interesting. A short recap sheet before each lab would help me revise the commands.', anonymous: true, createdAt: Date.now() - 86400000 * 4, reviewed: true },
  { id: 'sample-3', demo: true, courseId: 'mec136', category: 'Assignments', rating: 3, comment: 'AutoCAD takes practice. A few extra command demonstrations during class would help me complete drawings with more confidence.', anonymous: true, createdAt: Date.now() - 86400000 * 6, reviewed: false },
  { id: 'sample-4', demo: true, courseId: 'cse105', category: 'Class participation', rating: 4, comment: 'The hands-on workshop is engaging. Sharing the activity requirements before class would help teams prepare materials.', anonymous: true, createdAt: Date.now() - 86400000 * 8, reviewed: false }
];
const STORAGE_KEY = 'tech-triad-academic-feedback-v2';
const PROFILE_KEY = 'tech-triad-student-profile-v1';
const COURSE_CATALOG_KEY = 'tech-triad-course-catalog-v1';
const COURSE_COLORS = [
  { icon: '⌘', color: '#eeeaff', ink: '#7568d5' }, { icon: '∑', color: '#e8f5ff', ink: '#5796cd' },
  { icon: '✦', color: '#fff0e8', ink: '#df9561' }, { icon: '▧', color: '#e8f7f0', ink: '#46a77f' }
];
function readCustomCourses() {
  try {
    const parsed = JSON.parse(localStorage.getItem(COURSE_CATALOG_KEY) || '[]');
    return Array.isArray(parsed) ? parsed.filter((course) => course && course.id && course.name && course.code && Number(course.semester) >= 1 && Number(course.semester) <= 8) : [];
  } catch { return []; }
}
let COURSES = [...BASE_COURSES.map((course) => ({ ...course, semester: 1 })), ...readCustomCourses()];
const RATING_WORDS = ['Needs work', 'Fair', 'Good', 'Very good', 'Excellent'];
let selectedRating = 0;
let toastTimer;

function readData() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const savedFeedback = Array.isArray(parsed.feedback) ? parsed.feedback.filter((item) => COURSES.some((course) => course.id === item.courseId)) : [];
    const savedImprovements = Array.isArray(parsed.improvements) ? parsed.improvements.filter((item) => COURSES.some((course) => course.id === item.courseId)) : [];
    return { feedback: savedFeedback.some((item) => item.demo) ? savedFeedback : [...SAMPLE_FEEDBACK, ...savedFeedback], improvements: savedImprovements.some((item) => item.demo) ? savedImprovements : [...SEED_IMPROVEMENTS, ...savedImprovements] };
  } catch { return { feedback: SAMPLE_FEEDBACK, improvements: SEED_IMPROVEMENTS }; }
}
function saveData(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
let data = readData();
function readProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_KEY) || '{}');
    const result = { name: 'Saina Satapathy', registration: '', programme: 'B.Tech', specialization: '', year: 'First year', semester: 'Semester 1', ...saved };
    if (!result.specialization && result.programme && result.programme !== 'B.Tech' && result.programme !== 'B.Tech · First Year') result.specialization = result.programme;
    if (result.programme === 'B.Tech · First Year') result.programme = 'B.Tech';
    const savedSemester = Math.min(8, Math.max(1, Number(String(result.semester).match(/\d+/)?.[0] || 1)));
    return { ...result, programme: 'B.Tech', year: yearForSemester(savedSemester), semester: `Semester ${savedSemester}` };
  }
  catch { return { name: 'Saina Satapathy', registration: '', programme: 'B.Tech', specialization: '', year: 'First year', semester: 'Semester 1' }; }
}
let profile = readProfile();
function saveProfile() { localStorage.setItem(PROFILE_KEY, JSON.stringify(profile)); }
const byId = (id) => COURSES.find((course) => course.id === id);
const semesterNumber = (semester) => Number(String(semester).match(/\d+/)?.[0] || 1);
function yearForSemester(number) { return number <= 2 ? 'First year' : number <= 4 ? 'Second year' : number <= 6 ? 'Third year' : 'Fourth year'; }
function semesterOptions() {
  return Array.from({ length: 4 }, (_, yearIndex) => {
    const firstSemester = yearIndex * 2 + 1;
    return `<optgroup label="${yearForSemester(firstSemester)}">${[firstSemester, firstSemester + 1].map((semester) => `<option value="Semester ${semester}">Semester ${semester}</option>`).join('')}</optgroup>`;
  }).join('');
}
function saveCustomCourses() { localStorage.setItem(COURSE_CATALOG_KEY, JSON.stringify(COURSES.filter((course) => !BASE_COURSES.some((base) => base.id === course.id)))); }
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

function courseCard(course, expanded = false) {
  const ownFeedback = data.feedback.filter((item) => !item.demo && item.courseId === course.id).length;
  const submittedRatings = data.feedback.filter((item) => !item.demo && item.courseId === course.id);
  const actualAverage = submittedRatings.length ? submittedRatings.reduce((sum, item) => sum + item.rating, 0) / submittedRatings.length : null;
  const ratingSummary = actualAverage ? `<b>★</b> ${actualAverage.toFixed(1)} <span class="sample-label">· ${submittedRatings.length} student rating${submittedRatings.length === 1 ? '' : 's'}</span>` : course.rating ? `<b>★</b> ${course.rating.toFixed(1)} <span class="sample-label">· sample</span>` : '<span class="sample-label">No ratings yet</span>';
  return `<article class="course-card"><div class="course-top"><span class="course-icon" style="background:${course.color};color:${course.ink}">${course.icon}</span><span class="course-tag">${escapeHtml(course.code)} · Sem ${course.semester}</span></div><h3>${escapeHtml(course.name)}</h3><p class="course-code">${escapeHtml(course.faculty)}</p>${expanded ? `<p class="course-details">${escapeHtml(course.focus || 'Course details can be added by the course team.')}</p>` : ''}<div class="course-bottom"><span class="course-rating">${ratingSummary}</span><button class="mini-link" data-feedback-course="${course.id}">${ownFeedback ? 'Add feedback' : 'Give feedback'} →</button></div></article>`;
}

function renderCourses() {
  const selectedSemester = semesterNumber(profile.semester);
  const currentCourses = COURSES.filter((course) => Number(course.semester) === selectedSemester);
  const overview = document.querySelector('#overviewCourses');
  overview.innerHTML = currentCourses.length ? currentCourses.map((course) => courseCard(course)).join('') : `<div class="empty-course-state">No courses are listed for ${escapeHtml(profile.semester)} yet. The course team can add them from the Faculty dashboard.</div>`;
  const catalogueFilter = document.querySelector('#catalogueSemester');
  const previousCatalogueSemester = catalogueFilter?.value || 'all';
  if (catalogueFilter) {
    catalogueFilter.innerHTML = '<option value="all">All semesters</option>' + Array.from({ length: 8 }, (_, index) => `<option value="${index + 1}">Semester ${index + 1}</option>`).join('');
    catalogueFilter.value = previousCatalogueSemester;
  }
  const catalogueSemester = catalogueFilter?.value || 'all';
  const catalogueCourses = COURSES.filter((course) => catalogueSemester === 'all' || Number(course.semester) === Number(catalogueSemester));
  document.querySelector('#allCourses').innerHTML = catalogueCourses.length ? catalogueCourses.map((course) => courseCard(course, true)).join('') : `<div class="empty-course-state">No courses are listed for Semester ${escapeHtml(catalogueSemester)} yet. Add the actual course details in the Faculty dashboard.</div>`;
  renderSemesterGrid(catalogueSemester);
  const feedbackSemester = document.querySelector('#feedbackSemester');
  const previousFeedbackSemester = feedbackSemester.value || profile.semester;
  feedbackSemester.innerHTML = semesterOptions();
  feedbackSemester.value = `Semester ${semesterNumber(previousFeedbackSemester)}`;
  const profileSemester = document.querySelector('#studySemester');
  if (profileSemester) {
    const previousProfileSemester = profileSemester.value || profile.semester;
    profileSemester.innerHTML = semesterOptions();
    profileSemester.value = `Semester ${semesterNumber(previousProfileSemester)}`;
  }
  const select = document.querySelector('#courseSelect');
  const filter = document.querySelector('#improvementFilter');
  renderFeedbackCourseOptions();
  filter.innerHTML = '<option value="all">All courses</option>' + COURSES.map((c) => `<option value="${c.id}">${escapeHtml(c.code)} — ${escapeHtml(c.name)}</option>`).join('');
  document.querySelector('#improvementCourse').innerHTML = COURSES.map((c) => `<option value="${c.id}">Sem ${c.semester} · ${escapeHtml(c.code)} — ${escapeHtml(c.name)}</option>`).join('');
  const managerSemester = document.querySelector('#catalogueCourseSemester');
  if (managerSemester) {
    const previousManagerSemester = managerSemester.value || String(selectedSemester);
    managerSemester.innerHTML = Array.from({ length: 8 }, (_, index) => `<option value="${index + 1}">Semester ${index + 1}</option>`).join('');
    managerSemester.value = previousManagerSemester;
  }
  renderManagedCourseList();
}

function renderSemesterGrid(selectedSemester = 'all') {
  const grid = document.querySelector('#semesterGrid');
  grid.innerHTML = Array.from({ length: 8 }, (_, index) => {
    const semester = index + 1;
    const count = COURSES.filter((course) => Number(course.semester) === semester).length;
    const label = count ? `${count} course${count === 1 ? '' : 's'} added` : 'No courses added yet';
    return `<button class="semester-summary-card ${String(semester) === String(selectedSemester) ? 'selected' : ''}" type="button" data-catalogue-semester="${semester}" aria-pressed="${String(semester) === String(selectedSemester)}"><span class="semester-card-year">${yearForSemester(semester)}</span><strong>Semester ${semester}</strong><span class="semester-card-count">${label}</span></button>`;
  }).join('');
}

function renderFeedbackCourseOptions() {
  const semester = semesterNumber(document.querySelector('#feedbackSemester').value || profile.semester);
  const coursesForSemester = COURSES.filter((course) => Number(course.semester) === semester);
  const select = document.querySelector('#courseSelect');
  const manualFields = document.querySelector('#manualCourseFields');
  const knownFields = document.querySelector('#knownCourseFields');
  const manualMode = semester > 1;
  manualFields.classList.toggle('hidden', !manualMode);
  knownFields.classList.toggle('hidden', manualMode);
  document.querySelector('#feedbackCourseCode').required = manualMode;
  document.querySelector('#feedbackCourseName').required = manualMode;
  select.required = !manualMode;
  select.innerHTML = coursesForSemester.length
    ? '<option value="">Choose a course</option>' + coursesForSemester.map((course) => `<option value="${course.id}">${escapeHtml(course.code)} — ${escapeHtml(course.name)}</option>`).join('')
    : '<option value="">No courses added for this semester</option>';
  document.querySelector('#feedbackCourseNote').textContent = coursesForSemester.length
    ? manualMode ? `Type the course code and name for your Semester ${semester} subject. Existing catalogue entries are available to the faculty dashboard.` : `Showing ${coursesForSemester.length} courses for Semester 1.`
    : manualMode ? `Type the official course code and subject name for Semester ${semester}.` : 'Choose one of the seven Semester 1 courses.';
}

function renderManagedCourseList() {
  const list = document.querySelector('#managedCourseList');
  if (!list) return;
  const customCourses = COURSES.filter((course) => !BASE_COURSES.some((base) => base.id === course.id));
  list.innerHTML = customCourses.length
    ? customCourses.map((course) => `<div class="managed-course-row"><span><strong>${escapeHtml(course.code)} · ${escapeHtml(course.name)}</strong><small>Semester ${course.semester}</small></span></div>`).join('')
    : '<p class="course-manager-empty">No additional semester courses added yet.</p>';
}

function renderStats() {
  const ownFeedback = data.feedback.filter((item) => !item.demo);
  const currentSemester = semesterNumber(profile.semester);
  const currentCourseCount = COURSES.filter((course) => Number(course.semester) === currentSemester).length;
  document.querySelector('#statCourses').textContent = currentCourseCount;
  document.querySelector('#courseCountNote').textContent = `${profile.semester} · ${yearForSemester(currentSemester)}`;
  document.querySelector('#overviewSemesterLabel').textContent = profile.semester.toUpperCase();
  document.querySelector('#currentSemesterTitle').textContent = currentCourseCount ? `${profile.semester} courses · select a class to share feedback.` : `No courses added for ${profile.semester} yet.`;
  document.querySelector('#semesterPill').textContent = profile.semester;
  document.querySelector('#statFeedback').textContent = ownFeedback.length;
  document.querySelector('#feedbackStatNote').textContent = ownFeedback.length ? 'Your submissions saved in this browser' : 'Submit feedback to start your history';
  const average = ownFeedback.length ? ownFeedback.reduce((sum, item) => sum + item.rating, 0) / ownFeedback.length : null;
  document.querySelector('#statRating').textContent = average ? average.toFixed(1) : '—';
  document.querySelector('#ratingStatNote').textContent = average ? 'Average of your submitted ratings' : 'Your average appears after your first rating';
  document.querySelector('#statImprovements').textContent = data.improvements.filter((item) => item.demo && item.status === 'Completed').length;
  const activity = document.querySelector('#activityList');
  const recent = ownFeedback.sort((a, b) => b.createdAt - a.createdAt).slice(0, 3);
  activity.innerHTML = recent.length ? recent.map((item) => {
    const course = byId(item.courseId);
    const date = new Date(item.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    return `<div class="activity-row"><span class="activity-dot">✳</span><div class="activity-copy"><strong>Feedback shared · ${escapeHtml(course?.name || 'Course')}</strong><p>${escapeHtml(item.comment)}</p></div><span class="activity-time">${date}</span></div>`;
  }).join('') : '<div class="empty-activity"><div><span>✳</span> Your feedback activity will show up here.</div></div>';
}

function renderImprovements() {
  const selected = document.querySelector('#improvementFilter').value;
  const items = data.improvements.filter((item) => selected === 'all' || item.courseId === selected);
  const list = document.querySelector('#improvementList');
  document.querySelector('#improvementEmpty').classList.toggle('hidden', items.length > 0);
  list.innerHTML = items.map((item) => {
    const course = byId(item.courseId);
    return `<article class="improvement-card"><span class="improvement-symbol">↗</span><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.detail)}</p><div class="improvement-meta"><span>Sem ${course?.semester || ''} · ${escapeHtml(course?.code || '')} · ${escapeHtml(course?.name || 'Course')}</span><span>·</span><span>${escapeHtml(item.date)}</span>${item.demo ? '<span class="demo-badge">Sample</span>' : ''}</div></div><span class="status-pill" style="${item.status === 'In progress' ? 'color:#b07d35;background:#fff5df' : ''}">${escapeHtml(item.status)}</span></article>`;
  }).join('');
}

function renderFaculty() {
  const average = data.feedback.length ? (data.feedback.reduce((sum, item) => sum + item.rating, 0) / data.feedback.length).toFixed(1) : '—';
  const publishedCount = data.improvements.filter((item) => !item.demo).length;
  const demoCount = data.feedback.filter((item) => item.demo).length;
  document.querySelector('#facultyStats').innerHTML = `<div class="stat-card"><div class="stat-top"><span>Feedback inbox</span><span class="stat-icon lilac">✳</span></div><div class="stat-value">${data.feedback.length}</div><div class="stat-note">${demoCount} sample responses + real submissions</div></div><div class="stat-card"><div class="stat-top"><span>Average rating</span><span class="stat-icon peach">★</span></div><div class="stat-value">${average}<small>/ 5</small></div><div class="stat-note">Sample and submitted feedback</div></div><div class="stat-card"><div class="stat-top"><span>Team updates published</span><span class="stat-icon mint">↗</span></div><div class="stat-value">${publishedCount}</div><div class="stat-note">Updates your team has added</div></div>`;
  const inbox = document.querySelector('#facultyInbox');
  const items = [...data.feedback].sort((a, b) => b.createdAt - a.createdAt);
  document.querySelector('#inboxCount').textContent = `${items.length} RESPONSE${items.length === 1 ? '' : 'S'}`;
  inbox.innerHTML = items.length ? items.map((item) => {
    const course = byId(item.courseId);
    const date = new Date(item.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    const responseBy = item.anonymous ? 'Anonymous student' : `From ${item.studentName || 'student'}`;
    const attachment = item.attachment ? `<a class="attachment-link" href="${item.attachment.dataUrl}" download="${escapeHtml(item.attachment.name)}">📎 ${escapeHtml(item.attachment.name)}</a>` : '';
    return `<article class="inbox-item"><div class="inbox-meta"><strong>Sem ${course?.semester || ''} · ${escapeHtml(course?.code || '')} · ${escapeHtml(course?.name || 'Course')}</strong><span>${escapeHtml(item.category)} · ${date}</span></div><div class="inbox-byline">${escapeHtml(responseBy)}${item.demo ? '<span class="demo-badge">Sample demo</span>' : ''}</div><div class="inbox-rating">${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}</div><p>${escapeHtml(item.comment)}</p>${attachment}<button class="review-button" data-review="${escapeHtml(item.id)}">${item.reviewed ? '✓ Reviewed' : 'Mark as reviewed'}</button></article>`;
  }).join('') : '<div class="empty-activity"><div><span>✳</span> New student feedback will appear here.</div></div>';
}

function showView(name) {
  document.querySelectorAll('.view').forEach((view) => view.classList.toggle('active', view.id === `view-${name}`));
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.view === name));
  const labels = { overview: 'Overview', feedback: 'Give feedback', courses: 'My courses', improvements: 'Improvements', faculty: 'Faculty dashboard', profile: 'Student profile' };
  document.querySelector('#breadcrumbTitle').textContent = labels[name] || 'Overview';
  document.querySelector('#roleSwitch').textContent = name === 'faculty' ? 'Student view' : 'Faculty view';
  document.querySelector('.avatar').textContent = name === 'faculty' ? 'F' : (profile.name.trim().charAt(0).toUpperCase() || 'S');
  document.querySelector('#sidebar').classList.remove('open');
  if (name === 'improvements') renderImprovements();
  if (name === 'faculty') renderFaculty();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function notify(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}
function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('The selected file could not be read.'));
    reader.readAsDataURL(file);
  });
}

function fillProfileForm() {
  document.querySelector('#studentName').value = profile.name;
  document.querySelector('#registrationNumber').value = profile.registration;
  document.querySelector('#programme').value = profile.programme;
  document.querySelector('#specialization').value = profile.specialization;
  document.querySelector('#studyYear').value = profile.year;
  document.querySelector('#studySemester').value = profile.semester;
  document.querySelector('.avatar').textContent = profile.name.trim().charAt(0).toUpperCase() || 'S';
}

function addCourse(course) {
  COURSES.push(course);
  saveCustomCourses();
  renderCourses();
  renderStats();
  renderFaculty();
}

function setRating(value) {
  selectedRating = value;
  document.querySelectorAll('#ratingPicker button').forEach((button) => button.classList.toggle('selected', Number(button.dataset.rating) <= value));
  document.querySelector('#ratingCaption').textContent = RATING_WORDS[value - 1];
}

document.addEventListener('click', (event) => {
  const navigation = event.target.closest('[data-view]');
  if (navigation) showView(navigation.dataset.view);
  const courseButton = event.target.closest('[data-feedback-course]');
  if (courseButton) {
    showView('feedback');
    const chosenCourse = byId(courseButton.dataset.feedbackCourse);
    if (chosenCourse) {
      document.querySelector('#feedbackSemester').value = `Semester ${chosenCourse.semester}`;
      renderFeedbackCourseOptions();
    }
    if (chosenCourse && Number(chosenCourse.semester) > 1) {
      document.querySelector('#feedbackCourseCode').value = chosenCourse.code;
      document.querySelector('#feedbackCourseName').value = chosenCourse.name;
    } else {
      document.querySelector('#courseSelect').value = courseButton.dataset.feedbackCourse;
    }
    document.querySelector('#commentInput').focus({ preventScroll: true });
  }
});
document.querySelector('#menuButton').addEventListener('click', () => document.querySelector('#sidebar').classList.toggle('open'));
document.querySelector('#ratingPicker').addEventListener('click', (event) => {
  const button = event.target.closest('[data-rating]');
  if (button) setRating(Number(button.dataset.rating));
});
document.querySelector('#commentInput').addEventListener('input', (event) => {
  document.querySelector('#charCount').textContent = `${event.target.value.length} / 600`;
});
document.querySelector('#anonymousToggle').addEventListener('change', (event) => {
  document.querySelector('#anonymousHelp').textContent = event.target.checked
    ? 'Your name won’t be attached to this response.'
    : `Faculty can see your profile name: ${profile.name}.`;
});
document.querySelector('#profileForm').addEventListener('submit', (event) => {
  event.preventDefault();
  profile = {
    name: document.querySelector('#studentName').value.trim(),
    registration: document.querySelector('#registrationNumber').value.trim(),
    programme: document.querySelector('#programme').value.trim(),
    specialization: document.querySelector('#specialization').value.trim(),
    year: yearForSemester(semesterNumber(document.querySelector('#studySemester').value)),
    semester: document.querySelector('#studySemester').value
  };
  saveProfile();
  document.querySelector('#feedbackSemester').value = profile.semester;
  renderCourses();
  renderStats();
  fillProfileForm();
  notify('Student profile saved on this browser.');
});
document.querySelector('#catalogueSemester').addEventListener('change', renderCourses);
document.querySelector('#semesterGrid').addEventListener('click', (event) => {
  const button = event.target.closest('[data-catalogue-semester]');
  if (!button) return;
  document.querySelector('#catalogueSemester').value = button.dataset.catalogueSemester;
  renderCourses();
});
document.querySelector('#feedbackSemester').addEventListener('change', renderFeedbackCourseOptions);
document.querySelector('#studySemester').addEventListener('change', (event) => {
  document.querySelector('#studyYear').value = yearForSemester(semesterNumber(event.target.value));
});
document.querySelector('#courseForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const semester = Number(document.querySelector('#catalogueCourseSemester').value);
  const code = document.querySelector('#newCourseCode').value.trim();
  const name = document.querySelector('#newCourseName').value.trim();
  if (COURSES.some((course) => Number(course.semester) === semester && course.code.toLowerCase() === code.toLowerCase())) {
    return notify('That course code is already listed for this semester.');
  }
  const palette = COURSE_COLORS[COURSES.length % COURSE_COLORS.length];
  addCourse({ id: `sem${semester}-${Date.now()}`, semester, code, name, focus: document.querySelector('#newCourseDescription').value.trim(), faculty: 'Course faculty', rating: null, responses: 0, ...palette });
  event.target.reset();
  document.querySelector('#catalogueCourseSemester').value = String(semester);
  renderManagedCourseList();
  notify(`${code} added to Semester ${semester}.`);
});
document.querySelector('#improvementFilter').addEventListener('change', renderImprovements);
document.querySelector('#roleSwitch').addEventListener('click', () => {
  const toFaculty = !document.querySelector('#view-faculty').classList.contains('active');
  showView(toFaculty ? 'faculty' : 'overview');
});
document.querySelector('#facultyInbox').addEventListener('click', (event) => {
  const button = event.target.closest('[data-review]');
  if (!button) return;
  const feedback = data.feedback.find((item) => item.id === button.dataset.review);
  if (feedback) {
    feedback.reviewed = true;
    saveData(data);
    renderFaculty();
    notify('Feedback marked as reviewed.');
  }
});
document.querySelector('#improvementForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#improvementTitle').value.trim();
  const detail = document.querySelector('#improvementDetail').value.trim();
  data.improvements.unshift({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), courseId: document.querySelector('#improvementCourse').value, title, detail, date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }), status: document.querySelector('#improvementStatus').value });
  saveData(data);
  event.target.reset();
  renderStats(); renderFaculty(); renderImprovements();
  notify('Course improvement published.');
});
document.querySelector('#feedbackForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const semester = semesterNumber(document.querySelector('#feedbackSemester').value);
  let courseId = document.querySelector('#courseSelect').value;
  if (semester > 1) {
    const code = document.querySelector('#feedbackCourseCode').value.trim();
    const name = document.querySelector('#feedbackCourseName').value.trim();
    if (!code || !name) return notify('Enter both the course code and subject name.');
    let matchingCourse = COURSES.find((course) => Number(course.semester) === semester && course.code.toLowerCase() === code.toLowerCase());
    if (matchingCourse && matchingCourse.name.toLowerCase() !== name.toLowerCase()) return notify('This course code is already saved with a different name. Check the course details.');
    if (!matchingCourse) {
      const palette = COURSE_COLORS[COURSES.length % COURSE_COLORS.length];
      matchingCourse = { id: `sem${semester}-${Date.now()}`, semester, code, name, focus: 'Student-entered course for feedback.', faculty: 'Course faculty', rating: null, responses: 0, ...palette };
      addCourse(matchingCourse);
    }
    courseId = matchingCourse.id;
  }
  const category = document.querySelector('#categorySelect').value;
  const comment = document.querySelector('#commentInput').value.trim();
  const file = document.querySelector('#evidenceFile').files[0];
  if (!selectedRating) return notify('Choose a star rating before submitting.');
  if (!courseId || !category || comment.length < 10) return notify('Please complete each required field.');
  if (file && file.size > 500 * 1024) return notify('Please choose a file smaller than 500 KB.');
  if (file && !/\.(pdf|png|jpe?g|docx?)$/i.test(file.name)) return notify('Choose a PDF, image, or Word document.');
  let attachment = null;
  try {
    if (file) attachment = { name: file.name, dataUrl: await readFileAsDataUrl(file) };
  } catch (error) { return notify(error.message); }
  const anonymous = document.querySelector('#anonymousToggle').checked;
  data.feedback.push({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), courseId, category, rating: selectedRating, comment, anonymous, studentName: anonymous ? '' : profile.name, attachment, createdAt: Date.now(), reviewed: false });
  saveData(data);
  event.target.reset();
  selectedRating = 0;
  document.querySelectorAll('#ratingPicker button').forEach((button) => button.classList.remove('selected'));
  document.querySelector('#ratingCaption').textContent = 'Select a rating';
  document.querySelector('#charCount').textContent = '0 / 600';
  document.querySelector('#anonymousHelp').textContent = 'Your name won’t be attached to this response.';
  renderCourses(); renderStats();
  showView('overview');
  notify('Thanks — your feedback has been saved.');
});

renderCourses();
renderStats();
renderImprovements();
renderFaculty();
fillProfileForm();
