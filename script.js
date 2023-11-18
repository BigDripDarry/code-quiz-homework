// vars for DOM
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

// vars for quiz
let counter = 0;
let timerInterval;
let startTime = 75;

// var with an array of objects for the questions
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

// funct to decrement time
function decrementTime() {
  startTime--;
  timeEl.textContent = startTime;
}

// funct to unhide questions
function displayQuestions() {
  questionSection.removeAttribute("class");
}

// funct to display questions and title
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

// funct to check answers and user interaction
function correct(event) {
  if (event.target.textContent == questions[counter].answer) {
    alert("Correct answer!");
  } else {
    alert("Incorrect answer. You lose 10 seconds.");
    startTime -= 10;
  }
  counter++;
  if (counter == questions.length) {
    // checks if last page, if not keep asking questions
    lastPage();
  } else {
    questionTitle.textContent = questions[counter].title;
    choice1.textContent = questions[counter].options[0];
    choice2.textContent = questions[counter].options[1];
    choice3.textContent = questions[counter].options[2];
    choice4.textContent = questions[counter].options[3];
  }
}

// for user interaction
choice1.addEventListener("click", correct);
choice2.addEventListener("click", correct);
choice3.addEventListener("click", correct);
choice4.addEventListener("click", correct);

// funct for last page and displaying high scores
function lastPage() {
  clearInterval(timerInterval);
  const userInitials = prompt("Quize completed! Enter initials:");

  if (userInitials) {
    const userScore = {
      initials: userInitials,
      score: startTime,
    };
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(userScore);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem("highScores", JSON.stringify(highScores));

    alert(
      "High Scores:\n" +
        highScores
          .map((score) => `${score.initials}: ${score.score}`)
          .join("\n")
    );
  } else {
    alert("Initials need to be entered to be saved!");
  }
}
