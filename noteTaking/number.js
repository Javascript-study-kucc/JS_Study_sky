// C언어 등과 달리 자바스크립트는 하나의 숫자 타입만 존재한다. (number)
// 이 숫자 타입은 64비트 부동소수점 형을 따른다. 즉 모든 실수를 처리한다.
// 따라서 정수끼리 나누어도 실수가 나올 수 있다.

console.log(typeof 3); // number
console.log(typeof 3.2); // number
console.log(3 / 2); // 1.5
console.log(1 === 1.0); // true

// 특수한 값들

console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(10 * "a"); // NaN (Not a Number)

console.log(Math.pow(3, 2)); // 9
console.log(Math.random()); // 0 ~ 1.0 사이에서 랜덤 수
