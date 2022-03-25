//https://programmers.co.kr/learn/courses/30/lessons/42889#
function solution(N, stages) {
  let answer = [];
  stages.forEach((elem) => {
    for (let i = 0; i < elem; i++) {
      if (answer[i] == null)
        answer.push({
          stagePlayer: 1,
          stage: i + 1,
          clearPlayer: 0,
        });
      else answer[i].stagePlayer++;
    }
  });

  let allClearUser = 0;
  if (answer.length > N) {
    allClearUser = answer[answer.length - 1].stagePlayer;
    answer.pop();
  }

  answer.forEach((infor, index) => {
    if (infor.stage !== answer.length) {
      infor.clearPlayer = answer[index + 1].stagePlayer;
    } else {
      infor.clearPlayer = allClearUser;
    }
  });

  answer = answer.map((infor) => {
    let failureRate =
      (infor.stagePlayer - infor.clearPlayer) / infor.stagePlayer;
    return {
      failureRate,
      stage: infor.stage,
    };
  });

  if (answer.length < N) {
    let len = answer.length;
    for (let i = 1; i <= N - len; i++) {
      answer.push({
        failureRate: 0,
        stage: len + i,
      });
    }
  }

  answer.sort((a, b) => {
    if (a.failureRate === b.failureRate) return a.stage - b.stage;
    else return b.failureRate - a.failureRate;
  });

  return answer.map((item) => item.stage);
}
