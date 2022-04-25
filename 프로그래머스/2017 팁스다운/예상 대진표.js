//https://programmers.co.kr/learn/courses/30/lessons/12985#
function solution(n, a, b) {
  let arr = Array.from({ length: n }, () => 0);
  arr[b - 1] = "B";
  arr[a - 1] = "A";

  const isDiff = () => {
    if (
      (arr.indexOf("A") + 1 > arr.length / 2 &&
        arr.indexOf("B") + 1 <= arr.length / 2) ||
      (arr.indexOf("A") + 1 <= arr.length / 2 &&
        arr.indexOf("B") + 1 > arr.length / 2)
    )
      return true;
    return false;
  };

  const isLeft = () => {
    if (arr.indexOf("A") + 1 > arr.length / 2) return false;
    return true;
  };

  while (!isDiff()) {
    if (isLeft()) {
      arr.splice(arr.length / 2);
    } else {
      arr.splice(0, arr.length / 2);
    }
  }

  return Math.log2(arr.length);
}
