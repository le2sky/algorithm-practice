//https://programmers.co.kr/learn/courses/30/lessons/49993#
function solution(skill, skill_trees) {
  skill = [...skill];
  let custom = filter(skill, skill_trees);
  let answer = 0;

  custom.forEach((custom_st) => {
    answer += isPosible(skill, custom_st) ? 1 : 0;
  });
  return answer;
}

function isPosible(skill, str) {
  if (str === "") return true;
  else {
    for (let i = 0; i < str.length; i++) {
      if (skill[i] !== str.charAt(i)) return false;
    }
  }
  return true;
}

function filter(skill, skill_trees) {
  return skill_trees.map(([...item]) =>
    item.filter((s) => skill.includes(s)).join("")
  );
}
