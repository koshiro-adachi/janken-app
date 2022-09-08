import { getFortuneSetting } from "../../data/fortuneData";

export const fortune = (totalPoint: number, betPoint: number): string => {
  const fortunePoint = totalPoint + betPoint;
  const fortuneSetting = getFortuneSetting(fortunePoint);
  document.body.style.backgroundColor = fortuneSetting.color;
  return fortuneSetting.name;
};
