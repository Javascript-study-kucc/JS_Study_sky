// 8-6. 정문으로부터 걷는 거리가 가장 짧도록 방을 배정하는 프로그램을 작성하고자 한다.

function solution(H, W, N) {
  let cnt = 0;
  let frontNum;
  let backNum;
  let roomNum;
  for (let i = 1; i <= W; i++) {
    for (let j = 1; j <= H; j++) {
      cnt++;
      if (cnt == N) {
        frontNum = j;
        backNum = i;
        break;
      }
    }
  }
  // 방 뒷번호를 두 자리로 만들기 위해 0을 채워준다.
  if (backNum < 10) {
    backNum = String(`0${backNum}`);
  }
  roomNum = String(frontNum) + String(backNum);
  return Number(roomNum);
}

console.log(solution(6, 12, 10));
console.log(solution(30, 50, 72));
