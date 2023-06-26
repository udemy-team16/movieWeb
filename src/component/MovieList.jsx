import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [loading, setLodaing] = useState(true);

  useEffect(() => {
    fetch("https://yts.mx/api/v2/list_movies.json")
      .then((res) => res.json())
      .then((data) => setList(data.data.movies), setLodaing(false));
  }, []);
  if (loading) return <div>return</div>;

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
            <p>{list.title}</p>
            <p>{list.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
