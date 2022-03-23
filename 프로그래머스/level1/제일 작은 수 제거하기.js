//https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript
function solution(arr) {
  const min = Math.min(...arr);
  const resultArr = arr.filter((item) => item != min);
  if (resultArr.length === 0) {
    return [-1];
  } else return resultArr;
}
