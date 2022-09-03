import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { VsPage } from "../Pages/VSpage/VsPage";
import { Finish } from "../Pages/Finish/Finish";
import { HowToPlay } from "../Pages/HowToPlay/HowToPlay";

//Resultに変更

export const Router: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howtoplay" element={<HowToPlay />} />
          <Route path="/vspage" element={<VsPage />} />
          <Route path="/finish" element={<Finish />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
