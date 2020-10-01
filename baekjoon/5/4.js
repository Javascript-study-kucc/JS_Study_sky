/* 5-4.
두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 
예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 
수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 
그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.
*/

function differentRemainers(nums) {
  let reamainers = [];
  for (i = 0; i < 10; i++) {
    reamainers.push(nums[i] % 42);
  }
  let uniques = new Set([...reamainers]); // set 성질 이용
  // let uniques = new Set([reamainers]);
  // 이렇게 쓰면 배열을 통째로 받음.
  return uniques.size;
}

console.log(differentRemainers([39, 40, 41, 42, 43, 44, 82, 83, 84, 85]));
