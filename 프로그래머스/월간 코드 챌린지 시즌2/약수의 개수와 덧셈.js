//https://programmers.co.kr/learn/courses/30/lessons/77884
function solution(left, right) {
  let answer = 0;
  const countArr = [];
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    countArr.push(count);
  }
  for (let i = left; i <= right; i++) {
    if (countArr[i - left] % 2 == 0) {
      answer += i;
    } else answer -= i;
  }
  return answer;
}
