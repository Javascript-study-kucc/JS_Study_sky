// switch 문

let gradeLetter = "A";
let gradeNumber;

switch (gradeLetter) {
  case "A":
    gradeNumber = 4;
    break;
  case "B":
    gradeNumber = 3;
    break;
  case "C":
    gradeNumber = 2;
    break;
  case "D":
    gradeNumber = 1;
    break;
  case "F":
    gradeNumber = 0;
    break;
  default:
    gradeNumber = "Invalid grade";
}

console.log(gradeNumber); // 4
