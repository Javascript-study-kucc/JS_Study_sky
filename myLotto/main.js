const ball1 = document.getElementById("num_1");
const ball2 = document.getElementById("num_2");
const ball3 = document.getElementById("num_3");
const ball4 = document.getElementById("num_4");
const ball5 = document.getElementById("num_5");
const ball6 = document.getElementById("num_6");
const ball7 = document.getElementById("num_bonus");

let generateRandom = () => {
  return Math.floor(Math.random() * 44) + 1;
};

let getLottoNums = () => {
  let num;
  let nums = [];
  while (nums.length != 7) {
    num = generateRandom();
    // 중복 허용x 해야하는데 이상함
    for (let i = 0; i++; i < nums.length) {
      if (num == nums[i]) {
        num = 0;
      }
    }
    nums.push(num);
  }
  ball1.innerHTML = nums[0];
  ball2.innerHTML = nums[1];
  ball3.innerHTML = nums[2];
  ball4.innerHTML = nums[3];
  ball5.innerHTML = nums[4];
  ball6.innerHTML = nums[5];
  ball7.innerHTML = nums[6];
  return nums;
};

getLottoNums();
console.log(getLottoNums());

document.getElementById("btn").addEventListener("click", function () {
  console.log(getLottoNums());
});
