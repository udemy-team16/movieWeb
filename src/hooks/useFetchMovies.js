import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const useFetchMovies = (url) => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movie, setMovie] = useState({});

  // const { id } = useParams();

  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (location.pathname === '/') {
          setMovieList(data.data.movies);
        } else if (location.pathname.includes('/movie')) {
          setMovie(data.data.movie);
        } else {
          setMovieList(data.data.movies.slice(0, 8));
        }
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      })
  }, [url])

  return { movie, movieList, loading, error };
};

export default useFetchMovies;