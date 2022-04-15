//https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript
function solution(clothes) {
  let answer = 1;
  const spyWear = {};
  for (const hash of clothes) spyWear[hash[1]] = (spyWear[hash[1]] || 0) + 1;
  for (const part in spyWear) answer *= spyWear[part] + 1;
  return answer - 1;
}
