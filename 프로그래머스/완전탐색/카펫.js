//https://programmers.co.kr/learn/courses/30/lessons/42842#
function solution(brown, yellow) {
  let answer = [];
  let target = brown + yellow;
  let result = 0;
  let i = 3;
  while (result !== target) {
    for (let j = 3; j <= i; j++) {
      result = i * j;
      if (result === target) {
        if ((i - 2) * (j - 2) === yellow) {
          answer.push(i, j);
          break;
        }
        result = 0;
      }
    }
    i++;
  }
  return answer;
}
