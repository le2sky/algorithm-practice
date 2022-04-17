//https://programmers.co.kr/learn/courses/30/lessons/42883
function solution(number, k) {
  let answer = "";
  let stack = [0];
  let deleteCount = -1;
  for (let i = 0; i < number.length; i++) {
    while (deleteCount < k && number[i] > stack[stack.length - 1]) {
      stack.pop();
      deleteCount++;
    }
    if (stack.length < number.length - k) stack.push(number[i]);
  }
  answer = stack.join("");
  return answer;
}
