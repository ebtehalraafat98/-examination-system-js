📝 Simple Examinations System (Client-Side Quiz Application)

This project implements a dynamic, client-side quiz application built with HTML, CSS, and JavaScript, designed to meet the specified requirements for a simple, timed examination system.

🎯 Features and Requirements

The application is engineered to deliver a focused and fair examination experience, incorporating the following core requirements:

Question Structure: Questions are managed as a JavaScript array of 10 objects. Each object contains the title, image answer data (if applicable), and the correct answer index.

Organized Codebase: The project is structured using separate, organized files for HTML, CSS, and JavaScript (index.html, style.css, script.js).

Aesthetic Design: Features a clean, aligned design using a robust CSS framework/library.

Entry Point: The home page prompts the student for their name via a pop-up and activates the "Start" button upon successful entry.

Timed Exam: The entire examination is governed by a visible 1-minute timer bar.

Navigation: Questions are displayed one at a time with "Next" and "Previous" buttons for navigation.

Custom Font: Applies the "Every one has the right to freedom" Google Font to the question and answer text for unique styling.

Interaction Guardrail: The "Next" button remains deactivated until the user selects an answer.

Visual Feedback: The user's selected answer is highlighted with a gray background immediately upon selection.

Randomization: Both the sequence of all questions and the order of answers within each question are randomized every time the exam is run.

Result Display: Upon answering all questions or when the time runs out, the system displays the final result as a percentage and a count of correct answers (e.g., "You have 9 out of 10 correct answers").

🛠️ Project Structure

The codebase adheres to a simple, organized architecture:

/simple-exam-system
├── index.html          # Main application structure
├── style.css           # Styling and layout rules
└── script.js           # Core quiz logic, DOM manipulation, timer, and result calculation


🚀 Running the Project

Clone the Repository:

git clone [Your Repository URL]


Open: Navigate to the project directory and open index.html in your web browser.

Start: Enter your name in the prompt and click the "Start" button to begin the 1-minute exam.
