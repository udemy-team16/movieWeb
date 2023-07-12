import React  from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./DetailMovie.css";

const DetailMovie = () => {
  const { movies } = useSelector((state) => state.MovieStore);
  const { id } = useParams();
  const navigator = useNavigate();
  const detailMovies = movies.filter((item) => item.id === Number(id))[0]
  
  if (!detailMovies)
    return (
      <div className="spinnerWraps">
        <div className="spinner">
          <div className="spinner-inner" />
        </div>
      </div>
    );

  return (
    <div className="detailMain">
      <div className="imgWrap">
        <img src={detailMovies.medium_cover_image} alt="" />
        <button>다운로드</button>
        <button>Watch Now</button>
      </div>
      <div className="inforWrap">
        <p>{detailMovies.title}</p>
        <p>
          {detailMovies.year}
          <br />
          {detailMovies.genres.map((item, index) => (
            <span key={index} style={{ marginRight: "10px" }}>
              {item}
            </span>
          ))}
        </p>
        <p>
          Available in:{detailMovies.torrents[0]?.quality}&nbsp;
          {detailMovies.torrents[1]?.quality}
        </p>
        <p>WEB: same quality as BluRay</p>
        <p>DownLoad</p>
        <p>😊 12</p>
        <p>😎 Certified Fresh 95% TOMATOMETER · 169</p>
        <p>🎉 Upright 64% AUDIENCE · 250 ratings</p>
        <p>✨ {detailMovies.rating} / 10 2.5K</p>
        <button className="moveMain" onClick={() => navigator(-1)}>
          뒤로가기
        </button>
      </div>
    </div>
  );
};

export default DetailMovie;