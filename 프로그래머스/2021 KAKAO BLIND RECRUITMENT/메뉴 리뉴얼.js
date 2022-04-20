//https://programmers.co.kr/learn/courses/30/lessons/72411
function solution(orders, course) {
  let answer = [];
  let hash = {};
  for (let i of course) {
    orders.forEach((patt) => {
      patt = [...patt].sort().join("");
      if (hash[i] == null) hash[i] = {};
      combinations([...patt], i).forEach((combi) => {
        combi = combi.join("");
        if (hash[i][combi] == null) hash[i][combi] = 0;
        hash[i][combi] = hash[i][combi] += 1;
      });
    });
  }
  for (let key in hash) {
    let temp = Object.entries(hash[key]).sort((a, b) => b[1] - a[1]);
    let max = temp[0];
    temp.forEach((entry) => {
      if (entry[1] === max[1] && max[1] >= 2) answer.push(entry[0]);
    });
  }
  return answer.sort();
}
function combinations(arr, r) {
  let result = [];
  if (r === 1) return arr.map((el) => [el]);
  arr.forEach((fix, index, origin) => {
    let rest = origin.slice(index + 1);
    const attach = combinations(rest, r - 1).map((el) => [fix, ...el]);
    result.push(...attach);
  });

  return result;
}
