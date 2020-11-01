// async & await
// clear style of using promise

// 1. async
async function fetchUser() {
  // do network request in 10 secs...
  return "sky";
}

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs...
//     resolve("sky");
//   });
// }

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// 2-1. 기존방식, 유사콜백지옥
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getApple() {
  return delay(1000).then(() => "Apple");
}
function getBanana() {
  return delay(1000).then(() => "Banana");
}

function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
pickFruits().then((result) => console.log(result));

// 2-2. await 사용
// async 함수 내부에서만 사용 가능
async function getApple() {
  await delay(1000);
  // throw new Error(`error: apple`); // error 발생
  return "Apple";
}
async function getBanana() {
  await delay(1000);
  // throw new Error(`error: banana`);
  return "Banana";
}
pickFruits().then((result) => console.log(result));

// 2-3. awiat 병렬 처리
async function pickFruits() {
  // 프로미스 객체는 선언 즉시 바로 실행됨
  // getApple과 getBanana는 병렬(독립적)로 실행됨
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // 동기화
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then((result) => console.log(result));

// 방법 2: Promise APIs 사용
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) => {
    return fruits.join(` + `);
  });
  // return Promise.all([getApple(), getBanana()]);
}
pickAllFruits().then(console.log);

// 번외: 비동기 처리중 먼저 리턴하는 녀석만 출력
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
