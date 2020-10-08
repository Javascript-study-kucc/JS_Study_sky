// 7-3. 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서,
// 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

// function alphabetLocation(word) {
//   word = word.split("");
//   // a ~ z의 아스키코드는 97~122.
//   for (i = 97; i <= 127; i++) {
//     for (j = 0; j < word.length; j++) {
//       if (word[j].charCodeAt(0) != i) {
//         console.log(-1);
//       } else {
//         console.log(j);
//       }
//     }
//   }
// }

function alphabetLocation(word) {
  word = word.split("");
  // a ~ z의 아스키코드는 97~122.
  for (i = 97; i <= 127; i++) {
    for (j = 0; j < word.length; j++) {
      if (word[j].charCodeAt(0) == i) {
        console.log(j);
      }
      console.log(-1);
    }
  }
}

alphabetLocation("baekjoon");
// console.log(alphabetLocation("baekjoon"));
