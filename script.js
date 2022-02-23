// grab elements
const form = document.getElementById("sign-up-form");
const firstName = document.getElementById("name");
const allInputs = document.getElementsByClassName("label");
console.log(allInputs);

// post form action
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.body.textContent = `Thanks for signing up, ${firstName.value}!`;
});
