// 3-3. n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

function sumToN(n) {
  let sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumToN(3));