import React from "react";
import MovieList from "./component/MovieList";
import Nav from "./component/Nav";
import "./Main.css";

const Main = () => {
  return (
    <>
      <Nav />
      <div className="Main">
        <MovieList />
      </div>
    </>
  );
};

export default Main;
