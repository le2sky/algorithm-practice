/*
https://programmers.co.kr/learn/courses/30/lessons/12950
*/

function solution(arr1, arr2) {
  var answer = [];

  arr1.forEach((subArr, index) => {
    let tempArr = [];
    subArr.forEach((item, subIndex) => {
      tempArr.push(item + arr2[index][subIndex]);
    });
    answer.push(tempArr);
  });
  return answer;
}
