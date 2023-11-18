const highScores = document.querySelector("#highScores");
const quizBtn = document.querySelector("#quizBtn");
const startContent = document.querySelector("#startContent");
const timeEl = document.querySelector("#time");
const questionSection = document.querySelector("#questions");
const questionIndex = 0;
const questionTitle = document.querySelector("#questionTitle");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const choice3 = document.querySelector("#choice3");
const choice4 = document.querySelector("#choice4");

let counter = 0;
let timerInterval;
let startTime = 75;

var questions = [
  {
    title: "dwadasdawdawd",
    options: ["dawdawdaw", "dwadwadad", "dwadawd", "dwadawd"],
    answer: "dwadawdawd",
  },
  {
    title: "cwawcacacw",
    options: ["cwacawcawc", "wcacawc", "wacawcwacawc", "cawcawcacw"],
    answer: "wcacawc",
  },
  {
    title: "vwadawdawdawd",
    options: ["dwadawdawd", "dwadawdawd", "dwadawdawd", "dwadawdawd"],
    answer: "dwadawdawd",
  },
  {
    title: "dwadawdawd",
    options: ["dwadawdawd", "dwadawdawd", "dwadawdawd", "dwadawdawd"],
    answer: "dwadawdawd",
  },
  {
    title: "dwadawdawd",
    options: ["dwadawdawd", "dwadawdawds", "dwadawdawda", "dwadawdawdd"],
    answer: "dwadawdawd",
  },
];

function decrementTime() {
  startTime--;
  timeEl.textContent = startTime;
}

function displayQuestions() {
  questionSection.removeAttribute("class");
}

quizBtn.addEventListener("click", function () {
  startContent.setAttribute("class", "hide");
  questionSection.classList.remove("hide");
  questionTitle.textContent = questions[0].title;
  choice1.textContent = questions[0].options[0];
  choice2.textContent = questions[0].options[1];
  choice3.textContent = questions[0].options[2];
  choice4.textContent = questions[0].options[3];
  timerInterval = setInterval(decrementTime, 1000);
});

function correct(event) {
  if (event.target.textContent == questions[counter].answer) {
    alert("correct answer");
  } else {
    alert("incorrect");
    startTime -= 10;
  }
  counter++;
  console.log("here");
  questionTitle.textContent = questions[counter].title;
  choice1.textContent = questions[counter].options[0];
  choice2.textContent = questions[counter].options[1];
  choice3.textContent = questions[counter].options[2];
  choice4.textContent = questions[counter].options[3];
}

choice1.addEventListener("click", correct);
choice2.addEventListener("click", correct);
choice3.addEventListener("click", correct);
choice4.addEventListener("click", correct);
