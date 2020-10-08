/* 4-3. 
0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다. 
먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다. 
그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다.
다음 예를 보자.
26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 새로운 수는 84이다. 8+4 = 12이다. 
새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.
위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.
N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.
*/

// function cycleNum(originalNum) {
//   let cycleNum = 0;
//   let newNum;
//   let tmp;
//   while (originalNum !== newNum) {
//     let tens = parseInt(originalNum / 10);
//     let ones = originalNum - tens * 10;
//     let newNum = tens + ones + 10 * ones;
//     cycleNum++;
//     console.log(cycleNum);
//     console.log(newNum);
//   }
//   return cycleNum;
// }

const fs = require("fs");
let newNum = fs.readFileSync("/dev/stdin").toString();
const ORIGIN = parseInt(newNum);
let counter = 0;

while (newNum !== ORIGIN || counter === 0) {
  newNum = (newNum % 10) * 10 + ((parseInt(newNum / 10) + (newNum % 10)) % 10);
  counter++;
}

console.log(counter);

// Timeout code (시간 초과 코드)

// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();

// if (parseInt(input) < 10) {
// input = '0' + input;
// }

// let newNum = input;
// let counter = 0;
// let sum = 0;

// while (newNum !== input || counter === 0) {
// sum = parseInt(newNum[0]) + parseInt(newNum[1]);

// if (sum < 10) {
// sum = '0' + sum.toString();
// } else {
// sum = sum.toString();
// }

// newNum = newNum[1] + sum[1];
// counter++;
// }

// console.log(counter);

console.log(cycleNum(26));
