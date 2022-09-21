const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const checkTriangle = document.querySelector("#checkTriangle");
const result = document.querySelector("#result");

checkTriangle.addEventListener("click", isTriangle);

function isTriangle(e) {
  e.preventDefault();

  if (!angle1.value || !angle2.value || !angle3.value) {
    result.innerHTML = `
      <h4 style="color: red;">Please enter all the fields</h4>
    `;
    return;
  } else if (
    Number(angle1.value) <= 0 ||
    Number(angle2.value) <= 0 ||
    Number(angle3.value) <= 0
  ) {
    result.innerHTML = `
      <h4 style="color: red">Please enter valid angles</h4>
    `;
    return;
  }

  const sum =
    parseInt(angle1.value) + parseInt(angle2.value) + parseInt(angle3.value);

  if (sum === 180) {
    result.innerHTML = "These are the angles of a triangle...";
  } else {
    result.innerHTML = "These are not the angles of a triangle...";
  }
}
