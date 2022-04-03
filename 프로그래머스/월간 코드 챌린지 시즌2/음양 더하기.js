//https://programmers.co.kr/learn/courses/30/lessons/76501
function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((num, index) => {
    if (signs[index]) answer += num;
    else answer -= num;
  });
  return answer;
}
