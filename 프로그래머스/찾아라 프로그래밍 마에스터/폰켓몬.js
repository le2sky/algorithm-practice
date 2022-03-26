//https://programmers.co.kr/learn/courses/30/lessons/1845
function solution(nums) {
  let answer = 0;
  let pocketTypes = new Set(nums);
  pocketTypes = [...pocketTypes.keys()];
  for (let i = 0; i < nums.length / 2; i++) {
    if (pocketTypes[i] == null) break;
    answer += 1;
  }
  return answer;
}
