//https://programmers.co.kr/learn/courses/30/lessons/42587
function solution(priorities, location) {
  let answer = 0;
  let docs = priorities.map((prior, index) => ({ location: index, prior }));
  let locationPrinted = false;

  while (!locationPrinted) {
    const shifted = docs.shift();
    let printAvailable = true;
    if (docs.some((doc) => shifted.prior < doc.prior)) printAvailable = false;
    if (printAvailable) {
      answer += 1;
      if (shifted.location === location) locationPrinted = true;
    } else {
      docs.push(shifted);
    }
  }

  return answer;
}
