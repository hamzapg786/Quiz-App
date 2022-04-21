const quizDB = [
  {
    question: "Q1: What is the full form of HTML?",
    a: "Hello To My Land",
    b: "Hyper tools markup",
    c: "Hello text language",
    d: "Hyper text markup language",
    ans: "ans4",
  },
  {
    question: "Q2: What is the full form of CSS?",
    a: "This is css",
    b: "Cascade style sheet",
    c: "Casino in program",
    d: "Crude style",
    ans: "ans2",
  },
  {
    question: "Q3: What is the full form of HTTP?",
    a: "Hyper text Transfer Protocol",
    b: "Hyper text markup",
    c: "Here To There Protocol",
    d: "Hyper tractor protocol",
    ans: "ans1",
  },
  {
    question: "Q4: What is the full form of JS?",
    b: "Java Science",
    c: "Jean Smith",
    a: "Java Script",
    d: "Hyper text markup language",
    ans: "ans3",
  },
  {
    question: "Q5: Dear Tanveer , did you found JS intresting ?",
    b: "Sure",
    c: "Ahmm its amazing",
    a: "Absolutely not",
    d: "Sar ka dard ha faizi ke tarha",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
  const submit = document.querySelector("#submit");
};

loadQuestion();

const getCheckAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((curAnsElem) => (curAnsElem.checked = false));
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  deselectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `<h3> You scored ${score}/${quizDB.length}<h3/>
      <button class="btn" onclick = "location.reload()">Play Again</button>`;
    showScore.classList.remove("scoreArea");
  }
});
