//https://programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return days[new Date(2016, a - 1, b).getDay()];
}
