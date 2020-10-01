// 5-7. 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.

function overAverage(scores) {
  // 평균 점수 계산
  let sum = 0;
  for (i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  let average = sum / scores.length;

  let ups = 0;
  for (i = 0; i < scores.length; i++) {
    if (average < scores[i]) {
      ups++;
    }
  }
  let result = ups / scores.length;
  result *= 100;

  return `${result.toFixed(3)}%`;
}

console.log(overAverage([50, 50, 70, 80, 100]));
console.log(overAverage([100, 95, 90, 80, 70, 60, 50]));
