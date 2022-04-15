//https://programmers.co.kr/learn/courses/30/lessons/42586
function solution(progresses, speeds) {
  const implementQueue = [];
  const deployQueue = [];
  progresses.forEach((progresse, index) => {
    implementQueue.push({
      progresse,
      speed: speeds[index],
      completedDays: getCompletedDays(progresse, speeds[index]),
    });
  });
  getDeployQueue(deployQueue, implementQueue);
  return deployQueue;
}

function getCompletedDays(progresse, speed) {
  let dayCount = 0;
  while (progresse < 100) {
    progresse += speed;
    dayCount += 1;
  }
  return dayCount;
}

function getDeployQueue(deployQueue, implementQueue) {
  let maxIndex = 0;
  let maxIndexArr = [];
  let nowIndex = 0;
  let deployCount = 0;
  let functionCount;
  while (true) {
    if (nowIndex >= implementQueue.length) {
      break;
    }
    if (
      implementQueue[nowIndex].completedDays >
        implementQueue[maxIndex].completedDays ||
      nowIndex === 0
    ) {
      maxIndex = nowIndex;
      maxIndexArr.push(maxIndex);
      deployCount++;
    }
    nowIndex++;
  }
  maxIndexArr.forEach((item, index) => {
    if (index === maxIndexArr.length - 1) {
      deployQueue.push(implementQueue.length - item);
    } else {
      functionCount = maxIndexArr[index + 1] - item;
      deployQueue.push(functionCount);
    }
  });
}
