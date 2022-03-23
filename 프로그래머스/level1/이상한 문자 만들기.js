//https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript
function solution(s) {
  let answer;
  const wordArr = s.split(" ");
  wordArr.forEach((word, wordIndex) => {
    let zalgoString = "";
    [...word].forEach((letter, letterIndex) => {
      if ((letterIndex + 1) % 2 !== 0) {
        zalgoString += letter.toUpperCase();
      } else zalgoString += letter.toLowerCase();
    });
    wordArr[wordIndex] = zalgoString;
  });
  answer = wordArr.join(" ");
  return answer;
}
