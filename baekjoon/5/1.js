// 5-1. N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

function maxMin(nums) {
  let max = 0;
  let min = 99999;
  for (i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i];
    }
    if (min > nums[i]) {
      min = nums[i];
    }
  }
  return [min, max];
}

console.log(maxMin([20, 10, 35, 30, 7]));
