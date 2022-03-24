//https://programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
  var answer = strings.sort((a, b) => {
    let sortNumber = a[n].codePointAt(0) - b[n].codePointAt(0);
    if (sortNumber === 0) {
      sortNumber = a.localeCompare(b);
    }
    return sortNumber;
  });
  return answer;
}
