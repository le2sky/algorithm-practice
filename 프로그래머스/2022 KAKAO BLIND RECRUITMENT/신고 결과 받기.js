//https://programmers.co.kr/learn/courses/30/lessons/92334
function solution(id_list, report, k) {
  let answer = [];
  report = new Set(report);
  report = [...report.values()];

  let map = new Map();
  let newMap = new Map();

  report.forEach((reportInfor) => {
    let [usr, reportedUser] = reportInfor.split(" ");
    let data;
    if (map.has(usr)) {
      let data = map.get(usr);
      data.reportList = [...data.reportList, reportedUser];
      map.set(usr, data);
    } else {
      map.set(usr, {
        reportList: [reportedUser],
      });
    }
  });

  map.forEach((data) => {
    data.reportList.forEach((user) => {
      if (newMap.has(user)) {
        let data = newMap.get(user);
        data.count++;
        newMap.set(user, data);
      } else {
        newMap.set(user, { count: 1 });
      }
    });
  });
  id_list.forEach((user) => {
    if (map.has(user)) {
      let count = 0;
      map.get(user).reportList.forEach((usr) => {
        if (newMap.has(usr) && newMap.get(usr).count >= k) count++;
      });
      answer.push(count);
    } else {
      answer.push(0);
    }
  });
  return answer;
}
