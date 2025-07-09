let questionElement = document.querySelector("#question");
let optionsElement = document.querySelector("#options");
let nextQuestionBtn = document.querySelector("#next-question");
let endQuizBtn = document.querySelector("#end-quiz");
let quizPart = document.querySelector("#quiz-part");
let resultPart = document.querySelector("#result-part");
let restartQuizBtn = document.querySelector("#restart");
let scoreDiv = document.querySelector("#score");
let msgBox = document.querySelector("#msg");
let timeElement = document.querySelector("#timer");
let totalTime = 10;
let currentQuestion = 0;
let userAns = null;
let score = 0;

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

const disableBtn = (btn) => {
  btn.disable = true;
};

function timer() {
  totalTime = 10;
  let time = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(time);
      if (currentQuestion == questions.length - 1) {
        endQuiz();
      } else {
        nextQuestion();
      }
    } else {
      timeElement.textContent = totalTime;
      totalTime--;
    }
  }, 1000);
}

function showQuestion() {
  questionElement.textContent =
    currentQuestion + 1 + ". " + questions[currentQuestion].question;
  optionsElement.innerHTML = "";
  questions[currentQuestion].options.map((option) => {
    optionsElement.innerHTML += `<div class="option">${option}</div>`;
  });
  let displayOptions = document.querySelectorAll(".option");
  timer();
  displayOptions.forEach((element) => {
    element.addEventListener("click", () => {
      nextQuestionBtn.disabled = false;
      endQuizBtn.disabled = false;
      userAns = element.textContent;
      element.classList.add("active");
      displayOptions.forEach((opt) => {
        if (opt.textContent != userAns) {
          opt.classList.remove("active");
        }
      });
    });
  });
}
showQuestion();

function saveAns() {
  if (userAns == questions[currentQuestion].correctOption) {
    score += 10;
  }
}
const nextQuestion = () => {
  if (currentQuestion < questions.length - 1) {
    nextQuestionBtn.disabled = true;
    saveAns();
    currentQuestion++;
    showQuestion();
  }
  if (currentQuestion == questions.length - 1) {
    endQuizBtn.classList.remove("display-none");
    endQuizBtn.disabled = true;
    nextQuestionBtn.classList.add("display-none");
  }
};
nextQuestionBtn.addEventListener("click", nextQuestion);

const endQuiz = () => {
  saveAns();
  quizPart.classList.add("display-none");
  resultPart.classList.remove("display-none");
  scoreDiv.innerHTML = `
  <div>Your Total score is ${score}</div>`;
  let scorePercent = (score / (questions.length * 10)) * 100;

  if (scorePercent > 50) {
    msgBox.textContent = "You are Brilliant Student";
    msgBox.classList.add("green");
    msgBox.classList.remove("red");
  } else {
    msgBox.classList.remove("green");
    msgBox.classList.add("red");
    msgBox.textContent = "You need to improve! Retake Quiz ";
  }
};
endQuizBtn.addEventListener("click", () => {
  endQuiz();
});

restartQuizBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  quizPart.classList.remove("display-none");
  resultPart.classList.add("display-none");
  endQuizBtn.classList.add("display-none");
  nextQuestionBtn.classList.remove("display-none");
  nextQuestionBtn.disabled = true;
  showQuestion();
});
