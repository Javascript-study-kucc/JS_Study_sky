// 3-11. 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

function small(x, nums) {
  let smalls = [];
  for (i = 0; i < nums.length; i++) {
    if (x > nums[i]) {
      smalls.push(nums[i]);
    }
  }
  return smalls;
}

console.log(small(5, [1, 10, 4, 9, 2, 3, 8, 5, 7, 6]));
