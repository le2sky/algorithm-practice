//https://programmers.co.kr/learn/courses/30/lessons/42888
function solution(record) {
  let answer = [];
  let userAccount = new Map();
  userFilter(record, userAccount);
  answer = getEnterLeaveString(record, userAccount);
  return answer;
}

function getEnterLeaveString(record, userMap) {
  let result = [];
  record.forEach((record) => {
    let [command, uid, username] = _(record);
    if (command === "Enter") {
      result.push(`${userMap.get(uid)}님이 들어왔습니다.`);
    } else if (command === "Leave") {
      result.push(`${userMap.get(uid)}님이 나갔습니다.`);
    }
  });
  return result;
}

function userFilter(record, userMap) {
  record.forEach((record) => {
    let [command, uid, username] = _(record);
    if (command !== "Leave") userMap.set(uid, username);
  });
}

function _(str) {
  return str.split(" ");
}
