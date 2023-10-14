const highScores = document.querySelector("#highScores");
const quizBtn = document.querySelector("#quizBtn");
const startContent = document.querySelector("#startContent");
const timeEl = document.querySelector("#time");

let timerInterval;
let startTime = 75;

function decrementTime(){
    startTime--;
    timeEl.textContent = startTime;
}

quizBtn.addEventListener("click", function() {
    startContent.setAttribute(
        "class",
        "hide"
        );
    timerInterval = setInterval(decrementTime, 1000)
})