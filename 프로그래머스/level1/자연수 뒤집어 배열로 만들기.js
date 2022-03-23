//https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript
function solution(n) {
  let answer = [...String(n)].reverse();
  answer = answer.map((item) => Number(item));
  return answer;
}
