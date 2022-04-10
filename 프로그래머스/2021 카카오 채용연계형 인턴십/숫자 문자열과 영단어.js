//https://programmers.co.kr/learn/courses/30/lessons/81301
function solution(s) {
  let answer = "";
  let alpa = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let keys = Object.keys(alpa);
  let numWord = "";

  [...s].forEach((letter) => {
    if (!isNaN(Number(letter))) answer += letter;
    else if (keys.includes(numWord + letter)) {
      answer += alpa[numWord + letter];
      numWord = "";
    } else {
      numWord += letter;
    }
  });
  return Number(answer);
}
