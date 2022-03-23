//https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript
function solution(n) {
  var answer = 0;
  answer = Math.sqrt(n);
  if (Number.isInteger(answer)) {
    answer = Math.pow(answer + 1, 2);
  } else {
    answer = -1;
  }
  return answer;
}
