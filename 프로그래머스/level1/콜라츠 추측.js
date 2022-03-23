//https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript
function solution(num) {
  var answer = getCollatzCount(num);
  return answer;
}

function getCollatzCount(num) {
  let count = 0;
  while (num !== 1) {
    if (count >= 500) return -1;
    if (num % 2 == 0) num /= 2;
    else if (num % 2 !== 0) {
      num *= 3;
      num += 1;
    }
    count += 1;
  }
  return count;
}
