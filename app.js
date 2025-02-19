const questions = [
    {
        question: "What is the primary function of an operating system?",
        options: [
            "To perform calculations",
            "To manage hardware and software resources",
            "To compile code",
            "To manage user accounts"
        ],
        answer: "To manage hardware and software resources"
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Process Unit",
            "Central Processing Unit",
            "Central Programming Unit",
            "Core Processing Unit"
        ],
        answer: "Central Processing Unit"
    },
    {
        question: "Which data structure uses a LIFO (Last In, First Out) approach?",
        options: ["Queue", "Stack", "Array", "Linked List"],
        answer: "Stack"
    },
    {
        question: "What is the full form of HTTP?",
        options: [
            "HyperText Transfer Protocol",
            "Hyper Transfer Text Protocol",
            "HyperText Transmission Protocol",
            "Hyper Transfer Transmission Protocol"
        ],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "System Query Language",
            "Sequential Query Language",
            "Syntax Query Language"
        ],
        answer: "Structured Query Language"
    },
    {
        question: "Which sorting algorithm is the fastest in the average case?",
        options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
        answer: "Quick Sort"
    },
    {
        question: "What is the primary key in a database?",
        options: [
            "A unique identifier for a record",
            "A field used for searching",
            "A key to encrypt data",
            "A column that stores binary data"
        ],
        answer: "A unique identifier for a record"
    },
    {
        question: "What is the time complexity of a binary search algorithm?",
        options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
        answer: "O(log n)"
    },
    {
        question: "What is the purpose of the OSI model in networking?",
        options: [
            "To provide a framework for understanding network architecture",
            "To encrypt network data",
            "To manage server resources",
            "To standardize programming languages"
        ],
        answer: "To provide a framework for understanding network architecture"
    },
    {
        question: "Which protocol is used to assign IP addresses dynamically?",
        options: ["DNS", "DHCP", "FTP", "HTTP"],
        answer: "DHCP"
    },
    {
        question: "Which layer of the OSI model is responsible for data encryption?",
        options: ["Network Layer", "Transport Layer", "Presentation Layer", "Application Layer"],
        answer: "Presentation Layer"
    },
    {
        question: "What is the difference between RAM and ROM?",
        options: [
            "RAM is volatile, ROM is non-volatile",
            "RAM is for permanent storage, ROM is temporary",
            "Both are non-volatile",
            "Both are volatile"
        ],
        answer: "RAM is volatile, ROM is non-volatile"
    },
    {
        question: "What is a deadlock in operating systems?",
        options: [
            "A state where processes wait indefinitely for resources",
            "A crash of the operating system",
            "An infinite loop in a process",
            "A low-level hardware issue"
        ],
        answer: "A state where processes wait indefinitely for resources"
    },
    {
        question: "What is the function of DNS in networking?",
        options: [
            "To translate domain names into IP addresses",
            "To establish a secure connection",
            "To assign MAC addresses to devices",
            "To manage email servers"
        ],
        answer: "To translate domain names into IP addresses"
    },
    {
        question: "What is an algorithm?",
        options: [
            "A programming language",
            "A set of steps to solve a problem",
            "A hardware component",
            "An error in a program"
        ],
        answer: "A set of steps to solve a problem"
    },
    {
        question: "What does OOP stand for?",
        options: [
            "Object-Oriented Programming",
            "Objective Programming",
            "Operation-Oriented Programming",
            "Object Programming"
        ],
        answer: "Object-Oriented Programming"
    },
    {
        question: "Which programming paradigm is used in C?",
        options: ["Object-Oriented", "Functional", "Procedural", "Logical"],
        answer: "Procedural"
    },
    {
        question: "What does the 'Big O' notation represent?",
        options: [
            "The memory usage of an algorithm",
            "The runtime complexity of an algorithm",
            "The number of variables in a program",
            "The storage requirements for an algorithm"
        ],
        answer: "The runtime complexity of an algorithm"
    },
    {
        question: "What is a cache in computer systems?",
        options: [
            "Temporary storage for frequently accessed data",
            "A permanent database",
            "A hardware driver",
            "An encrypted storage area"
        ],
        answer: "Temporary storage for frequently accessed data"
    },
    {
        question: "Which of the following is a lossless compression algorithm?",
        options: ["JPEG", "MP3", "PNG", "MPEG"],
        answer: "PNG"
    },
    {
        question: "What is the default port for HTTP?",
        options: ["22", "80", "443", "25"],
        answer: "80"
    },
    {
        question: "What is a 'node' in a linked list?",
        options: [
            "A point in a graph",
            "An element containing data and a reference to the next node",
            "A hardware component",
            "A storage unit"
        ],
        answer: "An element containing data and a reference to the next node"
    },
    {
        question: "What is the purpose of a firewall in networking?",
        options: [
            "To secure a network by controlling incoming and outgoing traffic",
            "To speed up internet browsing",
            "To manage data compression",
            "To convert IP addresses to MAC addresses"
        ],
        answer: "To secure a network by controlling incoming and outgoing traffic"
    },
    {
        question: "What is recursion in programming?",
        options: [
            "A function calling itself",
            "A loop inside a loop",
            "A syntax error",
            "An algorithm running infinitely"
        ],
        answer: "A function calling itself"
    },
    {
        question: "What does 'SQL injection' refer to?",
        options: [
            "A vulnerability in databases",
            "A method for optimizing queries",
            "A tool for database migration",
            "A programming paradigm"
        ],
        answer: "A vulnerability in databases"
    },
    {
        question: "What is the difference between a stack and a queue?",
        options: [
            "Stack is LIFO, queue is FIFO",
            "Queue is LIFO, stack is FIFO",
            "Both use LIFO",
            "Both use FIFO"
        ],
        answer: "Stack is LIFO, queue is FIFO"
    },
    {
        question: "What is the primary purpose of a compiler?",
        options: [
            "To execute code",
            "To translate source code into machine code",
            "To debug programs",
            "To manage runtime errors"
        ],
        answer: "To translate source code into machine code"
    },
    {
        question: "What does the 'ping' command do?",
        options: [
            "Measures network latency",
            "Establishes a secure connection",
            "Retrieves DNS records",
            "Compresses data"
        ],
        answer: "Measures network latency"
    },
    {
        question: "What is a 'foreign key' in a database?",
        options: [
            "A key linking two tables",
            "A key that encrypts data",
            "A key for indexing",
            "A unique identifier for rows"
        ],
        answer: "A key linking two tables"
    },
    {
        question: "What is the primary purpose of RAM?",
        options: [
            "To provide temporary data storage for active processes",
            "To store data permanently",
            "To process instructions",
            "To manage hardware components"
        ],
        answer: "To provide temporary data storage for active processes"
    }
];

