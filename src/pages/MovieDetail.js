import { useFetch } from "custom/useFetch";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../style/movieDetail.module.css";

const MovieDetail = () => {
  const [like, setLike] = useState(false);
  const { id } = useParams();
  const { loading, responseData, errorMsg } = useFetch(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
  );
  const [detailData, setDetailData] = useState();
  const [likeArr, setLikeArr] = useState([]);

  useEffect(() => {
    setDetailData(
      responseData?.data.movies.filter((data) => data.id === parseInt(id))[0]
    );
  }, [responseData?.data.movies, detailData, id]);

  // const handleLike = () => {
  //   console.log(id);
  //   setLikeArr([...likeArr, id]);
  //   localStorage.setItem("favorite", likeArr);
  //   setLike(!like);
  // };

  //

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setLikeArr(favorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(likeArr));
  }, [likeArr]);

  useEffect(() => {
    setLike(likeArr.includes(id));
  }, [id, likeArr]);

  const handleLike = () => {
    if (like) {
      setLikeArr(likeArr.filter((itemId) => itemId !== id));
    } else {
      setLikeArr([...likeArr, id]);
    }
  };

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
