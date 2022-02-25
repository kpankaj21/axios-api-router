import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import GetInfo from "./GetInfo";

const Master = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/getinfo" element={<GetInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Master;
