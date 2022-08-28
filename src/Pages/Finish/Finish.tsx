import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./finish.css";

type CustomizedState = {
  maxWinCount: number;
  totalPoint: number;
};

export const Finish: FC = () => {
  const navi = useNavigate();
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { maxWinCount, totalPoint } = state;

  const onClickVS = () => {
    navi("/vspage", {
      state: { backPoint: totalPoint, backMaxWinCount: maxWinCount },
    });
  };
  const onClickHome = () => {
    navi("/");
  };
  return (
    <>
      <div className="resultWrapper1">
        <h1 className="resultTitle">結果</h1>
        <div className="resultMain">
          <h2 className="resultMessage">お疲れさまでした</h2>
          <div className="pointResult">
            <h3>{`total Point: ${totalPoint}point`}</h3>
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
    </>
  );
};
