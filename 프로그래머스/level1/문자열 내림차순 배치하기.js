//https://programmers.co.kr/learn/courses/30/lessons/12917#qna
function solution(s) {
  return [...s].sort((a, b) => b.codePointAt(0) - a.codePointAt(0)).join("");
}
