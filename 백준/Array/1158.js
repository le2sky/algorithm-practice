let input = [];
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  main(input);
  process.exit();
});

const main = ([n, k]) => {
  console.log(`<${getJosephus(n, k).join(", ")}>`);
};

const getJosephus = (n, k) => {
  const people = Array.from({ length: n }, (v, i) => i + 1);
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