// JavaScript to prevent copying original content and replace with a custom message
document.addEventListener('copy', function (event) {
    event.preventDefault(); // Prevent the default copy action
    const customMessage = "BHAI Mehanat Karle, Kyu kr raha hai ye sb ?";
    
    // Set the custom message in the clipboard
    if (event.clipboardData) {
        event.clipboardData.setData('text/plain', customMessage);
    } else if (window.clipboardData) { // For older IE browsers
        window.clipboardData.setData('Text', customMessage);
    }
    
    alert(customMessage); // Notify the user
});


let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];

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
    userAnswers.push({ question: questions[currentQuestionIndex].question, userAnswer, correctAnswer });

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
    const webcamPreview = document.getElementById('webcam-container');
    webcamPreview.style.display = "none"
    resultDiv.innerHTML = `
        <div class="result-container">
            <h2>🎉 Quiz Completed! 🎉</h2>
            <p class="score">You scored <span>${score}</span> out of <span>${questions.length}</span>.</p>
            <h3>Answer Summary:</h3>
            <div class="answer-summary">
                ${userAnswers
                    .map(
                        (entry, index) => `
                            <div class="answer-card">
                                <h4>Q${index + 1}: ${entry.question}</h4>
                                <p>
                                    <strong>Your Answer:</strong> ${entry.userAnswer} ${
                            entry.userAnswer === entry.correctAnswer
                                ? '<span class="correct">(Correct)</span>'
                                : `<span class="wrong">(Wrong)</span>`
                        }
                                </p>
                                ${
                                    entry.userAnswer !== entry.correctAnswer
                                        ? `<p class="correct-answer">
                                            <strong>Correct Answer:</strong> ${entry.correctAnswer}
                                          </p>`
                                        : ""
                                }
                            </div>
                        `
                    )
                    .join("")}
            </div>
        </div>
    `;
}


// Load the first question initially
loadQuestion();
