//https://programmers.co.kr/learn/courses/30/lessons/12919?language=javascript
function solution(seoul) {
  let answer = "";
  seoul.forEach((name, index) => {
    if (name == "Kim") answer = `김서방은 ${index}에 있다`;
  });
  return answer;
}
