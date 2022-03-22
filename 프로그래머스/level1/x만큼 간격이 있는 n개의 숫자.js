/*
https://programmers.co.kr/learn/courses/30/lessons/12954?language=javascript
*/

function solution(x, n) {
  let answer = [];
  let count = 0;

  for (let i = 0; i < n; i++) {
    answer.push(count + x);
    count += x;
  }
  return answer;
}
