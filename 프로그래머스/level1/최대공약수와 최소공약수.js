/*
https://programmers.co.kr/learn/courses/30/lessons/12940?language=javascript
유클리드 호제법(Euclidean Algorithm)
유클리드 호제법이란 알고리즘을 사용하면 시간복잡도를 O(logN)으로 줄일 수 있다.

정의:
2개의 자연수  a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면 (단 a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다. 이 성질에 따라, b를 r로 나눈 나머지 r0를 구하고,
 다시 r을 r0로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다. 


수식:
GCD(a,b) = GCD(b, a % b)
if a % b = 0 -> GCD = b
else gcd(b,  a % b)


최소 공배수(LCM): 최소공배수 = 두 자연수의 곱 / 최대공약수

*/
function solution(n, m) {
  const answer = [];
  if (n === m) {
    return [n, (n * m) / n];
  }
  const a = Math.max(n, m);
  const b = Math.min(n, m);

  setGCD(a, b, answer);
  setLCM(a * b, answer);
  return answer;
}

function setGCD(a, b, answer) {
  if (a % b === 0) answer.push(b);
  else setGCD(b, a % b, answer);
}

function setLCM(multipliedNum, answer) {
  answer.push(multipliedNum / answer[0]);
}
