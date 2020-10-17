// 1. String concatenation

const { couldStartTrivia } = require("typescript");

// 2. Numeric operators

// 3. Increment and decrement operators

// 4. Assignment operators

// 5. Coparison operators

// 6. Logical operators: ||(or), &&(and), !(not)
// || (or), finds the first 'true'
// or 연산은 하나라도 true가 나오면 true를 반환하고 그 즉시 연산을 멈춘다.
const value1 = 1 === 2; // false
const value2 = true;
function timeWasting() {
  for (let i = 0; i < 10000; i++) {
    1 + 1;
  }
  return true;
}
console.time("Bad Code");
console.log(`or: ${value1 || timeWasting() || value2}`);
console.timeEnd("Bad Code");

console.time("Good Code");
console.log(`or: ${value1 || value2 || timeWasting()}`);
console.timeEnd("Good Code");

// && (and), finds the first 'false'
// and 연산은 하나라도 false가 나오면 false를 반환하고 그 즉시 연산을 멈춘다.
// 따라서 or 과 and 모두 시간이 오래걸리는 operation은 가장 뒤에 놓는 것이 좋다.
// null 또한 false를 반환하기 때문에 null check에 and 연산에 이용할 수 있다.

// 7. Equality
const stringOne = "1";
const numberOne = 1;

// ==, loose equality, with type conversion
console.log(stringOne == numberOne); // true
console.log(stringOne != numberOne); // false

// ===, strict equality, no type conversion
console.log(stringOne === numberOne); // false
console.log(stringOne !== numberOne); // true

// object equality by reference
const sky1 = { name: "sky" };
const sky2 = { name: "sky" };
const sky3 = sky1;
console.log(sky1 == sky2); // false, 서로 다른 레퍼런스가 저장되어 있다.
console.log(sky1 === sky2); // false
console.log(sky1 === sky3); // true, 같은 레퍼런스

// check
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true, 같은 것으로 간주됨.
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else

// 9. Ternary operator: ?
// condition ? value1 : value2;
// 조건문이 true라면 첫항을, false라면 두 번째 항을 실행한다.
console.log(1 > 0 ? "yes" : "no"); // yes

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const grade = "A";
switch (grade) {
  case "A":
    console.log("Great!");
    break;
  case "B":
    console.log("Not Bad");
    break;
  case "C":
    console.log("Cheer Up!");
    break;
  case "F":
    console.log("Crazy?");
    break;
  default:
    console.log("It's not grade value");
    break;
}

// 11. Loops
// while loop, while the condition is true,
// body code is executed

// do while loop, body code is executed first,
// then check the condition
let i = 5;
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
// nested loops, 다만 cpu에 좋지 않다. O(n**2)

// break, continue
// break은 loop를 완전히 종료시킴.
// continue는 이번 반복만 스킵.
