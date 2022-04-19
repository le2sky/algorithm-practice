//https://programmers.co.kr/learn/courses/30/lessons/12941#
function solution(A, B) {
  let answer = 0;
  let a = A.sort((a, b) => a - b);
  let b = B.sort((a, b) => b - a);
  a.forEach((num, index) => (answer += num * b[index]));
  return answer;
}
