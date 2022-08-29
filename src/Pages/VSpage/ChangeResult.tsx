import { FC } from "react";
import { useNavigate } from "react-router-dom";

type Prop = {
  win: boolean;
  aiko: boolean;
  lose: boolean;
  opponentHand: number;
  maxWinCount: number;
  totalPoint: number;
  myHand: number;
  betPoint: number;
};

export const ChangeResult: FC<Prop> = ({
  win,
  aiko,
  lose,
  opponentHand,
  maxWinCount,
  totalPoint,
  myHand,
  betPoint,
}) => {
  const navi = useNavigate();

  const onClickHome = () => {
    navi("/");
  };
  //homeに戻る

  const onClickResult = () => {
    document.body.style.backgroundColor = "#dddddd";
    navi("/finish", {
      state: {
        maxWinCount: maxWinCount,
        totalPoint: totalPoint,
        betPoint: betPoint,
      },
    });
  };
  //終了して結果ページに遷移

  const opponentHandImage = (): string => {
    if (opponentHand === 1) {
      return "../../janken_gu.png";
    } else if (opponentHand === 2) {
      return "../../janken_choki.png";
    } else {
      return "../../janken_pa.png";
    }
  };
  //相手の手を表示
  const myHandImage = (): string => {
    if (myHand === 1 || myHand === 0) {
      return "../../janken_gu.png";
    } else if (myHand === 2) {
      return "../../janken_choki.png";
    } else {
      return "../../janken_pa.png";
    }
  };
  //自分の手を表示

  if (win || lose) {
    return (
      <>
        <div className="changeWrapper">
          <div className="changeImageWrapper" id="opponentHandImage">
            <h2>相手の手</h2>
            <img src={opponentHandImage()} alt="相手の手" />
          </div>
        </div>
        <div className="changeButtonWrappeer">
          <button onClick={onClickHome} className="changeButton">
            ホーム
          </button>
          <h2>VS</h2>
          <button onClick={onClickResult} className="changeButton">
            終了する
          </button>
        </div>
        <div className="changeWrapper">
          <div className="changeImageWrapper">
            <h2>自分の手</h2>
            <img src={myHandImage()} alt="自分の手" />
          </div>
        </div>
      </>
    );
  } else if (aiko) {
    return (
      <>
        <div className="changeWrapper">
          <div className="changeImageWrapper">
            <h2>相手の手</h2>
            <img src={opponentHandImage()} alt="相手の手" />
          </div>
        </div>
        <div className="changeButtonWrappeer">
          <h2>VS</h2>
        </div>
        <div className="changeWrapper">
          <div className="changeImageWrapper">
            <h2>自分の手</h2>
            <img src={myHandImage()} alt="自分の手" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="defaultChangeWrapper">
          <h2>じゃんけん</h2>
          <h3>手を選んでね</h3>
        </div>
        <div className="changeButtonWrappeer">
          <h2>VS</h2>
        </div>
        <div className="changeWrapper">
          <div className="changeImageWrapper">
            <h2>自分の手</h2>
            <img src={myHandImage()} alt="自分の手" />
          </div>
        </div>
      </>
    );
  }
  //勝敗で表示を変える
};
