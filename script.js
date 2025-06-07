const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "London"],
    answer: "Paris"
  },
  {
    question: "What is 5 + 3?",
    options: ["5", "8", "9", "7"],
    answer: "8"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "80°C", "70°C"],
    answer: "100°C"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const current = questions[currentQuestionIndex];
  questionEl.innerText = current.question;
  optionsEl.innerHTML = "";
  current.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(btn, current.answer);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(button, correctAnswer) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);
  if (button.innerText === correctAnswer) {
    button.style.backgroundColor = "green";
    score++;
  } else {
    button.style.backgroundColor = "red";
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("quiz-box").classList.remove("hidden");
  resultEl.classList.add("hidden");
  loadQuestion();
}

loadQuestion();
