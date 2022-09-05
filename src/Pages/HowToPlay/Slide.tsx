import React, { FC, useEffect, useRef, useState } from "react";
import "./howToPlay.css";

type Props = {
  number: number;
  name: string;
  point: string;
  color: string;
};

export const Slide: FC = () => {
  const fortuneArray: Array<Props> = [
    {
      number: 1,
      name: "ウルトラ大吉",
      point: "Point >= 6000",
      color: "rgb(255 234 164)",
    },
    {
      number: 2,
      name: "スーパー大吉",
      point: "Point >= 1400",
      color: "rgb(237 255 164)",
    },
    {
      number: 3,
      name: "大吉",
      point: "Point >= 500",
      color: "rgb(189 255 164)",
    },
    {
      number: 4,
      name: "吉",
      point: "Point >= 200",
      color: "rgb(164 255 217)",
    },
    {
      number: 5,
      name: "中吉",
      point: "Point >= 150",
      color: "rgb(164 242 255)",
    },
    {
      number: 6,
      name: "小吉",
      point: "Point >= 100",
      color: "#ffffff",
    },
    {
      number: 7,
      name: "末吉",
      point: "Point >= 50",
      color: "rgb(164 195 255)",
    },
    {
      number: 8,
      name: "凶",
      point: "Point >= 10",
      color: "rgb(186 164 255)",
    },
    {
      number: 9,
      name: "大凶",
      point: "Point < 10",
      color: "rgb(179 179 179)",
    },
  ];

  const [num, setNum] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const onClickNext = () => {
    if (num === 8) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  };
  const onClickBack = () => {
    if (num === 0) {
      setNum(8);
    } else {
      setNum(num - 1);
    }
  };
  useEffect(() => {
    ref.current!.style.backgroundColor = fortuneArray[num].color;
  }, [num]);

  return (
    <>
      <div className="slideWrapper">
        <h2>運勢の種類</h2>
        <p>{"totalPoint + ( betPoint × 2 )※ =Point"}</p>
        <p>※じゃんけんに2連勝するとbetPointの倍率が4倍になります。</p>
        <div className="slideMain">
          <button onClick={onClickBack}>＜</button>
          <div ref={ref} className="slideBody">
            <div className="slideContent">
              <p>{fortuneArray[num].name}</p>
              <p>{fortuneArray[num].point}</p>
            </div>
            <p className="slidePageNum">{`${fortuneArray[num].number}/9`}</p>
          </div>
          <button onClick={onClickNext}>＞</button>
        </div>
      </div>
    </>
  );
};
