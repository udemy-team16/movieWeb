// import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import useFetchMovies from 'hooks/useFetchMovies';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from 'styles/Movie.module.css';
import Loading from './Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useLikeHook from 'hooks/useLikeHook';

const Movies = () => {
  //custom hook
  const { movieList, loading, error } = useFetchMovies('https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=8.8&sort_by=year');
  const { likeList, unlike } = useLikeHook(JSON.parse(localStorage.getItem('likeList')) || []);
  const navigate = useNavigate();
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const pageCount = Math.ceil(movieList.length / itemsPerPage);

  //current page movieList
  const currentMovies = movieList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // page Change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (error) {
    console.log(error);
  }

  const movieDetailHandle = (id) => {
    navigate(`/movie/${id}`);
  }

  const handleColor = (id) => {
    unlike(id);
  }
  return (
    <div>
      {loading ? <Loading /> :
        <div className={styles.movieWrap}>
          {currentMovies.map(movie => {
            return (
              <div key={movie.id} className={styles.movieImg} style={{ backgroundImage: "url(" + `${movie.medium_cover_image}` + ")" }} >
                <div className={styles.overlay}>
                  <div className={styles.head}>
                    <p>★</p>
                    <p>{movie.rating} / 10</p>
                  </div>
                  <div className={styles.genre}>
                    {movie.genres}
                  </div>
                  <button className={styles.btn} onClick={() => movieDetailHandle(movie.id)}>View Detail</button>
                  <FontAwesomeIcon icon={faHeart} onClick={() => handleColor(movie.id)} style={{ color: likeList.includes(movie.id) ? 'red' : 'black', width: '30px', height: '30px', margin: '0 auto' }} />
                </div>
              </div>
            )
          })}
        </div>
      }
      <div className={styles.pagination}>
        {Array.from({ length: pageCount }, (v, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} style={{ color: currentPage === index + 1 ? 'rgb(98, 155, 73)' : '#f3f3f3' }}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Movies;