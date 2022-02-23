// grab elements
const form = document.getElementById("sign-up-form");
const firstName = document.getElementById("name");
const allInputs = document.getElementsByClassName("label");
console.log(allInputs);

// post form actions
form.addEventListener("submit", (e) => {
  e.preventDefault();
  postActionStyles();
});

// inline styling for post submit
function postActionStyles() {
  document.body.style.textAlign = "center";
  document.body.style.fontSize = "40px";
  document.body.textContent = `Thanks for signing up, ${firstName.value}!`;
}
