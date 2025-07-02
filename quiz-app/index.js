let questionElement = document.getElementById("question");
let optionsElement = document.getElementById("options");

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Rome", "Paris", "Madrid", "Berlin"],
    correctOption: "paris",
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
    correctOption: "paris",
  },
];
let currentQuestion = 0;
showQuestion();

function showQuestion() {
  questionElement.innerHTML = questions[currentQuestion].question;
  optionsElement.innerHTML = "";
  questions[currentQuestion].options.map((element) => {
    optionsElement.innerHTML += `<div><input type="radio" name="option" id="option-${element}"> ${element}</div>`;
  });
}
function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    alert("Quiz Ended");
  }
}
