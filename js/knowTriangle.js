const angle1 = document.querySelector("#angle1");
const angle2 = document.querySelector("#angle2");
const angle3 = document.querySelector("#angle3");
const checkTriangle = document.querySelector("#checkTriangle");
const result = document.querySelector("#result");

checkTriangle.addEventListener("click", isTriangle);

function isTriangle(e) {
  e.preventDefault();

  const sum =
    parseInt(angle1.value) + parseInt(angle2.value) + parseInt(angle3.value);

  if (sum === 180) {
    result.innerHTML = "These are the angles of a triangle...";
  } else {
    result.innerHTML = "These are not the angles of a triangle...";
  }
}
