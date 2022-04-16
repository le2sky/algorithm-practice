//https://programmers.co.kr/learn/courses/30/lessons/42747#
//정렬 후 n번째 인용횟수가 n보다 크거나 같은 경우만 횟수가 인정됩니다.
function solution(citations) {
  let h = 0;
  citations.sort((a, b) => b - a);
  for (let count of citations) if (count > h) h++;
  return h;
}
