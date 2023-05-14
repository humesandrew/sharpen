
let questionIndex = 0;
let clickBegin = document.getElementById("beginBtn");
let getQuiz = document.getElementById("quizBody");

const question1 = {
    "text": "What is the meaning of life?", 
    "opt1": "Life",
    "opt2": "42",
    "opt3": "Love and happiness."
}

const question2 = {
    "text": "What is the capitol of Colorado?", 
    "opt1": "Denver",
    "opt2": "Pueblo",
    "opt3": "Boulder"
}

const question3 = {
    "text": "How long have I been trying to find a job in coding?", 
    "opt1": "Not long enough.",
    "opt2": "Too long.",
    "opt3": "What is a career switch?"
}

clickBegin.addEventListener("click", () => {
    let getMain = document.getElementById("mainPage");
    getMain.setAttribute('data-display', 'hide')
    quizBody.setAttribute('data-display', 'show')
    showQuiz();
    questionIndex++;
 
})

function showQuiz() {
    if (questionIndex === 0) {
    console.log(questionIndex);
    
console.log(question1);
}

else if (questionIndex === 1) {
    console.log(question2)
}
else if (questionIndex === 2) {
    console.log(question3);
}
}
