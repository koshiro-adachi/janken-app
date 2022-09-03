import React, { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const HowToPlayFooter: FC<Props> = ({ children }) => {
  const navi = useNavigate();
  const onClickStart = () => {
    navi("/vspage");
  };
  return (
    <>
      <div>
        <h1>遊び方</h1>
        <button onClick={onClickStart}>始める</button>
      </div>
      <div>{children}</div>
    </>
  );
};
