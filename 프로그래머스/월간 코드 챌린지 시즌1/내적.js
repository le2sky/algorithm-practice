//https://programmers.co.kr/learn/courses/30/lessons/70128
function solution(a, b) {
  let answer = 0;
  a.forEach((num, index) => {
    answer += num * b[index];
  });
  return answer;
}
