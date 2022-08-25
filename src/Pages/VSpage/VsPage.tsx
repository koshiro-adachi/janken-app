import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { jankenRandom } from "../../hooks/jankenRandom";
import { BetButton } from "./BetButton";
import { ChangeResult } from "./ChangeResult";
import "./vsPage.css";

type CustomizedState = {
  backMaxWinCount: number;
  backPoint: number;
};

export const VsPage: FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      return;
    } else {
      const state = location.state as CustomizedState;
      const { backPoint, backMaxWinCount } = state;
      setMaxWinCount(backMaxWinCount);
      setTotalPoint(backPoint);
    }
  }, []);
  const [winCount, setWinCount] = useState(0);
  const [maxWinCount, setMaxWinCount] = useState(0);
  const [win, setWin] = useState(false);
  const [aiko, setAiko] = useState(false);
  const [lose, setLose] = useState(false);
  const [opponentHand, setOpponentHand] = useState(1);
  const [totalPoint, setTotalPoint] = useState(100);
  const [betPoint, setBetPoint] = useState(0);

  // const navi = useNavigate();
  useEffect(() => {
    if (winCount > maxWinCount) {
      setMaxWinCount(winCount);
    }
  }, [winCount]);
  const onclickResult = (num: number) => {
    const answer = jankenRandom(num);
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
        <ChangeResult
          win={win}
          aiko={aiko}
          lose={lose}
          opponentHand={opponentHand}
          maxWinCount={maxWinCount}
          totalPoint={totalPoint}
        />
        <BetButton
          totalPoint={totalPoint}
          setTotalPoint={setTotalPoint}
          betPoint={betPoint}
          setBetPoint={setBetPoint}
        />
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
        <h2 className="winCounter">現在{winCount}勝目です</h2>
        <h2>{maxWinCount}</h2>
      </div>
    </>
  );
};
