import React from "react";
import { HowToPlayFooter } from "./HowToPlayFooter";
import { Slide } from "./Slide";
import "./howToPlay.css";

export const HowToPlay = () => {
  return (
    <>
      <HowToPlayFooter>
        <div className="howToPlayMainWrapper">
          <div className="howToPlayMain">
            <h2>1. betPointを設定しよう!</h2>
            <p>
              じゃんけんに勝つとbetPointの2倍がtotalPointに加算され、負けるとbetPointを失います。
            </p>
          </div>
          <div className="howToPlayMain">
            <h2>2. じゃんけんをしよう!</h2>
            <p>じゃんけんは最大5試合できます。</p>
            <p>ポイントによって変動する運勢次第でページの色が変更されます。</p>
          </div>
          <div className="howToPlayMain">
            <h2>3. 結果を確認しよう!</h2>
            <p>結果によって運勢が決まります。</p>
            <p>betPointを調整してより良い運勢を目指しましょう!</p>
          </div>
          <Slide />
        </div>
      </HowToPlayFooter>
    </>
  );
};
