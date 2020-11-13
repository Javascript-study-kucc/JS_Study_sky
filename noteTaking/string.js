// C언어와 달리 자바스크립트의 문자열은 변경 불가능하다. (immutable)
// 문자열을 한 번 생성하면 그 문자열을 변경할 수 없다.

let str = "aaa"; // 식별자 str은 메모리에 생성된 문자열 "aaa" 의 메모리 주소를 가리킨다.
console.log(str);
str = "bbb"; // "aaa" 를 수정하는 것이 아니라 새로운 문자열 "bbb" 를 메모리에 생성하고 str이 이걸 가리키게 하는 것.
// 이때 "aaa" 와 "bbb" 는 모두 메모리에 존재하고 있다. 다만 str이 "bbb" 를 가리키고 있을뿐.
console.log(str);

// 문자열은 유사배열이다. 즉 인덱스로 접근할 수 있다.
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

str[1] = "c"; // 바뀌지 않는다. 에러는 안남.
console.log(str); // bbb

// 새로운 문자열을 다시 할당하는 것은 가능하다.
let str2 = "i am";
console.log(str2);

str2 = "I'm";
console.log(str2); // I'm

str2 += " Sky";
console.log(str2); // I'm Sky

// str2 -= "y";
// console.log(str2); // NaN
