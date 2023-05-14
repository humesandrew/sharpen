
let questionIndex = 0;
let clickBegin = document.getElementById("beginBtn");


clickBegin.addEventListener("click", () => {
    console.log(question1);
    questionIndex++;
    console.log(questionIndex);
})


const question1 = {
    "text": "What is the meaning of life?", 
    "opt1": "Life",
    "opt2": "42",
    "opt3": "Love and happiness."
}

