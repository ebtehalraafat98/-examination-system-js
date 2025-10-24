// Exam state variables
let currentQuestionIndex = 0;
let userAnswers = [];
let shuffledQuestions = [];
let timer;
let timeLeft = 60; // 1 minutes
let studentName = '';

// Initialize the exam system
function initializeExam() {
    console.log('Initializing exam...');
    console.log('Question class available:', typeof Question);
    console.log('questionsData available:', typeof questionsData);
    
    if (typeof Question === 'undefined') {
        throw new Error('Question class is not loaded. Make sure Question.js is loaded before script.js');
    }
    
    if (typeof questionsData === 'undefined') {
        throw new Error('questionsData is not loaded. Make sure Question.js is loaded properly.');
    }
    
    // Create Question objects from data and shuffle them
    const questionObjects = Question.createQuestionsFromData(questionsData);
    shuffledQuestions = Question.shuffleQuestions(questionObjects).map(q => q.shuffleAnswers());
    
    console.log('Exam initialized with', shuffledQuestions.length, 'questions');
}

// Start the exam
function startExam() {
    console.log('startExam function called');
    
    const nameInput = document.getElementById('studentName');
    studentName = nameInput.value.trim();
    
    console.log('Student name:', studentName);
    
    if (!studentName) {
        alert('Please enter your name to start the exam!');
        return;
    }

    try {
        // Initialize exam
        initializeExam();
        
        // Reset exam state
        currentQuestionIndex = 0;
        userAnswers = [];
        timeLeft = 60;
        
        console.log('Exam initialized, switching screens');
        
        // Show exam screen
        document.getElementById('welcomeScreen').classList.add('hidden');
        document.getElementById('examScreen').classList.remove('hidden');
        
        // Start timer
        startTimer();
        
        // Display first question
        displayQuestion();
        
        console.log('Exam started successfully');
    } catch (error) {
        console.error('Error starting exam:', error);
        alert('Error starting exam: ' + error.message);
    }
}

// Timer functions
function startTimer() {
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            finishExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Question display functions
function displayQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Display question
    document.getElementById('questionTitle').textContent = question.title;
    document.getElementById('questionImage').innerHTML = 
        `<img src="${question.image}" alt="Question image">`;
    
    // Display answers
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const answerElement = document.createElement('div');
        answerElement.className = 'answer-option';
        answerElement.textContent = answer;
        answerElement.onclick = () => selectAnswer(index);
        answersContainer.appendChild(answerElement);
    });
    
    // Reset next button
    document.getElementById('nextBtn').disabled = true;
}

// Answer selection
function selectAnswer(answerIndex) {
    // Remove previous selections
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Select current answer
    document.querySelectorAll('.answer-option')[answerIndex].classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

// Navigation
function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        return;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= shuffledQuestions.length) {
        finishExam();
    } else {
        displayQuestion();
    }
}

// Exam completion
function finishExam() {
    clearInterval(timer);
    
    // Calculate score
    let correctAnswers = 0;
    shuffledQuestions.forEach((question, index) => {
        if (question.isCorrectAnswer(userAnswers[index])) {
            correctAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / shuffledQuestions.length) * 100);
    
    // Show results
    document.getElementById('examScreen').classList.add('hidden');
    document.getElementById('resultsScreen').classList.remove('hidden');
    
    // Animate score circle
    const circumference = 2 * Math.PI * 80;
    const offset = circumference - (percentage / 100) * circumference;
    
    setTimeout(() => {
        document.getElementById('scoreCircle').style.strokeDashoffset = offset;
        document.getElementById('scorePercentage').textContent = percentage + '%';
    }, 500);
    
    document.getElementById('scoreDetails').innerHTML = 
        `You have ${correctAnswers} out of ${shuffledQuestions.length} correct answers<br>
         Student: <strong>${studentName}</strong>`;
}

// Restart exam
function restartExam() {
    // Reset to welcome screen
    document.getElementById('resultsScreen').classList.add('hidden');
    document.getElementById('welcomeScreen').classList.remove('hidden');
    
    // Reset form
    document.getElementById('studentName').value = studentName;
}

// Handle page refresh/close
window.addEventListener('beforeunload', function (e) {
    if (timer) {
        e.preventDefault();
        e.returnValue = '';
    }
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up event listeners');
    
    // Add event listeners
    const startBtn = document.getElementById('startExamBtn');
    const nextBtn = document.getElementById('nextBtn');
    const restartBtn = document.getElementById('restartExamBtn');
    
    if (startBtn) {
        startBtn.addEventListener('click', startExam);
        console.log('Start button event listener added');
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
        console.log('Next button event listener added');
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', restartExam);
        console.log('Restart button event listener added');
    }
    
    // Allow Enter key to start exam
    const nameInput = document.getElementById('studentName');
    if (nameInput) {
        nameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                startExam();
            }
        });
    }
    
    console.log('Exam system loaded successfully');
});