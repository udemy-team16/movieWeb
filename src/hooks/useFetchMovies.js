import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMovieStore } from 'redux/MovieStore';

const useFetchMovies = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        dispatch(updateMovieStore(data.data.movies));
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      })
  }, [])

  return { loading, error };
};

export default useFetchMovies;