//https://programmers.co.kr/learn/courses/30/lessons/12912?language=javascript
function solution(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let answer = 0;
  for (; min <= max; min++) {
    answer += min;
  }
  return answer;
}
