const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

let countdownDate = "2020-12-03T09:00:00";

const buttonEl = document.getElementById("oneMoreButton");

function countdown() {
  const countdownDateDate = new Date(countdownDate);
  const currentDate = new Date();

  const remainSeconds = (countdownDateDate - currentDate) / 1000;

  const days = Math.floor(remainSeconds / 3600 / 24);
  const hours = Math.floor(remainSeconds / 3600) % 24;
  const mins = Math.floor(remainSeconds / 60) % 60;
  const seconds = Math.floor(remainSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

buttonEl.onclick = function () {
  countdownDate = "2021-11-18T09:00:00";
};

// initial call
countdown();

setInterval(countdown, 1000);
