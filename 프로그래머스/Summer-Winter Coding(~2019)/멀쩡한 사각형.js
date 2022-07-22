//https://school.programmers.co.kr/learn/courses/30/lessons/62048
const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
const solution = (w, h) => {
  return w * h - (w + h - getGCD(h, w));
};
