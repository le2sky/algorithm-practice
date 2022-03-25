//https://programmers.co.kr/learn/courses/30/lessons/17681
function solution(n, arr1, arr2) {
  let answer = [];
  let mergedArr = [];
  arr1.forEach((item, index) => {
    mergedArr.push(arr1[index] | arr2[index]);
  });
  mergedArr.forEach((item) => {
    let bin = item.toString(2);
    bin = bin.length < n ? `${"0".repeat(n - bin.length) + bin}` : bin;
    bin = [...bin]
      .map((item) => {
        if (item === "0") return " ";
        else return "#";
      })
      .join("");
    answer.push(bin);
  });
  return answer;
}
