import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./result.css";

type CustomizedState = {
  opponentHand: number;
  result: string;
  count: number;
};

export const Result: FC = () => {
  const [winCount, setWinCount] = useState(0);
  const [buttonName, setButtonName] = useState("");
  const [message, setMessage] = useState("");
  const navi = useNavigate();
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { opponentHand, result, count } = state;
  console.log(count);

  useEffect(() => {
    if (result === "win") {
      setWinCount(count + 1);
      setButtonName(`第${count + 2}試合に挑戦`);
      setMessage("おめでとう!! あなたの勝ちです");
    } else if (result === "aiko") {
      setWinCount(count);
      setButtonName("もう一度");
      setMessage("あいこです! ボタンを押して決着をつけよう!");
    } else if (result === "lose") {
      setWinCount(0);
      setButtonName("初めから");
      setMessage("残念…あなたの負けです…");
    }
  }, [count, result]);

  const opponentHandImage = () => {
    if (opponentHand === 1) {
      return "../../Images/janken_gu.png";
    } else if (opponentHand === 2) {
      return "../../Images/janken_choki.png";
    } else if (opponentHand === 3) {
      return "../../Images/janken_pa.png";
    }
  };

  const onClickVsorHome = () => {
    if (result === "lose") {
      navi("/");
    } else {
      navi("/vspage", { state: { winCount } });
    }
  };
  const onClickHome = () => {
    navi("/");
  };
  return (
    <>
      <div className="resultWrapper1">
        <h1 className="resultTitle">結果</h1>
        <div className="resultWrapper2">
          <div className="leftResultItems">
            <div className="positionAbsolute">
              <h2 className="resultHandTitle">相手の出した手</h2>
              <img
                src={opponentHandImage()}
                alt="相手の手"
                className="resultHandImage"
              />
            </div>
          </div>
          <div className="rightResultItems">
            <div className="positionAbsolute">
              <h2 className="resultMessage">{message}</h2>
              <h3 className="resultWinCounter">{winCount}勝</h3>
              <div>
                {result !== "lose" ? (
                  <div className="resultButtonWrapper">
                    <button
                      onClick={onClickVsorHome}
                      className="changeResultButton"
                    >
                      {buttonName}
                    </button>
                    <button onClick={onClickHome} className="resultToHome">
                      ホームに戻る
                    </button>
                  </div>
                ) : (
                  <div className="resultButtonWrapper">
                    <button
                      onClick={onClickVsorHome}
                      className="changeResultButton"
                    >
                      {buttonName}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
