import useFetchMovies from 'hooks/useFetchMovies';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from 'styles/MovieDetail.module.css';
import Loading from './Loading';

const MovieDetail = () => {
  const { id } = useParams();
  const { loading, error } = useFetchMovies('https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=8.8&sort_by=year');
  const { movies } = useSelector((state) => state.MovieStore);
  
  const movie = movies.filter((item) => item.id === Number(id))[0];

  if (error) {
    console.log(error);
  }

  return (
    <div>
      {loading ? <Loading /> :
        <div className={styles.wrap}>
          <div className={styles.movieDetailWrap}>
            <img src={`${movie.medium_cover_image}`} alt="디테일 이미지" className={styles.img} />
            <div className={styles.infoWrap}>
              <div className={styles.title}>{movie.title}</div>
              <div className={styles.year}>{movie.year}</div>
              <div className={styles.genres}>{movie.genres}</div>
              <span className={styles.rating}>★ {movie.rating} / 10</span>
              <span className={styles.download}>⬇ {movie.download_count}</span>
              <button className={styles.btn}>⬇ Download</button>
            </div>
            <div className={styles.info}><h3>줄거리</h3>{movie.description_full}</div>
          </div>
        </div>
      }
    </div>
  );
};

export default MovieDetail;