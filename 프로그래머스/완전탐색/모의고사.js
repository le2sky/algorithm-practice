//https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript#
class Student {
  constructor(num, way) {
    this.studentNumber = num;
    this.submitWay = way;
  }

  getScore(answers) {
    let way = this.submitWay;
    let score = 0;
    (function recur() {
      if (answers.length === way.length) return;
      if (answers.length > way.length) {
        way = [...way.join("").repeat(2)];
      }
      if (answers.length < way.length) {
        way.pop();
      }
      recur();
    })();
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] == way[i]) score += 1;
    }
    return score;
  }
}

function solution(answers) {
  let answer = [];
  const ways = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  for (let i = 1; i <= 3; i++) {
    const student = new Student(i, ways[i - 1]);
    const score = student.getScore(answers);
    answer.push({
      student,
      score,
    });
  }
  answer.sort((a, b) => b.score - a.score);
  let isAllSame = false;
  let isSame = false;
  if (answer[0].score == answer[1].score && answer[1].score === answer[2].score)
    isAllSame = true;
  else if (answer[0].score == answer[1].score) isSame = true;

  answer = answer.map((infor) => infor.student.studentNumber);

  return isAllSame ? answer : isSame ? [answer[0], answer[1]] : [answer[0]];
}
