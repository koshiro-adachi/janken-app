import React, { FC, useEffect, useRef, useState } from "react";
import { fortuneSlideData } from "../../data/fortuneData";
import "./howToPlay.css";

export const Slide: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  const onClickNext = () => {
    if (index === 8) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const onClickBack = () => {
    if (index === 0) {
      setIndex(8);
    } else {
      setIndex(index - 1);
    }
  };
  useEffect(() => {
    ref.current!.style.backgroundColor = fortuneSlideData[index].color;
  }, [index]);

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
              <p>{fortuneSlideData[index].name}</p>
              <p>{fortuneSlideData[index].description}</p>
            </div>
            <p className="slidePageNum">{`${fortuneSlideData[index].page}/9`}</p>
          </div>
          <button onClick={onClickNext}>＞</button>
        </div>
      </div>
    </>
  );
};
