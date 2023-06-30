import useFetchMovies from 'hooks/useFetchMovies';
import useSearchMovies from 'hooks/useSearchMovies';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from 'styles/Navigation.module.css'

const Navigation = ({ filterMovie, setFilterMovie }) => {
  const { movieList, loading, error } = useFetchMovies(`https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=8.8&sort_by=year`);
  const navigate = useNavigate();
  const { searchText, handleChange, searchFilter } = useSearchMovies('');

  const search = (list) => {
    if (searchText.trim() !== "") {
      const filterList = searchFilter(list, searchText);
      setFilterMovie(filterList);
      navigate(`/search`);
    } else {
      setFilterMovie(movieList);
    }
  }
  useEffect(() => {
    setFilterMovie(movieList);
  }, [movieList]);

  return (
    <nav className={styles.navigation}>
      <h3><a href="/"> MovieWeb</a></h3>
      <input type="text" placeholder="검색어를 입력하세요" onChange={handleChange} />
      <button onClick={() => search(movieList)}>🔍</button>
    </nav>
  );
};

export default Navigation;