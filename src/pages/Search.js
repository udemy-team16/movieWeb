import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from 'styles/Search.module.css'
import stylesMovie from 'styles/Movie.module.css';
import useFetchMovies from 'hooks/useFetchMovies';
import Loading from 'components/Loading';

const Search = ({ filterMovie }) => {
  // const { searchMovie } = useParams();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchMovie = queryParams.get('query_term');

  // const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { movieList, loading, error } = useFetchMovies(`https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=8.8&sort_by=year`);

  // if (error) {
  //   console.log(error);
  // }

  const movieDetailHandle = (id) => {
    navigate(`/movie/${id}`);
  }

  return (
    <div>
      {loading ? <Loading /> :
        <div className={styles.searchWrap} >
          {filterMovie.length !== 0 ? (
            <div>
              <h2>검색 결과는 총 <strong> {filterMovie.length} </strong> 건 입니다.</h2>
              <div className={stylesMovie.movieWrap} style={{ justifyContent: 'center' }}>
                {filterMovie.map(movie => {
                  return (
                    <div key={movie.id} className={stylesMovie.movieImg} style={{ backgroundImage: "url(" + `${movie.medium_cover_image}` + ")", marginRight: '20px' }} onClick={() => movieDetailHandle(movie.id)}>
                      <div className={stylesMovie.overlay}>
                        <div className={stylesMovie.head}>
                          <p>★</p>
                          <p>{movie.rating} / 10</p>
                        </div>
                        <div className={stylesMovie.genre}>
                          <p>{movie.genres}</p>
                        </div>
                        <button className={stylesMovie.btn}>View Detail</button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div>
              <h1>검색 결과가 없습니다 ㅠ..ㅠ</h1>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default Search;