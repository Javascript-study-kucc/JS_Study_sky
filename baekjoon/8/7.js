// 8-7. 이 아파트에 거주를 하려면 조건이 있는데, “a층의 b호에 살려면
// 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다”
// 는 계약 조항을 꼭 지키고 들어와야 한다.
// 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때,
// 주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라.
// 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.

// [k층, n호]에 있는 값 = [k층, n-1호] + [k-1층, n호]의 값

function solution(k, n) {
  let apart = [];
  // 0층부터
  for (let i = 0; i <= k; i++) {
    apart.push([1]);
    // 1호부터
    for (let j = 1; j < n; j++) {
      if (i === 0) {
        apart[i].push(j + 1);
      } else {
        apart[i].push(apart[i][j - 1] + apart[i - 1][j]);
      }
    }
  }
  console.log(apart);
  return apart[k][n - 1];
}

console.log(solution(1, 3)); // 6
console.log(solution(2, 3)); // 10
solution(1, 3);
