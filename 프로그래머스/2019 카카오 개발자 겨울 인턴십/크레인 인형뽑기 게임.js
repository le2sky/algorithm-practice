//https://programmers.co.kr/learn/courses/30/lessons/64061
function solution(boards, moves) {
  let answer = 0;
  const dollStack = [];
  const rotateArr = [];
  boards.forEach((board) => {
    board.forEach((item, index) => {
      if (rotateArr[index] == null) rotateArr.push([]);
      rotateArr[index].push(item);
    });
  });
  moves.forEach((move) => {
    for (let i = 0; i < rotateArr[move - 1].length; i++) {
      let doll = rotateArr[move - 1][i];
      if (doll !== 0) {
        dollStack.push(doll);
        rotateArr[move - 1][i] = 0;
        break;
      }
    }
  });
  for (let i = dollStack.length; i > 0; i--) {
    dollStack.forEach((doll, index) => {
      if (index === dollStack.length - 1) return false;
      if (doll === dollStack[index + 1]) {
        answer += 2;
        dollStack.splice(index + 1, 1);
        dollStack.splice(index, 1);
      }
    });
  }
  return answer;
}
