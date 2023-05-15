let questionIndex = 0;
let clickBegin = document.getElementById("beginBtn");
let getQuiz = document.getElementById("quizBody");
let getMain = document.getElementById("mainPage");
let getForm = document.getElementById("getForm");
let getOpt1 = document.getElementById("opt1");
let getOpt2 = document.getElementById("opt2");
let getOpt3 = document.getElementById("opt3");
let getBtn = document.getElementById("beginBtn");

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
  }
];

clickBegin.addEventListener("click", () => {
  getMain.setAttribute("data-display", "hide");
  quizBody.setAttribute("data-display", "show");
  showQuiz();
  getBtn.addEventListener('click', evaluateTrue);
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
    console.log("Correct!!!!")
  } else {
    console.log("Incorrect douchebag.")
  }
  questionIndex++;
  if (questionIndex < questions.length) {
    showQuiz();
  }
}
