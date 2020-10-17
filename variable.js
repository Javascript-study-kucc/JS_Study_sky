// boolean - true와 false가 있다.
// 빈 문자열,  null, undefined, 숫자 0은 false로 간주된다.

// undefined - undefined만 있다.
// 선언만 하고 값을 할당하지 않은 변수는 undefined 값을 갖는다.
// 혹은 존재하지 않는 객체 프로퍼티.
// 메모리 공간에 쓰레기 값이 있으면 JS엔진이 undefined로 초기화하기 때문.


// null - null만 있다.
// 자바스크립트엔 대소문자를 구분하기 때문에 Null, NULL 등과는 다르다.
// 의도적으로 변수에 값이 없음을 명시할 때 사용한다.

// 1. Use strict
"use strict";

// 2. Variable, read & write
// let (added in ES6)

// var (never use this!)
// var hoisting (어디에 선언되었는지와 상관없이 선언을 항상 가장 위로 끌어올려주는 것)
// var has no block scope
{
  num = 1;
  var num;
}
console.log(num); // 1

// 3. Constant, read only
// use const whenever possible
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 10;

// Note!
// Immutable data types: primitive types, frozen objects
// Mutable: all objects by default are mutable in JS

// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive 타입과 object타입으로 나눈다.
// 타입에 따라 값이 다르게 저장된다.
// primitive는 값 자체가 메모리에 저장된다.
// object는 너무 커서 메모리에 한 번에 올라갈 수 없다. 그래서 레퍼런스를 저장.
// 레퍼런스는 실제로 오브젝트를 가리키고 있는 곳.

// primitive, single item: 더 이상 나누어질 수 없는 한 가지의 아이템
// number, string, boolean, null, undefined, symbol
// object: 이러한 싱글 아이템들을 묶어서 한 단위, 한 박스로 관리할 수 있게 해주는 것.
// JS에서는 function도 데이터 타입 중 하나.
// first-class function 지원,
// 이 뜻은 function 다른 데이터 타입처럼 변수에 할당이 가능하고,
// 그렇기 때문에 다른 함수에 인자로도 전달할 수 있다. 리턴값으로도 가능하다.
const age = 10; // integer
const weight = 56.7; // decimal number
typeof age;
typeof weight; // 둘 다 Number

// 특별한 숫자 데이터들
const inf = 1 / 0; // Infinity
const negInf = -1 / 0; // -Infinity
const nan = "not a number" / 2; //NaN

// string

// boolean
// false: 0, null, undefined, NaN. ''
// true: any other value

// null
// undefined

// symbol
// create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
// symbol은 출력할 때 symbol.description으로 변환하여 출력해야 한다.
console.log(symbol1.description);

// object와 function은 따로 다루도록.

// 5. Dynamic typing: dynamically typed language
// 선언할 때 타입을 정하지 않고 런타임에서 동작할 때,
// 할당된 값에 따라 타입이 변경될 수 있다.
// 동적 할당은 매우 편리하지만 한편으론 위험해서 그 점을 보완하고자 TS가 등장.
