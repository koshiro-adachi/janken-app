export type fortuneProps = {
  page: number;
  name: string;
  point: string;
  color: string;
  num: number;
};

export const fortuneArray: Array<fortuneProps> = [
  {
    page: 1,
    name: "ウルトラ大吉",
    point: "Point >= 6000",
    color: "rgb(255 234 164)",
    num: 6000,
  },
  {
    page: 2,
    name: "スーパー大吉",
    point: "Point >= 1400",
    color: "rgb(237 255 164)",
    num: 1400,
  },
  {
    page: 3,
    name: "大吉",
    point: "Point >= 500",
    color: "rgb(189 255 164)",
    num: 500,
  },
  {
    page: 4,
    name: "吉",
    point: "Point >= 200",
    color: "rgb(164 255 217)",
    num: 200,
  },
  {
    page: 5,
    name: "中吉",
    point: "Point >= 150",
    color: "rgb(164 242 255)",
    num: 150,
  },
  {
    page: 6,
    name: "小吉",
    point: "Point >= 100",
    color: "#ffffff",
    num: 100,
  },
  {
    page: 7,
    name: "末吉",
    point: "Point >= 50",
    color: "rgb(164 195 255)",
    num: 50,
  },
  {
    page: 8,
    name: "凶",
    point: "Point >= 10",
    color: "rgb(186 164 255)",
    num: 10,
  },
  {
    page: 9,
    name: "大凶",
    point: "Point < 10",
    color: "rgb(179 179 179)",
    num: 0,
  },
];
