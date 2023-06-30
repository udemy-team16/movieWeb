import { useFetch } from "custom/useFetch";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style/movieDetail.module.css";

const MovieDetail = () => {
  const { id } = useParams();
  const { loading, responseData, errorMsg } = useFetch(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
  );
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    setDetailData(
      responseData?.data.movies.filter((data) => data.id === parseInt(id))[0]
    );
  }, [responseData?.data.movies, detailData]);

  return (
    <section className={styles.section}>
      <img src={`${detailData?.medium_cover_image}`} className={styles.img} />
      <div className={styles.desc}>
        <h3 className={styles.title}>{detailData?.title_english}</h3>
        <p className={styles.year}>{detailData?.year}</p>
        <p className={styles.genres}>{detailData?.genres}</p>
        <p className={styles.rating}>{detailData?.rating}/10</p>
      </div>
    </section>
  );
};

export default MovieDetail;
