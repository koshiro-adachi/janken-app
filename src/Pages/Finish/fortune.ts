import { fortuneArray, fortuneProps } from "../../data/fortuneData";

export const fortune = (
  totalPoint: number,
  winCount: number,
  betPoint: number
): string => {
  const fortune: Array<fortuneProps> = fortuneArray;

  const fortunePoint = (): number => {
    if (winCount <= 1) {
      return totalPoint + betPoint * 2;
    } else {
      return totalPoint + betPoint * 4;
    }
  };
  if (fortunePoint() >= fortune[0].num) {
    document.body.style.backgroundColor = "rgb(255 234 164)";
    return "ウルトラ大吉";
  } else if (fortunePoint() >= fortune[1].num) {
    document.body.style.backgroundColor = "rgb(237 255 164)";
    return "スーパー大吉";
  } else if (fortunePoint() >= fortune[2].num) {
    document.body.style.backgroundColor = "rgb(189 255 164)";
    return "大吉";
  } else if (fortunePoint() >= fortune[3].num) {
    document.body.style.backgroundColor = "rgb(164 255 217)";
    return "吉";
  } else if (fortunePoint() >= fortune[4].num) {
    document.body.style.backgroundColor = "rgb(164 242 255)";
    return "中吉";
  } else if (fortunePoint() >= fortune[5].num) {
    document.body.style.backgroundColor = "#ffffff";
    return "小吉";
  } else if (fortunePoint() >= fortune[6].num) {
    document.body.style.backgroundColor = "rgb(164 195 255)";
    return "末吉";
  } else if (fortunePoint() >= fortune[7].num) {
    document.body.style.backgroundColor = "rgb(186 164 255)";
    return "凶";
  } else {
    document.body.style.backgroundColor = "rgb(179 179 179)";
    return "大凶";
  }
};
