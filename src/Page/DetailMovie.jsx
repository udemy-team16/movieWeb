import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DetailMovie.css";

const DetailMovie = () => {
  const [movie, setMovie] = useState(null);
  const navigator = useNavigate();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json`)
      .then((res) => res.json())
      .then((data) => {
        const filteredMovie = data.data.movies.find(
          (item) => item.id === Number(params.id)
        );
        setMovie(filteredMovie);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return  (
    <div className="spinnerWraps">
      <div className="spinner">
        <div className="spinner-inner" />
      </div>
    </div>);

  return (
    <div className="detailMain" key={movie.id}>
      <div className="imgWrap">
        <img src={movie.medium_cover_image} alt="" />
        <button>다운로드</button>
        <button>Watch Now</button>
      </div>
      <div className="inforWrap">
        <p>{movie.title}</p>
        <p>
          {movie.year}
          <br />
          {movie.genres.map((item) => (
            <span style={{ marginRight: "10px" }}>{item}</span>
          ))}
        </p>
        <p>
          Available in:{movie.torrents[0].quality}&nbsp;
          {movie.torrents[1].quality}
        </p>
        <p>WEB: same quality as BluRay</p>
        <p>DownLoad</p>
        <p>😊 12</p>
        <p>😎 Certified Fresh 95% TOMATOMETER · 169</p>
        <p>🎉 Upright 64% AUDIENCE · 250 ratings</p>
        <p>✨ {movie.rating} / 10 2.5K</p>
        <button className="moveMain" onClick={() => navigator(-1)}>
          뒤로가기
        </button>
      </div>
    </div>
 
  );
};

export default DetailMovie;
