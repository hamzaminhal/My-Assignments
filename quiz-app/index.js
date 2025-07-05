let questionElement = document.getElementById("question");
let optionsElement = document.getElementById("options");
let userAns = null;
let currentQuestion = 0;
let correctAnswers = 0;
let score = 0;
let nextBtn = document.getElementById("nextBtn");
let endBtn = document.getElementById("endBtn");
let quizPart = document.getElementById("quizPart");
let resultPart = document.getElementById("resultPart");
let selectedDiv = document.getElementById("selected");

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Rome", "Paris", "Madrid", "Berlin"],
    correctOption: "Paris",
  },
  {
    question: "How many legs does a spider have?",
    options: [6, 8, 10, 4],
    correctOption: 8,
  },
  {
    question: "What planet do we live on?",
    options: ["Mars", "Earth", "Venus", "Jupitar"],
    correctOption: "Earth",
  },
  {
    question: "What color are bananas when they are ripe?",
    options: ["Orange", "Yellow", "Blue", "Red"],
    correctOption: "Yellow",
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    options: ["Monkey", "Lion", "Girraf", "Cow"],
    correctOption: "Lion",
  },
];
showQuestion();

// Show Question

function showQuestion() {
  questionElement.innerHTML =
    currentQuestion + 1 + ". " + questions[currentQuestion].question;
  optionsElement.innerHTML = "";
  questions[currentQuestion].options.map((element) => {
    optionsElement.innerHTML += `<div class="radio">
    <input type="radio" onclick="saveAns(event)" name="option" id="option-${element}" value="${element}">
    <label id="option-${element}" for="option-${element}">${element}</label>
    </div>`;
  });
}

//    Next Question

function nextQuestion() {
  if (userAns == questions[currentQuestion].correctOption) {
    correctAnswers++;
    score += 10;
  }
  // debugger;
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
    // console.log(score);
  }
  if (currentQuestion == questions.length - 1) {
    nextBtn.style.display = "none";
    endBtn.style.visibility = "visible";
  }
}

// Save Answer

function saveAns(clickedAns) {
  userAns = clickedAns.target.value;
  // clickedAns.target.classList.add("selected");
}

// End Quiz

function endQuiz() {
  if (userAns == questions[currentQuestion].correctOption) {
    correctAnswers++;
    score += 10;
  }
  quizPart.style.display = "none";
  resultPart.innerHTML = `<div class="score text-center">
          Your Correct Ansers are : ${correctAnswers} <br />
          Your Total score is : ${score}
        </div>`;
}
