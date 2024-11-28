const questions =  [
    {
        question: "What is Django?",
        options: [
            "A front-end framework",
            "A Python-based web framework",
            "A JavaScript library",
            "A database system"
        ],
        answer: "A Python-based web framework"
    },
    {
        question: "What architectural pattern does Django follow?",
        options: ["MVC", "MVT", "MVVM", "MVP"],
        answer: "MVT"
    },
    {
        question: "Which command is used to start a new Django project?",
        options: [
            "django-admin startproject",
            "python manage.py startproject",
            "django-admin startapp",
            "python manage.py startapp"
        ],
        answer: "django-admin startproject"
    },
    {
        question: "What file in a Django app defines the URL configurations?",
        options: ["urls.py", "views.py", "settings.py", "models.py"],
        answer: "urls.py"
    },
    {
        question: "Which file contains the database configurations in a Django project?",
        options: ["settings.py", "models.py", "database.py", "urls.py"],
        answer: "settings.py"
    },
    {
        question: "What is the default database used by Django?",
        options: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
        answer: "SQLite"
    },
    {
        question: "Which command is used to create a new app in Django?",
        options: [
            "django-admin startapp",
            "python manage.py startproject",
            "django-admin createapp",
            "python manage.py startapp"
        ],
        answer: "python manage.py startapp"
    },
    {
        question: "What is a Django model?",
        options: [
            "A blueprint for the database",
            "A template for rendering HTML",
            "A function for handling requests",
            "A file for managing URLs"
        ],
        answer: "A blueprint for the database"
    },
    {
        question: "Which Django command applies migrations to the database?",
        options: [
            "python manage.py makemigrations",
            "python manage.py migrate",
            "python manage.py syncdb",
            "python manage.py dbsync"
        ],
        answer: "python manage.py migrate"
    },
    {
        question: "What is the purpose of the `settings.py` file in Django?",
        options: [
            "Defining database models",
            "Managing application URLs",
            "Configuring project settings",
            "Rendering templates"
        ],
        answer: "Configuring project settings"
    },
    {
        question: "Which template engine is used by default in Django?",
        options: ["Jinja2", "Mako", "Django Template Language", "Mustache"],
        answer: "Django Template Language"
    },
    {
        question: "What is the use of the `render()` function in Django?",
        options: [
            "Redirecting users to another page",
            "Sending raw HTTP responses",
            "Rendering templates with context",
            "Managing URL patterns"
        ],
        answer: "Rendering templates with context"
    },
    {
        question: "What is the role of the `views.py` file in Django?",
        options: [
            "Defining how the application responds to user requests",
            "Configuring database models",
            "Setting up middleware",
            "Storing static files"
        ],
        answer: "Defining how the application responds to user requests"
    },
    {
        question: "Which of the following is NOT a valid field type in Django models?",
        options: ["CharField", "IntegerField", "EmailField", "JSONField"],
        answer: "JSONField"
    },
    {
        question: "What does the `@login_required` decorator do?",
        options: [
            "Restricts access to authenticated users",
            "Applies middleware to a view",
            "Defines URL routing",
            "Enables session management"
        ],
        answer: "Restricts access to authenticated users"
    },
    {
        question: "Which command is used to create migrations in Django?",
        options: [
            "python manage.py migrate",
            "python manage.py makemigrations",
            "django-admin create-migrations",
            "python manage.py syncdb"
        ],
        answer: "python manage.py makemigrations"
    },
    {
        question: "What is the default port used when running a Django development server?",
        options: ["8000", "8080", "5000", "3000"],
        answer: "8000"
    },
    {
        question: "How can you serve static files in Django?",
        options: [
            "Using the `STATICFILES_DIRS` setting",
            "Using the `MEDIA_ROOT` setting",
            "Directly referencing the file paths",
            "By embedding in `views.py`"
        ],
        answer: "Using the `STATICFILES_DIRS` setting"
    },
    {
        question: "What is the purpose of `csrf_token` in Django templates?",
        options: [
            "To enable secure file uploads",
            "To protect against CSRF attacks",
            "To handle form validations",
            "To debug template rendering"
        ],
        answer: "To protect against CSRF attacks"
    },
    {
        question: "Which Django ORM method is used to retrieve all objects from a model?",
        options: ["objects.all()", "objects.filter()", "objects.get()", "objects.select()"],
        answer: "objects.all()"
    },
    {
        question: "What does the `Django Admin` interface provide?",
        options: [
            "An interface for managing models and data",
            "A GUI for writing Python code",
            "A tool for database optimization",
            "A debugger for Django projects"
        ],
        answer: "An interface for managing models and data"
    },
    {
        question: "What is the extension of a Django template file?",
        options: [".html", ".django", ".tpl", ".template"],
        answer: ".html"
    },
    {
        question: "Which of the following is used to inherit templates",
        options: [
            "{%inherit base%}",
            "{%include base%}",
            "{%exclude base%}",
            "{%extends base%}"
        ],
        answer: "{%extends base%}"
    },
    {
        question: "Which statement will render variable in Django?",
        options: ["{var}", "{{%var%}}", "var", "{{var}}"],
        answer: "{{var}}"
    },
    {
        question: "How do you run a Django project on a different port?",
        options: [
            "python manage.py runserver 8080",
            "python manage.py startproject 8080",
            "django-admin runserver 8080",
            "python manage.py devserver 8080"
        ],
        answer: "python manage.py runserver 8080"
    }
];


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
