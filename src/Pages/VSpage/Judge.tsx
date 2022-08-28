import React, { FC } from "react";

type CustomizedState = {
  win: boolean;
  aiko: boolean;
  lose: boolean;
};

export const Judge: FC<CustomizedState> = ({ win, aiko, lose }) => {
  if (win === true) {
    return (
      <div className="judgeWrapper">
        <h2 className="judge">判定</h2>
        <h3>
          プレイヤーの<span className="red">勝利</span>です
        </h3>
      </div>
    );
  } else if (aiko === true) {
    return (
      <div className="judgeWrapper">
        <h2 className="judge">判定</h2>
        <h3>
          <span className="green">あいこ</span>です
        </h3>
        <h3>もう一度手を選んでください</h3>
      </div>
    );
  } else if (lose === true) {
    return (
      <div className="judgeWrapper">
        <h2 className="judge">判定</h2>
        <h3>
          プレイヤーの<span className="blue">負け</span>です
        </h3>
      </div>
    );
  } else {
    return (
      <div className="judgeWrapper">
        <h2 className="judge">判定</h2>
        <h3>???</h3>
      </div>
    );
  }
};
