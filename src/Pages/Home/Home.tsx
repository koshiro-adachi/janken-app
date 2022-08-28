import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

export const Home: FC = () => {
  const navi = useNavigate();
  const onClickStart = () => {
    navi("/vspage");
  };
  return (
    <>
      <div className="wrapper">
        <h1 className="hometitle">じゃんけんアプリ</h1>
        <button className="startButton" onClick={onClickStart}>
          スタート
        </button>
      </div>
    </>
  );
};
