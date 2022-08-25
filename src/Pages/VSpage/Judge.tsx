import React, { FC } from "react";

type CustomizedState = {
  win: boolean;
  aiko: boolean;
  lose: boolean;
};

export const Judge: FC<CustomizedState> = ({ win, aiko, lose }) => {
  if (win === true) {
    return (
      <>
        <h2 className="judge">判定</h2>
        <h3>プレイヤーの勝利です</h3>
      </>
    );
  } else if (aiko === true) {
    return (
      <>
        <h2 className="judge">判定</h2>
        <h3>あいこです</h3>
        <h3>もう一度手を選んでください</h3>
      </>
    );
  } else if (lose === true) {
    return (
      <>
        <h2 className="judge">判定</h2>
        <h3>プレイヤーの負けです</h3>
      </>
    );
  } else {return (
    <>
      <h2 className="judge">判定</h2>
      <h3>???</h3>
    </>
  );
  }
};
