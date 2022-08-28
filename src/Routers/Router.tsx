import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Result } from "../Pages/Result/Result";
import { Home } from "../Pages/Home/Home";
import { VsPage } from "../Pages/VSpage/VsPage";

//Resultに変更

export const Router: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vspage" element={<VsPage />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
