//https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript
function solution(n) {
  let answer = 0;
  [...String(n)].forEach((item) => (answer += Number(item)));
  return answer;
}
