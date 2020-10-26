// Objects
// one of JS's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JS are instances of Object.
// object = {key : value};

// 1. Literals and properties
const obj1 = {}; // object literal
const obj2 = new Object(); // object constructor

const haneul = { name: "Haneul", age: 26 };
console.log(haneul);

// JS는 동적으로 런타임에 타입이 결정되는 언어이기 때문에
// 이렇게 새롭게 속성을 추가할 수도 있다.
// 하지만 바람직한 방식은 아님. (유지보수 및 오류 관점에서)
// 삭제도 가능
haneul.hasJob = true;
console.log(haneul.hasJob); // true
delete haneul.hasJob;
console.log(haneul.hasJob); // undefined

// 2. Computed properties
console.log(haneul.name);
// 동적으로 키의 밸류를 받아와야 할 때 사용
console.log(haneul["name"]);

// 3. Property value shorthand
const person1 = { name: "aa", age: 1 };
const person2 = { name: "bb", age: 2 };
const person3 = new Person("cc", 3);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this
}

// 5. in Operator: property existence check
console.log("name" in haneul); // true
console.log("random" in haneul); // false

// 6. for..in vs for..of
for (key in haneul) {
  console.log(key);
}

const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value);
}

// 7. cloning
// Object assign(dest, {obj1, obj2, obj3...})
const user1 = { name: "old name", age: 10 };
const user2 = user1;
user2.name = "new name";
console.log(user1.name); // new name

const user3 = Object.assign({}, user1);
console.log(user3);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed); // blue, big, 즉 겹치는 건 뒤에 있는 거로 덮어쓴다.
