//https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
function solution(s) {
  let pCount = 0;
  let yCount = 0;
  s = s.toLowerCase();
  [...s].forEach((letter) => {
    if (letter == "p") pCount++;
    if (letter == "y") yCount++;
  });
  return pCount === yCount;
}
