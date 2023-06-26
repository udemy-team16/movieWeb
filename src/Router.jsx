import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Main from "./Main";
import DetailMovie from "./Page/DetailMovie";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailMovie/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
