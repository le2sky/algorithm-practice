//https://programmers.co.kr/learn/courses/30/lessons/17677#
function solution(str1, str2) {
  const strArr1 = _([...str1]);
  const strArr2 = _([...str2]);
  const gyo = [];
  if (strArr1.length + strArr2.length === 0) return 65536;

  strArr1.forEach((word, index) => {
    if (strArr2.includes(word)) {
      strArr1[index] = "1";
      strArr2[strArr2.indexOf(word)] = "1";
      gyo.push(word);
    }
  });

  const hop = [
    ...strArr1.filter((el) => isNaN(Number(el))),
    ...strArr2.filter((el) => isNaN(Number(el))),
    ...gyo,
  ];
  return Math.floor((gyo.length / hop.length) * 65536);
}

function _(words) {
  const strArr = [];
  words.forEach((letter, index) => {
    if (index < words.length - 1) strArr.push([letter, words[index + 1]]);
  });

  return strArr
    .filter((el) => {
      let isAble = true;
      el.forEach((e) => {
        if (!isAlpha(e)) isAble = false;
      });
      if (isAble) return el;
    })
    .map((el) => el.join("").toUpperCase());
}

function isAlpha(str) {
  return str.match(/[a-z]/i);
}
