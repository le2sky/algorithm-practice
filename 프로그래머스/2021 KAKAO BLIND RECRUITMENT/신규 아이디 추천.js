//https://programmers.co.kr/learn/courses/30/lessons/72410
function solution(new_id) {
  let answer = "";
  [...new_id].forEach((item) => {
    answer += item.toLowerCase();
  });
  answer = [...answer]
    .filter((item) => {
      if (
        (item >= "a" && item <= "z") ||
        ["-", "_", "."].includes(item) ||
        !isNaN(Number(item))
      ) {
        return item;
      }
    })
    .join("");
  let lastLetter = "";
  answer = [...answer]
    .filter((item) => {
      if (!(item === "." && lastLetter === ".")) {
        lastLetter = "";
        if (item === ".") lastLetter = ".";
        return item;
      }
    })
    .join("");

  answer = [...answer]
    .filter((item, index, arr) => {
      if (!(item === "." && (index === 0 || index === arr.length - 1)))
        return item;
    })
    .join("");

  if (answer === "") answer += "a";
  answer = [...answer.slice(0, 15)]
    .filter((item, index, arr) => !(item === "." && index === arr.length - 1))
    .join("");

  if (answer.length <= 2) {
    let lastLetter = answer[answer.length - 1];
    for (let i = answer.length; i < 3; i++) {
      answer += lastLetter;
    }
  }
  return answer;
}
