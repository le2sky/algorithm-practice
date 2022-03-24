//https://programmers.co.kr/learn/courses/30/lessons/12918?language=javascript
function solution(s) {
  let answer = false;
  let letterArr = [...s];
  if (letterArr.length === 4 || letterArr.length === 6) {
    answer = true;
    letterArr.forEach((letter) => {
      if (isNaN(Number(letter))) answer = false;
    });
  }
  return answer;
}
