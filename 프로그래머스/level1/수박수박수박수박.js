//https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
function solution(n) {
  var answer = "";
  if (n % 2 == 0) {
    answer = "수박".repeat(n / 2);
  } else {
    answer = "수박".repeat((n + 1) / 2);
    answer = [...answer];
    answer.pop();
    answer = answer.join("");
  }
  return answer;
}
