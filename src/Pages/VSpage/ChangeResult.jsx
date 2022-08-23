export const ChangeResult = ({ win, aiko, lose, opponentHand }) => {
  const opponentHandImage = () => {
    if (opponentHand === 1) {
      return "../../janken_gu.png";
    } else if (opponentHand === 2) {
      return "../../janken_choki.png";
    } else if (opponentHand === 3) {
      return "../../janken_pa.png";
    }
  };
  if (win) {
    return (
      <div>
        <button>ホーム</button>
        <div>
          <img src={opponentHandImage} alt="相手の手" />
          <h2>勝利!</h2>
          <h2>相手の手</h2>
        </div>
        <button>結果</button>
      </div>
    );
  } else if (aiko) {
    return (
      <div>
        <img src={opponentHandImage} alt="相手の手" />
        <h2>あいこです</h2>
        <h2>もう一度手を選んでね</h2>
      </div>
    );
  } else if (lose) {
    return (
      <div>
        <button>ホーム</button>
        <div>
          <img src={opponentHandImage} alt="相手の手" />
          <h2>敗北…</h2>
          <h2>相手の手</h2>
        </div>
        <button>結果</button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>じゃんけん</h2>
        <h2>手を選んでね</h2>
      </div>
    );
  }
};
