function solution(lottos, win_nums) {
  const answer = [0, 0];
  const win_information = [6, 6, 5, 4, 3, 2, 1];
  let zeroCount = 0;
  let hitCount = 0;
  lottos.forEach((item, index) => {
    if (item === 0) {
      zeroCount++;
    } else if (win_nums.includes(item)) {
      hitCount++;
    }
  });
  if (zeroCount === 6) return [1, 6];
  if (hitCount === 6) return [1, 1];

  answer[1] = win_information[hitCount];
  answer[0] =
    win_information[
      win_nums.length >= zeroCount
        ? (hitCount += zeroCount)
        : (hitCount += win_nums.length)
    ];

  return answer;
}
