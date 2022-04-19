//https://programmers.co.kr/learn/courses/30/lessons/60057
function solution(s) {
  let result = [];
  for (let i = 1; i <= s.length; i++)
    result.push(joinString(zipString(s, i)).length);
  return Math.min(...result);
}

function joinString(str) {
  let resultString = "";
  str.push("");
  let stack = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== stack[stack.length - 1]) {
      resultString +=
        stack.length === 1 ? stack[0] : `${stack.length}${stack[0]}`;
      stack = [];
    }
    stack.push(str[i]);
  }
  return resultString;
}

function zipString(str, divide) {
  let q = [[]];
  let qIndex = 0;
  [...str].forEach((letter, index) => {
    if (q[qIndex].length < divide) {
      q[qIndex].push(letter);
    } else {
      q.push([letter]);
      qIndex++;
    }
  });
  return q.map((arr) => arr.join(""));
}
