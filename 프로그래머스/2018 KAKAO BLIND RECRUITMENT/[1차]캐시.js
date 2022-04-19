//https://programmers.co.kr/learn/courses/30/lessons/17680#
function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];
  if (cacheSize === 0) return cities.length * 5;
  cities.forEach((city) => {
    city = city.toUpperCase();
    //hit
    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
      answer += 1;
    } //miss
    else {
      if (cache.length < cacheSize) cache.push(city);
      else {
        cache.shift();
        cache.push(city);
      }
      answer += 5;
    }
  });
  return answer;
}
