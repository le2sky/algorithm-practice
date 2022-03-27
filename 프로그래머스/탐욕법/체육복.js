//https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript#
function solution(n, lost, reserve) {
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (
      !lost.includes(i + 1) ||
      reserve[reserve.indexOf(i + 1)] === -1 ||
      reserve.includes(i + 1)
    )
      answer += 1;
    else {
      if (
        (reserve.includes(i + 2) && !lost.includes(i + 2)) ||
        (reserve.includes(i) && !lost.includes(i))
      ) {
        answer += 1;
        if (!!~reserve.indexOf(i)) reserve[reserve.indexOf(i)] = -1;
        else reserve[reserve.indexOf(i + 2)] = -1;
      }
    }
  }
  return answer;
}
