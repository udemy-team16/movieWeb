import Footer from "components/Footer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../style/home.module.css";

const Home = () => {
  const [movieData, setMovieData] = useState();

  console.log(movieData);

  const navigate = useNavigate();

  useEffect(() => {
    const data = () => {
      fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
        .then((res) => res.json())
        .then((json) => setMovieData(json.data.movies));
    };
    data();
  }, []);

  return (
    <section className={styles.section}>
      <div>
        <h2 className={styles.header}>Latest YIFY Movies Torrents</h2>
        <ul className={styles.ul}>
          {movieData?.map((v, i) => {
            console.log(v);
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
                    <h3 className={styles.title}>{v.title_english}</h3>
                    <span className={styles.year}>{v.year}</span>
                  </figcaption>
                </figure>
                <div className={styles.desc}>
                  <h3 className={styles.title}>{v.title_english}</h3>
                  <span className={styles.year}>{v.year}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
