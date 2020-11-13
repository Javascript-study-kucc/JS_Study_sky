const ball1 = document.getElementById("num_1"),
  ball2 = document.getElementById("num_2"),
  ball3 = document.getElementById("num_3"),
  ball4 = document.getElementById("num_4"),
  ball5 = document.getElementById("num_5"),
  ball6 = document.getElementById("num_6"),
  ball7 = document.getElementById("num_bonus");

let generateRandom = () => {
  return Math.floor(Math.random() * 44) + 1;
};

let getLottoNums = () => {
  let nums = new Set();
  while (nums.size != 7) {
    let num = generateRandom();
    nums.add(num);
    // 중복 제거
    // nums = Array.from(new Set(nums));
  }
  nums = Array.from(nums);

  ball1.innerHTML = nums[0];
  ball2.innerHTML = nums[1];
  ball3.innerHTML = nums[2];
  ball4.innerHTML = nums[3];
  ball5.innerHTML = nums[4];
  ball6.innerHTML = nums[5];
  ball7.innerHTML = nums[6];
  return nums;
};

document.getElementById("btn").addEventListener("click", function () {
  console.log(getLottoNums());
});
