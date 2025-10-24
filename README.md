# 📝 Simple Examinations System

This project is a web-based examination system built using **HTML**, **CSS**, and **JavaScript**. It displays randomized image-based questions, tracks user responses, and calculates the final score with a visual result interface.

## 📌 Requirements & Features

1. Questions are stored as an array of objects in JavaScript.  
   Each object includes:  
   - `questionTitle`  
   - `imageAnswers[]`  
   - `correctAnswer`

2. All project files are organized into separate folders:  
   - `index.html`  
   - `styles.css`  
   - `script.js`

3. The home page prompts the student to enter their name using a CSS popup (e.g. SweetAlert or similar).  
   Once entered, the **Start** button becomes active.

4. A timer bar (1 minute) is displayed during the exam.  
   The exam auto-submits when time runs out.

5. Only **one question** is displayed at a time.  
   Navigation is handled via a **Next** button (no Previous button).

6. Each question includes 3–5 image-based answers.  
   Example layout:

7. CSS styling is applied to both questions and answers for clean alignment and responsive design.

8. The **Next** button remains disabled until the student selects an answer.

9. Only one answer can be selected per question.  
The selected answer is highlighted with a gray background.

10. Questions and answers are randomized each time the exam runs.

11. At the end, the result is displayed as a circular progress bar showing the score percentage.  
 Example:  
 ```
 Your score is: 45%
 ```

## 🎯 Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)


