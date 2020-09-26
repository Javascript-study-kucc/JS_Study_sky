// 2-1. 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

function compare(a, b) {
  if (a > b) {
    return ">";
  } else if (a < b) {
    return "<";
  } else {
    return "=";
  }
}

console.log(compare(1, 2));
console.log(compare(10, 2));
console.log(compare(5, 5));
