// 1~1000000(백만)의 수를 모두 합하는 연산 수행 시간 측정 예제
let sum = 0;

console.time("calculatingTime");
for (var i = 1; i <= 1000000; i++) {
  sum += i;
}

console.timeEnd("calculatingTime");

// console.time()과 console.timeEnd()는 하나의 쌍으로 동작
// "calculatingTime"과 같이 타이머의 이름은 동일한 이름을 사용해야 인식이 가능
