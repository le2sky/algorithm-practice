//https://programmers.co.kr/learn/courses/30/lessons/12977
function solution(nums) {
  let answer = 0;
  let result = combinations(nums, 3).map((item) =>
    item.reduce((a, b) => a + b)
  );
  result.forEach((item) => {
    if (isPrime(item)) answer += 1;
  });
  return answer;
}

const combinations = (arr, r) => {
  let result = [];
  if (r === 1) return arr.map((el) => [el]);
  arr.forEach((fix, index, origin) => {
    let rest = origin.slice(index + 1);
    const attach = combinations(rest, r - 1).map((el) => [fix, ...el]);
    result.push(...attach);
  });
  return result;
};

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
  return num >= 2;
};
