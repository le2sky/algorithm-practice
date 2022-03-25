//https://programmers.co.kr/learn/courses/30/lessons/82612
function solution(price, money, count) {
  let answer;
  const totalCount = ((result = 0) => {
    for (let i = 1; i <= count; i++) {
      result += price * i;
    }
    return result;
  })();
  answer = money - totalCount < 0 ? totalCount - money : 0;
  return answer;
}
