// 5-3. 세 개의 자연수 A, B, C가 주어질 때 A×B×C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.

function countNums(a, b, c) {
  let num = a * b * c;
  num = String(num);
  for (i = 0; i < 10; i++) {
    cnt = 0;
    for (j = 0; j < num.length; j++) {
      if (i == num[j]) {
        cnt += 1;
      }
    }
    console.log(`${i}은 ${cnt}개 있습니다.`);
  }
}

countNums(150, 266, 427);
