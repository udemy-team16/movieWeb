import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from 'styles/Navigation.module.css'

const Navigation = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query_term=${searchMovie}`);
  };

  const handleChange = (e) => {
    setSearchMovie(e.target.value);
  };

  return (
    <nav className={styles.navigation}>
      <h3><a href="/"> MovieWeb</a></h3>
      <form className={styles.search} onSubmit={handleSearch}>
        <input type="text" placeholder="검색어를 입력하세요" onChange={handleChange} />
        <button type="submit">🔍</button>
      </form>
    </nav>
  );
};

export default Navigation;