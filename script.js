const highScores = document.querySelector("#highScores");
const quizBtn = document.querySelector("#quizBtn");
const startContent = document.querySelector("#startContent");
const timeEl = document.querySelector("#time");
const questionSection = document.querySelector("#questions");
const questionIndex = 0;

let timerInterval;
let startTime = 75;

var questions = [
    {
        title:"",
        options: [
            "",
            "",
            "",
            ""
        ],
        answer:""
    },
    {
        title:"",
        options: [
            "",
            "",
            "",
            ""
        ],
        answer:""
    },
    {
        title:"",
        options: [
            "",
            "",
            "",
            ""
        ],
        answer:""
    },
    {
        title:"",
        options: [
            "",
            "",
            "",
            ""
        ],
        answer:""
    },
    {
        title:"",
        options: [
            "",
            "",
            "",
            ""
        ],
        answer:""
    }
]

function decrementTime(){
    startTime--;
    timeEl.textContent = startTime;
}

function displayQuestions(){ 
    questionSection.removeAttribute("class");
}

quizBtn.addEventListener("click", function() {
    startContent.setAttribute(
        "class",
        "hide"
        );
    timerInterval = setInterval(decrementTime, 1000);

})
