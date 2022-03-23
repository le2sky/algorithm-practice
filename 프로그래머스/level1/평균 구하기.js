//https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
function solution(arr) {
  let answer = 0;
  arr.forEach((item) => (answer += item));
  return answer / arr.length;
}
