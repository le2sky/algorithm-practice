//https://programmers.co.kr/learn/courses/30/lessons/42746?language=javascript#
//compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 색인으로 정렬합니다. 즉, a가 먼저옵니다.
function solution(numbers) {
  let answer = "";
  numbers.sort(sortFunc);
  answer = numbers.join("");
  if (answer[0] === "0") return "0";
  return answer;
}
const sortFunc = (a, b) => {
  const compareA = Number(String(a) + String(b));
  const compareB = Number(String(b) + String(a));
  return compareB - compareA;
};
