import { FC, useState } from "react";
import { jankenRandom } from "../../hooks/jankenRandom";
import { ChangeResult } from "./ChangeResult";
import "./vsPage.css";

export const VsPage: FC = () => {
  const [winCount,setWinCount]=useState(0);
  const [win, setWin] = useState(false);
  const [aiko, setAiko] = useState(false);
  const [lose, setLose] = useState(false);
  const [opponentHand, setOpponentHand] = useState(1);

  // const navi = useNavigate();
  const onclickResult = (num: number) => {
    const answer = jankenRandom(num);
    if (answer?.result === "win") {
      setWin(true);
      setAiko(false);
      setLose(false);
      setOpponentHand(answer.opponentHand);
      setWinCount(winCount+1);
    } else if (answer?.result === "aiko") {
      setAiko(true);
      setLose(false);
      setWin(false);
      setOpponentHand(answer.opponentHand);
    } else if (answer?.result === "lose") {
      setWin(false);
      setAiko(false);
      setLose(true);
      setOpponentHand(answer.opponentHand);
      setWinCount(0);
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
          winCount={winCount}
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
      </div>
    </>
  );
};
