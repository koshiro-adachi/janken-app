import React, { FC } from "react";
import { fortuneArray, fortuneProps } from "../../data/fortuneData";
import "./hamburgerMenu.css";

type hambergerProps = {
  totalPoint: number;
  betPoint: number;
  winCount: number;
};

export const HamburgerMenu: FC<hambergerProps> = ({
  totalPoint,
  betPoint,
  winCount,
}) => {
  const fortuneData: Array<fortuneProps> = fortuneArray;
  const fortunePoint = totalPoint + betPoint;

  // const array = fortuneData
  //   .map((data) => {
  //     if (fortunePoint >= data.num) {
  //       return data.name;
  //     } else {
  //       return "a";
  //     }
  //   })
  //   .filter((data) => data !== "a");
  //条件に合わせて運勢を返す
  const fortuneName = () => {
    if (fortunePoint >= fortuneData[0].num) {
      return fortuneData[0].page;
    } else if (fortunePoint >= fortuneData[1].num) {
      return fortuneData[1].page;
    } else if (fortunePoint >= fortuneData[2].num) {
      return fortuneData[2].page;
    } else if (fortunePoint >= fortuneData[3].num) {
      return fortuneData[3].page;
    } else if (fortunePoint >= fortuneData[4].num) {
      return fortuneData[4].page;
    } else if (fortunePoint >= fortuneData[5].num) {
      return fortuneData[5].page;
    } else if (fortunePoint >= fortuneData[6].num) {
      return fortuneData[6].page;
    } else if (fortunePoint >= fortuneData[7].num) {
      return fortuneData[7].page;
    } else {
      return fortuneData[8].page;
    }
  };
  const fortuneContents = fortuneName();
  const currentFortune = fortuneData[fortuneContents - 1].name;
  const nextFortune = fortuneData[fortuneContents - 2].name;
  const nextFortunePoint = fortuneData[fortuneContents - 2].num;
  const nextFortuneBetween = () => {
    let bPoint = 10;
    while (nextFortunePoint >= bPoint * 2 + totalPoint - bPoint) {
      bPoint = betPoint + 10;
    }
    return bPoint;
  };
  return (
    <>
      <div className="hamburger">
        <input type="checkbox" id="menu-btn-check" />
        <label htmlFor="menu-btn-check" className="menu-btn">
          <span></span>
        </label>
        <div className="menu-content">
          <div>
            <h2>Infomation</h2>
            <div>
              <h3>現在の運勢</h3>
              <h3>{currentFortune}</h3>
            </div>
            <div>
              <h3>
                {fortuneContents - 1 === 0 ? (
                  "nai"
                ) : (
                  <>
                    betPointを<span>{}</span>にして勝てば
                    <span>{nextFortune}</span>
                    になります
                  </>
                )}
              </h3>
            </div>
            <div>
              <h3>運勢一覧</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
