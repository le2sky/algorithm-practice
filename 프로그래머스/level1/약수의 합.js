/*
https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
TODO 폴라드-로 알고리즘으로 소인수 분해한 이후, 약수합 공식 적용
https://aruz.tistory.com/140 : 폴라드-로 알고리즘
*/

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}
