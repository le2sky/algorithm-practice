/*
https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript
65 - 90 대문자
97 - 122 소문자
*/
function solution(s, n) {
  let answer = "";
  [...s].forEach((letter, index) => {
    if (letter !== " ") {
      let letterPoint = s.codePointAt(index);
      if (isUpperCase(letterPoint)) {
        if (letterPoint + n <= 90) {
          answer += getCodeFromPoint(letterPoint, n);
        } else {
          let addPoint = letterPoint + n - 90;
          answer += getCodeFromPoint(64, addPoint);
        }
      } else {
        if (letterPoint + n <= 122) {
          answer += getCodeFromPoint(letterPoint, n);
        } else {
          let addPoint = letterPoint + n - 122;
          answer += getCodeFromPoint(96, addPoint);
        }
      }
    } else answer += " ";
  });
  return answer;
}

function isUpperCase(letterPoint) {
  if (letterPoint >= 65 && letterPoint <= 90) {
    return true;
  }
}

function getCodeFromPoint(letterPoint, n) {
  return String.fromCodePoint(letterPoint + n);
}
