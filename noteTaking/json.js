// JSON
// Javascript Object Notation

// simplest data interchange format
// lightweight text-based structure
// easy to read
// key-value pairs
// used for serialization and transmission of data between the network and the network connection
// independent programming language and platform

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["aa", "bb"]);
console.log(json);

const rabbit = {
  name: "tokki",
  color: "pink",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump`);
  }, // 함수는 오브젝트 안에 있는 데이터가 아니기 때문에 JSON에 포함되지 않는다.
  // 주의: Symbol 같은 자바스크립트만의 고유한 특별한 데이터도 포함되지 않는다.
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  return key === "name" ? "sky" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
// obj.jump() // error, 함수는 포함되지 않았으니까.

console.log(rabbit.birthDate.getMilliseconds()); // object라서
// console.log(obj.birthDate.getDate()); // error, string이라서
// 이러한 문제 해결 위해 콜백 함수를 이용한다.
const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date() : value;
});
console.log(obj2.birthDate.getMilliseconds()); // 근데 이러면 시간 차이가 나잖아 ㅠ

// 유용한 사이트들
// 1. JSON Diff
// http://www.jsondiff.com/
// 바뀐 데이터를 표시해준다.

// 2. JSON Beautifier
// https://jsonbeautifier.org/
// 포맷을 예쁘게 만들어준다.

// 3. JSON Parser
// https://jsonparser.org/
// JSON을 오브젝트로 형태로 보여준다.

// 4. JSON Validator
// https://tools.learningcontainer.com/json-validator/
// JSON이 유효한 데이터인지 확인해준다.
