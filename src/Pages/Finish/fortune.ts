export const fortune = (totalPoint: number, maxWinCount: number): string => {
  const fortunePoint = totalPoint * maxWinCount;
  if (fortunePoint === 10000) {
    document.body.style.backgroundColor = "rgb(255 234 164)";
    return "ウルトラ大吉";
  } else if (fortunePoint >= 5000) {
    document.body.style.backgroundColor = "rgb(237 255 164)";
    return "スーパー大吉";
  } else if (fortunePoint >= 250) {
    document.body.style.backgroundColor = "rgb(189 255 164)";
    return "大吉";
  } else if (fortunePoint >= 200) {
    document.body.style.backgroundColor = "rgb(164 255 217)";
    return "吉";
  } else if (fortunePoint >= 150) {
    document.body.style.backgroundColor = "rgb(164 242 255)";
    return "中吉";
  } else if (fortunePoint >= 100) {
    document.body.style.backgroundColor = "rgb(164 195 255)";
    return "小吉";
  } else if (fortunePoint >= 50) {
    document.body.style.backgroundColor = "rgb(186 164 255)";
    return "末吉";
  } else if (fortunePoint >= 10) {
    document.body.style.backgroundColor = "rgb(179 179 179)";
    return "凶";
  } else {
    document.body.style.backgroundColor = "rgb(105 105 105)";
    return "大凶";
  }
};
