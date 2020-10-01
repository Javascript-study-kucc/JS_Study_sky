// 3-6. 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

function reversePrinter(n) {
  for (i = n; i >= 1; i--) {
    console.log(i);
  }
}

reversePrinter(5);
