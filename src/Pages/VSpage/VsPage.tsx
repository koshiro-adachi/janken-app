import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { jankenRandom } from "../../hooks/jankenRandom";
import { BetButton } from "./BetButton";
import { ChangeResult } from "./ChangeResult";
import { Judge } from "./Judge";
import "./vsPage.css";

type CustomizedState = {
  backMaxWinCount: number;
  backPoint: number;
};

export const VsPage: FC = () => {
  const [winCount, setWinCount] = useState(0);
  const [maxWinCount, setMaxWinCount] = useState(0);
  const [win, setWin] = useState(false);
  const [aiko, setAiko] = useState(false);
  const [lose, setLose] = useState(false);
  const [opponentHand, setOpponentHand] = useState(1);
  const [totalPoint, setTotalPoint] = useState(100);
  const [betPoint, setBetPoint] = useState(0);

  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      setMaxWinCount(0);
      setTotalPoint(100);
    } else {
      const state = location.state as CustomizedState;
      const { backPoint, backMaxWinCount } = state;
      setMaxWinCount(backMaxWinCount);
      setTotalPoint(backPoint);
    }
  }, []);
  //初回レンダリング時にResult.tsxからの状態を引き継ぐ設定

  useEffect(() => {
    if (winCount > maxWinCount) {
      setMaxWinCount(winCount);
    }
  }, [winCount]);
  //winCountに応じてmaxWinCountを更新

  const onclickResult = (num: number) => {
    document
      .getElementById("opponentHandImage")
      ?.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 500,
        iterations: 1,
      });
    const answer = jankenRandom(num);
    //じゃんけんをして選んだ手に応じて結果と相手の手を返す

    if (answer?.result === "win") {
      setWin(true);
      setAiko(false);
      setLose(false);
      setOpponentHand(answer.opponentHand);
      setWinCount(winCount + 1);
      setTotalPoint(totalPoint + betPoint * 2);
      setBetPoint(0);
    } else if (answer?.result === "aiko") {
      setAiko(true);
      setLose(false);
      setWin(false);
      setWinCount(winCount);
      setOpponentHand(answer.opponentHand);
    } else if (answer?.result === "lose") {
      setWin(false);
      setAiko(false);
      setLose(true);
      setOpponentHand(answer.opponentHand);
      setWinCount(0);
      setBetPoint(0);
    }
  };
  return (
    <>
      <div className="vsDiv">
        <div className="vsPageHalfTop">
          <div className="vsPageLeft">
            <ChangeResult
              win={win}
              aiko={aiko}
              lose={lose}
              opponentHand={opponentHand}
              maxWinCount={maxWinCount}
              totalPoint={totalPoint}
            />
          </div>
          <div className="vsPageRight">
            <Judge win={win} aiko={aiko} lose={lose} />
            <BetButton
              totalPoint={totalPoint}
              setTotalPoint={setTotalPoint}
              betPoint={betPoint}
              setBetPoint={setBetPoint}
            />
          </div>
        </div>
        <div className="buttonWrapper">
          <button onClick={() => onclickResult(1)} className="handButton">
            <img src="../../janken_gu.png" alt="グー" className="handImage" />
          </button>
          <button onClick={() => onclickResult(2)} className="handButton">
            <img
              src="../../janken_choki.png"
              alt="チョキ"
              className="handImage"
            />
          </button>
          <button onClick={() => onclickResult(3)} className="handButton">
            <img src="../../janken_pa.png" alt="パー" className="handImage" />
          </button>
        </div>
        <div className="bottomMessage">
          <h2 className="winCounter">現在{winCount}勝目です</h2>
          <h2 className="winCounter">{`最大連続勝利回数　${maxWinCount}回`}</h2>
        </div>
      </div>
    </>
  );
};
