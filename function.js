// Function
// as a subprogram
// performs a task or calculates a value

// 1. Function declaration
// one function === one thing
// naming: doSomething, command, verb
// function is object in JS

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passe by reference

// 3. Default parameters (added in ES6)
function sayHi(message, from = "unknown") {
  // 주석처리된 코드와 같은 역할
  // if (from === undefined) {
  //   from = "unknown";
  // }
  console.log(`${message} by ${from}`);
}
sayHi("Hi!"); // Hi! by unknown

// 4. Rest parameters (added in ES6)
// 배열 형태로 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    // 반복문에서 배열쓰는 더 쉬운 방법
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("sky", "coding", "javascript");

// 5. Local scope
// 밖에선 안이 보이지 않고 안에서만 밖을 볼 수 있다.

// 6. Return a value
// 리턴이 없으면,
// return undefined; 이 default

// 7. Early return, early exit

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

// print(); // reference error
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();

// 2. Callback function using function expression
// 콜백 함수는 함수를 명시적으로 호출하는 방식이 아니라
// 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수를 말한다.
// 콜백 함수는 다른 함수의 매개변수로 함수를 전달하고,
// 어떤 이벤트가 발생한 후 매개변수로 전달한 함수가 다시 호출되는 것을 의미한다.
// 즉, 다른 객체에게 일을 시키고,
// 그 일이 끝나는 걸 기다리지 않고, 끝나고 부를 때까지
// 다른 일을 하는 걸 말한다.
function Quiz(answer, printYes, printNo) {
  if (answer === "the answer") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log("Yes!");
};

// named function
// better debugging in debugger's stack traces
// used in recursions
const printNo = function print() {
  console.log("No!");
  // print();
};
Quiz("wrong answer", printYes, printNo);
Quiz("the answer", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};

// function 키워드 x, 블럭 x
const simplePrint2 = () => console.log("simplePrint!");
const add2 = (a, b) => a + b; // return a + b;
// 블럭이 필요하다면 블럭도 쓸 수 있다.
// 대신 블럭을 사용할 땐 return 키워드를 써야한다.
const multiply2 = (a, b) => {
  // some code lines...
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수 선언과 동시에 호출
(function hello() {
  console.log("IIFE");
})();

// practice
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder
function calculate(command, a, b) {
  if (command === add) {
    console.log(add(a, b));
  } else if (command === subtract) {
    console.log(subtract(a, b));
  } else if (command === divide) {
    console.log(divide(a, b));
  } else if (command === multiply) {
    console.log(multiply(a, b));
  } else if (command === remainder) {
    console.log(remainder(a, b));
  }
}

const add = function (a, b) {
  return a + b;
};

const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const remainder = (a, b) => a % b;

calculate(add, 1, 2); // 1 + 2 = 3
calculate(subtract, 1, 2); // 1 - 2 = -1
calculate(divide, 2, 4); // 1 / 2 = 0.5
calculate(multiply, 2, 4); // 2 * 4 = 8
calculate(remainder, 10, 3); // 10 % 3 = 1
