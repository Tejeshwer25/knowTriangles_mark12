const baseValue = document.querySelector("#baseValue");
const heightValue = document.querySelector("#heightValue");
const submitBtn = document.querySelector("#submitBtn");
const resultDiv = document.querySelector("#result");

submitBtn.addEventListener("click", calculateHypotneuse);

function calculateHypotneuse(e) {
  e.preventDefault();

  const base = parseFloat(baseValue.value);
  const height = parseFloat(heightValue.value);

  if (!base || !height) {
    resultDiv.innerHTML = "Please enter a valid number";
    return;
  }

  const hypotneuse = Math.sqrt(base * base + height * height);

  result.textContent = `The length of hypotneuse is ${hypotneuse}`;
}
