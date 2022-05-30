const fs = require("fs");
const [n, k] = fs.readFileSync("/dev/stdin").toString().split("\n");
const people = Array.from({ length: n }, (v, i) => i + 1);
const getJosephus = (n, k, p) => {
  const people = [...p];
  const ans = [];
  let pt = 0;
  for (let i = 0; i < n; i++) {
    pt += k - 1;
    pt %= people.length;
    ans.push(people[pt]);
    people.splice(pt, 1);
  }
  return ans;
};
console.log(`<${getJosephus(n, k, people).join(", ")}>`);
