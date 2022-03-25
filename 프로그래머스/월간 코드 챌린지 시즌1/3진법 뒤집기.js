//https://programmers.co.kr/learn/courses/30/lessons/68935?language=javascript
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
