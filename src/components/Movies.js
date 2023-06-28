import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from 'styles/Movie.module.css';
import Loading from './Loading';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const getMovie = () => {
    setLoading(true);
    fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
    )
      .then((response) => response.json())
      .then((json) => {
        const moviesData = json.data.movies;
        const slicedMovies = moviesData.slice(0, 8);
        setMovies(slicedMovies);
        console.log(json.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovie();
  }, [])

  const movieDetailHandle = (id) => {
    navigate(`/movie/${id}`);
  }
  return (
    <div>
      {loading ? <Loading /> :
        <div className={styles.movieWrap}>
          {movies.map(movie => {
            return (
              <div key={movie.id} className={styles.movieImg} style={{ backgroundImage: "url(" + `${movie.medium_cover_image}` + ")" }} onClick={() => movieDetailHandle(movie.id)}>
                <div className={styles.overlay}>
                  <div className={styles.head}>
                    <p>★</p>
                    <p>{movie.rating} / 10</p>
                  </div>
                  <div className={styles.genre}>
                    <p>{movie.genres}</p>
                  </div>
                  <button className={styles.btn}>View Detail</button>
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  );
};

export default Movies;