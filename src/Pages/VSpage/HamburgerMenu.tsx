import React, { FC } from "react";
import { getFortuneSetting } from "../../data/fortuneData";
import "./hamburgerMenu.css";
import { Slide } from "../HowToPlay/Slide";

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
  const fortuneBetween = fortuneSetting.nextLowestPoint - fortunePoint;

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
          <div className="menu-body">
            <h2 className="menu-body-title">Infomation</h2>
            <div className="currentFortune">
              <h3>現在の運勢</h3>
              <h3>
                <span>{`${fortuneSetting.name}`}</span>
              </h3>
            </div>
            <div>
              <div>
                {fortuneSetting.page === 1 ? (
                  "nai"
                ) : (
                  <h3 className="pridictMessage">
                    betPointを<span>{pridictNextFortunePoint()}</span>
                    にして勝てば
                    <span>{fortuneSetting.nextFortune}</span>
                    になります
                  </h3>
                )}
              </div>
            </div>
            <div>
              <Slide />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
