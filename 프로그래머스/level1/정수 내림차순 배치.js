//https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript
function solution(n) {
  const answer = Number(
    [...String(n).split("")].sort((a, b) => b - a).join("")
  );
  return answer;
}
