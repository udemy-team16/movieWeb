import { useFetch } from "hooks/useFetch";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import styles from "../style/movieDetail.module.css";

const Search = () => {
  const { loading, responseData, errorMsg } = useFetch(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
  );
  const { movieName } = useParams();
  const { searchData, setSearchData } = useSearch(movieName, responseData);
  console.log("useSearch", searchData);
  return <section className={styles.section}>검색 결과:{movieName}</section>;
};

export default Search;
