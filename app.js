const quizData = [
  {
    question: "How old is Florin?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "what is the most used programing language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "who is the president of US?",
    a: "Florin pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrfei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Castcading Style Sheet",
    c: "Jason Object Notation",
    d: "helicopters terminals Motorboatslamorginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "d",
  },
];
const quiz = document.getElementById("quiz");

const answerEl = document.querySelectorAll(".answer");

const questionE1 = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deselecteAnswers();
  const curentQuizData = quizData[currentQuiz];
  questionE1.innerText = curentQuizData.question;
  a_text.innerText = curentQuizData.a;
  b_text.innerText = curentQuizData.b;
  c_text.innerText = curentQuizData.c;
  d_text.innerText = curentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselecteAnswers() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>you answered correctly at ${score}/${quizData.length}questions.<h2/><button
       onclick="location.reload()">Reload</button>`;
    }
  }
});
