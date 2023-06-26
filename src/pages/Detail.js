import MovieDetail from 'components/MovieDetail';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from 'styles/MovieDetail.module.css';

const Detail = () => {
  const { id } = useParams();

  return (
    <div className={styles.box}>
      <MovieDetail id={id} />
    </div>
  );
};

export default Detail;