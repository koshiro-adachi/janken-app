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

  const array = fortuneData
    .map((data) => {
      if (fortunePoint >= data.num) {
        return data.name;
      } else {
        return "a";
      }
    })
    .filter((data) => data !== "a");
  //条件に合わせて運勢を返す
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
              <h3>{array[0]}</h3>
            </div>
            <div>
              <h3>
                betPointを<span></span>にすると次勝てばに<span></span>なります
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
