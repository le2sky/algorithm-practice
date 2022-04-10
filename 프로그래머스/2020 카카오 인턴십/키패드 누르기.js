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

  let leftPosition, rightPosition, targetPosition;
  numbers.forEach((num) => {
    num = String(num);
    if (num === "1" || num === "4" || num === "7") setFinger(0, 1, num);
    else if (num === "3" || num === "6" || num === "9") setFinger(1, 0, num);
    else {
      leftPosition = originkeyPad.indexOf(nowFingerPosition.left);
      rightPosition = originkeyPad.indexOf(nowFingerPosition.right);
      targetPosition = originkeyPad.indexOf(num);
      setFinger(
        getCount(leftPosition, targetPosition),
        getCount(rightPosition, targetPosition),
        num
      );
    }
  });

  function setFinger(left, right, num) {
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
  }
  function getCount(finger, target) {
    let result = 0;
    let targetPosition = [target % 3];
    targetPosition.push(Math.floor(Math.abs(target - targetPosition[0]) / 3));

    let fingerPosition = [finger % 3];
    fingerPosition.push(Math.floor(Math.abs(finger - fingerPosition[0]) / 3));

    targetPosition.forEach((item, index) => {
      result += Math.abs(fingerPosition[index] - item);
    });
    return result;
  }
  return answer;
}
