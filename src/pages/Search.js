import { useFetch } from "hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import useSearch from "../hooks/useSearch";
import styles from "../style/search.module.css";

const Search = () => {
  const { loading, responseData, errorMsg } = useFetch(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
  );
  const navigate = useNavigate();
  const { movieName } = useParams();
  const { searchData, setSearchData } = useSearch(movieName, responseData);
  console.log("searchData", searchData);
  return (
    <section className={styles.section}>
      <div>
        <h2 className={styles.header}>검색 결과:{movieName}</h2>
        <ul className={styles.ul}>
          {searchData?.map((v, i) => {
            const navigateToDetail = () => {
              navigate(`/movie/${v.id}`);
            };
            return (
              <li key={v.id} onClick={navigateToDetail} className={styles.li}>
                <figure className={styles.imgContainer}>
                  <img
                    src={v.medium_cover_image}
                    alt={`${v.title_english} 영화 이미지`}
                    className={styles.img}
                  />
                  <figcaption className={styles.figcaption}>
                    <p className={styles.star}>★</p>
                    <h3 className={styles.rating}>{v.rating} / 10</h3>
                    <p className={styles.genres}>{v.genres[0]}</p>
                    <p className={styles.genres}>{v.genres[1]}</p>
                  </figcaption>
                </figure>
                <div className={styles.desc}>
                  <p className={styles.title}>{v.title_english}</p>
                  <p className={styles.year}>{v.year}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Search;
