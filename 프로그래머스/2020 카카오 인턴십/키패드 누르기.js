//https://programmers.co.kr/learn/courses/30/lessons/67256
function solution(numbers, hand) {
  let answer = "";
  let nowFingerPosition = {
    left: "*",
    right: "#",
  };
  const originkeyPad = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "*",
    "0",
    "#",
  ];
  const middleKeypad = ["2", "5", "8", "0"];

  let leftPosition, rightPosition, targetPosition;
  numbers.forEach((num) => {
    num = String(num);
    console.log(nowFingerPosition, num);
    if (num === "1" || num === "4" || num === "7") {
      answer += "L";
      nowFingerPosition.left = num;
    } else if (num === "3" || num === "6" || num === "9") {
      answer += "R";
      nowFingerPosition.right = num;
    } else {
      leftPosition = originkeyPad.indexOf(nowFingerPosition.left);
      rightPosition = originkeyPad.indexOf(nowFingerPosition.right);
      targetPosition = originkeyPad.indexOf(num);
      if (
        !middleKeypad.includes(nowFingerPosition.left) &&
        !middleKeypad.includes(nowFingerPosition.right)
      ) {
        let left = getCount(leftPosition, targetPosition);
        let right = getCount(rightPosition, targetPosition);
        if (left === right) {
          answer += hand[0].toUpperCase();
          nowFingerPosition[hand] = num;
        } else if (left > right) {
          answer += "R";
          nowFingerPosition.right = num;
        } else {
          answer += "L";
          nowFingerPosition.left = num;
        }
      } else {
        let isLeft = middleKeypad.includes(nowFingerPosition.left);
        let isRight = middleKeypad.includes(nowFingerPosition.right);
        if (isLeft && isRight) {
          let leftCount = Math.floor(
            Math.abs(leftPosition - targetPosition) / 3
          );
          let rightCount = Math.floor(
            Math.abs(rightPosition - targetPosition) / 3
          );
          if (leftCount === rightCount) {
            answer += hand[0].toUpperCase();
            nowFingerPosition[hand] = num;
          } else if (leftCount > rightCount) {
            answer += "R";
            nowFingerPosition.right = num;
          } else {
            answer += "L";
            nowFingerPosition.left = num;
          }
        } else if (isLeft) {
          let leftCount = Math.floor(
            Math.abs(leftPosition - targetPosition) / 3
          );
          let rightCount = getCount(rightPosition, targetPosition);
          if (leftCount === rightCount) {
            answer += hand[0].toUpperCase();
            nowFingerPosition[hand] = num;
          } else if (leftCount > rightCount) {
            answer += "R";
            nowFingerPosition.right = num;
          } else {
            answer += "L";
            nowFingerPosition.left = num;
          }
        } else if (isRight) {
          let rightCount = Math.floor(
            Math.abs(rightPosition - targetPosition) / 3
          );
          let leftCount = getCount(leftPosition, targetPosition);
          if (leftCount === rightCount) {
            answer += hand[0].toUpperCase();
            nowFingerPosition[hand] = num;
          } else if (leftCount > rightCount) {
            answer += "R";
            nowFingerPosition.right = num;
          } else {
            answer += "L";
            nowFingerPosition.left = num;
          }
        }
      }
    }
  });

  function getCount(finger, target) {
    let targetPosition = [0, target % 3];
    targetPosition[0] = Math.floor(Math.abs(target - targetPosition[1]) / 3);

    let fingerPosition = [0, finger % 3];
    fingerPosition[0] = Math.floor(Math.abs(finger - fingerPosition[1]) / 3);

    let result = 0;
    targetPosition.forEach((item, index) => {
      result += Math.abs(fingerPosition[index] - item);
    });
    return result;
  }

  return answer;
}
