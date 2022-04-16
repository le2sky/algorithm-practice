//https://programmers.co.kr/learn/courses/30/lessons/42839
function solution(numbers) {
  let answer = 0;
  const permus = [];
  numbers = [...numbers];
  for (let i = numbers.length; i !== 0; i--) {
    permus.push(...permutations(numbers, i));
  }
  let permusSet = new Set(permus.map((item) => Number(item.join(""))));

  permusSet.forEach((num) => {
    if (isPrime(num)) answer += 1;
  });

  return answer;
}

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
};

const permutations = (arr, select) => {
  const results = [];
  if (select === 1) return arr.map((el) => [el]);

  arr.forEach((fix, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const attached = permutations(rest, select - 1).map((el) => [fix, ...el]);
    results.push(...attached);
  });
  return results;
};
