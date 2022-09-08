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

const lowestPoint = {
  ultraExcellentLuck: 3340,
  superExcellentLuck: 940,
  excellentLuck: 340,
  goodLuck: 160,
  mediumLuck: 130,
  smallLuck: 100,
  theEndOfLuck: 50,
  wickedness: 10,
  atrocity: 0,
};

export const fortuneData: Record<string, fortuneProps> = {
  ultraExcellentLuck: {
    page: 1,
    name: "ウルトラ大吉",
    description: `Point >= ${lowestPoint.ultraExcellentLuck}`,
    color: "rgb(255 234 164)",
    lowestPoint: lowestPoint.ultraExcellentLuck,
    nextFortune: "なし",
    nextLowestPoint: 9999,
  },
  //numはlowestPoint、pointはdescription
  superExcellentLuck: {
    page: 2,
    name: "スーパー大吉",
    description: `Point >= ${lowestPoint.superExcellentLuck}`,
    color: "rgb(237 255 164)",
    lowestPoint: lowestPoint.superExcellentLuck,
    nextFortune: "ウルトラ大吉",
    nextLowestPoint: lowestPoint.ultraExcellentLuck,
  },
  excellentLuck: {
    page: 3,
    name: "大吉",
    description: `Point >= ${lowestPoint.excellentLuck}`,
    color: "rgb(189 255 164)",
    lowestPoint: lowestPoint.excellentLuck,
    nextFortune: "スーパー大吉",
    nextLowestPoint: lowestPoint.superExcellentLuck,
  },
  goodLuck: {
    page: 4,
    name: "吉",
    description: `Point >= ${lowestPoint.goodLuck}`,
    color: "rgb(164 255 217)",
    lowestPoint: lowestPoint.goodLuck,
    nextFortune: "大吉",
    nextLowestPoint: lowestPoint.excellentLuck,
  },
  mediumLuck: {
    page: 5,
    name: "中吉",
    description: `Point >= ${lowestPoint.mediumLuck}`,
    color: "rgb(164 242 255)",
    lowestPoint: lowestPoint.mediumLuck,
    nextFortune: "吉",
    nextLowestPoint: lowestPoint.goodLuck,
  },
  smallLuck: {
    page: 6,
    name: "小吉",
    description: `Point >= ${lowestPoint.smallLuck}`,
    color: "#ffffff",
    lowestPoint: lowestPoint.smallLuck,
    nextFortune: "中吉",
    nextLowestPoint: lowestPoint.mediumLuck,
  },
  theEndOfLuck: {
    page: 7,
    name: "末吉",
    description: `Point >= ${lowestPoint.theEndOfLuck}`,
    color: "rgb(164 195 255)",
    lowestPoint: lowestPoint.theEndOfLuck,
    nextFortune: "小吉",
    nextLowestPoint: lowestPoint.smallLuck,
  },
  wickedness: {
    page: 8,
    name: "凶",
    description: `Point >= ${lowestPoint.wickedness}`,
    color: "rgb(186 164 255)",
    lowestPoint: lowestPoint.wickedness,
    nextFortune: "末吉",
    nextLowestPoint: lowestPoint.theEndOfLuck,
  },
  atrocity: {
    page: 9,
    name: "大凶",
    description: `Point < ${lowestPoint.atrocity}`,
    color: "rgb(179 179 179)",
    lowestPoint: lowestPoint.atrocity,
    nextFortune: "凶",
    nextLowestPoint: lowestPoint.wickedness,
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
    description: `Point >= ${lowestPoint.ultraExcellentLuck}`,
    color: "rgb(255 234 164)",
  },
  {
    page: 2,
    name: "スーパー大吉",
    description: `Point >= ${lowestPoint.superExcellentLuck}`,
    color: "rgb(237 255 164)",
  },
  {
    page: 3,
    name: "大吉",
    description: `Point >= ${lowestPoint.excellentLuck}`,
    color: "rgb(189 255 164)",
  },
  {
    page: 4,
    name: "吉",
    description: `Point >= ${lowestPoint.goodLuck}`,
    color: "rgb(164 255 217)",
  },
  {
    page: 5,
    name: "中吉",
    description: `Point >= ${lowestPoint.mediumLuck}`,
    color: "rgb(164 242 255)",
  },
  {
    page: 6,
    name: "小吉",
    description: `Point >= ${lowestPoint.smallLuck}`,
    color: "#ffffff",
  },
  {
    page: 7,
    name: "末吉",
    description: `Point >= ${lowestPoint.theEndOfLuck}`,
    color: "rgb(164 195 255)",
  },
  {
    page: 8,
    name: "凶",
    description: `Point >= ${lowestPoint.wickedness}`,
    color: "rgb(186 164 255)",
  },
  {
    page: 9,
    name: "大凶",
    description: `Point < ${lowestPoint.atrocity}`,
    color: "rgb(179 179 179)",
  },
];
