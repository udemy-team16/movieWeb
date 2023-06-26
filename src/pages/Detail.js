import MovieDetail from 'components/MovieDetail';
import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();

  return (
    <div>
      <MovieDetail id={id} />
    </div>
  );
};

export default Detail;