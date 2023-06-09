let questionIndex = 0;
let clickBegin = document.getElementById("beginBtn");
let getQuiz = document.getElementById("quizBody");
let getMain = document.getElementById("mainPage");
let getForm = document.getElementById("getForm");
let getOpt1 = document.getElementById("opt1");
let getOpt2 = document.getElementById("opt2");
let getOpt3 = document.getElementById("opt3");
let getBtn = document.getElementById("beginBtn");
let getTimer = document.getElementById("timer");
let getHigh = document.getElementById('highScorer');
let timeLeft = 120;
let timerInterval;
localStorage.setItem("quizScore", "0");

const questions = [
  {
    text: "What is the meaning of life?",
    options: ["Life", "42", "Love and happiness."],
    answer: 1,
    btnText: "Submit",
  },
  {
    text: "What is the capital of Colorado?",
    options: ["Denver", "Pueblo", "Boulder"],
    answer: 0,
  },
  {
    text: "How long have I been trying to find a job in coding?",
    options: ["Not long enough.", "Too long.", "What is a career switch?"],
    answer: 1,
  },
  {
    text: "What is the retina if the eye is a camera?",
    options: ["The lens.", "The aperature.", "The film."],
    answer: 2,
  },
  {
    text: "Who let the dogs out?",
    options: ["Someone naughty.", "Baha Men.", "Kafka."],
    answer: 2,
  },
  {
    text: "What is a troglodyte?",
    options: ["A rich person.", "A troll.", "A handtool."]
  }
];

function showHighScorer() {
  const initials = localStorage.getItem("Initials");
  if (initials) {
    console.log(initials);
    getHigh.innerHTML = initials;
  }

}
showHighScorer();

function startTimer() {
  getTimer.innerHTML = timeLeft;
  timerInterval = setInterval(function() {
    timeLeft--;
    getTimer.innerHTML = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      getTimer.innerHTML = "You failed loser.";
      showEnd();
    }
  }, 1000);
}


clickBegin.addEventListener("click", () => {
  getMain.setAttribute("data-display", "hide");
  quizBody.setAttribute("data-display", "show");
  showQuiz();
  getBtn.addEventListener("click", evaluateTrue);
  startTimer();
});

function showQuiz() {
  const question = questions[questionIndex];
  getQuiz.innerHTML = question.text;
  getQuiz.appendChild(getForm);
  getOpt1.innerHTML = question.options[0];
  getOpt2.innerHTML = question.options[1];
  getOpt3.innerHTML = question.options[2];
  getBtn.innerHTML = question.btnText || "Submit";
}

function evaluateTrue() {
  const question = questions[questionIndex];
  const selectedOption = getForm.querySelector('input[name="quiz-option"]:checked');
  if (selectedOption && selectedOption.value === String(question.answer)) {
    console.log("Correct!!!!");
    let score = parseInt(localStorage.getItem("quizScore"));
    score++;
    localStorage.setItem("quizScore", score);
    timeLeft += 20;
  } else {
    console.log("Incorrect douchebag.");
    timeLeft -= 20;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
  }
  questionIndex++;
  if (questionIndex < questions.length) {
    showQuiz();
  } else {
    clearInterval(timerInterval);
    showEnd();
  }
}


function showEnd() {
  getBtn.style.display = "none";
  getQuiz.innerHTML = "Thank you for taking the quiz.";
  getQuiz.style.fontSize = "40px";

  const createScore = document.createElement("div");
  getQuiz.appendChild(createScore);

  const initialsForm = document.createElement("form");
  const initialsLabel = document.createElement("label");
  const initialsInput = document.createElement("input");
  initialsLabel.innerHTML = "Please enter your initials:";
  const createBr = document.createElement("br");
  const createBtn = document.createElement("button");
  initialsLabel.appendChild(createBr);
  initialsInput.type = "text";
  initialsForm.appendChild(initialsLabel);
  initialsForm.appendChild(initialsInput);
  createScore.appendChild(initialsForm);

  const scoreDisplay = document.createElement("div");
  createScore.appendChild(scoreDisplay);

  scoreDisplay.innerHTML =
    "Your score was: " + localStorage.getItem("quizScore");

  createScore.appendChild(createBtn);
  createBtn.innerHTML = "Save score.";

  createBtn.addEventListener("click", () => {
    const initialsValue = initialsInput.value;
    console.log("Initials value:", initialsValue);
    localStorage.setItem("Initials", initialsValue);
    console.log("Updated localStorage:", localStorage);
  });
  clearInterval(timerInterval)
}

