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

  const fortuneName = () => {
    const fortunePoint = totalPoint + betPoint;
    if (fortunePoint >= fortuneData[0].num) {
      return "ウルトラ大吉";
    } else if (fortunePoint >= fortuneData[1].num) {
      return "スーパー大吉";
    } else if (fortunePoint >= fortuneData[2].num) {
      return "大吉";
    } else if (fortunePoint >= fortuneData[3].num) {
      return "吉";
    } else if (fortunePoint >= fortuneData[4].num) {
      return "中吉";
    } else if (fortunePoint >= fortuneData[5].num) {
      return "小吉";
    } else if (fortunePoint >= fortuneData[6].num) {
      return "末吉";
    } else if (fortunePoint >= fortuneData[7].num) {
      return "凶";
    } else {
      return "大凶";
    }
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
              <h2>{fortuneName()}</h2>
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
