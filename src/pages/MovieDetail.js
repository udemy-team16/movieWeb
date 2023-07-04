import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../style/movieDetail.module.css";
import useFavorite from "../hooks/useFavorite";

const MovieDetail = () => {
  const { id } = useParams();
  const { handleLike, like } = useFavorite(id);
  const movies = useSelector((state) => state.movies) || [];
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    setDetailData(movies.find((data) => data.id === parseInt(id)));
  }, [movies, id]);

  return (
    <section className={styles.section}>
      <img src={`${detailData?.medium_cover_image}`} className={styles.img} />
      <div className={styles.desc}>
        <h3 className={styles.title}>{detailData?.title_english}</h3>
        <p className={styles.year}>{detailData?.year}</p>
        <p className={styles.genres}>{detailData?.genres}</p>
        <p className={styles.rating}>{detailData?.rating}/10</p>
        <button onClick={handleLike}>
          {like ? "찜 해제하기🦄" : "찜 하기"}
        </button>
      </div>
    </section>
  );
};

export default MovieDetail;
