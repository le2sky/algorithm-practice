//https://programmers.co.kr/learn/courses/30/lessons/86491
function solution(sizes) {
  let answer = 0;
  const flatArr = sizes.flat();
  const xArr = []; //가로
  const yArr = [];
  flatArr.forEach((size, index) => {
    if ((index + 1) % 2 !== 0) {
      xArr.push(size);
    } else yArr.push(size);
  });
  xArr.forEach((size, index) => {
    if (size < yArr[index]) {
      xArr[index] = yArr[index];
      yArr[index] = size;
    }
  });
  answer = Math.max(...xArr) * Math.max(...yArr);
  return answer;
}
