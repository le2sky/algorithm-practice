//https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
function solution(array, commands) {
  const answer = [];
  commands.forEach((command) => {
    let [i, j, k] = command;
    let tempArr = array.slice(i - 1, j);
    tempArr.sort((a, b) => a - b);
    answer.push(tempArr[k - 1]);
  });
  return answer;
}
