import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { jankenRandom } from "../../hooks/jankenRandom";
import { BetButton } from "./BetButton";
import { ChangeResult } from "./ChangeResult";
import { Judge } from "./Judge";
import "./vsPage.css";

type CustomizedState = {
  backMaxWinCount: number;
  backPoint: number;
  frequency: number;
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
  const [open, setOpen] = useState(false);
  const [myHand, setMyHand] = useState(0);
  const [frequency, setFrequency] = useState(0);

  const imageElement = useRef<HTMLDivElement>(null);
  const gubuttonElement = useRef<HTMLButtonElement>(null);
  const chokibuttonElement = useRef<HTMLButtonElement>(null);
  const pabuttonElement = useRef<HTMLButtonElement>(null);

  const location = useLocation();
  useEffect(() => {
    if (!location.state) {
      setMaxWinCount(0);
      setTotalPoint(100);
      setFrequency(0);
    } else {
      const state = location.state as CustomizedState;
      const { backPoint, backMaxWinCount, frequency } = state;
      setMaxWinCount(backMaxWinCount);
      setTotalPoint(backPoint);
      setFrequency(frequency);
    }
  }, []);
  //初回レンダリング時にResult.tsxからの状態を引き継ぐ設定

  useEffect(() => {
    if (winCount > maxWinCount) {
      setMaxWinCount(winCount);
    }
  }, [winCount]);
  //winCountに応じてmaxWinCountを更新
  if (frequency === 5) {
    gubuttonElement.current!.style.boxShadow = "0px 0px 0px";
    gubuttonElement.current!.style.backgroundColor = "rgb(139,139,139)";
    gubuttonElement.current!.style.transform = "none";

    chokibuttonElement.current!.style.boxShadow = "0px 0px 0px";
    chokibuttonElement.current!.style.backgroundColor = "rgb(139,139,139)";
    chokibuttonElement.current!.style.transform = "none";

    pabuttonElement.current!.style.boxShadow = "0px 0px 0px";
    pabuttonElement.current!.style.backgroundColor = "rgb(139,139,139)";
    pabuttonElement.current!.style.transform = "none";
  }

  const onclickResult = (num: number) => {
    if (betPoint === 0) {
      setOpen(true);
      return;
    }
    if (frequency === 5) {
      setOpen(true);
      return;
    }
    const answer = jankenRandom(num);
    //じゃんけんをして選んだ手に応じて結果と相手の手を返す
    setMyHand(num);
    if (answer?.result === "win") {
      setWin(true);
      setAiko(false);
      setLose(false);
      setOpponentHand(answer.opponentHand);
      setWinCount(winCount + 1);
      setTotalPoint(totalPoint + betPoint);
      setFrequency(frequency + 1);
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
      setFrequency(frequency + 1);
      if (totalPoint < betPoint) {
        setBetPoint(0);
      } else if (totalPoint === betPoint) {
        setTotalPoint(0);
      } else {
        setTotalPoint(totalPoint - betPoint);
      }
    }
    imageElement.current?.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 800,
      iterations: 1,
    });
  };
  const onClickClose = () => setOpen(false);
  const changeModalMessage = () => {
    if (frequency === 5) {
      return "終了です。終了ボタンを押してください";
    } else {
      return "betPointを設定してください";
    }
  };
  return (
    <>
      <div className="vsDiv">
        {open ? (
          <>
            <div className="errorMessageWrap"></div>
            <div className="errorMessage">
              <h3>{changeModalMessage()}</h3>
              <button onClick={onClickClose}>閉じる</button>
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="vsPageLeft">
          <ChangeResult
            win={win}
            aiko={aiko}
            lose={lose}
            opponentHand={opponentHand}
            maxWinCount={maxWinCount}
            totalPoint={totalPoint}
            myHand={myHand}
            betPoint={betPoint}
            imageElement={imageElement}
            frequency={frequency}
          />
        </div>
        <div className="vsPageRight">
          <div className="vsPageRightTop">
            <Judge win={win} aiko={aiko} lose={lose} />
            <BetButton
              totalPoint={totalPoint}
              setTotalPoint={setTotalPoint}
              betPoint={betPoint}
              setBetPoint={setBetPoint}
            />
          </div>
          <div className="buttonWrapper">
            <button
              onClick={() => onclickResult(1)}
              className="handButton"
              ref={gubuttonElement}
            >
              <img src="../../janken_gu.png" alt="グー" className="handImage" />
            </button>
            <button
              onClick={() => onclickResult(2)}
              className="handButton"
              ref={chokibuttonElement}
            >
              <img
                src="../../janken_choki.png"
                alt="チョキ"
                className="handImage"
              />
            </button>
            <button
              onClick={() => onclickResult(3)}
              className="handButton"
              ref={pabuttonElement}
            >
              <img src="../../janken_pa.png" alt="パー" className="handImage" />
            </button>
          </div>
        </div>
      </div>
      <div className="bottomMessage">
        <h2 className="winCounter">{`現在${frequency}試合${winCount}勝目です`}</h2>
        <h2 className="winCounter">{`最大連続勝利回数　${maxWinCount}回`}</h2>
      </div>
    </>
  );
};
