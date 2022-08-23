import React, { useState } from "react";

export const BetButton = () => {
    const [totalPoint,setTotalPoint]=useState(100);
    const [betPoint,setBetPoint]=useState(0);
    const onClickPlusBet=()=>{
        if(totalPoint===0){
            return
        }else{
            setTotalPoint(totalPoint-10)
            setBetPoint(betPoint+10);
        }
    }
    const onClickMinusBet=()=>{
        if(betPoint===0){
            return
        }else{
            setTotalPoint(totalPoint+10)
            setBetPoint(betPoint-10);
        }
    }
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
