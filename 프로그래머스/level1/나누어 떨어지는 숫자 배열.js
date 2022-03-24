//https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
function solution(arr, divisor) {
  const answer = [];
  arr.sort((a, b) => a - b);
  arr.forEach((item) => {
    if (item % divisor === 0) answer.push(item);
  });
  if (answer.length === 0) {
    answer.push(-1);
  }

  return answer;
}
