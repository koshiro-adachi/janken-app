import React, { FC, useEffect, useRef, useState } from "react";
import { fortuneArray, fortuneProps } from "../../data/fortuneData";
import "./howToPlay.css";

export const Slide: FC = () => {
  const fortune: Array<fortuneProps> = fortuneArray;

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
    ref.current!.style.backgroundColor = fortune[num].color;
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
              <p>{fortune[num].name}</p>
              <p>{fortune[num].point}</p>
            </div>
            <p className="slidePageNum">{`${fortune[num].page}/9`}</p>
          </div>
          <button onClick={onClickNext}>＞</button>
        </div>
      </div>
    </>
  );
};
