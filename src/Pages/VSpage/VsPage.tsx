import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jankenRandom } from "../../hooks/jankenRandom";
import "./vsPage.css";

type CustomizedState = {
  winCount: number;
};

export const VsPage: FC = () => {
  const location = useLocation();
  const state = location.state as CustomizedState;
  const count = state?.winCount || 0;

  const navi = useNavigate();
  const onclickResult = (num: number) => {
    const answer = jankenRandom(num);
    if (answer?.result === "win") {
      navi("/result", {
        state: {
          opponentHand: answer.opponentHand,
          result: answer.result,
          count: count,
        },
      });
    } else if (answer?.result === "aiko") {
      navi("/result", {
        state: {
          opponentHand: answer.opponentHand,
          result: answer.result,
          count: count,
        },
      });
    } else if (answer?.result === "lose") {
      navi("/result", {
        state: {
          opponentHand: answer.opponentHand,
          result: answer.result,
          count: count,
        },
      });
    }
  };
  return (
    <>
      <div className="vsDiv">
        <h1 className="title">じゃんけん</h1>
        <h2 className="description">あなたの手を選んでね</h2>
        <div className="buttonWrapper">
          <button onClick={() => onclickResult(1)} className="handButton">
            <img
              src="../../janken_gu.png"
              alt="グー"
              className="handImage"
            />
          </button>
          <button onClick={() => onclickResult(2)} className="handButton">
            <img
              src="../../janken_choki.png"
              alt="チョキ"
              className="handImage"
            />
          </button>
          <button onClick={() => onclickResult(3)} className="handButton">
            <img
              src="../../janken_pa.png"
              alt="パー"
              className="handImage"
            />
          </button>
        </div>
        <h2 className="winCounter">現在{count}勝目です</h2>
      </div>
    </>
  );
};
