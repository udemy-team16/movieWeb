import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState(null);

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.data.movies);
      });
  }, []);

 
  if (!list) return  (
    <div className="spinnerWraps">
      <div className="spinner">
        <div className="spinner-inner" />
      </div>
    </div>);

  return (
    <div className="container">
      {list.map((list) => (
        <div className="movie">
          <div
            className="imgs"
            onClick={() => navigate(`/detailMovie/${list.id}`)}
          >
            <img src={list.medium_cover_image} alt="" />
            <div className="hover">
              <>
                {list.rating}/10
                {list.genres.map((item) => (
                  <div>{item}</div>
                ))}
              </>
            </div>
          </div>
          <div className="moveInfor">
            <p><span style={{fontWeight:"bold" ,color:"red"}}>({list.language.toUpperCase()
})</span> {list.title}</p>
            <p>{list.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
