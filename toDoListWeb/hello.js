const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const user_ls = "currentUser";
const showing_cn = "showing";

function greeting(text) {
  form.classList.remove(showing_cn);
  greeting.classList.add(showing_cn);
  greeting.innerText = `Hello ${Text}`;
}

// local storage for user name
function loadName() {
  const currentUser = localStorage.getItem(user_ls);
  if (currentUser === null) {
  } else {
    greeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
