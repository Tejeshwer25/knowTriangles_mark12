const answers = [
  "90°",
  "60°",
  "One right angle",
  "12, 16, 20",
  "Equilateral",
  "80°",
  "10°",
  "a + b + c",
  "0",
  "45°",
];

let score = 0;

const quizForm = document.querySelector(".formQuiz");
const submitBtn = document.querySelector("#submitBtn");
const resultDiv = document.querySelector("#result");

submitBtn.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();
  score = 0;
  const formResults = new FormData(quizForm);

  for (let value of formResults.entries()) {
    const questionNumber = parseInt(value[0]);
    const userAnswer = value[1];
    const realAnswer = answers[questionNumber - 1];

    if (userAnswer === realAnswer) {
      score++;
    }
  }

  resultDiv.innerHTML = `<p>You got ${score} out of ${answers.length} correct!</p>`;
}
