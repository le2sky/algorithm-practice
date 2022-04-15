//https://programmers.co.kr/learn/courses/30/lessons/42579#
function setDataStructure(genres, plays) {
  //데이터 구조 세팅
  let infor = {};
  genres.forEach((genre, index) => {
    if (infor[genre]) {
      (infor[genre].total_plays += plays[index]),
        infor[genre].list.push({
          plays: plays[index],
          songId: index,
        });
    } else {
      infor[genre] = {
        total_plays: plays[index],
        list: [
          {
            plays: plays[index],
            songId: index,
          },
        ],
      };
    }
  });
  return infor;
}

function sortByPlays(infor) {
  //조회수 정렬
  infor.forEach((item) => {
    for (key in item) {
      item[key].list.sort((a, b) => {
        if (a.plays === b.plays) return a.songId - b.songId;
        else return b.plays - a.plays;
      });
    }
  });
  return infor;
}

function byGenre(a, b) {
  //장르 정렬
  return b[1].total_plays - a[1].total_plays;
}
function solution(genres, plays) {
  let answer = [];
  let infor = setDataStructure(genres, plays);
  answer.push(...Object.entries(infor));
  answer.sort(byGenre);

  return sortByPlays(answer.map((item) => Object.fromEntries([item])))
    .map((item) => {
      for (key in item) {
        return [item[key].list[0], item[key].list[1] || false];
      }
    })
    .flat()
    .filter((item) => item) //false 분류
    .map((item) => item.songId);
}
