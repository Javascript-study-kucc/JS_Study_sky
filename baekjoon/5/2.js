// 5-2. 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

function maxIndex(nums) {
  let max = 0;
  let maxIndex = 0;
  for (i = 0; i < 9; i++) {
    if (max < nums[i]) {
      max = nums[i];
      maxIndex = i + 1;
    }
  }
  return [max, maxIndex];
}

console.log(maxIndex([3, 29, 38, 12, 57, 74, 40, 85, 61]));
