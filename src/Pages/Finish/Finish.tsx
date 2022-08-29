import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./finish.css";

type CustomizedState = {
  maxWinCount: number;
  totalPoint: number;
  betPoint: number;
};

export const Finish: FC = () => {
  const navi = useNavigate();
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { maxWinCount, totalPoint, betPoint } = state;

  const onClickVS = () => {
    document.body.style.backgroundColor = "#ffffff";
    const backPoint = totalPoint + betPoint;
    navi("/vspage", {
      state: { backPoint: backPoint, backMaxWinCount: maxWinCount },
    });
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
            <h2 className="resultMessage">お疲れさまでした</h2>
            <div className="pointResult">
              <h3>{`total Point: ${totalPoint + betPoint}point`}</h3>
              <h3>{`最大連続勝利回数: ${maxWinCount}回`}</h3>
            </div>
            <div className="resultButtonWrapper">
              <button onClick={onClickVS} className="changeResultButton">
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
