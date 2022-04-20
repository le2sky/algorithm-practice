//https://programmers.co.kr/learn/courses/30/lessons/77885#
function solution(numbers) {
  let answer = [];
  numbers.forEach((num) => {
    if (num % 2 == 0) answer.push(num + 1);
    else {
      let binary = ["0", ...num.toString(2)];
      let last = binary.lastIndexOf("0");
      binary[last] = "1";
      binary[last + 1] = "0";
      answer.push(parseInt(binary.join(""), 2));
    }
  });
  return answer;
}
