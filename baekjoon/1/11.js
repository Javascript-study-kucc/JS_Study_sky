// 1-11. (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

const num1 = 472;
const num2 = 385;

const hundredsOfnum2 = parseInt(num2 / 100);
const tensOfnum2 = parseInt((num2 - hundredsOfnum2 * 100) / 10);
const onesOfnum2 = num2 - (hundredsOfnum2 * 100 + tensOfnum2 * 10);

let num3 = num1 * onesOfnum2;
let num4 = num1 * tensOfnum2;
let num5 = num1 * hundredsOfnum2;
let num6 = num3 + num4 * 10 + num5 * 100;

console.log(num3, num4, num5, num6);
