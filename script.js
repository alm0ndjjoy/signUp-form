// grab elements
const form = document.getElementById("sign-up-form");
const firstName = document.getElementById("name");

// post form actions
form.addEventListener("submit", (e) => {
  e.preventDefault();
  postActionStyles();
});

// inline styling for post submit
function postActionStyles() {
  document.body.style.textAlign = "center";
  document.body.style.fontFamily = "'Hammersmith One', sans-serif";
  document.body.style.backgroundColor = "#F2F2F2";
  document.body.style.fontSize = "40px";
  document.body.textContent = `Thanks for signing up, ${firstName.value
    .charAt(0)
    .toUpperCase()}${firstName.value.slice(1).toLowerCase()}!`;
}
