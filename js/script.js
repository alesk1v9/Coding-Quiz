// QUESTIONS

var questions = [
    {
      question: "Commonly used data types DO Not include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. number"],
      correctAnswer: 2
    },
    {
      question: "The condition in an if/else statement is enclosed with ",
      options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
      correctAnswer: 2
    },
    {
      question: "Arrays in JavaScript can be used to store ",
      options: ["1. number and strings", "2. other array", "3. booleans", "4. all of the above"],
      correctAnswer: 3
    },
    {
      question: "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
      correctAnswer: 2
    },
    {
      question: "A very useful tool used during development and debbunging for printing content to the debbuger is:",
      options: ["1. JavaScript", "2. Terminal/Bash", "3. for loops", "4. console.log"],
      correctAnswer: 3
    }
  ];

// GLOBAL VARIABLES

var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 75;

var startBtn = document.getElementById("start-btn");
var quizContainer = document.getElementById("quiz-container");
var questionContainer = document.getElementById("question-container");
var optionsContainer = document.getElementById("options-container");
var resultContainer = document.getElementById("result-container");
var timerInterval;

// EVENT LISTNERS

startBtn.addEventListener("click", startQuiz);

// FUNCTIONS

function startQuiz(){
    document.getElementById("start-container").style.display = "none";
    quizContainer.style.display = "block";
    displayQuestion();
    timer();
}

function timer(){
    timerInterval = setInterval(function () {
        timeLeft--;

        
        document.querySelector("header p").textContent = "Time: " + timeLeft;

        
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000); 
}

function displayQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    for (var i = 0; i < currentQuestion.options.length; i++) {
        var option = document.createElement("button");
        option.textContent = currentQuestion.options[i];
        option.addEventListener("click", checkAnswer);
        optionsContainer.appendChild(option);
    }
}

function checkAnswer(){
    //loop thru the options to check if answer is correct or wrong
    //update the score depending on answer
    //create an html element showing if answer was correct or worng
    //move to next question after validation
}

function endQuiz(){
    //finish quiz 
    //take to scores page
}