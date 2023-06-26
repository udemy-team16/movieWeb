import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styles/Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <h3>MovieWeb</h3>
      <div className={styles.search}>
        <input type="text" placeholder="검색어를 입력하세요" />
        <button type="submit">🔍</button>
      </div>
    </nav>
  );
};

export default Navigation;