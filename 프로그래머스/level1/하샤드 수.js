// https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
function solution(x) {
  return isHarshad(x);
}
function isHarshad(x) {
  let sum = 0;
  let x_ = x;
  while (x != 0) {
    sum += x % 10;
    x = Math.floor(x / 10);
  }
  return x_ % sum === 0;
}
