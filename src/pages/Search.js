import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from 'styles/Search.module.css'
import stylesMovie from 'styles/Movie.module.css';

const Search = () => {
  const { searchMovie } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/list_movies.json?query_term=${searchMovie}`
      );
      const data = await response.json();
      console.log(data.data);
      setSearchResults(data.data.movies);
      console.log(searchResults);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const movieDetailHandle = (id) => {
    navigate(`/movie/${id}`);
  }

  useEffect(() => {
    handleSearch();
  }, [])

  return (
    <div className={styles.searchWrap} >
      {searchResults.length !== 0 ? (
        <div>
          <h2><strong>'{searchMovie}' </strong>의 검색 결과는 최대 <strong> {searchResults.length} </strong> 건 입니다.</h2>
          <div className={stylesMovie.movieWrap} style={{justifyContent: 'center'}}>
            {searchResults.map(movie => {
              return (
                <div key={movie.id} className={stylesMovie.movieImg} style={{ backgroundImage: "url(" + `${movie.medium_cover_image}` + ")" , marginRight:'20px'}} onClick={() => movieDetailHandle(movie.id)}>
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
  );
};

export default Search;