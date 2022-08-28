import { Dispatch, FC, memo, SetStateAction } from "react";

type Prop = {
  totalPoint: number;
  setTotalPoint: Dispatch<SetStateAction<number>>;
  betPoint: number;
  setBetPoint: Dispatch<SetStateAction<number>>;
};

export const BetButton: FC<Prop> = memo(
  ({ totalPoint, setTotalPoint, betPoint, setBetPoint }) => {
    const onClickPlusBet = () => {
      if (totalPoint === 0) {
        return;
      } else {
        setTotalPoint(totalPoint - 10);
        setBetPoint(betPoint + 10);
      }
    };
    const onClickMinusBet = () => {
      if (betPoint === 0) {
        return;
      } else {
        setTotalPoint(totalPoint + 10);
        setBetPoint(betPoint - 10);
      }
    };
    return (
      <div className="betButtonWrapper">
        <div className="pointWrapper">
          <div>
            <h3 className="pointTitle">total point</h3>
            <h3>{`${totalPoint} point`}</h3>
            <h3 className="pointTitle">bet point</h3>
            <h3>{`${betPoint} point`}</h3>
          </div>
        </div>
        <div className="betButton">
          <div>
            <button onClick={onClickPlusBet}>bet +10point</button>
            <button onClick={onClickMinusBet}>bet -10point</button>
          </div>
        </div>
      </div>
    );
  }
);
