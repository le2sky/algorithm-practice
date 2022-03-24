//https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
function solution(arr) {
  const answer = [];
  let lastNumber = -1;
  arr.forEach((num) => {
    if (lastNumber !== num) answer.push(num);
    lastNumber = num;
  });
  return answer;
}
