import React, { FC } from "react";
import { getFortuneSetting } from "../../data/fortuneData";
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
  const fortunePoint = totalPoint + betPoint;
  const fortuneSetting = getFortuneSetting(fortunePoint);
  const fortuneBetween =
    fortuneSetting.nextLowestPoint - fortuneSetting.lowestPoint;
  const pridictNextFortunePoint = () => {
    if (winCount < 2) {
      return fortuneBetween;
    } else {
      return Math.ceil(fortuneBetween / 30) * 10;
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
              <h3>{fortuneSetting.name}</h3>
            </div>
            <div>
              <h3>
                {fortuneSetting.page === 1 ? (
                  "nai"
                ) : (
                  <>
                    betPointを<span>{pridictNextFortunePoint()}</span>
                    にして勝てば
                    <span>{fortuneSetting.nextFortune}</span>
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
