// Promise
// is a Javascript object for asynchronous operation.

// 자바스크립트는 비동기 처리를 위한 하나의 패턴으로 콜백 함수를 사용한다.
// 하지만 전통적인 콜백 패턴은 콜백 헬로 인해 가독성이 나쁘고
// 비동기 처리 중 발생한 에러의 처리가 곤란하며 여러 개의 비동기 처리를
// 한번에 처리하는 데도 한계가 있다.
// ES6에서는 비동기 처리를 위한 또 다른 패턴으로 프로미스(Promise)를 도입했다.
// 프로미스는 전통적인 콜백 패턴이 가진 단점을 보완하며 비동기 처리 시점을
// 명확하게 표현할 수 있다는 장점이 있다.

// 하지만 비동기 처리를 위해 콜백 패턴을 사용하면 처리 순서를 보장하기 위해
// 여러 개의 콜백 함수가 네스팅(nesting, 중첩)되어 복잡도가 높아지는
// 콜백 헬(Callback Hell)이 발생하는 단점이 있다.
// 콜백 헬은 가독성을 나쁘게 하며 실수를 유발하는 원인이 된다.
// 아래는 콜백 헬이 발생하는 전형적인 사례이다.

// step1(function (value1) {
//   step2(value1, function (value2) {
//     step3(value2, function (value3) {
//       step4(value3, function (value4) {
//         step5(value4, function (value5) {
//           // value5를 사용하는 처리
//         });
//       });
//     });
//   });
// });

// 콜백 헬이 발생하는 이유에 대해 살펴보면,
// 비동기 처리 모델은 실행 완료를 기다리지 않고 즉시 다음 태스크를 실행한다.
// 따라서 비동기를 처리하는 함수 내에서 처리 결과를 반환(또는 전역 변수에의 할당)
// 하면 기대한 대로 동작하지 않는다.

// 즉, 비동기 함수의 처리 결과를 반환하는 경우, 순서가 보장되지 않기 때문에
// 그 반환 결과를 가지고 후속 처리를 할 수 없다.
// 즉, 비동기 함수의 처리 결과에 대한 처리는 비동기 함수의 콜백 함수 내에서
// 처리해야 한다. 이로 인해 콜백 헬이 발생한다.
// 만일 비동기 함수의 처리 결과를 가지고 다른 비동기 함수를 호출해야 하는 경우,
// 함수의 호출이 중첩(nesting)이 되어 복잡도가 높아지는 현상이 발생하는데
// 이를 Callback Hell이라 한다.
// Callback Hell은 코드의 가독성을 나쁘게 하고 복잡도를 증가시켜
// 실수를 유발하는 원인이 되며 에러 처리가 곤란하다.

// 프로미스는 Promise 생성자 함수를 통해 인스턴스화한다.
// Promise 생성자 함수는 비동기 작업을 수행할 콜백 함수를 인자로 전달받는데
// 이 콜백 함수는 resolve와 reject 함수를 인자로 전달받는다.
// Promise는 비동기 처리가 성공(fulfilled)하였는지
// 또는 실패(rejected)하였는지 등의 상태(state) 정보를 갖는다.

// State: pending -> fulfiled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// 프로미스를 만드는 순간 executor가 실행된다.
// 이 점을 간과하면 불필요한 일(네트워크 통신 등)을 하게 될 수도 있다.
let networkState = true;
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files...)
  console.log("doing something...");
  setTimeout(() => {
    if (networkState) {
      resolve("success");
    } else {
      reject(new Error("network failure"));
    }
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
let eggState = false;
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hen"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (eggState) {
        resolve(`${hen} => Egg`);
      } else {
        reject(new Error(`error! ${hen} => Rotten`));
      }
    }, 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => Fry`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .catch((error) => {
    return "Rotten";
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log);
