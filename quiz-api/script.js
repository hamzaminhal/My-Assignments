let quizPart = document.querySelector("#quiz-part");
let resultPart = document.querySelector("#result-part");
let questionElement = document.querySelector("#question");
let timerElement = document.querySelector("#timer");
let api =
  "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
let optionsElement = document.querySelector("#options");
let nextBtn = document.querySelector("#next-btn");
let endQuizBtn = document.querySelector("#end-btn");
let restartBtn = document.querySelector("#restart-btn");
let currentQuestion = 0;
let score = 0;
let userAns = null;
let scorePercent = (score / 10) * 100;
let totalime = 10;
let questions = [];

// timer
const timerFunction = () => {
  nextBtn.addEventListener("click", () => {
    clearInterval(timer);
  });
  totalime = 10;
  let timer = setInterval(() => {
    if (totalime <= 0) {
      clearInterval(timer);
      if (currentQuestion === questions.results.length - 1) {
        endQuizFunction();
        timerElement.classList.add("hide");
      } else {
        nextQuestionFunction();
      }
    } else {
      timerElement.textContent = totalime;
      totalime--;
    }
  }, 1000);
};

const showQuestions = () => {
  timerFunction();
  endQuizBtn.disabled = true;
  nextBtn.disabled = true;
  questionElement.textContent =
    currentQuestion + 1 + ". " + questions.results[currentQuestion].question;
  let totalOptions = questions.results[currentQuestion].incorrect_answers;
  let rnd = Math.floor(Math.random() * totalOptions.length);
  totalOptions.splice(
    rnd,
    0,
    questions.results[currentQuestion].correct_answer
  );
  optionsElement.textContent = "";

  totalOptions.forEach((option, index) => {
    optionsElement.innerHTML += `<div class="alloption fs-4">${
      index + 1
    }. <span class="option">${option}</span></div>`;
  });
  let alloptions = document.querySelectorAll(".alloption");
  let options = document.querySelectorAll(".option");
  options.forEach((option, index, options) => {
    option.addEventListener("click", () => {
      endQuizBtn.disabled = false;
      nextBtn.disabled = false;
      option.classList.add("active");
      userAns = option.textContent;
      console.log(options);
      options.forEach((option) => {
        if (option.textContent != userAns) {
          option.classList.remove("active");
        }
      });
    });
  });
};

const saveAns = () => {
  if (userAns === questions.results[currentQuestion].correct_answer) {
    score++;
    console.log(score);
  }
};
// function for the first time to load

(function () {
  fetch(api)
    .then((result) => result.json())
    .then((result) => {
      questions = result;
      console.log(questions);
      showQuestions();
    })
    .catch(() => {
      alert("Please Reload");
    });
})();

// code for next question button
function nextQuestionFunction() {
  if (currentQuestion < questions.results.length - 1) {
    saveAns();
    currentQuestion++;
    showQuestions();
  }
  if (currentQuestion === questions.results.length - 1) {
    nextBtn.classList.add("hide");
    endQuizBtn.classList.remove("hide");
  }
}

nextBtn.addEventListener("click", () => {
  nextQuestionFunction();
});

//end quiz button
function endQuizFunction() {
  saveAns();
  quizPart.classList.add("hide");
  resultPart.classList.remove("hide");
  endQuizBtn.classList.add("hide");
  restartBtn.classList.remove("hide");
  resultPart.innerHTML = `
  <div>Your Total Score is ${score} / 10</div>
  <div id="msg"></div>`;
  let msgBox = document.querySelector("#msg");
  if (scorePercent < 50) {
    msgBox.textContent = `You need to improve`;
    msgBox.classList.add("red");
    msgBox.classList.remove("green");
  } else {
    msgBox.textContent = `Congradulations! You Pass the Quiz`;
    msgBox.classList.add("green");
    msgBox.classList.remove("red");
  }
}
endQuizBtn.addEventListener("click", () => {
  endQuizFunction();
});

// Restart Quiz Button Logic

restartBtn.addEventListener("click", () => {
  nextBtn.classList.remove("hide");
  endQuizBtn.classList.add("hide");
  restartBtn.classList.add("hide");
  quizPart.classList.remove("hide");
  resultPart.classList.add("hide");
  timerElement.classList.remove("hide");
  score = 0;
  userAns = null;
  currentQuestion = 0;
  showQuestions();
});
