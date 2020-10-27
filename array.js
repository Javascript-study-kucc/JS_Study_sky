// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];
const fruits = ["apple", "banana", "melon"];

// 2. Index position

// 3. Looping over an array
// a. for

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index) {
  console.log(fruit, index);
});
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
// pop: remove an item from the end
// unshift: add an item to the beginning
// shift: remove an item from the beginning

// caution! shift, unsfit are slower than pop, push
// 기존의 인덱스들을 수정(하기/하지 않기) 때문에

// splice: remove an item by index position
// fruits.splice(startIndex, count) // 몇 번 인덱스부터, 몇 개 지울건지
fruits.splice(1, 1, "lemon", "grape"); // 1번 인덱스부터 하나 지우고 그 인덱스에 레몬과 포도 추가
console.log(fruits);

// concat: combine two arrays
const fruits2 = ["peach", "mango"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
// includes: check whether a value is in array
// lastIndexOf: find the last index

// 나중에 배열 문서 정독하면서 공부하기
