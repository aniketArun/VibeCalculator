const questions = [
    {
        question: "What is my favorite programming language?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "Python", // Based on your skills
    },
    {
        question: "What framework am I currently exploring?",
        options: ["Django", "React.js", "Angular.js", "Tkinter"],
        answer: "React.js", // Current focus
    },
    {
        question: "What motivates me the most in life?",
        options: ["Learning new skills", "Helping others", "Building cool projects", "Achieving big goals"],
        answer: "Building cool projects", // Reflects your nature
    },
    {
        question: "How do I prefer to spend my free time?",
        options: ["Coding", "Running on the highway", "Writing in my diary", "Gaming"],
        answer: "Writing in my diary", // Based on recent habits
    },
    {
        question: "Which type of project excites me the most?",
        options: ["Web development", "Machine learning", "Android apps", "Hardware integration"],
        answer: "Web development", // Current Django and React focus
    },
    {
        question: "What describes me the best?",
        options: ["Hardworking", "Curious", "Creative", "Supportive"],
        answer: "Curious", // Your attitude towards learning and exploring
    },
    {
        question: "Which platform do I prefer for coding practice?",
        options: ["LeetCode", "HackerRank", "Codeforces", "GeeksforGeeks"],
        answer: "LeetCode", // You’ve solved 150+ questions there
    },
    {
        question: "What is one of my proudest achievements?",
        options: [
            "Receiving a scholarship from Youth Dreamers Foundation",
            "Completing an Android Developer Internship",
            "Building the LactVivechaka project",
            "Earning a 5-star badge in Python on HackerRank",
        ],
        answer: "Building the LactVivechaka project", // Current major project
    },
    {
        question: "How do I approach learning new technologies?",
        options: ["Online courses", "Hands-on projects", "Group discussions", "Watching tutorials"],
        answer: "Hands-on projects", // Reflects your practical approach
    },
    {
        question: "What’s my favorite way to communicate?",
        options: ["Simple and direct", "Using casual expressions", "Formal and structured", "Through memes"],
        answer: "Using casual expressions", // Based on your chat style
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const resultDiv = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    optionsContainer.innerHTML = ""; // Clear previous options
    currentQuestion.options.forEach((option) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        optionsContainer.appendChild(label);
    });
}

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        displayResult();
    }
});

function displayResult() {
    document.getElementById("quiz-box").style.display = "none";
    resultDiv.innerText = `You scored ${score} out of ${questions.length}!`;
}

// Load the first question initially
loadQuestion();
