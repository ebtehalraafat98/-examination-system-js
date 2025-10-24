class Question {
    constructor(title, image, answers, correct) {
        this.title = title;
        this.image = image;
        this.answers = answers;
        this.correct = correct;
    }

    // Method to shuffle the answers and update the correct index
    shuffleAnswers() {
        const correctAnswer = this.answers[this.correct];
        const shuffled = [...this.answers];
        
        // Fisher-Yates shuffle algorithm
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        return new Question(
            this.title,
            this.image,
            shuffled,
            shuffled.indexOf(correctAnswer)
        );
    }

    // Method to check if the given answer is correct
    isCorrectAnswer(answerIndex) {
        return answerIndex === this.correct;
    }

    // Method to get the correct answer text
    getCorrectAnswerText() {
        return this.answers[this.correct];
    }

    // Static method to create questions from data array
    static createQuestionsFromData(questionsData) {
        return questionsData.map(data => new Question(
            data.title,
            data.image,
            data.answers,
            data.correct
        ));
    }

    // Static method to shuffle an array of questions
    static shuffleQuestions(questions) {
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}
//ORGANIZE YOUR CODE (CRETE MAIN CLASS THEN OTHER FILES)
// Questions data
const questionsData = [
    {
        title: "What animal is this?",
        image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=300&h=300&fit=crop",
        answers: ["Dog", "Cat", "Rabbit"],
        correct: 0
    },
    {
        title: "What type of flower is this?",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxk5DSIP_0IKdpFUwlqx9vML8K1NlZSmfv3g&s",
        answers: ["Rose", "Tulip", "Sunflower"],
        correct: 2
    },
    {
        title: "Which landmark is this?",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=300&h=300&fit=crop",
        answers: ["Big Ben", "Eiffel Tower", "Statue of Liberty"],
        correct: 1
    },
    {
        title: "What car brand is this?",
        image: "https://wallpapers.com/images/hd/audi-logo-for-car-brands-nscatwacpddngwu7.jpg",
        answers: ["BMW", "Mercedes", "Audi"],
        correct: 2
    },
    {
        title: "Which fruit is this?",
        image: "https://assets.clevelandclinic.org/transform/LargeFeatureImage/cd71f4bd-81d4-45d8-a450-74df78e4477a/Apples-184940975-770x533-1_jpg",
        answers: ["Orange", "Apple", "Peach"],
        correct: 1
    },
    {
        title: "What instrument is this?",
        image: "https://m.media-amazon.com/images/I/714kO41XjDL.__AC_SX300_SY300_QL70_ML2_.jpg",
        answers: ["Piano", "Guitar", "Violin"],
        correct: 1
    },
    {
        title: "Which sport is this?",
        image: "https://www.rockstaracademy.com/lib/images/news/basketball.jpeg",
        answers: ["Basketball", "Football", "Tennis"],
        correct: 0
    },
    {
        title: "What season is depicted?",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/D%C3%BClmen%2C_Wildpark_--_2014_--_3808_color_balanced.jpg",
        answers: ["Spring", "Summer", "Autumn"],
        correct: 2
    },
    {
        title: "Which food is this?",
        image: "https://www.allrecipes.com/thmb/aefJMDXKqs42oAP71dQuYf_-Qdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_4x3_1724-fd91f26e0bd6400a9e89c6866336532b.jpg",
        answers: ["Pizza", "Burger", "Pasta"],
        correct: 0
    },
    {
        title: "What weather is shown?",
        image: "https://caymancompass.s3.amazonaws.com/wp-content/uploads/2025/05/BACKGROUND-PIC-Rainy-season.jpeg",
        answers: ["Sunny", "Rainy", "Snowy"],
        correct: 1
    }
];