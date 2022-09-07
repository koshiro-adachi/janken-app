export type fortuneProps = {
  page: number;
  name: string;
  description: string;
  color: string;
  lowestPoint: number;
  nextFortune: string;
  nextLowestPoint: number;
};
export type fortuneSlideProps = {
  page: number;
  name: string;
  description: string;
  color: string;
};

export const fortuneData: Record<string, fortuneProps> = {
  ultraExcellentLuck: {
    page: 1,
    name: "ウルトラ大吉",
    description: "Point >= 3340",
    color: "rgb(255 234 164)",
    lowestPoint: 3340,
    nextFortune: "なし",
    nextLowestPoint: 9999,
  },
  //numはlowestPoint、pointはdescription
  superExcellentLuck: {
    page: 2,
    name: "スーパー大吉",
    description: "Point >= 940",
    color: "rgb(237 255 164)",
    lowestPoint: 940,
    nextFortune: "ウルトラ大吉",
    nextLowestPoint: 3340,
  },
  excellentLuck: {
    page: 3,
    name: "大吉",
    description: "Point >= 340",
    color: "rgb(189 255 164)",
    lowestPoint: 340,
    nextFortune: "スーパー大吉",
    nextLowestPoint: 940,
  },
  goodLuck: {
    page: 4,
    name: "吉",
    description: "Point >= 160",
    color: "rgb(164 255 217)",
    lowestPoint: 160,
    nextFortune: "大吉",
    nextLowestPoint: 340,
  },
  mediumLuck: {
    page: 5,
    name: "中吉",
    description: "Point >= 130",
    color: "rgb(164 242 255)",
    lowestPoint: 130,
    nextFortune: "吉",
    nextLowestPoint: 160,
  },
  smallLuck: {
    page: 6,
    name: "小吉",
    description: "Point >= 100",
    color: "#ffffff",
    lowestPoint: 100,
    nextFortune: "中吉",
    nextLowestPoint: 130,
  },
  theEndOfLuck: {
    page: 7,
    name: "末吉",
    description: "Point >= 50",
    color: "rgb(164 195 255)",
    lowestPoint: 50,
    nextFortune: "小吉",
    nextLowestPoint: 100,
  },
  wickedness: {
    page: 8,
    name: "凶",
    description: "Point >= 10",
    color: "rgb(186 164 255)",
    lowestPoint: 10,
    nextFortune: "末吉",
    nextLowestPoint: 50,
  },
  atrocity: {
    page: 9,
    name: "大凶",
    description: "Point < 10",
    color: "rgb(179 179 179)",
    lowestPoint: 0,
    nextFortune: "凶",
    nextLowestPoint: 10,
  },
};
export const getFortuneSetting = (fortunePoint: number): fortuneProps => {
  if (fortunePoint >= fortuneData.ultraExcellentLuck.lowestPoint) {
    return fortuneData.ultraExcellentLuck;
  } else if (fortunePoint >= fortuneData.superExcellentLuck.lowestPoint) {
    return fortuneData.superExcellentLuck;
  } else if (fortunePoint >= fortuneData.excellentLuck.lowestPoint) {
    return fortuneData.excellentLuck;
  } else if (fortunePoint >= fortuneData.goodLuck.lowestPoint) {
    return fortuneData.goodLuck;
  } else if (fortunePoint >= fortuneData.mediumLuck.lowestPoint) {
    return fortuneData.mediumLuck;
  } else if (fortunePoint >= fortuneData.smallLuck.lowestPoint) {
    return fortuneData.smallLuck;
  } else if (fortunePoint >= fortuneData.theEndOfLuck.lowestPoint) {
    return fortuneData.theEndOfLuck;
  } else if (fortunePoint >= fortuneData.wickedness.lowestPoint) {
    return fortuneData.wickedness;
  } else {
    return fortuneData.atrocity;
  }
};
export const fortuneSlideData: Array<fortuneSlideProps> = [
  {
    page: 1,
    name: "ウルトラ大吉",
    description: "Point >= 3340",
    color: "rgb(255 234 164)",
  },
  {
    page: 2,
    name: "スーパー大吉",
    description: "Point >= 940",
    color: "rgb(237 255 164)",
  },
  {
    page: 3,
    name: "大吉",
    description: "Point >= 340",
    color: "rgb(189 255 164)",
  },
  {
    page: 4,
    name: "吉",
    description: "Point >= 160",
    color: "rgb(164 255 217)",
  },
  {
    page: 5,
    name: "中吉",
    description: "Point >= 130",
    color: "rgb(164 242 255)",
  },
  {
    page: 6,
    name: "小吉",
    description: "Point >= 100",
    color: "#ffffff",
  },
  {
    page: 7,
    name: "末吉",
    description: "Point >= 50",
    color: "rgb(164 195 255)",
  },
  {
    page: 8,
    name: "凶",
    description: "Point >= 10",
    color: "rgb(186 164 255)",
  },
  {
    page: 9,
    name: "大凶",
    description: "Point < 10",
    color: "rgb(179 179 179)",
  },
];
