//https://programmers.co.kr/learn/courses/30/lessons/68644
function solution(numbers) {
  let numberSet = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      numberSet.add(numbers[i] + numbers[j]);
    }
  }
  let answer = [...numberSet.keys()];
  answer.sort((a, b) => a - b);
  return answer;
}
