import React from "react";
import { HowToPlayFooter } from "./HowToPlayFooter";

export const HowToPlay = () => {
  return (
    <>
      <HowToPlayFooter>
        <div>
          <div>
            <h2>1.betPointを設定しよう!</h2>
            <p>
              じゃんけんに勝つとbetPointの2倍がtotalPointに加算され、負けるとbetPointを失います。
            </p>
          </div>
          <div>
            <h2>2.じゃんけんをしよう!</h2>
            <p>じゃんけんは最大5試合できます。</p>
            <p>ポイントによって変動する運勢次第でページの色が変更されます。</p>
          </div>
          <div>
            <h2>3.結果を確認しよう!</h2>
            <p>結果によって運勢が決まります。</p>
            <p>betPointを調整してより良い運勢を目指しましょう!</p>
          </div>
          <div>
            <h2>運勢種類</h2>
            <p>totalPoint×maxWinCount=Point</p>
            <p>※maxWinCountが0の時はtotalPointの等倍がPointとなる。</p>
            <div>
              <button>＜</button>
              <div>
                <p>大吉</p>
                <p>Point ＞ 200</p>
                <button>＞</button>
              </div>
            </div>
          </div>
        </div>
      </HowToPlayFooter>
    </>
  );
};
