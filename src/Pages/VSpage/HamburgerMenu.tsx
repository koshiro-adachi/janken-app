import React, { FC, useState } from "react";
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
      return { name: fortuneData[0].name, number: 0 };
    } else if (fortunePoint >= fortuneData[1].num) {
      return { name: fortuneData[1].name, number: 1 };
    } else if (fortunePoint >= fortuneData[2].num) {
      return { name: fortuneData[2].name, number: 2 };
    } else if (fortunePoint >= fortuneData[3].num) {
      return { name: fortuneData[3].name, number: 3 };
    } else if (fortunePoint >= fortuneData[4].num) {
      return { name: fortuneData[4].name, number: 4 };
    } else if (fortunePoint >= fortuneData[5].num) {
      return { name: fortuneData[5].name, number: 5 };
    } else if (fortunePoint >= fortuneData[6].num) {
      return { name: fortuneData[6].name, number: 6 };
    } else if (fortunePoint >= fortuneData[7].num) {
      return { name: fortuneData[7].name, number: 7 };
    } else {
      return { name: fortuneData[8].name, number: 8 };
    }
  };
  const fortuneContents = fortuneName();
  const nextFortuneContent = fortuneData[fortuneContents.number - 1].name;
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
              <h3>{fortuneContents.name}</h3>
            </div>
            <div>
              <h3>
                {fortuneContents.number === 0 ? (
                  "nai"
                ) : (
                  <>
                    betPointを<span></span>にして勝てばに
                    <span>{nextFortuneContent}</span>
                    なります
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
