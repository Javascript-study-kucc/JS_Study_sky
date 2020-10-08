// 7-2. N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

function sum(num) {
  // 받은 숫자를 하나씩 쪼갬.
  num = String(num);
  num = num.split("");
  // 합계 구하기.
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  return sum;
}

console.log(sum(54321));
