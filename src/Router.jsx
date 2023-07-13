import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import Main from "./Main";
import List from "./component/List";
import ChatBot from "./component/ChatBot";
import DetailMovie from "./Page/DetailMovie";

const Router = () => {
  
  return (
    <BrowserRouter>
      <Nav />
      <List />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailMovie/:id" element={<DetailMovie />} />
      </Routes>
      <ChatBot/>
    </BrowserRouter>
  );
};

export default Router;