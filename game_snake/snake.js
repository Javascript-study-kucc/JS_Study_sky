window.onload = function () {
  canv = document.getElementById("gc");
  let canvWidth = canv.widht;
  let canHeight = canv.height;
  ctx = canv.getContext("2d");
  document.addEventListener("keydown", keyPush);
  let gameSpeed = 90; // 1000 / 15 정도가 기본 속도, 작을수록 빠름
  setInterval(game, gameSpeed);
};
px = py = 10; // 플레이어 위치
gs = tc = 20; // 그리드 크기, 타일 카운트
ax = ay = 15; // 오브젝트(apple) 위치
xv = yv = 0; // velocity
trail = [];
let tailLength = 7;
tail = tailLength;
function game() {
  px += xv;
  py += yv;
  // 캔버스 관통하도록
  if (px < 0) {
    px = tc - 1;
  }
  if (px > tc - 1) {
    px = 0;
  }
  if (py < 0) {
    py = tc - 1;
  }
  if (py > tc - 1) {
    py = 0;
  }
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);

  ctx.fillStyle = "blue";
  for (var i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    // 꼬리 밟으면 초기화
    if (trail[i].x == px && trail[i].y == py) {
      tail = tailLength;
    }
  }
  trail.push({ x: px, y: py });
  while (trail.length > tail) {
    trail.shift();
  }

  if (ax == px && ay == py) {
    // 꼬리가 늘어나고 다음 사과 랜덤 위치에 생성
    tail++;
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}
function keyPush(event) {
  // 방향키의 아스키 코드는 왼쪽, 위, 오른쪽, 아래 순선대로 37~40
  switch (event.keyCode) {
    case 37:
      xv = -1;
      yv = 0;
      break;
    case 38:
      xv = 0;
      yv = -1;
      break;
    case 39:
      xv = 1;
      yv = 0;
      break;
    case 40:
      xv = 0;
      yv = 1;
      break;
  }
}
