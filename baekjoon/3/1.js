// 3-1. N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

function gugudan(dan) {
  for (i = 1; i < 10; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}

gugudan(2);
