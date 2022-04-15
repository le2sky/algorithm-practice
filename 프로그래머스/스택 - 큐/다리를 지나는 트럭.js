//https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const bridge = new Array(bridge_length).fill(0);
  do {
    answer++;
    bridge.pop();
    bridge.reduce((a, b) => a + b) + truck_weights[0] <= weight
      ? bridge.unshift(truck_weights.shift())
      : bridge.unshift(0);
  } while (bridge.reduce((a, b) => a + b) !== 0);

  return answer;
}
