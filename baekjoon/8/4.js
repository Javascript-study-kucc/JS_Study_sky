/* 8-4. 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.
1/1	1/2	1/3	1/4	1/5	…
2/1	2/2	2/3	2/4	…	…
3/1	3/2	3/3	…	…	…
4/1	4/2	…	…	…	…
5/1	…	…	…	…	…
…	…	…	…	…	…
이와 같이 나열된 분수들을 1/1 -> 1/2 -> 2/1 -> 3/1 -> 2/2 -> … 과 같은 
지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.
*/

// 몇 번째 그룹인지 찾고, 그 다음 그룹 안에서의 순서를 찾는다.

function solution(num) {
  // cnt는 분자 + 분모
  let cnt = 1;
  while (true) {
    if ((cnt * (cnt - 1)) / 2 + 1 > num) {
      break;
    } else {
      cnt++;
    }
  }
  return cnt;
}

console.log(solution(14));
console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(6));
