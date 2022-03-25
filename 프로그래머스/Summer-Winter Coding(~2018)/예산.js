//https://programmers.co.kr/learn/courses/30/lessons/12982?language=javascript
function solution(ds, budget) {
  let answer = 0;
  ds.sort((a, b) => a - b);
  ds.forEach((d) => {
    if (budget - d >= 0) {
      budget -= d;
      answer++;
    }
  });
  return answer;
}
