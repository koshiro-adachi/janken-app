import { Dispatch, FC, SetStateAction } from "react";

type Prop = {
  totalPoint: number;
  setTotalPoint: Dispatch<SetStateAction<number>>;
  betPoint: number;
  setBetPoint: Dispatch<SetStateAction<number>>;
};

export const BetButton: FC<Prop> = ({
  totalPoint,
  setTotalPoint,
  betPoint,
  setBetPoint,
}) => {
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
    <>
      <dl>
        <dt>total point</dt>
        <dd>{`${totalPoint} point`}</dd>
        <dt>bet point</dt>
        <dd>{`${betPoint} point`}</dd>
      </dl>
      <button onClick={onClickPlusBet}>bet +10point</button>
      <button onClick={onClickMinusBet}>bet -10point</button>
    </>
  );
};
