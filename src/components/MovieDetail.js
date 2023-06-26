import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from 'styles/MovieDetail.module.css';

const MovieDetail = ({ id }) => {
  const [movieDetail, setMovieDetail] = useState({});

  const getMovieDetail = () => {
    fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data)
        setMovieDetail(json.data.movie);
      });
  };

  useEffect(() => {
    getMovieDetail();
  }, [])

  return (
    <div className={styles.wrap}>
      <div className={styles.movieDetailWrap}>
        <img src={`${movieDetail.medium_cover_image}`} alt="디테일 이미지" className={styles.img} />
        <div className={styles.infoWrap}>
          <div className={styles.title}>{movieDetail.title}</div>
          <div className={styles.year}>{movieDetail.year}</div>
          <div className={styles.genres}>{movieDetail.genres}</div>
          <span className={styles.rating}>★ {movieDetail.rating} / 10</span>
          <span className={styles.download}>⬇ {movieDetail.download_count}</span>
          <button className={styles.btn}>⬇ Download</button>
        </div>
        <div className={styles.info}><h3>줄거리</h3>{movieDetail.description_full}</div>
      </div>
    </div>
  );
};

export default MovieDetail;