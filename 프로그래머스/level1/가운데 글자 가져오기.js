//https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
const solution = (s) =>
  s.length === 1
    ? s
    : s.length % 2 == 0
    ? s.slice((s.length - 1) / 2, (s.length - 1) / 2 + 2)
    : s[(s.length - 1) / 2];
