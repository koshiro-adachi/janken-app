import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./result.css";

type CustomizedState = {
  result: string;
  count: number;
  maxWinCount: number;
  totalPoint: number;
};

export const Result: FC = () => {
  const [winCount, setWinCount] = useState(0);
  const [buttonName, setButtonName] = useState("");
  const [message, setMessage] = useState("");
  const navi = useNavigate();
  const location = useLocation();
  const state = location.state as CustomizedState;
  const { result, count, maxWinCount, totalPoint } = state;
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
      setButtonName("もう一度");
      setMessage("残念…あなたの負けです…");
    }
  }, [count, result]);

  const onClickVS = () => {
    navi("/vspage", { state: { winCount } });
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
            <h3>{totalPoint}</h3>
            <h3>{maxWinCount}</h3>
          </div>
          <div className="rightResultItems">
            <div className="positionAbsolute">
              <h2 className="resultMessage">{message}</h2>
              <h3 className="resultWinCounter">{count}勝</h3>
              <div>
                {
                  <div className="resultButtonWrapper">
                    <button onClick={onClickVS} className="changeResultButton">
                      {buttonName}
                    </button>
                    <button onClick={onClickHome} className="resultToHome">
                      ホームに戻る
                    </button>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
