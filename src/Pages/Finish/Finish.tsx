import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./finish.css";
import { fortune } from "./fortune";

type CustomizedState = {
  maxWinCount: number;
  totalPoint: number;
  betPoint: number;
  frequency: number;
};

export const Finish: FC = () => {
  const navi = useNavigate();
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { maxWinCount, totalPoint, betPoint, frequency } = state;
  const backPoint = totalPoint + betPoint;
  const [zeroBoolean, setZeroBoolean] = useState(false);
  useEffect(() => {
    if (backPoint === 0 || frequency === 5) {
      setZeroBoolean(true);
    }
  }, []);
  const onClickVS = () => {
    if (backPoint === 0 || frequency === 5) {
      return;
    } else {
      navi("/vspage", {
        state: {
          backPoint: backPoint,
          backMaxWinCount: maxWinCount,
          frequency: frequency,
        },
      });
    }
  };
  const onClickHome = () => {
    document.body.style.backgroundColor = "#ffffff";
    navi("/");
  };
  return (
    <>
      <div className="resultBody">
        <div className="resultWrapper1">
          <h1 className="resultTitle">結果</h1>
          <div className="resultMain">
            <div className="pointResult">
              <h3>{`total Point: ${totalPoint + betPoint}point`}</h3>
              <h3>{`最大連続勝利回数: ${maxWinCount}回`}</h3>
            </div>
            <h2 className="resultMessage">{`あなたの運勢は${fortune(
              totalPoint,
              maxWinCount
            )}です。`}</h2>
            <div className="resultButtonWrapper">
              <button
                onClick={onClickVS}
                className={zeroBoolean ? "noneButton" : "changeResultButton"}
              >
                試合に戻る
              </button>
              <button onClick={onClickHome} className="resultToHome">
                ホームに戻る
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
