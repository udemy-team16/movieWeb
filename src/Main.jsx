import React from "react";
import MovieList from "./component/MovieList";
import List from "./component/List";
import "./Main.css";

const Main = () => {
  return (
    <>
      <div className="Main">
        <MovieList />
        <List/>
      </div>
    </>
  );
};

export default Main;
