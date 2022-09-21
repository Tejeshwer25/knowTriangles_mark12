const firstSide = document.querySelector("#firstSide");
const secondSide = document.querySelector("#secondSide");
const thirdSide = document.querySelector("#thirdSide");
const submitBtn = document.querySelector("#submitBtn");
const result = document.querySelector("#result");

submitBtn.addEventListener("click", findArea);

function findArea(e) {
  e.preventDefault();

  const a = parseFloat(firstSide.value);
  const b = parseFloat(secondSide.value);
  const c = parseFloat(thirdSide.value);

  if (!a || !b || !c || a <= 0 || b <= 0 || c <= 0) {
    result.innerHTML = `
      <h4 style="color: red">
        Please enter a valid value
      </h4>
    `;
    return;
  }

  const semiPerimeter = (a + b + c) / 2;
  const area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c)
  );

  result.textContent = `The area of the triangle is ${area.toFixed(3)} units`;
}
