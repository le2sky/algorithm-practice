//https://programmers.co.kr/learn/courses/30/lessons/17682
function solution(dartResult) {
  let answer = 0;
  const eachGameResults = getEachGameResults(dartResult);
  const eachGameScore = [0, 0, 0];

  eachGameResults.forEach((information, index) => {
    let score;
    let powMode; //s(1) d(2) t(3)
    let option;
    if (information.length === 3) {
      if (isNaN(Number(information[1]))) {
        option = information[2];
        score = information[0];
        powMode = getPowMode(information, 1);
      } else {
        score = 10;
        powMode = getPowMode(information, 2);
      }
    } else if (information.length === 4) {
      option = information[3];
      score = 10;
      powMode = getPowMode(information, 2);
    } else {
      score = information[0];
      powMode = getPowMode(information, 1);
    }
    eachGameScore[index] = Math.pow(score, powMode);
    setOptions(option, index);
  });

  function getPowMode(information, index) {
    return information[index] === "S" ? 1 : information[index] === "D" ? 2 : 3;
  }
  function setOptions(option, gameIndex) {
    if (option === "#") {
      eachGameScore[gameIndex] *= -1;
    }
    if (option === "*") {
      if (gameIndex === 0) {
        eachGameScore[gameIndex] *= 2;
      } else {
        eachGameScore[gameIndex] *= 2;
        eachGameScore[gameIndex - 1] *= 2;
      }
    }
  }

  eachGameScore.forEach((score) => (answer += score));
  return answer;
}

function getEachGameResults(dartResult) {
  let gameIndex = [];
  let eachGameResult = [];
  [...dartResult].forEach((letter, index, arr) => {
    if (letter === "S" || letter === "D" || letter === "T") {
      if (
        arr[index + 1] === "*" ||
        (arr[index + 1] === "#" && index + 1 <= arr.length - 1)
      ) {
        gameIndex.push(index + 1);
      } else gameIndex.push(index);
    }
  });
  let lastIndex = 0;
  gameIndex.forEach((index) => {
    let temp = "";
    for (lastIndex; lastIndex <= index; lastIndex++) {
      temp += dartResult[lastIndex];
    }
    eachGameResult.push(temp);
  });
  return eachGameResult;
}
