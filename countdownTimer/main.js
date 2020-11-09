"use strict";
// Set the date we're counting down to

const countDownDate = new Date("12, 3, 2020, 9:00").getTime();
// const countDownYear = document.getElementById("year").value;
// const countDownMonth = document.getElementById("month").value;
// const countDownDay = document.getElementById("day").value;
// const countDownHour = document.getElementById("hour").value;
// const countDownDate = new Date(
//   `${countDownMonth}, ${countDownDay}, ${countDownYear}, ${countDownHour}:00`
// ).getTime();
// console.log(countDownYear);
console.log(countDownDate);
let now = new Date().getTime();
console.log(now);
let distance = countDownDate - now;
console.log(distance);

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // 시간 계산
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  days < 100 ? (days = `0${days}`) : days;
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hours < 10 ? (hours = `0${hours}`) : hours;
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  minutes < 10 ? (minutes = `0${minutes}`) : minutes;
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  seconds < 10 ? (seconds = `0${seconds}`) : seconds;
  let milliseconds = Math.floor(
    ((distance % (1000 * 60)) - seconds * 1000) / 10
  );
  // milliseconds < 100 ? (milliseconds = `0${milliseconds}`) : milliseconds;
  milliseconds < 10 ? (milliseconds = `0${milliseconds}`) : milliseconds;

  // 화면에 보여주기
  document.getElementById(
    "timer"
  ).innerHTML = `${days}일 ${hours}시간 ${minutes}분 ${seconds}.${milliseconds}초 남았습니다.`;

  // 이미 지나간 날
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "디데이가 지났습니다!";
  }
}, 30);
